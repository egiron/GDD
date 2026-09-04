<script lang="ts">
	import { t, locale, locales } from '$lib/assets/i18n.js';
	import type { Site } from '$lib/types';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import Button from './ui/button/button.svelte';
	import * as Field from '$lib/components/ui/field/index.js';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';

	const { id, site, hash, onSiteChange, onSiteDelete } = $props<{
		id: number;
		site: Site;
		hash: string;
		onSiteChange?: (value: Site) => void;
		onSiteDelete?: (value: Site) => void;
	}>();

	// let local = $derived(props.Latitude ?? 3.5);
	// let localLongitude = $derived(props.Longitude ?? -76.5);
	// let localshowCoordsList = $derived(props.showCoordsList ?? false);

	let localhash = $derived(hash);
	let itemselected = $state(false);
	function onSiteClick(id: number, site: Site) {
		// console.log("Sitio seleccionado:", id);
		// Send values back to parent
		onSiteChange?.(site);
		itemselected = !itemselected;
	}
	function deleteSite(e: Event, hash: string) {
		e.stopPropagation();
		onSiteDelete?.(hash);
	}
</script>

<!-- <button id={id} onclick={() => onSiteClick(id, site)} 
    class=" w-full mb-1 p-1 space-y-2 cursor-pointer rounded-lg border border-gray-300 hover:border hover:border-blue-500 hover:shadow">
    <div class="relative mt-1 h-7 w-full p-0.5">
        <div class="absolute left-0 pl-1">
            <span class="text-0.85rem font-bold pr-4">{$t("siteitem.label")} {id}</span>
            <span class="text-[0.75rem] font-thin text-gray-500">({site.latitude}, {site.longitude})</span>
        </div>
        <div class="absolute right-0 p-0 -top-1.5 pointer-cursor">
            <Button onclick={(e) => deleteSite(e, localhash)}  variant="outline" size="icon" class="border-0 m-0 border-white shadow-none">
                <Trash2 class="size-4" />
            </Button>
        </div>
    </div>
</button> -->

<Field.Label for={localhash}>
    <Field.Field orientation="horizontal">
        <Field.Content>
            <Field.Title>{$t("siteitem.label")} {id}</Field.Title>
            <Field.Description>Last update: Aug 30, 2026</Field.Description>
        </Field.Content>
        <RadioGroup.Item value={localhash} id={localhash} />
    </Field.Field>
</Field.Label>
