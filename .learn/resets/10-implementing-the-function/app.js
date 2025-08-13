
let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87,
}

function fromDollarToYen(dollar) {
    let euros = dollar / oneEuroIs[ "USD"];
    return euros * oneEuroIs["JPY"];
}


function fromEuroToDollar(euro) {
    return euro * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs[ "JPY"];
    return euros * oneEuroIs["GBP"];
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};