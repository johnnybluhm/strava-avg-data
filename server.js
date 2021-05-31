const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch')
const access_token = 'c6c4d33f9868e05859eac996f091b6ce4e90b34a';
/*var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "c6c4d33f9868e05859eac996f091b6ce4e90b34a"

var api = new StravaApiV3.ActivitiesApi()*/


app.use('/', async function(req, res, next){

    const response = await fetch('https://www.strava.com/api/v3/athlete', {
    	headers: {'Authorization': `Bearer ${access_token}`}
    });
    const data = await response.json();
    console.log(data);

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});