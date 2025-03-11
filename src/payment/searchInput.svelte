<script lang="ts">
    import SearchIcon from "../assets/search.svg.svelte";
    import { cn } from "../lib/utils";

    let focus: boolean = false;
    export let value: string;
</script>

<div class={cn(
    "flex items-center gap-1",
    "px-4 py-2 rounded-lg backdrop-blur transition",
    focus ? "bg-white/90" : "bg-white/40"
)}>
    <SearchIcon />
    <input 
        type="text"
        class="w-full grow border-none bg-transparent font-normal text-sm outline-none select-none"
        placeholder="Введите название банка.."

        on:focus={() => (focus = true)}
        on:blur={() => (focus = false)}
        bind:value
    />
</div>