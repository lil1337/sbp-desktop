<script lang="ts">
  import "./app.css";
    import { parseQrNspk } from "./lib/parseQrNspk";
    import { tryToGrabInfo } from "./lib/try2GrabInfo";
    import Payment from "./payment/Payment.svelte";
 

 
</script>

<Payment payment={parseQrNspk(location.toString())} />