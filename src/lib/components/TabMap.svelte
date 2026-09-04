<script lang="ts">
    import * as maplibregl from 'maplibre-gl';
    import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
    maplibregl.setWorkerUrl(maplibreWorkerUrl);

    import { MapLibre } from 'svelte-maplibre';
    import MapEvents from 'svelte-maplibre/MapEvents.svelte';
    import DefaultMarker from 'svelte-maplibre/DefaultMarker.svelte';
    // Controls
    // import Control from 'svelte-maplibre/Control.svelte';
    import NavigationControl from 'svelte-maplibre/NavigationControl.svelte';
    import GeolocateControl from 'svelte-maplibre/GeolocateControl.svelte';
    import AttributionControl from 'svelte-maplibre/AttributionControl.svelte';
    import ScaleControl from 'svelte-maplibre/ScaleControl.svelte';
    // import FullscreenControl from 'svelte-maplibre/FullscreenControl.svelte';
    import type { LngLat, MapMouseEvent } from 'maplibre-gl';

    // import Popup from 'svelte-maplibre/Popup.svelte';

    // let { Latitude, Longitude } = $props();
    // let markers: { lngLat: LngLat }[] = $state([]);

    function addMarker(e: MapMouseEvent) {
        // console.log(e.lngLat);
        // markers = [...markers, { lngLat: e.lngLat }];
        // localLatitude = e.lngLat.lat;
        // localLongitude = e.lngLat.lng;
        // updateLocation();
        updateMarkerLocation(e.lngLat.lng, e.lngLat.lat);
    }

    // const handleDrag = (event: MarkerClickInfo) => (markerPos = event.lngLat);
    function handleDrag(e: MarkerClickInfo){
        // console.log( e.lngLat);
        updateMarkerLocation(e.lngLat[0], e.lngLat[1]);
        // localLatitude = e.lngLat.lat;
        // localLongitude = e.lngLat.lng;
        // updateLocation();
    }

    function updateMarkerLocation(lng, lat){
        localLatitude = lat;
        localLongitude = lng;
        updateLocation();
    }

    // const markers: {
    //     lngLat: [number, number];
    //     label: string;
    //     name: string;
    // }[] = [
    //     {
    //     lngLat: [-122.2993, 47.4464],
    //     label: 'SEA',
    //     name: 'Seattle',
    //     },
    // ];

    const props = $props<{
        Latitude?: number;
        Longitude?: number;
        onLatitudeChange?: (value: number) => void;
        onLongitudeChange?: (value: number) => void;
    }>();
    let localLatitude = $derived(props.Latitude ?? 3.5);
    let localLongitude = $derived(props.Longitude ?? -76.5);
    function updateLocation() {
        // Send values back to parent
        props.onLatitudeChange?.(localLatitude.toFixed(5));
        props.onLongitudeChange?.(localLongitude.toFixed(5));
    }

    // TODO: OnClick event for GeolocateControl
    function onGeoLoc(e: MouseEvent){
        console.log("Pressed Geolocation button");
    }

</script>

<MapLibre
    center={[localLongitude, localLatitude]}
    zoom={4}
    style="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
    //   class="map"
    class="w-full h-70 max-h-[70vh] border border-gray-300 p-2 rounded-[5px]"
    // class="relative aspect-9/16 max-h-[70vh] w-full sm:aspect-video sm:max-h-full"
    // standardControls
    attributionControl={false}
    >
    <NavigationControl position="top-right" showCompass={false} />
    
    <GeolocateControl position="top-right" fitBoundsOptions={{ maxZoom: 12 }}>
        <!-- <MouseEvent onclick={onGeoLoc} /> -->
    </GeolocateControl>
    <!-- <FullscreenControl position="top-left" /> -->
    <ScaleControl />
    <!-- <AttributionControl
        customAttribution={`<strong class="text-red-500">&copy; egiron</strong>`}
    /> -->

    <MapEvents onclick={addMarker} />

    <DefaultMarker lngLat={[localLongitude, localLatitude]} draggable ondrag={handleDrag}/>

    <!-- {#each markers as marker}
        <DefaultMarker lngLat={marker.lngLat} />
    {/each} -->
</MapLibre>

<style>
    /* :global(.map) {
        height: 280px;
    } */
</style>