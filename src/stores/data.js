import { writable } from "svelte/store";
import { browser } from '$app/env';

let today = new Date();
let dd = String(today.getUTCDate());
let mm = String(today.getUTCMonth());
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let mmm = months[mm];
let yyyy = today.getUTCFullYear();

let todaysDate = mmm + dd + yyyy;

let userData = JSON.parse(browser && localStorage.getItem("user")) || {
    firstVisit: true,
    lastDate: todaysDate,
    lastGuessNo: 0,
    lastGuessArtist: '',
    lastGuessAlbum: '',
    guessedArtist: undefined,
    guessedAlbum: undefined,
    gameWon: false,
    gameLost: false,
}
export let user = writable(browser && userData);
user.subscribe(
    (val) => browser && (localStorage.user = JSON.stringify(val))
)

let statsData = JSON.parse(browser && localStorage.getItem("stats")) || {
    totalPoints: 0,
    playCount: 0,
    gamesWon: 0,
    gamesLost: 0,
    winPerc: 0,
    streak: 0,
    pointsDist: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
export let stats = writable(browser && statsData);
stats.subscribe(
    (val) => browser && (localStorage.stats = JSON.stringify(val))
)

let Data = {
    Jun52022: {
        date: todaysDate,
        artist: 'Kendrick Lamar',
        artist2: 'Kendrick Lamar',
        album: 'Damn.',
        album2: 'Damn',
        hint1: '',
        hint2: '',
        info: 'The album cover was designed by Vlad Sepetov. The red, all caps "DAMN." in Times New Roman font was creating a lot of discussion about "bad" design when it was released. Sepetov himself described the cover as "loud and abrasive". Billboard listed it as one of the best of 2017, dubbing it "both meme-able and memorable".',
        info2: '',
        spotify: 'https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY?si=8_hd2MNtTIWGCMw8RzoZZA',
        itunes: '',
    },
}
let todaysData = Data[todaysDate];
export default todaysData;