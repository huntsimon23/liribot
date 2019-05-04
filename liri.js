require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var fs = require('fs');
var axios = require("axios");
var moment = require("moment");
var input1 = process.argv[2];
var input2 = process.argv[3];
//How do I get input 2 to look at all indexes 3 and beyond?

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
        console.log("Sorry, I didn't cath that.  Try Again using the following syntax: ");
};

function getBandInfo() {
    axios
    .get('https://rest.bandsintown.com/artists/' + input2 + '/events?app_id=codingbootcamp')
    .then(function(response) {
        console.log("Upcoming shows for " + input2 + ":");
        for (i=0; i<6; i++) {
        console.log("Venue name: " + response.data[i].venue.name);
        console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
        console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
        console.log("------------------");
    }})
    .catch(function(error) {
          console.log(error);});
};