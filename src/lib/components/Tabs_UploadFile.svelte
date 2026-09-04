<script lang="ts">
  import { t, locale, locales } from '$lib/assets/i18n.js';
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import TabCoords from '$lib/components/TabCoords.svelte';
  // import { Input } from "$lib/components/ui/input/index.js";
  // import TabMap from '$lib/components/TabMap.svelte';

  // let activeTab = $state('coords');

  // const { Latitude,  Longitude} = $props();
  const props = $props();
  // console.log(props);
  // const props = $props<{
  //       Latitude?: number;
  //       Longitude?: number;
  //   }>();
  let localLatitude = $derived(props.Latitude ?? 3.5);
  let localLongitude = $derived(props.Longitude ?? -76.5);
  let localshowCoordsList = $derived(props.showCoordsList ?? false);
  let localselectedCropPest = $derived(props.selectedCropPest ?? '');
  let localselectedNurserySite = $derived(props.selectedNurserySite ?? '');
  // let localtabs = $derived(props.tabs_labels);

  let csvData = $state([]);
	let tableHeaders = $state([]);
	let errorMessage = $state('');
  let files = $state();
  let parsedData = $state([]);

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

  // const tabs = $derived(localtabs);
  // const tabs0 = [
  //   { id: 'coords', label: $t("tabs.label_coords") },
  //   { id: 'map', label: $t("tabs.label_map") },
  //   { id: 'weatherstation', label: $t("tabs.label_weather_station") }
  // ];


  $effect(() => {
		if (files) {
			// Note that `files` is of type `FileList`, not an Array:
			// https://developer.mozilla.org/en-US/docs/Web/API/FileList
			// console.log(files);
			// for (const file of files) {
			// 	console.log(`${file.name}: ${file.size} bytes`);
			// }
		}
	});

  // let rows = $state([]);
  // function __handleFileUpload(event:Event) {
  //   const file = event.target.files[0];
  //   if (!file) return;

  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const text = e.target.result;
  //     rows = text.split('\n').map(row => row.split(','));
  //   };
  //   reader.readAsText(file);
  // }

  function handleFileUpload(event:Event) {
    const file = event.target.files[0];
    if (!file) return;
    parseCSV(file);
    
  }

  function parseCSV(file: File) {
    errorMessage = "";
    // Initialize the native browser FileReader
    const reader = new FileReader();
    // Define what happens when the file is successfully read
    reader.onload = function (e) {
      try {
        const text = e.target.result;
        parsedData = processRawText(text);
      } catch (err) {
        errorMessage = "Failed to parse CSV: " + err.message;
      }
    };
    // Read the file object as a raw text string
    reader.readAsText(file);
  }

  function processRawText(text:string) {
    // Split text into individual lines, handling both Windows (\r\n) and Unix (\n) line endings
    const lines = text.split(/\r?\n/);
    // Filter out any trailing empty lines
    const validLines = lines.filter(line => line.trim() !== "");
    if (validLines.length === 0) return [];
    // Extract headers from the first row and clean up whitespaces
    const headers = validLines[0].split(',').map(header => header.trim());
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

  // function _handleFileUpload(event:Event) {
	// 	const file = event.target.files[0];
	// 	if (!file) return;

	// 	// Clear previous states
	// 	errorMessage = '';
	// 	csvData = [];
	// 	tableHeaders = [];

	// 	// Parse the CSV directly from the file object
	// 	// Papa.parse(file, {
	// 	// 	header: true, // Automatically converts rows into JavaScript objects using headers as keys
	// 	// 	skipEmptyLines: true,
	// 	// 	complete: function (results) {
	// 	// 		if (results.data.length > 0) {
	// 	// 			csvData = results.data;
	// 	// 			tableHeaders = Object.keys(results.data[0]);
	// 	// 		} else {
	// 	// 			errorMessage = 'The uploaded CSV file is empty.';
	// 	// 		}
	// 	// 	},
	// 	// 	error: function (error) {
	// 	// 		errorMessage = `Parsing error: ${error.message}`;
	// 	// 	}
	// 	// });
	// }
</script>

<div class="tabs-container">
  <!-- <div class="tab-list">
    {#each tabs as tab}
      <button class:active={activeTab === tab.id}  onclick={() => activeTab = tab.id}>
        {tab.label}
      </button>
    {/each}
  </div>
  <div class="tab-content">
    {#if activeTab === 'coords'}
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
    {:else if activeTab === 'map'}
      <TabMap Latitude={localLatitude}  Longitude={localLongitude} 
        onLatitudeChange={(value) => onLatitudeChange(value)}
        onLongitudeChange={(value) => onLongitudeChange(value)}  
      />
    {:else if activeTab === 'weatherstation'}
      <label class="text-[0.85rem] text-gray-500 dark:text-white-500" for="ownstation">{$t("tabs.message")}:</label>
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Input id="ownstation" type="file" accept="text/csv, text/txt" bind:files={files} name="ownstation"/>
      </div>
    {/if}
  </div> -->


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
      <!-- <TabMap Latitude={localLatitude}  Longitude={localLongitude} 
        onLatitudeChange={(value) => onLatitudeChange(value)}
        onLongitudeChange={(value) => onLongitudeChange(value)}  
      /> -->
    </Tabs.Content>
    <Tabs.Content value="weatherstation">
      <label class="text-[0.85rem] text-gray-500 dark:text-white-500" for="ownstation">{$t("tabs.message")}:</label>
      <!-- <div class="grid w-full max-w-sm items-center gap-1.5">
        <Input id="ownstation" type="file" accept="text/csv, text/txt" 
          bind:files={files} name="ownstation"
        onchange={handleFileUpload}
        />
      </div> -->

      <!-- File input bound directly to the files variable -->
      <label class="upload-btn">
        Select CSV File
        <input type="file" accept=".csv" bind:files onchange={handleFileUpload}/>
      </label>
      {#if files && files[0]}
        <p class="file-info">Selected file ({files[0].size} bytes): <strong>{files[0].name}</strong></p>
      {/if}

      {#if errorMessage}
        <p class="error">{errorMessage}</p>
      {/if}

      <!-- Render the parsed data into a table -->
      {#if parsedData.length > 0}
        <div class="table-container">
          <table>
            <thead>
              <tr>
                {#each Object.keys(parsedData[0]) as header (header)}
                  <th>{header}</th>
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
    /* background-color: #ff3e00; */
    /* color: white; */
    color: #ff3e00;
    border-radius: 4px;
    border: 2px solid #ff3e00;
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
    background-color: #f4f4f4;
  }


  /* .tab-list button {
    padding: 4px 16px;
    cursor: pointer;
    background: #e0e0e0;
    border: none;
    margin-right: 4px;
  }
  .tab-list button.active {
    background: #007bff;
    color: white;
  }
  .tab-content {
    padding: 8px;
    border: 1px solid #ccc;
    margin-top: -1px;
  } */
</style>
