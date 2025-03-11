export async function tryToGrabInfo(payment: string): Promise<BrandInfo | undefined> {
    let brandName: string | undefined = await fetch(`https://widget.cbrpay.ru/v1/payment-link/${payment}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.data?.brandName) return data.data.brandName;
            else return undefined;
        })
        .catch(err => {
            console.error(err);
            return undefined;
        });

    if (!brandName) return undefined;

    if (!brandName.startsWith("http")) return { brandName: brandName.split("/").filter(Boolean).pop()!, brandFavicons: [] };

    return { 
        brandName: brandName.split("/").filter(Boolean).pop()!, 
        brandFavicons: [
            `${brandName}/favicon.svg`,
            `${brandName}/favicon.png`,
            `${brandName}/favicon.ico`,
        ]
    }   
}