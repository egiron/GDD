<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import {
		type CalendarDate,
		DateFormatter,
		getLocalTimeZone,
		today
	} from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import * as Popover from "$lib/components/ui/popover/index.js";
    import Calendar from "$lib/components/ui/calendar/calendar.svelte";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
	import type { Snippet } from 'svelte';

	

    // const id = $props.id();

    const {id, label, locale, initVal, onStartDateChange, onEndDateChange} = $props<{
        id:any,
        label:string,
        // props: Snippet,
        locale:string,
        initVal:string,
        onStartDateChange?: (value: number) => void;
        onEndDateChange?: (value: number) => void;
        
    }>();

    let open = $state(false);
	// let value = $state<DateValue>();
	let value = $state<CalendarDate | undefined>();
    
    const lang = $derived(locale ?? 'en');
    // console.log(lang);
    // const df = new DateFormatter('en-US', { dateStyle: 'long' });
    const df = $derived(new DateFormatter(lang, { dateStyle: 'short' }));
    
    function onValidateDaterange(value:any) {
        // Send values back to parent
        // console.log(value.toDate(getLocalTimeZone()).toLocaleDateString());
        if (onStartDateChange){
            onStartDateChange?.(value.toDate(getLocalTimeZone()).toLocaleDateString());
        }
        if (onEndDateChange){
            onEndDateChange?.(value.toDate(getLocalTimeZone()).toLocaleDateString());
        }
            
    }
</script>

<div class="flex flex-col gap-1 w-full">
	<Label for="{id}-date" class="px-1 text-[0.8rem]">{label}</Label>
	<Popover.Root bind:open>
		<Popover.Trigger id="{id}-date">
			{#snippet child({ props })}
				<Button {...props} variant="outline" class="w-auto justify-between font-normal">
					{value ? value.toDate(getLocalTimeZone()).toLocaleDateString() : new Date(initVal).toLocaleDateString()}
					<CalendarIcon class="size-4"/>
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="w-auto overflow-hidden p-0" align="start">
			<Calendar
				type="single"
                locale={lang} 
				bind:value
				captionLayout="dropdown"
				onValueChange={(v:any) => {
					open = false;
                    onValidateDaterange(v);
				}}
				maxValue={today(getLocalTimeZone())}
			/>
		</Popover.Content>
	</Popover.Root>
</div>
