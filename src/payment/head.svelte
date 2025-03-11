<script lang="ts">
    import Logo from "../assets/sbp.svg.json";

    export let amount: number = 49000;
    export let info: BrandInfo | undefined;

    
    let currentSrc: string | undefined = undefined;

    $: if (currentSrc == undefined && info?.brandFavicons.length) {
        currentSrc = info.brandFavicons[0];}
    $: if (currentSrc == undefined && info && (!info.brandFavicons || !info.brandFavicons.length)) {
        currentSrc = Logo;}
</script>

<div class="flex gap-4 items-start">
    {#if !currentSrc}
    <div class="size-7 mt-[4px] bg-black/5 rounded-lg animate-pulse"></div>
    {:else}
    <img on:error={e=>{
        if (currentSrc == Logo) return;
        
        if (!info || !info.brandFavicons?.length) {
            currentSrc = Logo; return;}
        else if (currentSrc == info.brandFavicons[info.brandFavicons.length - 1]) {
            currentSrc = Logo; return;}
        else {
            currentSrc = info.brandFavicons[info.brandFavicons.findIndex(e=>e == currentSrc) + 1];}
    }} src={currentSrc} alt="sbp logo" class="size-7 mt-[4px] rounded-lg" />
    
    {/if}
    <div>
        {#if !info}
        <div class="block w-[100px] h-[18.5px] bg-black/5 rounded-lg animate-pulse"></div>
        {:else}
        <span class="block text-lg leading-tight">
            {#if info?.brandName}
                {info.brandName}
            {:else}
                Оплата через СБП
            {/if}
        </span>
        {/if}
        <div class="flex items-top">
            <span class="block font-medium leading-tight">{amount.toLocaleString("ru-RU", {minimumFractionDigits: 0, maximumFractionDigits: 0})}&nbsp;</span>
            <span class="text-xs font-medium mt-[4px] block leading-tight">₽</span>
        </div>
    </div>
</div>