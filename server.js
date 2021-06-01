const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch')
const access_token = 'c6c4d33f9868e05859eac996f091b6ce4e90b34a';
const client_id = '66831'
/*var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "c6c4d33f9868e05859eac996f091b6ce4e90b34a"

var api = new StravaApiV3.ActivitiesApi()*/


app.get('/getUser', async function(req, res){

    const response = await fetch('https://www.strava.com/api/v3/athlete', {
    	headers: {'Authorization': `Bearer ${access_token}`}
    });
    const data = await response.json();
    console.log(data);
    res.send(data);

});

app.get('/getData', async function(req, res){

    const response = await fetch('https://www.strava.com/api/v3/athlete', {
    	headers: {'Authorization': `Bearer ${access_token}`}
    });
    const data = await response.json();
    console.log(data);
    res.send(data);

});

//oAuth shit
app.get('/', async function(req, res){

	var url = `http://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:3000/after_login&approval_prompt=force&scope=read`;
    res.redirect(url);
});

app.get('/after_login', async function(req, res){
	console.log(req.query);
	const code = req.query.code;
	const scope = req.query.scope;
	var url = `https://www.strava.com/oauth/token`
	
});





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});