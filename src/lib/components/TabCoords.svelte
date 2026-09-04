<script lang="ts">
    
    import { t } from '$lib/assets/i18n.js';
    import { onMount } from 'svelte';
    import { Input } from "$lib/components/ui/input/index.js";
	import * as NativeSelect from "$lib/components/ui/native-select/index.js";
    
    // Import CIMMYT Nursery locations
    import cimmytData from '$lib/assets/cimmyt_data.json';

    // In this locale "," is the decimal separator and "." is the group separator
	// const locale = 'es-CO'
	// const numDecimals = 5;
	// const formatter = new Intl.NumberFormat(locale, {maximumFractionDigits: numDecimals});

	// import { getContext } from 'svelte';
    // let Latitude = $state(10);
    // let Longitude = $state(10);
    // let { Latitude, Longitude } = $props();

    const props = $props<{
        Latitude?: number;
        Longitude?: number;
        onLatitudeChange?: (value: number) => void;
        onLongitudeChange?: (value: number) => void;
        onNurserySiteChange?: (value: string) => void;
        showCoordsList?:boolean;
        selectedCrop?:string;
        selectedNurserySite?:string;
    }>();

    // const localLatitude = getContext('localLatitude');
    // const localLongitude = getContext('localLongitude');
    // parseNumber('es-CO',props.Latitude)
    let localLatitude = $derived(props.Latitude ?? 3.5); //Math.round(props.Latitude)
    let localLongitude = $derived(props.Longitude ?? -76.5);
    let localshowCoordsList = $derived(props.showCoordsList ?? false);
    // let localselectedCrop = $derived(props.selectedCrop ?? '');
    let localNurserySite = $derived(props.selectedNurserySite ?? '');

    function updateSettings() {
        // Send values back to parent
        props.onLatitudeChange?.(localLatitude);
        props.onLongitudeChange?.(localLongitude);
        props.onNurserySiteChange?.(localNurserySite);
    }

    
    function process_CIMMYT_sites(){
        // Get a list of coords 
        if (cimmytData && cimmytData.length>0){
            // console.log(cimmytData.flat());
            // Ascending order (lowest to highest)
            // cimmytData.sort((a, b) => a.Loc_no - b.Loc_no);
            // Ascending alphabetical order (A to Z)
            cimmytData.sort((a, b) => a.Loc_desc.localeCompare(b.Loc_desc));
            // cimmytData.reverse();
            // localshowCoordsList = true
        }
        // cimmytData.filter()
        
    }
    let selectedSite = $state('');
    function handleNurserySiteChange(event:any) {
		// console.log(`Site changed to: ${event.target.value}`);
        const result = cimmytData.find(item => item.Loc_no === parseInt(event.target.value)); //for better performance.
        // console.log('Crop changed to:',result);
        localLatitude = result?.Lat;
        localLongitude = result?.Long;
        localNurserySite = result?.Loc_no;
        updateSettings();
    }

    onMount(() => {
        // Load list of coordinates
        process_CIMMYT_sites();
    return () => {
        //   if (eventSource) eventSource.close();
        };
    });

    
	
    
</script>

<div class="setting-group">
    <p class="text-[0.8rem] ">
        {$t("settings.geographic_coordinates")} (<span class="text-[0.65rem] text-gray-400 italic">{$t("settings.geographic_coordinates_units")}</span>)
    </p>
    <div class="border border-gray-300 p-2 rounded-[5px]">
        <div class="flex gap-x-4 justify-content">
            <label>
                {$t("settings.latitude")}<!-- Latitude -->
                <!-- <input type="number" bind:value={localLatitude} min="-90" max="90" step="0.005" onchange={updateSettings}
                class="coords [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                > -->
                <Input type="number" placeholder="Latitude" 
                    bind:value={localLatitude} min="-90" max="90" step="0.005" onchange={updateSettings}
                    class="max-w-xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
            </label>
            <label>
                {$t("settings.longitude")}<!-- Longitude -->
                <!-- <input type="number" bind:value={localLongitude} min="-180" max="180" step="0.005" onchange={updateSettings}
                class="coords [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                > -->
                <Input type="number"  placeholder="Longitude" 
                    bind:value={localLongitude} min="-180" max="180" step="0.005" onchange={updateSettings}
                    class="max-w-xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
            </label>
        </div>

        {#if localshowCoordsList}
            <div>
                <label for="coordslst">{$t("settings.cimmyt_nursery_sites")}</label>
                <!-- <select id="nurserysites" bind:value={localNurserySite} onchange={handleNurserySiteChange} class="nurserysites">
                    {#each cimmytData as site}
                        <option value={site.Loc_no}>{site.Loc_desc}</option>
                    {/each}
                </select> -->
                <NativeSelect.Root aria-label="Choose a nursery site" id="nurserysites" bind:value={localNurserySite} onchange={handleNurserySiteChange}>
                    {#each cimmytData as site (site.Loc_no)} 
                        <NativeSelect.Option value={site.Loc_no}>{site.Loc_desc}</NativeSelect.Option>
                    {/each}
                </NativeSelect.Root>
            </div>
        <!-- {:else}
            <p class="text-[0.75rem] text-red-500">Estimating the coordinates at your current location...</p> -->
        {/if}
        
    </div>
</div>

<style>
    label {
        /* display: flex; */
        flex-direction: column;
        /* gap: 0.5rem; */
        font-size: 0.8rem;
        /* color: #34495e; */
    }
/*     
    input {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
    }

    input:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }

    input.coords {
        width: 140px;
        border-radius: 4px;
        height:30px;
    }
    select.nurserysites {
        padding: 0.5rem;
        border-radius: 4px;
        height:35px;
        width: 100%;
    } */
</style>
