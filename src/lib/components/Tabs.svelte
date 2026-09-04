<script lang="ts">
  import { t } from '$lib/assets/i18n.js';
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import TabCoords from '$lib/components/TabCoords.svelte';
  import { Button } from "$lib/components/ui/button/index.js";
  import * as NativeSelect from "$lib/components/ui/native-select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Spinner } from "$lib/components/ui/spinner/index.js";
  import TabMap from '$lib/components/TabMap.svelte';

  const props = $props();
  
  let localLatitude = $derived(props.Latitude ?? 3.5);
  let localLongitude = $derived(props.Longitude ?? -76.5);
  let localStartDate = $derived(props.startDateString);
  let localEndDate = $derived(props.endDateString);
  let localshowCoordsList = $derived(props.showCoordsList ?? false);
  let localselectedCropPest = $derived(props.selectedCropPest ?? '');
  let localselectedNurserySite = $derived(props.selectedNurserySite ?? '');
  let localTbase = $derived(props.Tbase ?? 0);
  let localTcutoff = $derived(props.Tcutoff ?? null);
  // let localweatherStation = $derived(props.weatherStation ?? {});
  // let localtabs = $derived(props.tabs_labels);

	let errorMessage = $state('');
  let files = $state<FileList>();
  let parsedData = $state();
  let colheaders = $state<ArrayLike<unknown>>();

  function onLatitudeChange(value:number) {
      // Send values back to parent
      localLatitude = value;
      props.onLatitudeChange?.(localLatitude);
  }
  function onLongitudeChange(value:number) {
      // Send values back to parent
      localLongitude = value;
      props.onLongitudeChange?.(localLongitude);
  }
  function onNurserySiteChange(value:string) {
      // Send values back to parent
      localselectedNurserySite = value;
      props.onNurserySiteChange?.(localselectedNurserySite);
  }
  // function onWeatherStationChange(value:object){
  //   props.onWeatherStationChange?.(value);
  // }

  function onWeatherStationExecute(wdata:any){
    props.onWeatherStationExecute(wdata)
  }

  // Exporting the function makes it accessible to the parent instance
	export function clearWeatherStation() {
		// console.log("Child function executed!");
    // console.log("Cleaning selected weather station...");

    files = undefined;
    parsedData = [];
    colheaders = [];
    errorMessage = "";

    colDate = '';
    colTmin = '';
    colTmax = '';
    colPrec = '';
    selectedColumns = false;
    error_apply_columns = '';

	}

  async function handleFileUpload(event:Event) {
    const file = event.target?.files[0];
    if (!file) return;
    await parseCSV(file);
    
  }

  async function parseCSV(file: File) {
    errorMessage = "";
    const reader = new FileReader();
    reader.onload = async function (e) {
      try {
        const text = e.target?.result;
        parsedData = await processRawText(text);
      } catch (err) {
        errorMessage = "Failed to parse CSV: " + err.message;
      }
    };
    reader.readAsText(file);
  }

  async function processRawText(text:string) {
    // Split text into individual lines, handling both Windows (\r\n) and Unix (\n) line endings
    const lines = text.split(/\r?\n/);
    // Filter out any trailing empty lines
    const validLines = lines.filter(line => line.trim() !== "");
    if (validLines.length === 0) return [];
    // Extract headers from the first row and clean up whitespaces
    const headers = validLines[0].split(',').map(header => header.trim());
    colheaders = headers;
    // Map the remaining rows into objects
    return validLines.slice(1).map(row => {
      const values = row.split(',');
      const obj = {};
      headers.forEach((header, index:number) => {
        // Map header to value (fallback to empty string if row is shorter than header length)
        obj[header] = values[index] ? values[index].trim() : "";
      });
      
      return obj;
    });
  }

  let colDate = $state('');
  let colTmin = $state('');
  let colTmax = $state('');
  let colPrec = $state('');
  let selectedColumns = $state(false);
  let error_apply_columns = $state('');
  let processingMsg = $state(false);
  async function updateColHeaders(){
    processingMsg = true;
    // console.log("Columns:", colDate, colTmin, colTmax);
    if (colDate!=='' && colTmin!=='' && colTmax!==''){
      error_apply_columns = '';
      // Validate data
      const result = await processWeatherFile();
      if (result){
        // onWeatherStationExecute({
        //   "data": parsedData
        // });
        selectedColumns = true;
        processingMsg = false;
      } else {
        selectedColumns = false;
        processingMsg = false;
        error_apply_columns = 'Problem processing weather data...';
      }

      // localweatherStation = parsedData;
    } else {
      selectedColumns = false;
      processingMsg = false;
      error_apply_columns = 'Select valid column names';
    }
  }

  export async function processWeatherFile(){
    let result = false;
    // const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
    // await delay(10000);
    // 
    if (parsedData && parsedData.length>0){
      // console.log(parsedData.length);
      // 
      // const data = Object.keys(parsedData);
      // Renombrar columnas de acuerdo al API
      let dates = [];
      let Tn = [];
      let Tx = [];
      let Prec = [];

      // Filter parsedData between dates
      const startDate = new Date(localStartDate).getTime();
      const endDate = new Date(localEndDate).getTime();
      // console.log("Antes ->",parsedData.length);
      const filteredDates = parsedData.filter((d, index) => {
        // const t = new Date(d).getTime();
        const t = new Date(d[colDate]).getTime();
        // console.log(t, startDate, endDate, t >= startDate, t <= endDate);
        return t >= startDate && t <= endDate;
      }); 
      // console.log(filteredDates);

      if (colDate && colDate!=''){
        dates = filteredDates.map((e, index) => {
          const ts = new Date(e[colDate]);
          let f_ts = new Date(ts.getTime() - ts.getTimezoneOffset() * 60000).toISOString().split('T')[0]
          f_ts = f_ts || '';
          return f_ts; //(ts.getTime() >= startDate && ts.getTime() <= endDate) ? f_ts : ''
        });
        // Filter dates 
        // dates = dates.filter((d) => d!=='');
        // Filter dates between dates
        // console.log(dates[0], localStartDate, localEndDate);
        // const startDate = new Date(localStartDate).getTime();
        // const endDate = new Date(localEndDate).getTime();
        // console.log(new Date(dates[0]).getTime(), startDate, endDate);
        // console.log(dates[0], dates[0]>=startDate, dates[0]<=endDate);
        // const filteredDates = dates.filter(d => {
        //   const t = new Date(d).getTime();
        //   return t >= startDate && t <= endDate;
        // }); 
        // dates = filteredDates;
        // console.log("Despues ->", dates.length);
      }

      
      if (colTmin && colTmin!=''){
        Tn = filteredDates.map((e) => {
          const tmin = parseFloat(e[colTmin]) || -99;
          return tmin
        });
      }
      if (colTmax && colTmax!=''){
        Tx = filteredDates.map((e) => {
          const tmax = parseFloat(e[colTmax]) || -99;
          return tmax
        });
      }
      if (colPrec && colPrec!==''){
        Prec = filteredDates.map((e) => {
          const pcp = parseFloat(e[colPrec]) || -99;
          return pcp
        });
      }
      // const dates = data.map((row) => {
      //   const date = new Date(row.timestamp);
      //   return date; //.toLocaleDateString(); //date.toLocaleTimeString();
      // });
      // console.log(dates, Tn, Tx, Prec);
      let dataForGDD = {
        "dates": dates, 
        "Tn":Tn, 
        "Tx":Tx, 
        "Prec":Prec
      }

      // Estimate Average Temperature
      const Ta = filteredDates.map((e, index) => {
        const tn = parseFloat(dataForGDD[colTmin][index]);
        const tx = parseFloat(dataForGDD[colTmax][index]);
        return (tx + tn) / 2;

      });
      dataForGDD = {...dataForGDD, ...{"Ta": Ta.map(num => Number(num.toFixed(2)))}};
      // console.log("Ta", Ta, dataForGDD);

      const dataGDD = await estimate_GDD(dataForGDD);
      if (dataGDD!==null){
        // Estimate Accumulate GDD 
        const dataAccGDD = await calculateCumulativeGDD(dataGDD);
        const roundedDataGDD = dataGDD.map(num => Number(num.toFixed(2)));
        const roundedDataAccGDD = dataAccGDD.map(num => Number(num.toFixed(2)));

        dataForGDD = {...dataForGDD, ...{"GDD": roundedDataGDD},  ...{"accGDD": roundedDataAccGDD}}
        // console.log("dataForGDD --->", dataForGDD);
        // Save calculations to parent 
        onWeatherStationExecute(dataForGDD);
        result = true;
      } else {
        onWeatherStationExecute({});
        result = false;
      }

      
    }
    

    return await result
    
  }

  async function estimate_GDD(data){
    // console.log(data)
    let dataGDD = [];
    if (data){
      // console.log("Estimating GDD...");
      // let dataGDD = [];
      for (let index = 0; index < data.dates.length; index++) {
        // const element = data[index];
        const tn = parseFloat(data[colTmin][index]);
        const tx = parseFloat(data[colTmax][index]);
        const _gdd = await GDD(tn, tx, localTbase, localTcutoff);
        dataGDD.push(_gdd);
      }
      // dataGDD = {...data, ...{"GDD": gdd}}
      return dataGDD
    }
    return dataGDD
  }

  async function GDD(tn:number, tx:number, tbase=0, Tcutoff=null){
    // ''' Growing degree days GDD (°F or °C)
    //     Growing degree days (GDD), or heat units, are used to estimate the growth and development of certain crops 
    //     and pests during the growing season. They can be used retrospectively to calculate the current growth 
    //     stage of a crop, or to help forecast the date that a crop will reach a predetermined growth stage.

    //     Corn growth, for example, closely follows the accumulation of average daily temperatures during its lifetime.

    //     GDDs are calculated by taking the average of the daily maximum temperature and minimum temperature, and then subtracting a base temperature.
    //     Calculated from: ((Daily Max Temp + Daily Min Temp)/2) - 32 °F (or 
    //     ((Daily Max Temp + Daily Min Temp)/2)).
        
    // :param Tmin: Number or array of Minimum Temperatures
    // :param Tmax: Number or array of Maximum Temperatures
    // :param Tbase: The base temperature is the lowest temperature at which a crop will grow. A common base for many crops is 50°F
    // :param Tcutoff: Maximum temperature above which growth slows. This temperature is usually approximately 86°F.

    // :return: a number of Growing degree days (GDD)

    // source: https://extension.psu.edu/understanding-growing-degree-days
    
    // '''
    if (tn==null || tx==null){
        console.log("Temperature parameters are not valid")
        return 0
    }
    // If the low temperature of the day is below your crop or pests' base value, use the base temperature during your calculations.
    if (tbase!==null){
      tn = tn<tbase ? tbase : tn;
    }
    // # If the max temperature of the day is above your crop or pests' base value, use the maximum threshold temperature during your calculations.
    if (Tcutoff!==null){
      tx = tx>Tcutoff ? Tcutoff : tx;
    }
    // # To calculate GDDs you need to first record the mean temperature; 
    // # this can be done by adding together the high and low temperature for the day and dividing that value by two.
    let Tavg = (tx + tn) / 2;
    // # If the mean temperature is at or below the base temperature for a crop or pest of interest, then the GDD value is zero.
    Tavg = Tavg<=tbase ? 0 : Tavg
    // # If the mean temperature is above the base temperature, then the GDD equals the value of the mean temperature minus the base temperature.
    let GDD = Tavg>tbase ? (Tavg - tbase) : 0;
    GDD = Math.max(GDD, 0); //gdd > 0 ? gdd : 0;
    return await GDD
  }

  async function calculateCumulativeGDD(dailyGDD){
    // console.log("processing AccGDD", dailyGDD)
    let totalSum = 0;
    // dailyGDD.map((gdd:number) => {
    //   totalSum = gdd + totalSum
    // });
    const cumulativeMap = dailyGDD.map((value:number) => totalSum += value);
    return await cumulativeMap
  }



</script>

<div class="tabs-container">

  <Tabs.Root value="coords" class="w-full">
    <Tabs.List>
      <Tabs.Trigger value="coords">{$t("tabs.label_coords")}</Tabs.Trigger>
      <Tabs.Trigger value="map">{$t("tabs.label_map")}</Tabs.Trigger>
      <Tabs.Trigger value="weatherstation">{$t("tabs.label_weather_station")}</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="coords">
      <TabCoords 
        Latitude={localLatitude} 
        Longitude={localLongitude} 
        showCoordsList={localshowCoordsList} 
        selectedCrop={localselectedCropPest}
        selectedNurserySite={localselectedNurserySite}
        onLatitudeChange={(value) => onLatitudeChange(value)}
        onLongitudeChange={(value) => onLongitudeChange(value)}  
        onNurserySiteChange={(value) => onNurserySiteChange(value)}  
      />
    </Tabs.Content>
    <Tabs.Content value="map">
      <TabMap Latitude={localLatitude}  Longitude={localLongitude} 
        onLatitudeChange={(value) => onLatitudeChange(value)}
        onLongitudeChange={(value) => onLongitudeChange(value)}  
      />
    </Tabs.Content>
    <Tabs.Content value="weatherstation">
      <label class="text-[0.85rem] text-gray-500 dark:text-white-500" for="ownstation">{$t("weatherstation.label")}:</label>
      <label class="upload-btn">
        <!-- Select CSV File -->
        {$t("weatherstation.label_select_csv")}
        <input type="file" accept=".csv" bind:files onchange={handleFileUpload}/>
      </label>
      {#if files && files.length>0 && files[0]}
        <p class="file-info">{$t("weatherstation.label_selected_file")} ({files[0]?.size} bytes): <strong>{files[0]?.name}</strong></p>
      {/if}

      {#if errorMessage}
        <p class="error">{errorMessage}</p>
      {/if}

      <!-- Display columns options to relate to API -->
      {#if colheaders && colheaders.length > 0 && !selectedColumns}
        <div class="w-full border border-gray-400 rounded p-2 gap-4">
          <div class="flex flex-row justify-content gap-2 m-2 align-middle">
            <label class="text-[0.85rem] text-gray-500 dark:text-white-500" for="coldate">{$t("weatherstation.label_coldate")}:</label>
            <NativeSelect.Root id="coldate" aria-label="Choose Date column" bind:value={colDate} class="">
              {#each colheaders as header (header)}
                  <NativeSelect.Option value={header}>{header}</NativeSelect.Option>
              {/each}
          </NativeSelect.Root>
          </div>
          <div class="flex flex-row justify-content gap-2 m-2 align-middle">
            <label class="text-[0.85rem] text-gray-500 dark:text-white-500" for="coltmin">{$t("weatherstation.label_coltmin")}:</label>
            <NativeSelect.Root id="coltmin" aria-label="Choose TMin column" bind:value={colTmin} class="">
              {#each colheaders as header (header)}
                  <NativeSelect.Option value={header}>{header}</NativeSelect.Option>
              {/each}
          </NativeSelect.Root>
          </div>
          <div class="flex flex-row justify-content gap-2 m-2 align-middle">
            <label class="text-[0.85rem] text-gray-500 dark:text-white-500" for="coltmax">{$t("weatherstation.label_coltmin")}:</label>
            <NativeSelect.Root id="coltmax" aria-label="Choose TMax column" bind:value={colTmax} class="">
              {#each colheaders as header (header)}
                  <NativeSelect.Option value={header}>{header}</NativeSelect.Option>
              {/each}
          </NativeSelect.Root>
          </div>
          <div class="flex flex-row justify-content gap-2 m-2 align-middle">
            <label class="text-[0.85rem] text-gray-500 dark:text-white-500" for="colprec">{$t("weatherstation.label_colprec")}:</label>
            <NativeSelect.Root id="coltmax" aria-label="Choose Precipitation column" bind:value={colPrec} class="">
              {#each colheaders as header (header)}
                  <NativeSelect.Option value={header}>{header}</NativeSelect.Option>
              {/each}
          </NativeSelect.Root>
          </div>

          {#if error_apply_columns}
            <p class="text-[0.85rem] text-red-700 mt-2 mb-2">{error_apply_columns}</p>
          {/if}

          <Button onclick={updateColHeaders} variant="outline" 
            class="text-red-500 w-full">
            {#if processingMsg}
              <Spinner class="text-red-500 size-4"/>
              <!-- processing request... -->
              {$t("weatherstation.label_processing_request_columns")}
            {:else}
              {$t("weatherstation.label_apply_columns")}
            {/if}
          </Button>
            
        </div>
      {/if}

      <!-- Render the parsed data into a table -->
      {#if parsedData && selectedColumns}
        <div class="table-container">
          <table>
            <thead>
              <tr>
                {#each Object.keys(parsedData[0]) as header (header)}
                  <th class="bg-[#f4f4f4] dark:bg-black">{header}</th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each parsedData as row (row)}
                <tr>
                  {#each Object.values(row) as value}
                    <td>{value}</td>
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      {/if}

    </Tabs.Content>
  </Tabs.Root>
</div>

<style>

  .upload-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    color: #5581e1;
    border-radius: 4px;
    border: 2px solid #5581e1;
    cursor: pointer;
    font-weight: bold;
  }
  .upload-btn input {
    display: none;
  }
  .file-info {
    margin-top: 0.5rem;
    color: #555;
  }
  .error {
    color: red;
    font-weight: bold;
  }
  .table-container {
    margin-top: 0.5rem;
    overflow-x: auto;
    max-height: 200px;
    border: 1px solid #444;
    border-radius: 4px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    /* margin-top: 0.5rem; */
  }
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    /* background-color: #f4f4f4; */
  }

</style>
