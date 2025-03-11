<script lang="ts">
    export let qr: string;

    let show: boolean = false;
</script>


<button
on:click={() => (show = true)}
class="bg-white/20 hover:bg-white/40 flex items-center gap-4 px-4 py-2 rounded-lg backdrop-blur transition">
    <img src={qr} alt="qr" class="size-8" />
    <span>Показать QR-код</span>
</button>

{#if show}
<div class="px-16 py-5 fixed top-0 left-0 w-full h-full bg-black/5 backdrop-blur-sm flex flex-col justify-start">

    <button 
    on:click={() => (show = false)}
    class="bg-white/80 hover:bg-white/100 inline-flex gap-4 items-center w-fit px-4 py-2 rounded-lg backdrop-blur transition" >
        <svg width="10" height="10" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 0.87618L16.1239 0L8.50015 7.62369L0.876149 0L0 0.8768L7.62367 8.50016L0 16.1238L0.876149 16.9994L8.49969 9.37615L16.1239 17L17 16.1232L9.37618 8.49969L17 0.87618Z" fill="currentColor"/>
        </svg>
        <span>Закрыть</span>
    </button>

    <div class="m-auto container">
        <div class="flex flex-col items-center gap-6 font-bold leading-[1.2] lg:flex-row lg:gap-16">
            <div class="rounded-[100px] bg-white p-8">
                <div class="flex justify-center h-[330px] min-w-[330px]">
                    <img src={qr} alt="" class="size-[330px]">
                </div>
            </div>
            <div class="text-center lg:text-left xl:w-[500px]">
                <div class="text-[64px]">Для оплаты</div><div class="text-[28px]">отсканируйте QR-код в&nbsp;мобильном приложении банка или штатной камерой телефона</div>
            </div>
        </div>
    </div>

</div>
{/if}
