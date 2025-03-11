<script lang="ts">
    import { onMount } from "svelte";
    import Search from "../assets/search.svg.svelte";
    import BankList from "./bankList.svelte";
    import Head from "./head.svelte";
    import SearchInput from "./searchInput.svelte";
    import { tryToGrabInfo } from "../lib/try2GrabInfo";
    import ShowQrButton from "./showQrButton.svelte";

    export let payment: FPSPayment;
    export let qr: string | undefined = undefined;

    let info: BrandInfo | undefined;
    let filter: string = "";

    onMount(async () => {
        info = await tryToGrabInfo(payment.payment);
    });
</script>
<div class="fixed top-0 left-0 w-full h-full bg-[url(https://qr.nspk.ru/static/bg-desktop.jpg)] flex">
    <div class="m-auto container">
        <Head bind:info amount={Number(payment.sum) / 100} />
        <hr class="my-4">

        <div class="flex flex-col gap-4">
            <SearchInput bind:value={filter} />
            <BankList {payment} bind:filter />
            {#if qr}
                <ShowQrButton {qr} />
            {/if}
        </div>
    </div>
</div>