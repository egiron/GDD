<script lang="ts">
	import { slide } from 'svelte/transition';
	import { t } from '$lib/assets/i18n.js';
	import type { Snippet } from 'svelte';
	import { Input } from "$lib/components/ui/input/index.js";
	import * as NativeSelect from "$lib/components/ui/native-select/index.js";
	import NativeSelectOption from './ui/native-select/native-select-option.svelte';
    

	// let { children: Snippet } = $props();
	// let { open = $bindable(false), header, details, crops, pests, selectedCrop,
	// 	selectedPest, handleCropChange, handlePestChange,
	// } = $props();

	const props = $props<{
		open?: boolean;
        header?: Snippet;
        details?: Snippet;
        // handleCropChange?: (value: Event) => void;
        // handlePestChange?: (value: Event) => void;
		handleCropsPestChange?: (value: Event) => void;
        crops?:any;
        // selectedCrop?:string;
        // selectedPest?:string;
		selectedCropPest?:string;
		maturityGDDThreshold?:number;
		daystoMaturityThreshold?:number;
		handleMaturityGDDThresholdChange?: (value: number) => void;
        handleDaystoMaturityThresholdChange?: (value: number) => void;
    }>();

	// let {props:any} = $props();
	let open = $derived(props.open ?? false);
	let localHeader = $derived(props.header);
	let localDetails = $derived(props.details);
	let localCrops = $derived(props.crops ?? null);
	let localPests = $derived(props.pests ?? null);
	// let localselectedCrop = $derived(props.selectedCrop ?? '');
	// let localselectedPest = $derived(props.selectedPest ?? '');
	let localselectedCropPest = $derived(props.selectedCropPest ?? '');
	let localmaturityGDDThreshold = $derived(props.maturityGDDThreshold ?? null);
	let localDaystoMaturityThreshold = $derived(props.daystoMaturityThreshold ?? null);

	const handleClick = () => open = !open;

	// function handleCropChange(event:Event) {
	// 	// Send values back to parent
	// 	// localselectedCrop = event.target.value;
	// 	props.handleCropChange?.(event);
	// }
	// function handlePestChange(event:Event) {
	// 	// localselectedPest = event.target.value;
	// 	props.handlePestChange?.(event);
	// }
	function handleCropsPestChange(event:Event) {
		// localselectedPest = event.target.value;
		props.handleCropsPestChange?.(event);
	}

	function handleMaturityGDDThresholdChange(event:Event) {
		// localmaturityGDDThreshold = event.target.value;
		props.handleMaturityGDDThresholdChange?.(localmaturityGDDThreshold);
	}
	function handleDaystoMaturityThresholdChange(event:Event) {
		// localDaystoMaturityThreshold = event.target.value;
		props.handleDaystoMaturityThresholdChange?.(localDaystoMaturityThreshold);
	}
</script>

<div class="accordion">
	<div class="header">
		<div class="text">
			<!-- <slot name="head"></slot>	 -->
			<header>
				<p class="text-[0.9rem] font-bold ">
					{$t("settings.crop")} (<span class="text-[0.65rem] text-gray-400 italic">{$t("settings.optional")}</span>):
				</p>
				{@render localHeader?.()}
			</header>
		</div>
		
		<button onclick={handleClick} aria-expanded={open}>
			<!-- +/- -->
			<svg
				class=""
				width="20"
				height="20"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
			>
		</button>
	</div>
	
	{#if open}
	<div class="details" transition:slide={{ duration: 300 }}>
		<!-- <slot name="details"></slot> -->
		{#if localDetails}
			<!-- <details></details> -->
			<!-- {@html details()} -->
			<p class="text-[0.75rem] text-gray-500 dark:text-white">{$t("settings.crop_desc")}
				<!-- Select a crop/insect/disease to automatically setup the threshold temperatures -->
			</p>
			<div class="p-1">
				<NativeSelect.Root aria-label="Choose a threshold by" id="cropspests" 
				bind:value={localselectedCropPest} onchange={handleCropsPestChange} class="w-full">
					<NativeSelect.Option value="other">Select threshold by</NativeSelect.Option>
					<!-- <NativeSelectOption value="other">{$t("settings.crops_other")}</NativeSelectOption> -->
					<NativeSelect.OptGroup label={$t("settings.crop")}>
						{#each localCrops as crop (crop.id)} 
							<NativeSelect.Option value={crop.id}>{crop.name}</NativeSelect.Option>
						{/each}
					</NativeSelect.OptGroup>
					<NativeSelect.OptGroup label={$t("settings.insects_and_diseases")}>
						{#each localPests as pest (pest.id)} 
							<NativeSelect.Option value={pest.id}>{pest.name}</NativeSelect.Option>
						{/each}
					</NativeSelect.OptGroup>
				</NativeSelect.Root>
			</div>

			<!-- <div class="mt-0 rounded-[5px] border border-gray-300 p-2 pt-0">
				<div class="justify-content items-center gap-x-4">
					<label for="crops">{$t("settings.crop")}</label>
					<NativeSelect.Root aria-label="Choose a crop" id="crops" bind:value={localselectedCrop} onchange={handleCropChange}>
                        {#each localCrops as crop (crop.id)} 
                            <NativeSelect.Option value={crop.id}>{crop.name}</NativeSelect.Option>
                        {/each}
                    </NativeSelect.Root>
				</div>
				<div class="justify-content items-center gap-x-4">
					<label for="pests">{$t("settings.insects_and_diseases")}</label>
					<NativeSelect.Root aria-label="Choose a pest" id="pests" bind:value={localselectedPest} onchange={handlePestChange}>
                        {#each localPests as pest (pest.id)} 
                            <NativeSelect.Option value={pest.id}>{pest.name}</NativeSelect.Option>
                        {/each}
                    </NativeSelect.Root>
				</div>
			</div> -->

			<div class="mt-2">
				<p class="text-[0.8rem] font-bold ">
					{$t("settings.crop_maturity")}
				</p>
				<div class="rounded-[5px] border border-gray-300 p-2">
					<div class="justify-content flex h-10 flex-row items-center gap-x-4">
						<label for="maturityGDDThreshold"> {$t("settings.crop_maturity_gdd")}</label>
						<Input type="number" id="maturityGDDThreshold" placeholder="Maturity GDD threshold" 
                            bind:value={localmaturityGDDThreshold}
							onkeyup={handleMaturityGDDThresholdChange}
							min="0"
							step="1"
							class="max-w-xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
						<label for="daystoMaturityThreshold"> {$t("settings.crop_daystomaturity")} </label>
						<Input type="number" id="daystoMaturityThreshold" placeholder="Days to Maturity threshold" 
                            bind:value={localDaystoMaturityThreshold}
							onkeyup={handleDaystoMaturityThresholdChange}
							min="0"
							step="1"
							class="max-w-xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
					</div>
				</div>
			</div>

			{@render localDetails()}
		{/if}
	</div>
	{/if}
</div>

<style>
	div.accordion {
		margin: 1rem 0;
		border: 1px solid #e2e8f0;
		border-radius: 0.375rem;
		overflow: hidden;
		width: 100%;
		font-family: sans-serif;
	}
	/* div.accordion .accordion-item {
		border-bottom: 1px solid #e2e8f0;
	}
	div.accordion .accordion-item:last-child {
		border-bottom: none;
	} */
	
	div.header {
		display:flex;
		width:100%;
		padding-top: 0.25rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		border-bottom: 1px solid #e2e8f0;
	}
	
	div.header .text {
		flex: 1;
		margin-right: 5px;
	}
	
	div.details {
		/* background-color: #cecece; */
		padding:1rem;
	}

	button {
		border: none;
		background: none;
		color: inherit;
		cursor: pointer;
		margin: 0;
		/* padding-bottom: 0.5rem;
		padding-top: 0.5rem; */
	}

	svg {
		flex-shrink: 0;
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.8rem;
		/* color: #34495e; */
	}
	/* select.crops,
	select.pests {
		padding: 0.5rem;
		border-radius: 4px;
		height: 35px;
		width: 100%;
	} */
	/* input {
		padding: 0.5rem;
		border: 1px solid #ddd;
		font-size: 1rem;
		
	}
	input:focus {
		outline: none;
		border-color: #3498db;
		box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
	}
	input.threshold {
		border-radius: 4px;
		height: 30px;
		width: 100px;
	} */
</style>
