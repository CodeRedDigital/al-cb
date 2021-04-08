const Prismic = require('@prismicio/client');

// sets the prismic apiEndpoint and Token
var apiEndpoint = "https://carolineboseley.cdn.prismic.io/api/v2";
var apiToken = "MC5YU1M4OEJBQUFDQUE2clJr.Pwrvv718L3wl77-977-9Ee-_ve-_vTDvv73vv70fb--_vXQAe--_vSDvv70k77-9RjJR77-9Ku-_vQ";

function initApi(req){
    return Prismic.client(apiEndpoint, {
      accessToken: apiToken,
      req: req
    });
}

initApi()