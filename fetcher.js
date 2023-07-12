const STORE_ID = 117986;
const IDS = [138593051, 94340317, 94340606, 138590435, 138607462, 94339119, 94339244]

module.exports = () => {
    return fetch("https://card.wb.ru/cards/detail?appType=1&curr=rub&dest=-1257786&regions=80,38,83,4,64,33,68,70,30,40,86,75,69,1,66,110,48,22,31,71,114&spp=0&nm="+IDS.join(';'), {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru,en;q=0.9,it;q=0.8,fr;q=0.7,la;q=0.6,uk;q=0.5,hr;q=0.4,pl;q=0.3,bg;q=0.2,ro;q=0.1,mt;q=0.1,cy;q=0.1",
            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"YaBrowser\";v=\"23\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://www.wildberries.ru/catalog/138593051/detail.aspx",
            "Referrer-Policy": "no-referrer-when-downgrade"
        },
        "body": null,
        "method": "GET"
    })
        .then(result => result.json())
        .then(result => {
            return result.data.products.map((product) => {
                const article = {}
                article.art = product.id
                product.sizes.forEach(size => {
                    size.stocks.forEach(stock => {
                        if(stock.wh === STORE_ID && typeof article[size.name] !== "undefined"){
                            article[size.name] += stock.qty
                        }else{
                            article[size.name] = stock.qty
                        }
                    })
                })
                return article
            })
        })
}