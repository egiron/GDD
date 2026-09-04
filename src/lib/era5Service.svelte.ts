
import * as zarr from "zarrita";

// Your CDS API key, available from https://cds.climate.copernicus.eu/profile
const cdsapiKey:string = import.meta.env.VITE_CDSAPI_KEY;
// Time-chunked data: optimised for spatial access at a single timestep
// const timechunked_url = import.meta.env.VITE_TIMECHUNKED_DAILY_URL;
// Geo-chunked data (optimised for time-series at a single location)
const geochunked_url = import.meta.env.VITE_GEOCHUNKED_URL; //"https://arco.datastores.ecmwf.int/cadl-arco-geo-001/arco/sis_agrometeorological_indicators/all/geoChunked.zarr";

// Define ERA5 time configuration (Adjust based on your target dataset's metadata)
const ERA5_EPOCH = new Date("1979-01-01T00:00:00Z"); 
// const MILLISECONDS_IN_HOUR = 1000 * 60 * 60;
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1, maximumFractionDigits: 1
});
const formatter3 = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Get store and metatada from the CDS ERA5
let GROUP_ERA5: zarr.Group<Required<zarr.AsyncReadable> & { url: string | URL; contents: () => { path: zarr.AbsolutePath; kind: "array" | "group"; }[]; }> | null | undefined = null;
export async function CDS_EAR5_getMeta(url:string|URL = '') {
    if (url==null || url===''){
        url = geochunked_url;
    }
    const store = new zarr.FetchStore(url, {
        overrides: { headers: { Authorization: `Bearer ${cdsapiKey}` } },
    });

    // withConsolidated loads all metadata in a single request,
    // avoiding one HTTP request per array/group in the hierarchy.
    const root = await zarr.withConsolidatedMetadata(store); //zarr.withConsolidated(store);
    GROUP_ERA5 = await zarr.open(root, { kind: "group" });
    // List all known paths and node kinds (group or array) - Variables
    // for (let entry of root.contents()) {
    //     console.log(entry.path, entry.kind);
    // }
    return GROUP_ERA5
}

// Get data from group
export async function era5_getData(lat:number, lng:number, units:string='C', startDate:string, endDate:string, Tbase:number=0, Tcutoff=null) {
    if (lat===undefined || lng===undefined) return;
    if (startDate===undefined || endDate===undefined) return;
    // console.log("Fetching ERA5 data for: ", lat, lng, units, startDate, endDate);
    let group;
    if ((GROUP_ERA5===null) || (GROUP_ERA5===undefined)){
        group = await CDS_EAR5_getMeta();
    } else {
        group = GROUP_ERA5;
    }
    
    // Precipitation_Flux, Temperature_Air_2m_Max_Day_Time, Temperature_Air_2m_Mean_24h, Temperature_Air_2m_Mean_Day_Time
    // Temperature_Air_2m_Mean_Night_Time, Temperature_Air_2m_Min_24h, Temperature_Air_2m_Min_Night_Time
    // Wind_Speed_10m_Mean_24h
    const ta = await zarr.open(group.resolve("/Temperature_Air_2m_Mean_24h"), { kind: "array" });
    const tn = await zarr.open(group.resolve("/Temperature_Air_2m_Min_24h"), { kind: "array" });
    const tx = await zarr.open(group.resolve("/Temperature_Air_2m_Max_24h"), { kind: "array" });
    const pcp = await zarr.open(group.resolve("/Precipitation_Flux"), { kind: "array" });
    const srad = await zarr.open(group.resolve("/Solar_Radiation_Flux"), { kind: "array" });
    const wind = await zarr.open(group.resolve("/Wind_Speed_10m_Mean_24h"), { kind: "array" });

    const ts = await zarr.open(group.resolve("/time"), { kind: "array" });
    const lats = await zarr.open(group.resolve("/latitude"), { kind: "array" });
    const lons = await zarr.open(group.resolve("/longitude"), { kind: "array" });
    // Convert your dates into array coordinate indices
    const startIndex = dateToEra5Index(new Date(startDate));
    const endIndex = dateToEra5Index(new Date(endDate)) + 1; // +1 to make the end boundary inclusive
    const timeSlice =  zarr.slice(startIndex, endIndex);
    // const indices = await getLatLonIndices(group, 3.4372, -76.5225);
    const arr_Latitudes = await zarr.get(lats);//, [timeSlice]);
    const arr_Longitudes = await zarr.get(lons);//, [timeSlice]);
    const latIndex = findNearestIndex(arr_Latitudes?.data, lat);
    const lonIndex = findNearestIndex(arr_Longitudes?.data, lng);
    // console.log("New Coords Indices: ",latIndex, lonIndex);

    // Fetch a single timestep (index 0) across all lat/lon
    // let { data } = await zarr.get(t2m, [0, null, null]);
    // Get daily data for the specific point
    const arr_Ta = await zarr.get(ta, [timeSlice, latIndex, lonIndex]);
    const arr_Tn = await zarr.get(tn, [timeSlice, latIndex, lonIndex]);
    const arr_Tx = await zarr.get(tx, [timeSlice, latIndex, lonIndex]);
    const arr_Prec = await zarr.get(pcp, [timeSlice, latIndex, lonIndex]);
    const arr_Srad = await zarr.get(srad, [timeSlice, latIndex, lonIndex]);
    const arr_Wind = await zarr.get(wind, [timeSlice, latIndex, lonIndex]);
    const arr_Times = await zarr.get(ts, [timeSlice]);

    // ------------------------------
    // Convert units and formats
    // ------------------------------
    // Convert array of times indices to DateTime
    const dates = getDateRange(startDate, arr_Times.data?.length);
    // Format as YYYY-MM-DD for readability
    // console.log(dates.map(d => d.toISOString().split('T')[0]));
    let Ta = [];
    let Tn = [];
    let Tx = [];
    let Srad = [];
    if (units=="C"){
        // Convert Kelvin to Celsius
        // console.log(`Converting ${units} units`);
        if (arr_Ta && arr_Ta.data.length>0){
            Ta = arr_Ta.data.map(temperature_K_to_celsius);
            // Ta = arr_Ta.data.map((num:number) => num - 273.15);
            // for (let i = 0; i < arr_Ta.data.length; i++) {
            //     const el = arr_Ta.data[i];
            //     Ta.push(parseFloat(el) - 273.15);
            // }
        }
        if (arr_Tn && arr_Tn.data.length>0){
            Tn = arr_Tn.data.map(temperature_K_to_celsius);
        }
        if (arr_Tx && arr_Tx.data.length>0){
            Tx = arr_Tx.data.map(temperature_K_to_celsius);
        }

        if (arr_Srad && arr_Srad.data.length>0){
            Srad = arr_Srad.data.map(solrad_to_MJ);
        }
    } else if (units=="F"){
        // Convert Kelvin to Fahrenheit
        // (273.15K − 273.15) × 9/5 + 32  # F = K * 9/5 - 459.67
        // console.log(`Converting ${units} units`);
        if (arr_Ta && arr_Ta.data.length>0){
            Ta = arr_Ta.data.map((num:number) => (num - 273.15) * 9/5 + 32);
        }
        if (arr_Tn && arr_Tn.data.length>0){
            Tn = arr_Tn.data.map((num:number) => (num - 273.15) * 9/5 + 32);
        }
        if (arr_Tx && arr_Tx.data.length>0){
            Tx = arr_Tx.data.map((num:number) => (num - 273.15) * 9/5 + 32);
        }
    }

    // Estimate Average Temperature if not exists
    if (Ta.length<=0){
        Ta = await estimate_AvgTemperature(dates, Tn, Tx);
    }

    // Estimate Growing Degree Days - GDD
    const [GDD, accGDD] = await calculate_GDD(dates, Tn, Tx, Tbase, Tcutoff);
    // console.log(GDD, accGDD);
    // Convert into the GDDRow format
    const dataFormatted = [];
    for (let i = 0; i < dates.length; i++) {
        dataFormatted.push(
            {
                "timestamp": dates[i].toISOString().split('T')[0],
                "Prec": +formatter.format(+arr_Prec?.data[i]) || -99,
                "Tn": +formatter.format(+Tn[i]) || -99,
                "Ta": +formatter.format(+Ta[i]) || -99,
                "Tx": +formatter.format(+Tx[i]) || -99,
                "Srad": +formatter.format(+Srad[i]) || -99,
                "Wind": +formatter.format(+arr_Wind?.data[i]) || -99,
                // "GDD": +formatter.format(+GDD[i]),
                // "accGDD": +formatter.format(+accGDD[i]),
                "GDD": Number(GDD[i].toFixed(1)),
                "accGDD": Number(accGDD[i].toFixed(1)), //accGDD[i],
            }
        );
    }
    
    return dataFormatted
}

async function calculate_GDD(dates:Date[]|[], Tn:number[], Tx:number[], Tbase=0, Tcutoff=null) {
    const dataGDD = [];
    const dataAccGDD = [];
    let totalSum = 0;
    for (let i = 0; i < dates.length; i++) {
        const tn = Tn[i]; //parseFloat(Tn[index]);
        const tx = Tx[i]; //parseFloat(Tx[index]);
        const _gdd = await GDD(tn, tx, Tbase, Tcutoff);
        totalSum += _gdd; //Number(_gdd.toFixed(2)); 
        dataGDD.push(_gdd);
        dataAccGDD.push(totalSum);
    }
    
    return [dataGDD, dataAccGDD]
}

async function estimate_AvgTemperature(dates:Date[] | [], Tn:number[] | [], Tx:number[] | []){
    // Estimate Average Temperature
    const Ta = dates.map((e, index) => {
        const tn = Tn[index]; //parseFloat(Tn[index]);
        const tx = Tx[index]; //parseFloat(Tx[index]);
        return (tx + tn) / 2;

    });
    return Ta; //{ ...dataForGDD, ...{ "Ta": Ta.map(num => Number(num.toFixed(2))) } };
}

function getDateRange(startDateString:string, numberOfDays:number){
    const start = new Date(startDateString);
    return Array.from({ length: numberOfDays }, (_, index) => {
        const date = new Date(start);
        date.setDate(start.getDate() + index);
        return date;
    });
};


// Helper to find the index of the closest value in a typed array or regular array
function findNearestIndex(arr: number[] | [], target:number) {
    let closestIdx = 0;
    let minDiff = Math.abs(arr[0] - target);

    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - target);
        if (diff < minDiff) {
            minDiff = diff;
            closestIdx = i;
        }
    }
    return closestIdx;
}

/**
 * Converts a JS Date or Timestamp to an ERA5 hourly array index
 */
function dateToEra5Index(dateOrTimestamp:string) {
    const targetDate = new Date(dateOrTimestamp);
    // Calculate difference in hours/days from the dataset baseline
    // const diffInHours = (targetDate.getTime() - ERA5_EPOCH.getTime()) / MILLISECONDS_IN_HOUR;
    const diffInDays = (targetDate.getTime() - ERA5_EPOCH.getTime()) / MILLISECONDS_IN_DAY;
    return Math.floor(diffInDays); //diffInHours);
}

function temperature_K_to_celsius(t:number){
    // """Converts Kelvin units to degrees Celsius."""
    return formatter.format(t - 273.15)
}

function solrad_to_MJ(sr:number){
    // """Convert J/m2/day units to MJ/m2/day """
    // # To go from Watts/m^2 to MJ/(m^2day) you need to multiply the number of sec in a day: watts/meter² x 86400 s/day x 1 MJ/10^6 J = MJ/(meter²*day).
    // # sr_MJ = round(sr * 86400 / 1000000, 3) # Watts/m^2 to MJ/(m^2day)
    return formatter3.format(sr / 1000000)
}

function vapour_pressure_to_kPa(vp:number){
    // """Convert hPa units to kPa """
    // vp_kPa = formatter3.format(vp * 0.1)
    return formatter3.format(vp * 0.1)
}

async function GDD(tn: number, tx: number, tbase = 0, Tcutoff = null) {
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
    if (tn == null || tx == null) {
        console.log("Temperature parameters are not valid")
        return 0
    }
    // If the low temperature of the day is below your crop or pests' base value, use the base temperature during your calculations.
    if (tbase !== null) {
        tn = tn < tbase ? tbase : tn;
    }
    // # If the max temperature of the day is above your crop or pests' base value, use the maximum threshold temperature during your calculations.
    if (Tcutoff !== null) {
        tx = tx > Tcutoff ? Tcutoff : tx;
    }
    // # To calculate GDDs you need to first record the mean temperature; 
    // # this can be done by adding together the high and low temperature for the day and dividing that value by two.
    let Tavg = (tx + tn) / 2;
    // # If the mean temperature is at or below the base temperature for a crop or pest of interest, then the GDD value is zero.
    Tavg = Tavg <= tbase ? 0 : Tavg
    // # If the mean temperature is above the base temperature, then the GDD equals the value of the mean temperature minus the base temperature.
    let GDD = Tavg > tbase ? (Tavg - tbase) : 0;
    GDD = Math.max(GDD, 0); //gdd > 0 ? gdd : 0;
    return await GDD
}

// async function calculateCumulativeGDD(dailyGDD) {
//     let totalSum = 0;
//     const cumulativeMap = dailyGDD.map((value: number) => totalSum += value);
//     return await cumulativeMap
// }


