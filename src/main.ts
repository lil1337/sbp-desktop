import { mount } from 'svelte'
import './app.css'
import Payment from './payment/Payment.svelte'
import { parseQrNspk } from './lib/parseQrNspk';

if (["localhost", "qr.nspk.ru"].includes(location.hostname)) {
    const div = document.createElement("div");
    div.id = "better";
    document.body.appendChild(div);

    mount(Payment, {
        target: document.getElementById('better')!,
        props: {
          payment: parseQrNspk(location.toString()),
          qr: document.getElementsByTagName('canvas')[0].toDataURL()
        }
    })
}
