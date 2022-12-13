import fetch from 'node-fetch';

const url = "https://api.coingecko.com/api/v3/coins/gmx";

var coinName;

fetch(url) // fetches GMX info from CoinGecko API
    .then( res => {
        return res.json();
    })
    .then( data => {
        console.log(data["name"]);
        coinName = data["name"]; // sets coinName to the returned "GMX"
    })
    .then( data => {
        var kucoinUrl = `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${coinName}-USDT` // construct KuCoin API Url using coinName
        fetch(kucoinUrl).then( kuRes => { // fetches GMX market info using URL
            return kuRes.json();
        })
        .then( kuData => {
            console.log(kuData);
        });
    })
    .catch( err => {
        console.error(err);
    });