<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
    import { Wave } from 'svelte-loading-spinners';
	import { t, locale, locales } from '$lib/assets/i18n.js';
    import {era5_getData } from '$lib/era5Service.svelte';
    // import { createCachedState } from '$lib/components/cache.runes.svelte';
    // import { CookieState } from '$lib/cookieState.svelte.ts';
    // import { fetchWithCache } from '$lib/cacheService.svelte.ts';
    // import * as CacheGDD from '$lib/cacheService_v2.svelte.ts';

	// import TemperatureChart from '$lib/components/TemperatureChart.svelte';
    import WeatherChart from '$lib/components/WeatherChart.svelte';
	import GDDChart from '$lib/components/GDDChart.svelte';
	import type { GDDRow, Site } from '$lib/types';
	import Tabs from '$lib/components/Tabs.svelte';
    import Accordion from '$lib/components/Accordion.svelte';
    import DatePicker from '$lib/components/date-picker.svelte';
    // import SiteItem from '$lib/components/siteItem.svelte';
	// import FigureTest from '$lib/components/FigureTest.svelte';

    // import './layout.css';
    // import { mode, ModeWatcher, toggleMode } from "mode-watcher";
    // import { Button } from "$lib/components/ui/button/index.js";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import SunIcon from "@lucide/svelte/icons/sun";
    import Trash2 from '@lucide/svelte/icons/trash-2';
    import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
    import { mode, toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as NativeSelect from "$lib/components/ui/native-select/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Spinner } from "$lib/components/ui/spinner/index.js";
    import * as Empty from "$lib/components/ui/empty/index.js";
    import * as SettingsTabs from "$lib/components/ui/tabs/index.js";
    import * as Field from '$lib/components/ui/field/index.js';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
    import * as HoverCard from "$lib/components/ui/hover-card/index.js";
    
    // import { env } from '$env/static/public';
    // const USE_PYTHON_API = env.PUBLIC_USE_PYTHON_API=="false" ? false : true; 
    const USE_PYTHON_API:boolean = import.meta.env.VITE_USE_PYTHON_API=="false" ? false : true; 
    // const PUBLIC_BASE_API_URL:string = import.meta.env.VITE_BASE_API_URL; 
    // Point to localhost:8000 in development, or relative path in production
	// const BASE_API_URL = import.meta.env.DEV ? 'http://localhost:8000/api' : 'http://192.168.1.37/api';
	const BASE_API_URL = import.meta.env.DEV ? 'http://localhost:8000/api' : import.meta.env.VITE_BASE_API_URL; //PUBLIC_BASE_API_URL; 

	// // Import CIMMYT Nursery locations
	// import cimmytData from '$lib/assets/cimmyt_data.json';

	// Server-side
	// let cimmytData = $state(null); // Use Svelte 5 runes ($state) or let data; in Svelte 4
	// async function loadCIMMYTData() {
	//     const response = await fetch('/cimmyt_data.json');
	//     cimmytData = await response.json();
	// }
	// loadCIMMYTData();

    
    let msg = $t("app.message");
    // let source = $derived($t("chart.source"));
	// let weatherSource = $derived(source);
	let message = $derived(msg); //'Loading...');
	let errorMessage = $state(null);
	let loading = $state(true);
	let loadingCoords = $state(true);
	let loadingChart = $state(true);

    // Chart GDD labels
    let theme_mode = $derived(mode.current); //starts with light
    let chart_GDD_labels = $derived({
        "chart_locale": $locale,
        "chart_dark": theme_mode==='dark' ? true : false,
        "chart_gdd_title": $t("chart.gdd_title"),
        "chart_gdd_xlabel": $t("chart.gdd_xlabel"),
        "chart_gdd_ylabel": $t("chart.gdd_ylabel"),
        "chart_gdd_legend_label": $t("chart.gdd_legend_label"),
        "chart_gdd_verticalline_label1": $t("chart.gdd_verticalline_label_1"),
        "chart_gdd_verticalline_label2": $t("chart.gdd_verticalline_label_2"),
    });
    let chart_temperature_labels = $derived({
        "chart_locale": $locale,
        "chart_dark": theme_mode==='dark' ? true : false,
        "chart_temperature_title": $t("chart.temperature_title"),
        "chart_temperature_xlabel": $t("chart.temperature_xlabel"),
        "chart_temperature_ylabel": $t("chart.temperature_ylabel"),
        "chart_temperature_y1label": $t("chart.temperature_y1label"),
        "chart_temperature_legend_label1": $t("chart.temperature_legend_label_1"),
        "chart_temperature_legend_label2": $t("chart.temperature_legend_label_2"),
        "chart_temperature_legend_label3": $t("chart.temperature_legend_label_3"),
        "chart_temperature_legend_label4": $t("chart.temperature_legend_label_4"),
    });

	

	let currentGDD = $state<GDDRow | null>(null);
	let historicalData = $state<GDDRow[]>([]);

	// Create a copy so you don't overwrite 'today'
	let today = new Date();
	const oneYearAgo = new Date(today);
	oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

	let startDateString = $state(
		new Date(oneYearAgo.getTime() - oneYearAgo.getTimezoneOffset() * 60000)
			.toISOString()
			.split('T')[0]
	); //$state("2026-08-18"); //new Date(dateString)
	let endDateString = $state(
		new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0]
	);

	let gddThreshold = $state<number | null>(10); //The base temperature is the lowest temperature at which a crop will grow. As an example, a common base for many crops is 50°F.
	let maxTemperatureThreshold = $state<number | null>(30); //Some crops also have a maximum temperature above which growth slows. This temperature is usually approximately 86°F.
	let maturityGDDThreshold = $state<number | null>(null);
	let daystoMaturityThreshold = $state<number | null>(null);
	let units = $state('C');
	let Latitude = $state(null ?? 3.5);
	let Longitude = $state(null ?? -76.5);

	// Initialize a reactive variable to hold the selected value
	let group = 'units';
	const unitsOptions = ['C', 'F']; //, "K"
	function handleUnitsChange(event: any) {
		// units = event.target.value;
		// console.log(`Units changed to: ${event.target.value}`);
		if (units == 'C') {
			if (gddThreshold) gddThreshold = convertFtoC(gddThreshold);
			if (maxTemperatureThreshold) maxTemperatureThreshold = convertFtoC(maxTemperatureThreshold);
		} else if (units == 'F') {
			if (gddThreshold) gddThreshold = convertCtoF(gddThreshold);
			if (maxTemperatureThreshold) maxTemperatureThreshold = convertCtoF(maxTemperatureThreshold);
		}
	}
	function convertCtoF(value: any) {
		let c = +value;
		return +((9 / 5) * c + 32).toFixed(1);
	}
	function convertFtoC(value: any) {
		let c = +value;
		return +((5 / 9) * (c - 32)).toFixed(1);
	}

	// Crops
	let crops =  $derived([
		// 50°F : corn, sorghum, soybeans, tomato
		// 46°F : sunflower, potato
		// 42°F : wheat, barley, rye, oats, flaxseed, lettuce, asparagus

        // { id: 'none', name: $t("settings.crops_none"), tbase: null, tcutoff: null },
		{ id: 'corn', name: $t("settings.crops_corn"), tbase: 50, tcutoff: 86 },
		{ id: 'sorghum', name: $t("settings.crops_sorghum"), tbase: 50, tcutoff: null },
		{ id: 'soybeans', name: $t("settings.crops_soybeans"), tbase: 50, tcutoff: null },
		{ id: 'tomato', name: $t("settings.crops_tomato"), tbase: 50, tcutoff: null },

		{ id: 'sunflower', name: $t("settings.crops_sunflower"), tbase: 46, tcutoff: null },
		{ id: 'potato', name: $t("settings.crops_potato"), tbase: 46, tcutoff: null },

		{ id: 'wheat', name: $t("settings.crops_wheat"), tbase: 42, tcutoff: null },
		{ id: 'barley', name: $t("settings.crops_barley"), tbase: 42, tcutoff: null },
		{ id: 'rye', name: $t("settings.crops_rye"), tbase: 42, tcutoff: null },
		{ id: 'oats', name: $t("settings.crops_oats"), tbase: 42, tcutoff: null },
		{ id: 'flaxseed', name: $t("settings.crops_flaxseed"), tbase: 42, tcutoff: null },
		{ id: 'lettuce', name: $t("settings.crops_lettuce"), tbase: 42, tcutoff: null },
		{ id: 'asparagus', name: $t("settings.crops_asparagus"), tbase: 42, tcutoff: null },
		// { id: 'Other', name: $t("settings.crops_other"), tbase: null, tcutoff: null }
	]);

	// Insects and Diseases
	let pests = $derived([
		// Insects and Diseases
		// 52°F : Green Cloverworm
		// 50°F : Codling moth, Apple maggot
		// 48°F : Alfalfa weevil
		// 45°F : Corn rootworm, Oriental fruit moth
		// 43°F : Stalk Borer
		// 40°F : Onion maggot
		// 39°F : Cabbage maggot
		// 32°F : Apple scab
		{ id: 'Green Cloverworm', name: $t("settings.pests_green_cloverworm"), tbase: 52, tcutoff: null },
		{
			id: 'Codling moth, Apple maggot',
			name: $t("settings.pests_codling_moth"),
			tbase: 50,
			tcutoff: null
		},
		{ id: 'Alfalfa weevil', name: $t("settings.pests_alfalfa_weevil"), tbase: 48, tcutoff: null },
		{
			id: 'Corn rootworm, Oriental fruit moth',
			name: $t("settings.pests_corn_rootworm"),
			tbase: 45,
			tcutoff: null
		},
		{ id: 'Stalk borer', name: $t("settings.pests_stalk_borer"), tbase: 43, tcutoff: null },
		{ id: 'Onion maggot', name: $t("settings.pests_onion_maggot"), tbase: 40, tcutoff: null },
		{ id: 'Cabbage maggot', name: $t("settings.pests_cabbage_maggot"), tbase: 39, tcutoff: null },
		{ id: 'Apple scab', name: $t("settings.pests_apple_scab"), tbase: 32, tcutoff: null },
		// { id: 'Other', name: $t("settings.pests_other"), tbase: null, tcutoff: null }
	]);
	
    // Create one list for all thresholds
	let selectedCropPest = $state('corn');
    let selectedCropPestLabel = $derived($t("settings.crops_selected"));
    function handleCropsPestChange(event: Event) {
		if (event.target) {
			// console.log(`Pest changed to: ${event.target.value}`);
			// const result = pests.filter(item => item.id === event.target.value);
			const _Id = event.target.value || null;
            const cropspests = [...crops, ...pests]; //{...crops, ...pests}
			const result = cropspests.find((item) => item.id === _Id); //for better performance.
            selectedCropPest = result?.id;
			if (units == 'C') {
				gddThreshold = result?.tbase != null ? convertFtoC(result?.tbase) : 0;
				maxTemperatureThreshold = result?.tcutoff != null ? convertFtoC(+result.tcutoff) : null;
			} else if (units == 'F') {
				gddThreshold = result?.tbase != null ? result.tbase : 0;
				maxTemperatureThreshold = result?.tcutoff != null ? +result.tcutoff : null;
			}
            // Display list of CIMMYT nursery sites
            if (selectedCropPest === 'wheat') {
                showCoordsList = true;
            } else {
                showCoordsList = false;
            }
            selectedCropPestLabel = result?.name;
		}
	}

	
	async function resetSettings() {
		// let today = new Date();
		// const oneYearAgo = new Date(today);
		// oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
		startDateString = new Date(oneYearAgo.getTime() - oneYearAgo.getTimezoneOffset() * 60000).toISOString().split('T')[0];
		endDateString = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
		gddThreshold = 10; //The base temperature is the lowest temperature at which a crop will grow. As an example, a common base for many crops is 50°F.
		maxTemperatureThreshold = 30; //Some crops also have a maximum temperature above which growth slows. This temperature is usually approximately 86°F.
		maturityGDDThreshold = null;
		daystoMaturityThreshold = null;
		units = 'C';
		// Latitude = null;
		// Longitude = null;
		// selectedCrop = 'corn';
		// selectedPest = '';
        selectedCropPest = 'corn';
		selectedNurserySite = '';
        // Display list of CIMMYT nursery sites
        showCoordsList = false;

        await clearWeatherStation();
        
		applySettings();
	}

	let showCoordsList = $state(false);
	let selectedNurserySite = $state('');
	let weatherStation = $state({});

    async function quickHash(str) {
        let hash = 5381;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 33) ^ str.charCodeAt(i);
        }
        return (hash >>> 0).toString(16); // Convert to unsigned hex string
    }

    async function getERA5Data(lat, lng, units="C", startDate, endDate){
        const era5data = await era5_getData(lat, lng, units, startDate, endDate);
        if (era5data){
            console.log(era5data);
        }
    }

    async function triggerApi() {
        load_cache_sites();
		applySettings();
	}

    onMount(async () => {

        // Init API
        if (USE_PYTHON_API){
            try {
                const response = await fetch(`${BASE_API_URL}`);
                const res = await response.json();
                // Uses browser cache if valid, otherwise hits network
                // const res = await fetchWithCache(`${BASE_API_URL}`, {}, 300);
                message = res.message;
                Latitude = res.latitude;
                Longitude = res.longitude;
                // loading = false;
                // loadingCoords = false;
                // Initial data fetch
                triggerApi();

                // Load ERA5 data
                // await getERA5Data(Latitude, Longitude, units, startDateString, endDateString);
            } catch (error) {
                errorMessage = $t("app.failmsg"); //'Failed to connect to backend.';
                console.error(error);
            } finally {
                loading = false;
                loadingCoords = false;
            }
        } else {
            loadingCoords = false;
            // Initial data fetch
            triggerApi();
        } 

		return () => {

		};
	});

    let loadedSites = $state(false);
    let cacheSitesData = $state([]);
    function load_cache_sites(){
        const cachedGDDData = localStorage.getItem('GDD_Cache');
        if (cachedGDDData) {
            cacheSitesData = JSON.parse(cachedGDDData);
            // console.log("cacheSitesData --->", $state.snapshot(cacheSitesData).length);
        }
    }

    async function validateCacheSite(params:unknown){
        let data = null;

        if (params){
            // console.log("params to cache:", params);
            
            // Buscar en un arrego 
            const cachedGDDData = localStorage.getItem('GDD_Cache');
            if (cachedGDDData) {
                cacheSitesData = JSON.parse(cachedGDDData);
                // console.log("cacheSitesData --->", $state.snapshot(cacheSitesData));
                // generar hash y buscar en el store
                const hash = await quickHash(JSON.stringify(params));
                // console.log("hash --->",hash);
                // cacheSitesData.map((s) =>{
                //     if (s.hash===hash)
                //         console.log(s.hash, s.params.latitude);
                // });
                const cachedData = cacheSitesData.filter(s => s.hash===hash );
                // console.log("Searching cache:", hash, $state.snapshot(cachedData));
                // const cachedData = localStorage.getItem(hash);
                if (cachedData && cachedData.length>0){
                    data = cachedData[0]; //JSON.parse(cachedData);
                    loadedSites = true;
                }
            }
        }

        return data
    }

    async function processAPIresults(result) {
        if (result){
            historicalData = []; //Clean
            // result.data.date.map(() => );
            for (let i = 0; i < result.data.timestamp.length; i++) {
                const date_el = result.data.timestamp[i]; //new Date(result.data.date[i]);
                const Tn_el = result.data.Tn[i];
                const Ta_el = result.data.Ta[i];
                const Tx_el = result.data.Tx[i];

                const Prec_el = result.data.Prec[i];
                const Srad_el = result.data.Srad[i];
                const Wind_el = result.data.Wind[i];

                const GDD_el = result.data.GDD[i];
                const accGDD_el = result.data.accGDD[i];
                historicalData.push({
                    timestamp: date_el,
                    Prec: Prec_el,
                    Tn: Tn_el,
                    Ta: Ta_el,
                    Tx: Tx_el,
                    Srad: Srad_el,
                    Wind: Wind_el,
                    GDD: GDD_el,
                    accGDD: accGDD_el
                });
            }
            // message = result.status;
            loadingChart = false;


        }
    }

    async function saveCache(parameters){
        // Automatically syncs with localStorage and updates reactively
        const hash = await quickHash(JSON.stringify(parameters));
        const lastupdate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString(); //.split('T')[0];
        // localStorage.setItem(hash, JSON.stringify(cachedata));
        cacheSitesData.push({
            "hash": hash,
            "params": parameters, //{...parameters, ...{"hash": hash}},
            "weatherdata":historicalData,
            "lastupdate":lastupdate
        });
        // Cache array of sites
        localStorage.setItem('GDD_Cache', JSON.stringify(cacheSitesData));
        loadedSites = true;
        loadingChart = false;
    }

	async function applySettings() {
		loadingChart = true;
		// console.log("Applying Settings...");
		const parameters = {
			units: units,
			startDate: startDateString,
			endDate: endDateString,
			gddThreshold: gddThreshold || 0,
			maxTemperatureThreshold: maxTemperatureThreshold,
			maturityGDDThreshold: maturityGDDThreshold,
			daystoMaturityThreshold: daystoMaturityThreshold,
			latitude: Latitude,
			longitude: Longitude,
            croppest:selectedCropPest,
            nurserysite:selectedNurserySite,
		};
        // Validate Cache
        // let dataCache = await validateCacheSite(parameters);
        let dataCache = await validateCacheSite(parameters);
        // console.log("dataCache2 -->", dataCache);

        const isEmpty = Object.keys(weatherStation).length === 0 && weatherStation.constructor === Object;
        // console.log("weatherStation isEmpty -->", isEmpty);
        if (dataCache===null && isEmpty){
            // console.log("Fetching fresh data...");
            if (USE_PYTHON_API){
                // console.log("Fetching fresh data using Python API...");
                try {
                    const res = await fetch(`${BASE_API_URL}/location`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ title: 'Calculate GDD', body: 'Payload', parameters: parameters })
                    });
                    const result = await res.json();
                    // console.log(result);
                    // const result = await fetchWithCache(`${BASE_API_URL}/location`, {
                    // 	method: 'POST',
                    // 	headers: { 'Content-Type': 'application/json' },
                    // 	body: JSON.stringify({ title: 'Calculate GDD', body: 'Payload', parameters: parameters })
                    // }, 300);

                    await processAPIresults(result);
                    await saveCache(parameters);

                } catch (error) {
                    errorMessage = $t("app.failmsg"); //'Failed to connect to backend.';
                    console.error(error);
                }

            } else {
                // Using zarrita
                // console.log("Fetching fresh data using zarrita API...");
                try {
                    const results = await era5_getData(Latitude, Longitude, units, startDateString, endDateString, gddThreshold, maxTemperatureThreshold);
                    // console.log("Results using zarrita API:", results);
                    if (results){
                        historicalData = []; //Clean
                        if (results.length>0){
                            historicalData = results;
                            await saveCache(parameters);
                        }
                    }
                    
                } catch (error) {
                    errorMessage = $t("app.failmsg"); //'Failed to connect to backend.';
                    console.error(error);
                }

            }
            
            
        } else if (dataCache===null && weatherStation!={}){
            await updateGDDData();
            loadingChart = false;

        } else {
            // console.log("Retrieved cached data");
            historicalData = dataCache.weatherdata;
            // console.log("historicalData recuperado del store:", historicalData);
            loadingChart = false;
            // loadedSites = true;
        }
	}

	function onLatitudeChange(value: number) {
		Latitude = value;
	}
	function onLongitudeChange(value: number) {
		Longitude = value;
	}
	function onNurserySiteChange(value: string) {
		selectedNurserySite = value;
	}
    function handleMaturityGDDThresholdChange(value: number) {
		maturityGDDThreshold = value;
	}
    function handleDaystoMaturityThresholdChange(value: number) {
		daystoMaturityThreshold = value;
	}
	async function onWeatherStationExecute(value: object) {
		weatherStation = value;
		if (weatherStation){
			// console.log("weatherStation -->", $state.snapshot(weatherStation));
            units = 'C';
            // Assignar valores Max/Min Dates to Calendar Dropbox
			startDateString = weatherStation.dates[0];
			endDateString = weatherStation.dates[weatherStation.dates.length - 1];
			// Latitude = weatherStation.latitude;
			// Longitude = weatherStation.longitude,

            historicalData = await defineWeatherData();

            // Save cache
            const parameters = {
                units: units,
                startDate: startDateString,
                endDate: endDateString,
                gddThreshold: gddThreshold || 0,
                maxTemperatureThreshold: maxTemperatureThreshold,
                maturityGDDThreshold: maturityGDDThreshold,
                daystoMaturityThreshold: daystoMaturityThreshold,
                latitude: Latitude,
                longitude: Longitude,
                croppest:selectedCropPest,
                nurserysite:selectedNurserySite,
            };
            await saveCache(parameters);
            // const hash = await quickHash(JSON.stringify(parameters));
            // const lastupdate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString(); //.split('T')[0];
            // cacheSitesData.push({
            //     "hash": hash,
            //     "params": parameters,
            //     "weatherdata":historicalData,
            //     "lastupdate":lastupdate
            // });
            // // Cache array of sites
            // localStorage.setItem('GDD_Cache', JSON.stringify(cacheSitesData));
            // loadedSites = true;
            // loadingChart = false;
		}
	}

    async function defineWeatherData() {
        // Define Weather Data
        let histData = []; //Clean
        // result.data.date.map(() => );
        if (!Object.hasOwn(weatherStation, "dates")){
            histData = []
        } else {
            for (let i = 0; i < weatherStation.dates.length; i++) {
                const date_el = weatherStation.dates[i]; //new Date(weatherStation.date[i]);
                let Prec_el = -99;
                let Tn_el = -99;
                let Ta_el = -99;
                let Tx_el = -99;
                let Srad_el = -99;
                let Wind_el = -99;
                let GDD_el = -99;
                let accGDD_el = -99;
                
                if (Object.hasOwn(weatherStation, "Tn"))
                    Tn_el = weatherStation.Tn[i];
                if (Object.hasOwn(weatherStation, "Ta"))
                    Ta_el = weatherStation.Ta[i];
                if (Object.hasOwn(weatherStation, "Tx"))
                    Tx_el = weatherStation.Tx[i];
                if (Object.hasOwn(weatherStation, "Prec"))
                    Prec_el = weatherStation.Prec[i];
                if (Object.hasOwn(weatherStation, "Srad"))
                    Srad_el = weatherStation.Srad[i];
                if (Object.hasOwn(weatherStation, "Wind"))
                    Wind_el = weatherStation.Wind[i];
                if (Object.hasOwn(weatherStation, "GDD"))
                    GDD_el = weatherStation.GDD[i];
                if (Object.hasOwn(weatherStation, "accGDD"))
                    accGDD_el = weatherStation.accGDD[i];

                histData.push({
                    timestamp: date_el,
                    Prec: Prec_el,
                    Tn: Tn_el,
                    Ta: Ta_el,
                    Tx: Tx_el,
                    Srad: Srad_el,
                    Wind: Wind_el,
                    GDD: GDD_el,
                    accGDD: accGDD_el
                });
            }
        }

        return histData
    }

    async function updateGDDData(){
        childTabWeatherRef?.processWeatherFile();
    }

    // Declare a variable to store the child component reference
	let childTabWeatherRef = $state(); 
    async function clearWeatherStation(message) {
        weatherStation = {};
        // Call the child's exported function safely
		childTabWeatherRef?.clearWeatherStation();
	}
	
    function toTitleCase(str) {
        return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    let currentSite = $state('');
    function onSiteChange(s:Site){
        // console.log("Cambio el Sitio:", $state.snapshot(s));
        // Update Settings
        startDateString = s.startDate;
        endDateString = s.endDate;
        // startDateString = new Date(s.startDate).toISOString().split('T')[0];
		// endDateString = new Date(s.endDate).toISOString().split('T')[0];
        gddThreshold = s.gddThreshold;
        maxTemperatureThreshold = s.maxTemperatureThreshold;
        maturityGDDThreshold = s.maturityGDDThreshold;
		daystoMaturityThreshold = s.daystoMaturityThreshold;
		units = s.units;
		Latitude = s.latitude;
		Longitude = s.longitude;
        selectedCropPest = s.croppest; // || 'corn';
        selectedCropPestLabel = toTitleCase(s.croppest)
		selectedNurserySite = s.nurserysite || '';

        // Display list of CIMMYT nursery sites
        if (selectedCropPest === 'wheat') {
            showCoordsList = true;
        } else {
            showCoordsList = false;
        }

        applySettings();

    }

    async function onSiteDelete(e:Event, h:string){
        e.stopPropagation();
        // console.log("Eliminando Sitio:", h);
        const fdata = cacheSitesData.filter((s) => s.hash!==h );
        // console.log($state.snapshot(cacheSitesData).length);
        localStorage.setItem('GDD_Cache', JSON.stringify(fdata));
        cacheSitesData = fdata;
    }

	let error_date_range = $state(false);
	// let error_date_range_message = $t("settings.error_date_range_message"); //'Growing season too long';
	let harvestYear = $derived(today.getFullYear());
    function onStartDateChange(value: string) {
		const sd = new Date(value);
        startDateString = new Date(sd.getTime() - sd.getTimezoneOffset() * 60000).toISOString().split('T')[0]
        validateDaterange();
	}
	function onEndDateChange(value: string) {
        const ed = new Date(value);
		endDateString = new Date(ed.getTime() - ed.getTimezoneOffset() * 60000).toISOString().split('T')[0]
        validateDaterange();
	}
	function validateDaterange() {
		const d1 = new Date(startDateString);
		const d2 = new Date(endDateString);
		// Calculate total milliseconds in one day
		const msPerDay = 1000 * 60 * 60 * 24;
		// Difference in milliseconds
		// Subtract and convert
		const days = Math.floor(Math.abs(d2 - d1) / msPerDay);
		if (days > 550) {
			// console.log('Number of days:', days);
			error_date_range = true;
		} else {
			error_date_range = false;
			harvestYear = d2.getFullYear();
		}
	}

    // Create an object to hold the child's exported methods
	let childApi = {};
	function callChild_UpdateThemeMode(theme_mode) {
		// Call the child method if it exists
		if (childApi.updateThemeMode){
            childApi.updateThemeMode(theme_mode)
        }
	}
    function updateThemeMode(){
        toggleMode();
        // if (mode) theme_mode = mode==='dark' ? 'light' : 'dark';
        if (mode) theme_mode = mode.current; 
        callChild_UpdateThemeMode(theme_mode);
    }

</script>

<main class="container mt-0 p-2 pt-0">
	<!-- Growing degree days (GDD), or heat units, are used to estimate the growth and development of certain crops and pests during the growing season. -->
	<div class="dashboard-grid">
		<div class="grid grid-cols-3  border border-gray-300 p-2 rounded-[5px] span-3 sm:max-w-77.5 md:max-w-full lg:max-w-full">
            <div></div>
            <div class="text-left items-center justify-items-center">
                <h1 class="text-[1.5rem] text-center font-extrabold text-[#327500] dark:text-gray-100">{$t("app.title")}</h1>
                <p  class="text-[0.75rem] text-center font-thin p-0 mt-0 text-gray-400 dark:text-orange-400 ">{$t("app.subtitle")}</p>
            </div>
            <div class="relative top-2 block sm:hidden md:block">
                <div class="flex flex-row gap-x-2 justify-end ">
                    <Button onclick={updateThemeMode} variant="outline" size="icon">
                        <SunIcon
                            class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
                        />
                        <MoonIcon
                            class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
                        />
                        <span class="sr-only">Toggle theme</span>
                    </Button>
                    <NativeSelect.Root aria-label="Choose your preferred language" bind:value={$locale} class="">
                        {#each locales as l } 
                            <NativeSelect.Option value={l}>{l}</NativeSelect.Option>
                        {/each}
                    </NativeSelect.Root>
                </div>
            </div>
        </div>

        <div class="card max-w-95">
            <SettingsTabs.Root value="settings" class="w-full">
                <SettingsTabs.List>
                <SettingsTabs.Trigger value="settings"><p class="text-[0.9rem] font-bold text-blue-800  dark:text-white">{$t("app.tabs_label_settings")}</p></SettingsTabs.Trigger>
                <SettingsTabs.Trigger value="sites"><p class="text-[0.9rem] font-bold text-blue-800  dark:text-white">{$t("app.tabs_label_sites")}</p></SettingsTabs.Trigger>
                </SettingsTabs.List>
                <SettingsTabs.Content value="settings">
            
            <div class="cardSettings max-w-95">
			<!-- <h3>{$t("settings.title")}</h3> -->

			<div class="setting-group">
				<p class="text-[0.9rem] font-bold ">{$t("settings.growing_season")}:</p>
				<div class="rounded-[5px] border border-gray-300 p-2">
					<div class="flex gap-x-2">
                        <!-- Start Date -->
						<DatePicker id="start_date" label={$t("settings.start_date")} locale={$locale} 
                            initVal={startDateString}
                            onStartDateChange={onStartDateChange}
                        />
                        <!-- End Date -->
						<DatePicker id="end_date" label={$t("settings.end_date")} locale={$locale} 
                            initVal={endDateString} 
                            onEndDateChange={onEndDateChange} 
                        />
					</div>
					<div>
						{#if error_date_range}
							<p>
								<span class="text-[0.75rem] font-light text-red-700"
									>{$t("settings.error_date_range_message")}</span
								>
							</p>
						{/if}
					</div>
				</div>
			</div>

			<div class="setting-group">
				<p class="text-[0.9rem] font-bold ">
					{$t("settings.crop_threshold_temperature")} {units == 'C' ? '(°C)' : '(°F)'}:
				</p>
				<div class="rounded-[5px] border border-gray-300 pr-2 pl-2">
					<fieldset class="flex flex-row gap-2 pt-2">
						<p class="text-[0.9rem] ">{$t("settings.units")}:</p>
						{#each unitsOptions as option}
							<input type="radio" id={option} name="units"
								value={option} bind:group={units} onchange={handleUnitsChange}
							/>
							<label for={option}>°{option}</label>
						{/each}
					</fieldset>
					<div class="justify-content flex h-10 flex-row items-center gap-x-4">
						<!-- The base temperature is the lowest temperature at which a crop will grow -->
						<label
							for="gddThreshold"
							title="The base temperature is the lowest temperature at which a crop will grow"
						>
							Min
						</label>
                        <Input type="number" id="gddThreshold" placeholder="TBase threshold" class="max-w-xs" 
                            bind:value={gddThreshold}
							min="0"
							max="100"
							step="0.5"
                        />
						<label
							for="maxTemperatureThreshold"
							title="Maximum temperature above which growth slows"
						>
							<!-- Some crops also have a maximum temperature above which growth slows -->
							Max
						</label>
                        <Input type="number" id="maxTemperatureThreshold" placeholder="TMax threshold" class="max-w-xs" 
                            bind:value={maxTemperatureThreshold}
							min="0"
							max="100"
							step="0.5"
                        />
					</div>
				</div>
			</div>

            <Accordion open={false} crops={crops} pests={pests} 
                selectedCropPest={selectedCropPest} 
                handleCropsPestChange={(value) => handleCropsPestChange(value)}
                maturityGDDThreshold={maturityGDDThreshold}
                daystoMaturityThreshold={daystoMaturityThreshold}
                handleMaturityGDDThresholdChange={(value) => handleMaturityGDDThresholdChange(value)}
                handleDaystoMaturityThresholdChange={(value) => handleDaystoMaturityThresholdChange(value)}
            >
                {#snippet details()}
                    <div>
                        <!-- These are the details. -->
                    </div>
                {/snippet}
            </Accordion>

			<p class="text-[0.85rem] font-thin">
				<!-- Use the map to select your location, or enter your GPS coordinates manually. -->
                {$t("settings.location_desc")}
			</p>
			{#if loadingCoords}
                <div class="flex items-center gap-4">
                    <Button variant="secondary">
                        <Spinner class="text-red-500 size-4"/>
                        <p class="text-[0.75rem] text-red-500">{$t("settings.estimating_coord_msg")}
                            <!-- Estimating the coordinates at your current location... -->
                        </p>
                    </Button>
                </div>
			{:else}
				<Tabs
					{Latitude}
					{Longitude}
                    {startDateString}
                    {endDateString}
					{showCoordsList}
					{selectedCropPest}
					{selectedNurserySite}
					{onLatitudeChange}
					{onLongitudeChange}
					{onNurserySiteChange}
					{onWeatherStationExecute}
                    Tbase={gddThreshold}
                    Tcutoff={maxTemperatureThreshold}
                    bind:this={childTabWeatherRef}
				/>
			{/if}
			<!-- Click a point on the map to inspect the GDD dynamics. -->
			<div class="flex flex-row justify-around gap-2">
				<button class="buttonReset" onclick={resetSettings}>{$t("settings.btn_reset")}</button>
				<button class="buttonApply" onclick={applySettings} disabled={error_date_range}
					>{$t("settings.btn_apply")}</button
				>
			</div>

			<div>
				{#if errorMessage}
					<p>
						<span class="text-[0.85rem] text-red-700">{errorMessage}</span>
					</p>
				{/if}
			</div>
		</div>

            </SettingsTabs.Content>
            <SettingsTabs.Content value="sites">
                <div class="cardSettings w-full max-h-130 overflow-auto">
                    <!-- <h3>{$t("app.tabs_label_sites")}</h3> -->
                    {#if loadedSites}
                        <div class="w-full max-w-md">
                        <Field.Group>
                            <Field.Set>
                                <!-- <Field.Label for="compute-environment-p8w">Saved Sites</Field.Label>
                                <Field.Description>Select the site from previous runs.</Field.Description> -->
                                <RadioGroup.Root bind:value={currentSite} class="gap-1.5!">
                                    {#each cacheSitesData as s, i (s.hash)}
                                            <HoverCard.Root>
                                                <HoverCard.Trigger>

                                            <Field.Label for={s.hash} class="hover:border hover:border-blue-500 hover:shadow max-h-18">
                                                <Field.Field orientation="horizontal">
                                                    <Field.Content>
                                                        <Field.Title>
                                                            <span class="text-0.85rem font-bold pr-4">{$t("siteitem.label")} {i+1}</span>
                                                            <span class="text-[0.7rem] font-thin text-gray-500">(Lat: {s.params.latitude}, Lng: {s.params.longitude})</span>
                                                        </Field.Title>
                                                        <Field.Description>
                                                            <div class="flex flex-row">
                                                                <CalendarDaysIcon class="me-2 size-4 opacity-70" />
                                                                <span class="text-[0.65rem] font-thin text-gray-400">
                                                                {$t("siteitem.label_last_update")} {s.lastupdate}
                                                                </span>
                                                            </div>
                                                        </Field.Description>
                                                    </Field.Content>
                                                    <div class="flex flex-row gap-0.5 align-middle">
                                                        <RadioGroup.Item value={s.hash} id={s.hash} onclick={() => onSiteChange(s.params)}/>
                                                        <Button onclick={(e) => onSiteDelete(e, s.hash)}  variant="outline" size="icon" 
                                                        class="h-4.5! border-0 m-0 border-white shadow-none bg-(var(--primary))">
                                                            <Trash2 class="size-4" />
                                                        </Button>
                                                    </div>
                                                </Field.Field>
                                            </Field.Label>

                                            </HoverCard.Trigger>
                                                <HoverCard.Content>
                                                    <div class="w-full flex flex-col text-[0.75rem]">
                                                        {#if s.params.nurserysite}<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">{$t("site.hoovercard_site")}</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.nurserysite || ''}</span></div>{/if}
                                                        {#if s.params.croppest}<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">{$t("site.hoovercard_croppest")}</span><span class="absolute right-0 text-right text-[0.75rem]">{toTitleCase(s.params.croppest) || ''}</span></div>{/if}
                                                        <!-- <div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">Latitude</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.latitude  || ''}</span></div> -->
                                                        <!-- <div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">Longitude </span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.longitude  || ''}</span></div> -->
                                                        <div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">{$t("site.hoovercard_startdate")}</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.startDate  || ''}</span></div>
                                                        <div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">{$t("site.hoovercard_enddate")}</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.endDate  || ''}</span></div>
                                                        {#if s.params.gddThreshold}<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">{$t("site.hoovercard_tbase")}</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.gddThreshold  || ''} °{s.params.units  || ''}</span></div>{/if}
                                                        {#if s.params.maxTemperatureThreshold}<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">{$t("site.hoovercard_tmaxthreshold")}</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.maxTemperatureThreshold  || ''} °{s.params.units  || ''}</span></div>{/if}
                                                        {#if s.params.maturityGDDThreshold}<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">{$t("site.hoovercard_maturityGDDthreshold")}</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.maturityGDDThreshold  || ''}</span></div>{/if}
                                                        {#if s.params.daystoMaturityThreshold}<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">{$t("site.hoovercard_daysmaturitythreshold")}</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.daystoMaturityThreshold  || ''}</span></div>{/if}
                                                        <!-- <div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 font-thin mr-4 text-left">Units</span><span>°{s.params.units  || ''}</span></div> -->
                                                        <!-- <span class="">selectedCropPest</span><span class="absolute right-0 text-right text-[0.75rem]">{s.params.croppest  || ''}</span> -->
                                                        
                                                    </div>
                                                </HoverCard.Content>
                                            </HoverCard.Root>
                                    {/each}
                                </RadioGroup.Root>
                            </Field.Set>
                        </Field.Group>
                        </div>
                    {:else}
                        <div>Sites not found</div>
                    {/if}

                </div>
            </SettingsTabs.Content>
        </SettingsTabs.Root>
        </div>

		<div class="card span-2">
			<!-- <h2>Chart</h2> -->
			{#if loadingChart}
                <Empty.Root class="w-full border md:p-6">
                    <Empty.Header>
                        <!-- <Empty.Media variant="icon">
                            <Spinner />
                        </Empty.Media> -->
                        <Empty.Media>
                            <Wave size="40" color="#FF3E00" unit="px" duration="1s" />
                        </Empty.Media>
                        <Empty.Title>{$t("settings.calculating_processing_request_msg")}</Empty.Title>
                        <Empty.Description>
                            <p class="text-[0.85rem] font-thin text-orange-500">{$t("settings.calculating_msg")}
                                <!-- Calculating stie-specific GDD accumulation... -->
                            </p>
                        </Empty.Description>
                    </Empty.Header>
                    <Empty.Content>
                        <!-- <Button variant="outline" size="sm">Cancel</Button> -->
                        <p class="text-[0.85rem] font-thin text-gray-500 dark:text-white">{$t("settings.calculating_loading_norefresh")}</p>
                    </Empty.Content>
                </Empty.Root>


			{:else}
				<!-- <p class="card0">{message}</p> -->
				<div class="mt-0 mb-4 rounded-[5px] border border-gray-300 p-2 pt-0">
					<div class="relative m-auto min-h-75 w-full">
                    <!-- bind:this={childGDDChartRef} -->
						<GDDChart api={childApi}
							data={historicalData}
							latitude={Latitude}
							longitude={Longitude}
							Tbase={gddThreshold}
							Tcutoff={maxTemperatureThreshold}
							gddTarget={maturityGDDThreshold}
							{daystoMaturityThreshold}
							{maturityGDDThreshold}
							{units}
							{selectedCropPestLabel}
							{harvestYear}
                            {chart_GDD_labels}
                            {theme_mode}

						/>
					</div>
				</div>
				<div class="mt-0 rounded-[5px] border border-gray-300 p-2 pt-0">
					<div class="relative m-auto min-h-75 w-full">
						<WeatherChart
							data={historicalData}
							latitude={Latitude}
							longitude={Longitude}
							{units}
                            {selectedCropPestLabel}
                            {chart_temperature_labels}
						/>
					</div>
				</div>
				<p class="flex justify-end select-none">
					<span
						class="text-[0.6rem] text-gray-400 italic"
						title="Agrometeorological indicators from 1979 to present derived from reanalysis. Copernicus Climate Change Service (C3S) Climate Data Store (CDS). DOI: 10.24381/cds.6c68c9bb"
					>
                        {$t("app.chart.source")}</span>
				</p>
                <!-- Disclaimer -->
                <div class="w-full">
                    <p class="mt-2 p-2 text-justify text-[0.65rem] text-gray-300 italic"><span class="text-[0.75rem] font-bold">Disclaimer: </span>
                        <span class="text-justify">The content on this website is provided on an 'as is' basis without warranties of any kind, either express or implied.
                            The users thereof use the information at their sole risk and liability. For the avoidance of all doubt,
                            CIMMYT assumes no responsibility or liability for any errors or omissions in the content of this site. 
                            The views and opinions expressed on this website are those of the authors and do not necessarily reflect the official policy or position of CIMMYT.
                        </span>
                    </p>
                </div>
				<!-- logo -->
				<div class="relative mt-1 h-20 w-full p-1">
					<div class="absolute right-0 bottom-0 z-1 m-1 w-45 max-w-45">
						<span>
                            <svg version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 523 62.3" style="enable-background:new 0 0 523 62.3" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><style type="text/css" id="style2">.st1{fill:#487629}.st2{fill:#77bc43}</style><g id="g6"><path transform="matrix(.00431 -1 1 .00431 401.018 462.509)" id="rect4" style="fill:#231f20" d="M405.7 29.3h54.2v1.1h-54.2z"></path></g><g id="g32"><path class="st1" d="M495.2 20.1c-.5-.7-1.7-1.7-2.4-2.4-.9-1.1-1.2-1.3-1.2-3V7.6c0-1.1-1.6-.9-1.6 0 0 0-.1 12.5 0 13.6s-.4 1.8 1.3 3c1.8 1.2 4.6 2 4.6 2s0-2.8.1-3.8c0-1.1-.3-1.6-.8-2.3m-.8 3.8c-2.6-1.1-3-.9-2.8-4.9 3.1 2 3 2.7 2.8 4.9" id="path8"></path><path class="st1" d="M497.4 22.3v3.8s2.8-.8 4.6-2c1.7-1.1 1.2-1.8 1.3-2.9s0-13.6 0-13.6c0-.9-1.6-1.1-1.6 0V15c0 1.7-.3 2-1.3 2.9-.7.7-1.8 1.7-2.4 2.4-.3.5-.6 1-.6 2m4.4-3.1c.3 3.9-.1 3.8-2.8 4.9-.1-2.3-.4-3.1 2.8-4.9" id="path10"></path><path class="st1" d="M498.8 12.9c-.9-1.6 0 0-1.3-2.1V2.9c0-1.2-1.6-1.2-1.6 0v7.9s-1.3 2.2-1.7 3.2c-.4.9-.9 2 .4 3.4.1.1.3.4 2.1 2.1l1.6-1.6c2.2-2.1 1.4-3.5.5-5m-2 4.4c-3-1.6-.8-3.8 0-5.3l.1.1c2.1 3.5 1.6 4.1-.1 5.2" id="path12"></path><path class="st1" d="M495.7 29.7c-.1-1.6-.7-2.9-3.8-4.1-2.6-1.1-6.5-1.3-9.2-1.7-2.8-.4-7.2-1.2-9.6-3.4 1.7 5.7 5.9 8 10.3 9.1 4.9 1.1 9.3 1.6 12 3.4l.3.1c-.1-1.3.2-1.8 0-3.4m-1.3.8c-2.4-.9-3.9-1.2-8.2-2-4.2-.9-6.7-1.7-9.1-4.1 3.7 1.4 9.6 2 12.8 2.6 3.3.7 4.1 1.7 4.5 3.5z" id="path14"></path><path class="st1" d="m497.4 33.1.3-.1c2.6-1.8 7.1-2.2 12.1-3.3 4.3-.9 8.7-3.3 10.4-9-2.2 2.1-6.8 2.9-9.6 3.3-2.8.4-6.6.7-9.2 1.6-3.2 1.2-3.8 2.5-3.8 4.1-.2 1.6 0 2.1-.2 3.4m1.5-2.6c.4-2 1.2-2.8 4.5-3.4 3.2-.7 9.1-1.2 12.8-2.5-2.2 2.4-4.9 3.2-9.1 3.9-4.3 1-5.8 1.1-8.2 2z" id="path16"></path><path class="st1" d="M495.6 37c0-3-1.7-3.9-4.3-4.6-2.6-.7-6.2-1.2-9.3-2.1-3-.9-4.7-1.4-6.8-3.8.4 4.5 3.6 7.6 7.4 9 3.8 1.3 3.6 1.1 5.7 1.6s2.4 1.3 2.4 2.5v2.6h5.1c-.1-5.9-.3-2.1-.2-5.2m-1.6 3.5h-2.1s0-.9-.1-2.4c-.1-2-2.5-2.1-6.2-3.2-2.6-.8-5.9-1.7-7.4-4.2.9.4 2.8 1.2 5.8 1.8 2.9.7 4.5.9 7.1 1.4 2.5.5 3 2.1 2.9 3.7v2.9z" id="path18"></path><path class="st1" d="M497.6 42.2h5.1v-2.6c0-1.3.4-2 2.5-2.5s1.8-.3 5.7-1.6c3.8-1.3 7-4.5 7.4-8.8-2.1 2.2-3.8 2.9-7 3.7-3 .9-6.7 1.3-9.3 2.1-2.6.7-4.3 1.6-4.3 4.6-.1 3-.3-.8-.1 5.1m1.4-4.5c0-1.7.5-3.2 3-3.7 2.6-.5 4.2-.9 7.1-1.4 3-.7 4.9-1.3 5.8-1.7-1.4 2.6-4.9 3.4-7.5 4.2-3.8 1.1-6.1 1.2-6.2 3.2-.1 1.4-.1 2.4-.1 2.4H499v-3z" id="path20"></path><path class="st1" d="M485.1 56.4c-.7.1-1.3.3-2.1.3-2.9 0-4.9-1.4-4.9-4.5 0-3 1.8-4.7 5-4.7.5 0 1.3.1 2.1.4l-.1 1.6c-.7-.4-1.3-.5-2-.5-1.8 0-3 1.4-3 3.3 0 1.8 1.2 3.2 3 3.2.7 0 1.6-.1 2-.4v1.3z" id="path22"></path><path class="st1" d="M493.5 49.3c-.7-.3-1.6-.5-2.4-.5-2.1 0-3.3 1.4-3.3 3.3 0 1.8 1.2 3.2 3 3.2.5 0 .9 0 1.2-.1v-2.4h-2v-1.4h3.7v4.9c-.9.3-2 .4-2.9.4-2.9 0-4.9-1.4-4.9-4.5s1.8-4.7 5-4.7c1.1 0 1.8.1 2.6.4v1.4z" id="path24"></path><path transform="matrix(.00482 -1 1 .00482 442.115 548.322)" class="st1" id="rect26" d="M492 51.1h9v1.8h-9z"></path><path class="st1" d="M504.2 53.1h-2.6l1.3-3.7 1.3 3.7zm-5.8 3.5h1.8l.8-2.1h3.7l.8 2.1h2l-3.6-9h-2l-3.5 9z" id="path28"></path><path class="st1" d="M510.3 49.1h.5c.9 0 2 .1 1.8 1.2 0 1.2-1.1 1.3-2 1.2h-.5l.2-2.4zm-1.8 7.6h1.8V53h.5c.8 0 1.1.3 1.3.9l1.1 2.8h2l-1.4-3.6c-.1-.4-.4-.9-.9-.9 1.2-.1 1.8-1.1 1.8-2.1 0-2.5-2.2-2.5-4.2-2.5h-2v9.1z" id="path30"></path></g><g id="g380"><g id="g366"><g id="g364"><path class="st2" d="M85.7 54.1c-4.1 2.4-8.8 3.2-13.6 3.2-6.1 0-12.2-1.3-16.7-5.4-4.6-3.9-6.6-9.6-6.6-15.5 0-13 10.9-19.6 23.6-19.6 4.9 0 8.7.7 13.4 2.1.5.1 1.1.3.9 1.2-.4 1.8-.8 6.2-.9 8.8h-2.2c0-1.7-.1-3.3-.4-4.9-2.8-3-6.6-4-10.6-4-4.3 0-8.6 1.6-11.5 4.7-2.6 2.9-3.4 7.1-3.4 10.9 0 4.7 1.2 9.3 4.6 12.9 3.6 3.7 7.5 5 12.6 5 3.4 0 8.3-1.2 11.2-2.9l.7.7-1.1 2.8" id="path34"></path><path class="st2" d="M100.8 24.3c0-4.1-.3-4.6-5-4.5v-2.4c3.9.1 6.8.3 9.2.3 2.4 0 5.3-.1 9.1-.3v2.4c-4.7-.1-5 .3-5 4.3v25.5c0 4.1.3 4.6 5 4.3v2.6c-3.9-.1-6.8-.3-9.1-.3-2.2 0-5.3.1-9.2.3v-2.4c4.7.1 5-.4 5-4.5V24.3" id="path36"></path><path class="st2" d="m165 25.2-6.3 12.4-8.7 18-.7 1.3h-2c-.1-.5-1.3-3.2-2.1-4.7l-13.6-27.1v24.6c0 4.1.3 4.6 5 4.3v2.6c-2.8-.1-5-.3-6.6-.3s-3.9.1-6.8.3v-2.5c4.7.1 5-.3 5-4.3V24.3c0-4.1-.3-4.6-5-4.3v-2.5c3.4.1 5.7.3 7.4.3s3.8-.1 6.7-.3c1.1 2.5 3 6.8 4.3 9.3l9.3 18.8c.9-1.6 1.7-3.3 2.6-5 4.3-9 9.5-19.5 11.1-23 2.9.1 5 .3 6.7.3s3.9-.1 6.8-.3v2.5c-4.7-.1-5 .3-5 4.3V50c0 4.1.3 4.6 5 4.3v2.4c-3.9-.1-6.8-.3-9.1-.3-2.2 0-5.3.1-9.2.3v-2.4c4.7.1 4.9-.4 5-4.5l.2-24.6" id="path38"></path><path class="st2" d="m228.8 25.2-6.3 12.4-8.7 18-.7 1.3h-2c-.1-.5-1.3-3.2-2.1-4.7l-13.6-27.1v24.6c0 4.1.3 4.6 5 4.3v2.6c-2.8-.1-5-.3-6.6-.3-1.7 0-3.9.1-6.8.3v-2.5c4.7.1 5-.3 5-4.3V24.3c0-4.1-.3-4.6-5-4.3v-2.5c3.4.1 5.7.3 7.4.3s3.9-.1 6.7-.3c1.1 2.5 3 6.8 4.3 9.3l9.3 18.8c.9-1.6 1.7-3.3 2.6-5 4.3-9 9.5-19.5 11.1-23 2.9.1 5 .3 6.7.3s3.9-.1 6.8-.3v2.5c-4.7-.1-5 .3-5 4.3V50c0 4.1.3 4.6 5 4.3v2.4c-3.9-.1-6.8-.3-9.1-.3-2.2 0-5.3.1-9.2.3v-2.4c4.7.1 4.9-.4 5-4.5l.2-24.6" id="path40"></path><path class="st2" d="M272.1 36.2c4.6-7.4 8.8-13.7 11.1-18.3h4.5V19l-2.4 3.3-6.2 9.2-2.6 4.1-1.8 3.7c-.4.8-.4 1.7-.4 2.6v8c0 4.1.3 4.6 5 4.3v2.5c-3.9-.1-6.8-.3-9.1-.3-2.2 0-5.3.1-9.2.3v-2.4c4.7.1 5-.4 5-4.5v-7.1c0-1.2-.3-2.4-.5-3-.7-1.3-1.3-2.5-2.1-3.7l-5.9-9.3c-.9-1.2-2.1-2.8-3-3.8-1.3-1.4-3-1.8-4.6-1.8V19l9.3-2c3.3 1.7 5 4.7 6.7 7.8l6.2 11.4" id="path42"></path><path class="st2" d="M317 49.9c0 4.1.3 4.6 5 4.3v2.5c-3.9-.1-6.8-.3-9.1-.3s-5.3.1-9.2.3v-2.4c4.7.1 5-.4 5-4.5V21.3H300c-1.4.1-2 .5-2.6 1.8-.1.9-.1 2.4-.3 3.8h-2.4c.1-2.8-.3-6.5-.1-9.5 7.9.1 13.8.3 18.4.3s10.5-.1 18.6-.3c-.1 2.5-.5 6.1-.8 9.5h-2.2c0-.8 0-1.6-.1-2.4-.4-2.9.1-3.2-3-3.3h-8.3l-.2 28.7" id="path44"></path><g id="g354"><g id="g48"><path class="st2" d="M29.7 22.6c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1 1.1-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4s-.4-.4-.4-.8c-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path46"></path></g><g id="g52"><path class="st2" d="M23.9 17.3c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.1 0-.1 0-.3-.1-.4-.5 0-.4-.1-.9-.1-1.3v-1.2c0-.3 0-.4.1-.5 0 0 0-.1.1 0 .2.2.3.2.3.3" id="path50"></path></g><g id="g56"><path class="st2" d="M23.9 13.3v.4c0 .4 0 .9.1 1.4.1.8.3 1.2.1 1.6 0 .1-.1.1-.1.3-.1.1-.3.1-.4 0s-.3-.5-.3-.9l-.1-.7c-.1-.7 0-1.2 0-1.6 0-.3 0-.5.1-.7 0 0 .1-.1.1 0 .5-.2.5-.1.5.2" id="path54"></path></g><g id="g60"><path class="st2" d="M23.9 21c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.3.2.3.2.4.3" id="path58"></path></g><g id="g64"><path class="st2" d="M29.7 19.1c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.5.1.9-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4s-.4-.4-.4-.8c-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path62"></path></g><g id="g68"><path class="st2" d="M29.7 29.7c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1 1.1-.3 1.4-.3.5-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4-.3-.1-.4-.4-.4-.9-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1h.5v.1z" id="path66"></path></g><g id="g72"><path class="st2" d="M29.7 26.2c.3.1.8.4 1.1.7.1.1.3.4.3.7.1.5.1 1.1-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4 0-.5-.3-.8-.4s-.4-.4-.4-.9c-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.2z" id="path70"></path></g><g id="g76"><path class="st2" d="M29.7 36.8c.3.1.8.4 1.1.7.1.1.3.4.3.7.1.7.1.9-.3 1.4-.3.4-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4 0-.5-.3-.8-.4-.3-.1-.4-.4-.4-.8-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1h.5z" id="path74"></path></g><g id="g80"><path class="st2" d="M29.7 33.3c.3.1.8.4 1.1.7.1.1.3.4.3.7.1.5.1.9-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4-.3-.1-.4-.4-.4-.9-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.2z" id="path78"></path></g><g id="g84"><path class="st2" d="M29.7 44.1c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.5.1 1.1-.3 1.4-.3.4-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4-.1-.7-.3-.8-.4-.3-.1-.4-.4-.4-.9-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path82"></path></g><g id="g88"><path class="st2" d="M29.7 40.5c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.5.1.9-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4 0-.5-.3-.8-.4-.3-.1-.4-.4-.4-.8-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path86"></path></g><g id="g92"><path class="st2" d="M29.7 51.2c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1 1.1-.3 1.4-.3.4-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4 0-.5-.3-.8-.4-.3-.1-.4-.4-.4-.9-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path90"></path></g><g id="g96"><path class="st2" d="M29.7 47.6c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1.9-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4-.3-.1-.4-.4-.4-.8-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path94"></path></g><g id="g100"><path class="st2" d="M29.7 54.7c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1 1.1-.3 1.4-.3.5-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4-.3-.1-.4-.4-.4-.8-.1-.5 0-.8 0-1.2s.1-.5.4-.7c.3-.1.5-.3.9-.1.1 0 .4 0 .5.1h.5v.1z" id="path98"></path></g><g id="g104"><path class="st2" d="M27.1 23.1c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3s.4-.7.7-.7.7.1.9.3c.3.3.5.4.7.7.3.4.7 1.1.7 1.7.1.1 0 .2 0 .3" id="path102"></path></g><g id="g108"><path class="st2" d="M27.1 26.8c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3s.4-.7.7-.7.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1-.1 0 .2 0 .3" id="path106"></path></g><g id="g112"><path class="st2" d="M27.1 30.5c-.1.3-.3.5-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3s.4-.7.7-.7.7 0 .9.3.5.4.7.7c.1.1.3.5.5.8.1.3.1.7.1.9.2-.1.1 0 .1.3" id="path110"></path></g><g id="g116"><path class="st2" d="M27.1 34.1c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1 0 0 .1 0 .3" id="path114"></path></g><g id="g120"><path class="st2" d="M27.1 37.7c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1-.1 0 .1 0 .3" id="path118"></path></g><g id="g124"><path class="st2" d="M27.1 41.3c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.1-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1 0 0 .2 0 .3" id="path122"></path></g><g id="g128"><path class="st2" d="M27.1 45c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.1-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1-.1 0 .2 0 .3" id="path126"></path></g><g id="g132"><path class="st2" d="M27.1 48.5c-.1.3-.3.5-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.4.1-.4.4-.7.7-.7s.7 0 .9.3c.3.3.5.4.7.7.1.1.3.5.5.8.1.3.1.7.1.9.2.2.1.3.1.4" id="path130"></path></g><g id="g136"><path class="st2" d="M27.1 52.2c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7.1.9.3c.3.3.5.4.7.7.1.1.3.5.5.8.1.3.1.7.1.9.2.1.1.2.1.3" id="path134"></path></g><g id="g140"><path class="st2" d="M27.1 55.6c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.8 0 .9.3l.7.7c.1.1.3.5.5.8.1.3.3.7.1.9.1.1.1.2.1.3" id="path138"></path></g><g id="g144"><path class="st2" d="M23.9 24.6c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5h-.3c-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.3.1.3.1.4.3" id="path142"></path></g><g id="g148"><path class="st2" d="M23.8 28.3c0 .4.1.8.1 1.3.1.7.3 1.2.3 1.4 0 .3 0 .4-.3.5h-.3c-.1 0-.3-.1-.3-.5s-.1-.9-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.4 0 .4.1.4.3" id="path146"></path></g><g id="g152"><path class="st2" d="M23.8 31.8c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.9-.1-1.3V32c0-.3 0-.4.1-.5 0 0 0-.1.1 0 .4.1.4.2.4.3" id="path150"></path></g><g id="g156"><path class="st2" d="M23.9 35.4c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.3.1.3.1.4.3" id="path154"></path></g><g id="g160"><path class="st2" d="M23.8 39.1c0 .4.1.8.1 1.2.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.9-.1-1.3v-1.2c0-.3 0-.4.1-.5 0 0 0-.1.1 0 .4.1.4.2.4.4" id="path158"></path></g><g id="g164"><path class="st2" d="M23.9 42.6c0 .4.1.8.1 1.2.1.7.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.1 0-.1 0-.3-.1-.4-.5 0-.4-.1-.9-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.2.3.3.3.3.4" id="path162"></path></g><g id="g168"><path class="st2" d="M23.9 46.3c0 .4.1.8.1 1.2.1.8.3 1.2.3 1.4s0 .4-.3.5c-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1l.4.4" id="path166"></path></g><g id="g172"><path class="st2" d="M23.9 50c0 .4.1.8.1 1.3.1.7.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.3.2.3.2.4.3" id="path170"></path></g><g id="g176"><path class="st2" d="M27.1 19.7c-.1.3-.3.4-.5.5-.3.1-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3s.4-.7.7-.7.7.1.9.3c.3.3.5.4.7.7.1.1.3.5.5.8.1.3.1.7.1.9.2-.1.1 0 .1.3" id="path174"></path></g><g id="g180"><path class="st2" d="M33.1 22.3c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.9-.3.1-.5.4-.8.4-.4.1-.7.1-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.3.5-.3l.3-.1z" id="path178"></path></g><g id="g184"><path class="st2" d="M38.8 16.9c.3-.1.4.1.4.7v1.2c0 .4-.1.9-.1 1.3s-.3.5-.4.7c-.1 0-.5-.1-.5-.4-.1-.3 0-.5 0-.8.1-.3.1-.7.1-1.1s.1-.9.1-1.2c.1-.2.1-.4.4-.4" id="path182"></path></g><g id="g188"><path class="st2" d="M38.8 13c.1 0 .1 0 0 0 .2.1.2.4.4.7 0 .4.1.9 0 1.6l-.1.7c0 .4-.1.8-.3.9-.1.1-.3.1-.4 0-.1-.1-.3-.4-.3-.5 0-.3 0-.7.1-1.2s.1-1.2.1-1.4v-.4c.2-.3.2-.4.5-.4" id="path186"></path></g><g id="g192"><path class="st2" d="M38.8 20.8c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.3-.1-.2.1-.3.2-.3" id="path190"></path></g><g id="g196"><path class="st2" d="M33.1 18.8c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.3.5-.3l.3.1z" id="path194"></path></g><g id="g200"><path class="st2" d="M33.1 29.6c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4-.4.1-.7.1-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.5.4-.9.8-1.2.1-.1.4-.1.5-.3l.3.1z" id="path198"></path></g><g id="g204"><path class="st2" d="M33.1 26c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.9-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3-.1z" id="path202"></path></g><g id="g208"><path class="st2" d="M33.1 36.7c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.9-.3.1-.5.4-.8.4-.3.1-.7.1-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3h.3z" id="path206"></path></g><g id="g212"><path class="st2" d="M33.1 33.1c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3.1z" id="path210"></path></g><g id="g216"><path class="st2" d="M33.1 43.8c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.5-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3.2z" id="path214"></path></g><g id="g220"><path class="st2" d="M33.1 40.2c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.9-.3.1-.5.4-.8.4-.4.1-.7.3-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3-.1z" id="path218"></path></g><g id="g224"><path class="st2" d="M33.1 51c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3h.3z" id="path222"></path></g><g id="g228"><path class="st2" d="M33.1 47.5c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4-.4.1-.7.1-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.5.4-.9.8-1.2.1-.1.4-.3.5-.3h.3z" id="path226"></path></g><g id="g232"><path class="st2" d="M33.1 54.6c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4-.4.1-.7.1-1.1.3-.4 0-.8 0-1.1-.5-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3.2z" id="path230"></path></g><g id="g236"><path class="st2" d="M35.2 22.7c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.3.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.2-.2-.3-.2-.5" id="path234"></path></g><g id="g240"><path class="st2" d="M35.2 26.3c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.2-.2-.4-.2-.5" id="path238"></path></g><g id="g244"><path class="st2" d="M35.2 30c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.3-.2-.4-.2-.5" id="path242"></path></g><g id="g248"><path class="st2" d="M35.2 33.5c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.2-.2-.3-.2-.5" id="path246"></path></g><g id="g252"><path class="st2" d="M35.2 37.2c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.2-.2-.4-.2-.5" id="path250"></path></g><g id="g256"><path class="st2" d="M35.2 40.8c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.1-.2-.4-.2-.5" id="path254"></path></g><g id="g260"><path class="st2" d="M35.2 44.5c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.3-.2-.4-.2-.5" id="path258"></path></g><g id="g264"><path class="st2" d="M35.2 48c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.1-.2-.2-.2-.5" id="path262"></path></g><g id="g268"><path class="st2" d="M35.2 51.7c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.4.1-.5.1-.8.1s-.5-.3-.5-.5c-.2-.2-.2-.4-.2-.5" id="path266"></path></g><g id="g272"><path class="st2" d="M35.2 55.1c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.1-.2-.3-.2-.5" id="path270"></path></g><g id="g276"><path class="st2" d="M38.7 24.3c.1 0 .1 0 0 0 .1.1.2.3.2.5V26c0 .4-.1.9-.1 1.3s-.1.5-.4.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.3-1.1.3-1.4 0-.4.1-.9.1-1.2.1-.3.3-.4.3-.4" id="path274"></path></g><g id="g280"><path class="st2" d="M38.7 28c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.3c-.1-.1-.2-.3-.2-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.2.1-.3.1-.3.3-.4" id="path278"></path></g><g id="g284"><path class="st2" d="M38.8 31.6c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.5-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.3-.1-.2.1-.3.2-.3" id="path282"></path></g><g id="g288"><path class="st2" d="M38.8 35.2c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.3-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.2-.1-.4.1-.4.2-.4" id="path286"></path></g><g id="g292"><path class="st2" d="M38.8 38.7c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.5-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.3-.1-.2.1-.2.2-.3" id="path290"></path></g><g id="g296"><path class="st2" d="M38.8 42.5c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.2-.1-.4.1-.4.2-.4" id="path294"></path></g><g id="g300"><path class="st2" d="M38.8 46c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.3-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.3-.1-.1.1-.3.2-.3" id="path298"></path></g><g id="g304"><path class="st2" d="M38.8 49.6c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.2-.1-.3.1-.3.2-.4" id="path302"></path></g><g id="g308"><path class="st2" d="M35.2 19.2c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.3.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.3-.2-.4-.2-.5" id="path306"></path></g><g id="g312"><path class="st2" d="M27.5 10.9c0 .3-.3.5-.4.7-.5.5-1.6 1.1-2.8 1.3-.3 0-.7-.3-.8-.5-.4-.8-.4-2-.1-2.6.1-.5.5-.9.9-.9 1.2.3 2.4.9 2.8 1.3s.4.6.4.7" id="path310"></path></g><g id="g316"><path class="st2" d="M32.3 14.4c.3 0 .5 0 .8.3.7.4 1.6 1.2 2.1 2.2.1.3-.1.7-.3.9-.7.7-1.7 1.1-2.5.9-.5 0-1.1-.3-1.1-.7-.1-1.2.3-2.5.4-3l.6-.6" id="path314"></path></g><g id="g320"><path class="st2" d="M30.1 14.4c.3.1.4.4.5.7.3.7.5 1.8.4 3 0 .3-.5.5-.8.5-.9.1-2-.3-2.5-.7-.4-.3-.7-.8-.5-1.2.7-1.1 1.6-2 2.1-2.2.4-.1.5-.1.8-.1" id="path318"></path></g><g id="g324"><path class="st2" d="M28.4 13c.1.1.1.5 0 .8-.3.8-.7 1.8-1.4 2.8-.3.3-.7.1-.9 0-.8-.4-1.4-1.3-1.6-2.1-.1-.5-.1-1.1.3-1.2 1.1-.5 2.5-.7 3-.5.3.1.5.1.6.2" id="path322"></path></g><g id="g328"><path class="st2" d="M34.8 11c0-.3.3-.5.4-.7.7-.5 1.6-1 2.8-1.3.3 0 .7.3.8.5.4.8.4 2 .1 2.6-.1.5-.5.9-.9.8-1.2-.3-2.4-1.1-2.8-1.4-.2-.2-.4-.3-.4-.5" id="path326"></path></g><g id="g332"><path class="st2" d="M32.3 7.6c-.3-.1-.4-.4-.5-.7-.3-.7-.5-2-.4-3 0-.3.5-.5.8-.5.9-.1 2 .3 2.5.7.4.3.7.8.5 1.2-.7 1.1-1.7 2-2.1 2.2-.4.1-.5.1-.8.1" id="path330"></path></g><g id="g336"><path class="st2" d="M30.1 7.6c-.3.1-.5 0-.8-.1-.7-.4-1.6-1.2-2.1-2.2-.1-.3.1-.7.3-.9.7-.7 1.7-1.1 2.4-.9.5 0 1.1.3 1.1.7.1 1.2-.1 2.5-.4 3-.2.1-.2.3-.5.4" id="path334"></path></g><g id="g340"><path class="st2" d="M34.2 8.8c-.1-.1-.1-.5 0-.8.3-.8.7-1.8 1.4-2.6.1-.1.7-.1.9 0 .8.4 1.4 1.3 1.6 2.1.1.5.1 1.1-.3 1.2-1.1.5-2.5.5-3 .5-.3-.2-.5-.2-.6-.4" id="path338"></path></g><g id="g344"><path class="st2" d="M34.2 13.1c.1-.1.5-.3.8-.3.8 0 2 .1 3 .5.3.1.3.7.3.9-.1.9-.8 1.8-1.4 2.2-.4.3-1.1.4-1.2.1-.8-.9-1.3-2.2-1.4-2.8-.2-.3-.2-.4-.1-.6" id="path342"></path></g><g id="g348"><path class="st2" d="M28.3 8.8c-.2.1-.6.2-.8.2-.8 0-2 0-3-.5-.3-.1-.4-.7-.3-.9.1-.9.8-1.8 1.4-2.2.4-.3 1.1-.4 1.2-.2.8.9 1.3 2.2 1.4 2.8.2.5.2.7.1.8" id="path346"></path></g><g id="g352"><path class="st2" d="M31.3 14.4c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4-3.4 1.6-3.4 3.4 1.4 3.4 3.4 3.4" id="path350"></path></g></g><g id="g362"><g id="g360"><g id="g358"><path class="st2" d="M15.2 27.9V3.3h1.2v25s.1 5.5.1 7.1-.3 3-.3 3-.3 2.1-1.6 3.3c0 0-.8 1.1-1.7 1.7-.9.8-1.1 1.3-1.2 1.7-.1.5-.3 1.7-.3 1.7s5.5-6.2 5.8-9.1V3.1h1.2V38.7s-.1 4.9-2 9.1L15 50.6c-1.1 1.6-3.3 3.6-3.4 5 0 .8-.1 1.7-.1 1.7h-1.4l-.1-3.6s0-1.2-.3-2c-.3-1.1-.5-1.6-.9-2.1S8 48.5 7.6 48C2.5 41.2 3 36.2 3 35.8V2.9h1V33.3s-.1 2.4 1.6 4.2c1.2 1.3 1.3 1.2 2.2 2.4.9 1.1 1.6 2.5 1.6 2.5s.1 0 0-1.3c0-1.3-1.3-2.4-1.3-2.4C4.8 35.8 5 31.8 5 31.8L4.8 2.7h.9v20.1s0 .9.4 2c.3 1.1.8 2.1 1.4 3.9 1.3 3 2.2 4.9 2.2 4.9s-.1-2.5-.5-3c-.4-.7-.9-2.1-.9-2.1-.8-2-1.1-3-1.2-3.6-.4-1.7-.4-2.6-.4-2.6V3h1.1v12.5c0 2.4.5 3.2.9 4.1s.8 2.5.8 2.5.3-.9-.4-3.8c-.1-.8-.4-3.6-.4-3.6V3.1h.9v7.6s.3 3.3.7 2.4.4-1.8.4-1.8V3.1h1.1v17.5s-.1 2.2-.5 3.6c-.5 1.6-.3 2.6-.3 2.6l1.1-2.2c.8-1.7.8-3 .8-3V3.3H14v24.2c0 1.3-.3 2-1.3 5-.7 2-1.1 2.4-1.2 3.2-.3 1.1-.1 2.1-.1 2.1l1.6-3.2c.8-1.8 1.1-2.6 1.6-4.1.1-.1.6-1.2.6-2.6z" id="path356"></path></g></g></g></g></g><g id="g378"><g id="g370"><path class="st2" d="M369.9 38.4c-1.4-.1-3.6-.4-5.5-.7-1.3-.3-2.4-.9-3.4-2-1.8-1.8-2.2-4.5-2-7h1.7c.5 5.9 4.3 7 6.3 6.8.3-3.9.5-6.5.7-11.1.1-2.4-1.4-2.4-3.4-2.6-1.8-.3-7.9-.5-9.6-.7-.1 1.2-.4 10.5-.5 13.8 0 1.3-.1 2.6.5 3.4s1.7.8 2.8.8c1.6.1 12.6.8 13.3.8l-.9-1.5z" id="path368"></path></g><g id="g374"><path d="M371.9 30.8c.8-1.2 2.1-2.9 3.3-4.3.8-1.1 2-1.6 3.4-2 2.5-.7 5 .4 7.1 1.7-.3.5-.4.7-.9 1.4-5.4-2.5-8.3.3-9.1 2.1 3.3 2.1 5.3 3.7 9.2 6.1 2 1.3 2.8 0 3.9-1.7 1.1-1.4 4.5-6.6 5.4-7.9-1.1-.7-9-5.7-11.6-7.4-1.1-.7-2.2-1.4-3.2-1.2-1.1.3-1.6 1.2-2.1 2-.9 1.3-7 10.5-7.4 11.1l2 .1z" id="path372" style="fill:#8ec1cb"></path></g><path d="M384.5 46.6c-.7-1.4-5.7-11.3-5.9-11.8l-1.1 1.6c.7 1.3 1.4 3.3 2.2 5 .5 1.2.5 2.5.1 3.9-.7 2.5-2.8 4.2-5 5.3-.3-.5-.4-.7-.9-1.6 4.9-3.4 3.8-7.2 2.6-9-3.4 1.7-5.8 2.8-9.9 5.1-2.1 1.1-1.3 2.4-.5 4.3.8 1.7 3.6 7.1 4.2 8.6 1.1-.5 9.3-5 12.1-6.5 1.1-.7 2.4-1.2 2.6-2.2.6-.9 0-1.8-.5-2.7z" id="path376" style="fill:#fdbe50"></path></g></g></svg>
                        </span>
					</div>
				</div>
                
			{/if}
		</div>
		<!-- <div class="card span-3">
            <h2>History</h2>
            <FigureTest />
        </div> -->
	</div>

	<div class="mt-0.5 p-2">
		<p class="text-left text-[0.65rem] text-gray-400">{$t("app.copyright")}
			<!-- © CIMMYT GIS Unit, 2026. Credits: Tool developed by Ernesto Giron & Kai Sonder. -->
		</p>
	</div>
</main>

<style>
	main {
		text-align: left;
		padding: 2em;
		font-family: sans-serif;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0.8rem;
	}

	.dashboard-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
	}

	.card {
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border: 1px solid #ccc;
	}

    .cardSettings {
		padding: 0.5rem;
        margin:0;
		border: 1px solid #ccc;
	}

	.span-2 {
		grid-column: span 2;
	}
	.span-3 {
		grid-column: span 3;
	}

    .setting-group {
		margin: 0.5rem 0;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.8rem;
		/* color: #34495e; */
	}

	.buttonApply {
		margin-top: 1.2rem;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: opacity 0.2s;
		background: #2ecc71;
		color: white;
		min-width: 100px;
	}
	.buttonApply:hover {
		opacity: 0.9;
	}
	.buttonReset {
		margin-top: 1.2rem;
		padding: 0.5rem 1rem;
		border: 1px solid var(--color-primary);
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: opacity 0.2s;
		color: var(--color-primary);
		min-width: 100px;
	}
	.buttonReset:hover {
		opacity: 0.9;
	}

	/* .status-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .status-indicator {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 1rem 0;
    }

    .status-indicator.normal { background-color: #2ecc71; }
    .status-indicator.warning { background-color: #f1c40f; }
    .status-indicator.critical { background-color: #e74c3c; }

    .status-text {
        text-transform: uppercase;
        font-weight: bold;
    }

    .timestamp {
        color: #666;
        font-size: 0.9rem;
    } */

	@media (max-width: 768px) {
		.dashboard-grid {
			grid-template-columns: 1fr;
			max-width: 350px;
		}

		.span-2,
		.span-3 {
			grid-column: auto;
			max-width: 350px;
		}
	}
</style>
