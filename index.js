const fs = require("fs");

let stockJson = fs.readFileSync("./data/stock.json");
let transactionJson = fs.readFileSync("./data/transactions.json");

let getStock = (sku) => {
  let transactions = JSON.parse(transactionJson).filter((t) => t.sku === sku);
  let stockObj = stockJson.find((s) => s.sku === sku);

  if (transactions.length == 0 && stockObj === undefined) {
    console.log("SKU Does not Exists!");
  } else {
    console.log(stockObj);
    return stockObj;
  }
};

getStock("SXV420098/71/68");
