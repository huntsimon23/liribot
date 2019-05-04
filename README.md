# liribot
This project utilized a command line interface (CLI/Node.js) to create a search engine bot.  The following packages where used in the development of this app: 
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [Axios](https://www.npmjs.com/package/axios)
* [Moment](https://www.npmjs.com/package/moment)
* [DotEnv](https://www.npmjs.com/package/dotenv)

The app is designed to return results from a CLI with the following syntax options:

1. `node liri.js concert-this <artist/band name here>`
   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:
     * Name of the venue
     * Venue location
     * Date of the Event

2. `node liri.js spotify-this-song '<song name here>'`
   * This will show the following information about the song in your terminal:
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from
        * If no song is provided then your program will default to "The Sign" by Ace of Base.

3. `node liri.js movie-this '<movie name here>'`
   * This will output the following information to your terminal:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js do-what-it-says`
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

Links to screenshots of the working program may be viewed here: https://drive.google.com/open?id=1C8O3GVo1rwfcbq03f41h4AA5164OUEe1
