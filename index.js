const groww = require('./groww');

groww.forEach((entry) => {
    const { nseScripCode, symbolName, netPriceValue, netQuantity } = entry.holdingV2Dto;
    console.log(`${nseScripCode};${symbolName};${netQuantity};${netPriceValue/100}`);
})