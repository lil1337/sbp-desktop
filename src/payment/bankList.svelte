<script lang="ts">
    import { cn } from "../lib/utils";
    import banks from "../lib/banks.json";
    import { fpsPaymentBankLink } from "../lib/fpsPaymentBankLink";

    export let filter: string = "",
    payment: FPSPayment;

    let lastFilteredBankId = 0;
    $: lastFilteredBankId = filter ? 
        banks.filter(e=>filterBank(e, filter))[
        banks.filter(e=>filterBank(e, filter)).length - 1]?.id ?? 0 : 0;

    function filterBank(bank: (typeof banks)[number], filter: string){
        let searchables = [bank.name];
        if (bank.id == 100000000004) searchables.push("тинькофф");
        else if (bank.id == 100000000005) searchables.push("контора пидорасов");

        return searchables.flatMap(e=>e.split(' ')).map(e=>e.toLowerCase()).some(e=>{
            return e.includes(filter.replaceAll(' ', '').toLowerCase())
        });
    }
</script>

<ul class="h-[444px] overflow-y-auto rounded-lg backdrop-blur bg-white/20">
    {#each banks as bank, i}
        {#if !filter || filterBank(bank, filter)}
       
            <li class="bg-white/0 hover:bg-white/40 transition select-none">
                <a class="flex px-4 gap-2 items-center" href={fpsPaymentBankLink(payment, bank.href)}>
                    <div class={cn(
                        "py-2.5 border-b-black/10 flex items-center gap-2 grow", 
                        (i != banks.length - 1 && bank.id != lastFilteredBankId) ? "border-b" : ""
                    )}>
                        <img src={bank.iconUrl} alt={bank.name} 
                        class="size-8 rounded-md" />
        
                        <span>{bank.name}</span>
                    </div>
                
                </a>
                
            </li>
        {/if}
    {/each}
</ul>