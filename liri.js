require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require('fs');
var axios = require("axios");
var moment = require("moment");
var input1 = process.argv[2];
var input2 = process.argv.slice(3).join(" ");

function checkInputs(){
switch (input1) {
    case ("concert-this"):
        getBandInfo();
    break;
    case ("spotify-this-song"):
        if(input2){
            getSpotify(input2);
         } else{
            getSpotify("The Sign Ace of Base");
         }
    break;
    case ("movie-this"):
        if(input2){
            getOmdb(input2);
        } else{
            getOmdb("Mr. Nobody");
        }
    break;
    case ("do-what-it-says"):
         doTextFile();
    break;
    default:
        console.log("Sorry, I didn't cath that.");
}};

checkInputs();

function getBandInfo() {
    axios
    .get('https://rest.bandsintown.com/artists/' + input2 + '/events?app_id=codingbootcamp')
    .then(function(response) {
        console.log("-----------------------");
        console.log("Upcoming shows for " + input2 + ":");
        console.log("-----------------------");
        for (i=0; i<6; i++) {
        console.log("Venue name: " + response.data[i].venue.name);
        console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
        console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
        console.log("------------------");
    }})
    .catch(function(error) {
          console.log(error);});
};

function getSpotify(songname){
    spotify.search({ type: 'track', query: songname, limit: 1}, function(error, data){
        if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
            var songData = data.tracks.items[i];
            console.log("-----------------------");
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song: " + songData.name);
            console.log("Preview URL: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
            } 
        } else {
        console.log(error + "Spotify isn't working.  Try a different song!");
        };
    });
    };

    function getOmdb(filmTitle){
        var omdbURL = 'http://www.omdbapi.com/?t=' + filmTitle + '&apikey=trilogy&plot=short';
        axios.get(omdbURL)
        .then(function (response){
            var movie = response.data;
            console.log("-----------------------");
            console.log("Movie Title: " + movie.Title);
            console.log("Year: " + movie.Year);
            console.log("IMdB Rating: " + movie.imdbRating);
            console.log("Produced in: " + movie.Country);
            console.log("Language: " + movie.Language);
            console.log("Plot Summary: " + movie.Plot);
            console.log("Key Actors: " + movie.Actors);
            console.log("-----------------------");
        })
        .catch(function (error) {
            console.log(error);
        });
    };      
    
    function doTextFile(){
        fs.readFile('random.txt', "utf8", function(error, data){
          var info = data.split(",");
          input1 = info[0];
          input2 = info[1];  
          checkInputs();
        });
    };