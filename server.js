/*var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "c6c4d33f9868e05859eac996f091b6ce4e90b34a"

var api = new StravaApiV3.ActivitiesApi()*/


/*app.get('/getUser', async function(req, res){

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
});*/

/*var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var opts = { 
  'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
  'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
  'page': 56, // {Integer} Page number. Defaults to 1.
  'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLoggedInAthleteActivities(opts, callback);*/
(async () => {
    const strava = require('strava-v3')
    strava.config({
  "access_token"  : "8920156e9ffbcc79478060060f905910f3d32922",
  "client_id"     : "66831",
  "client_secret" : "a9d10ba407da3fecec77dbc0ec46163768294367",
  "redirect_uri"  : "Your apps Authorization Redirection URI (Required for oauth)",
});
    try{
        const payload = await strava.athlete.get({})
    }
    catch (e){
        console.log(e);
    }
    console.log(payload)
})()
