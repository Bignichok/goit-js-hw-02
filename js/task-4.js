const PRICE_LIST = {
    China: 100,
    Chile: 250,
    Australia: 170,
    Jamaica: 120
}

const getShippingCost = (country) => {
    if(country in PRICE_LIST) {
        return `Shipping to Australia will cost ${PRICE_LIST[country]} credits`;
    }

    return "Sorry, there is no delivery to your country";
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
