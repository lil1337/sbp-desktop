export function fpsPaymentBankLink(payment: FPSPayment, bankHref: string) {
    return bankHref
        .replace("{payment}", payment.payment)
        .replace("{type}", payment.type)
        .replace("{bank}", payment.bank)
        .replace("{sum}", payment.sum)
        .replace("{cur}", payment.cur)        
        .replace("{crc}", payment.crc);
}