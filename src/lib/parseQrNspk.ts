export function parseQrNspk(url: string) {
  // https://qr.nspk.ru/BD200013OP7S9DF69KGRAKIERB5HHOJO?type=02&bank=100000000143&sum=10000&cur=RUB&crc=F65C
  let payment = url.split("/").pop()?.split("?")[0]!;
  let params = new URLSearchParams(url.split("?")[1]);
  let type = params.get("type")!;
  let bank = params.get("bank")!;
  let sum = params.get("sum")!;
  let cur = params.get("cur")!;
  let crc = params.get("crc")!;

  return {
    payment,
    type,
    bank,
    sum,
    cur,
    crc,
  } as FPSPayment;
}