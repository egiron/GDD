<script lang="ts">
    import { browser } from '$app/environment';

    export function createCachedState(key:string, initialValue:string) {
        let value = $state(
            browser && localStorage.getItem(key)
                ? JSON.parse(localStorage.getItem(key) ?? '')
                : initialValue
        );

        $effect(() => {
            if (browser) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        });

        return {
            get value() { return value; },
            set value(v) { value = v; }
        };
    }

</script>
