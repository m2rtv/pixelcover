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
    maxStreak: 0,
    pointsDist: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
export let stats = writable(browser && statsData);
stats.subscribe(
    (val) => browser && (localStorage.stats = JSON.stringify(val))
)

let Data = {
    Jul192022: {
        date: todaysDate,
        artist: 'Kendrick Lamar',
        artist2: 'Kendrick Lamar',
        album: 'Damn.',
        album2: 'Damn',
        hint1: 'Genre: Hip Hop',
        hint2: 'Release date: 2017',
        info: 'This album cover was designed by Vlad Sepetov. The red, all caps "DAMN." in Times New Roman font was creating a lot of discussion about "bad" design when it was released. Sepetov himself described the cover as "loud and abrasive". Billboard listed it as one of the best of 2017, dubbing it "both meme-able and memorable".',
        spotify: 'https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY?si=8_hd2MNtTIWGCMw8RzoZZA',
        applemusic: 'https://music.apple.com/ee/album/damn/1440881047',
    },
    Jul202022: {
        date: todaysDate,
        artist: 'Kendrick Lamar',
        artist2: 'Kendrick Lamar',
        album: 'Damn.',
        album2: 'Damn',
        hint1: 'Genre: Hip Hop',
        hint2: 'Release date: 2017',
        info: 'This album cover was designed by Vlad Sepetov. The red, all caps "DAMN." in Times New Roman font was creating a lot of discussion about "bad" design when it was released. Sepetov himself described the cover as "loud and abrasive". Billboard listed it as one of the best of 2017, dubbing it "both meme-able and memorable".',
        spotify: 'https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY?si=8_hd2MNtTIWGCMw8RzoZZA',
        applemusic: 'https://music.apple.com/ee/album/damn/1440881047',
    },
    Jul212022: {
        date: todaysDate,
        artist: 'Michael Jackson',
        artist2: 'Michael Jackson',
        album: 'Thriller',
        album2: 'Thriller',
        hint1: 'Genre: Funk / Soul, Pop',
        hint2: 'Release date: 1982',
        info: 'The cover for Thriller features Jackson in a white suit that belonged to photographer Dick Zimmerman. The gatefold sleeve reveals a tiger cub at Jackson\'s leg, which, according to Zimmerman, Jackson kept away from his face, fearing he would be scratched. Another picture from the shoot, with Jackson embracing the cub, was used for the 2001 special edition of Thriller.',
        spotify: 'https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ?si=F98jSvMLSQqp1hQ4gnZD_g',
        applemusic: 'https://music.apple.com/ee/album/thriller/269572838',
    },
    Jul222022: {
        date: todaysDate,
        artist: 'Nirvana',
        artist2: 'Nirvana',
        album: 'Nevermind',
        album2: 'Nevermind',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1991',
        info: 'This, one of the most famous album covers in popular music was shot by photographer Kirk Weddle. The fishhook with a dollar bill was added later on Kurt Cobain\'s direction. People at Geffen Records were concerned that the infant\'s penis, visible in the photo, would cause offense, and prepared an alternate cover without it; they relented when Cobain said the only compromise he would accept would be a sticker covering the penis reading: "If you\'re offended by this, you must be a closet pedophile." The cover also features the iconic Nirvana logo, using the Onyx typeface. It was done by former Sub-Pop Art Director Lisa Orth, who\'s mainly working on generative art now.',
        spotify: 'https://open.spotify.com/album/2UJcKiJxNryhL050F5Z1Fk?si=kDkKff8VT_eRvfkL1DXp6w',
        applemusic: 'https://music.apple.com/ee/album/nevermind/1440783617',
    },
    Jul232022: {
        date: todaysDate,
        artist: 'Tame Impala',
        artist2: 'Tame Impala',
        album: 'Currents',
        album2: 'Currents',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 2015',
        info: 'The cover art for Currents and its accompanying singles was created by Kentucky-based artist and musician Robert Beatty. Kevin Parker (Tame Impala) has said Currents\' designs are based on a diagram of vortex shedding he remembered while trying to visualise the album\'s themes. Beatty described how Parker\'s ideas for the album artwork "were all based on turbulent flow, the way liquid or air flows around objects."',
        spotify: 'https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv?si=QvQZC3McQOeJVGv_nET2jg',
        applemusic: 'https://music.apple.com/ee/album/currents/1440838039',
    },
    Jul242022: {
        date: todaysDate,
        artist: 'Gorillaz',
        artist2: 'Gorillaz',
        album: 'Demon Days',
        album2: 'Demon Days',
        hint1: 'Genre: Electronic, Hip Hop, Rock, Funk / Soul',
        hint2: 'Release date: 2005',
        info: 'The front cover of "Demon Days" features profiles of Gorillaz\' fictional characters Murdoc, 2D, Noodle and Russel, which were designed by Jamie Hewlett. This rather simple 4x4 layout could easily be a spoof of The Beatles "Let it be" cover.',
        spotify: 'https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT?si=EWxJcAPGR3mKPtLVhqSZrg',
        applemusic: 'https://music.apple.com/ee/album/demon-days/850571319',
    },
    Jul252022: {
        date: todaysDate,
        artist: 'Radiohead',
        artist2: 'Radiohead',
        album: 'In Rainbows',
        album2: 'In Rainbows',
        hint1: 'Genre: Electronic, Rock',
        hint2: 'Release date: 2007',
        info: 'Designed by longtime Radiohead collaborator Stanley Donwood. He worked in the studio while Radiohead worked on the album, allowing the artwork to convey the mood of the music. Images were displayed in the studio and on the studio computer for the band to interact with and comment on. "In Rainbows" was the first pay-what-you-want release from a major musical act.',
        spotify: 'https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK?si=23pskFDPSVm_omuBelgxzA',
        applemusic: 'https://music.apple.com/ee/album/in-rainbows/1109714933',
    },
    Jul262022: {
        date: todaysDate,
        artist: 'Daft Punk',
        artist2: 'Daft Punk',
        album: 'Random Access Memories',
        album2: 'Random Access Memories',
        hint1: 'Genre: Electronic, Funk / Soul, Pop',
        hint2: 'Release date: 2013',
        info: 'Unlike the previous studio albums that feature the band\'s wordmark as the cover art, Random Access Memories is the first and only one to not do so. Instead, it features the band members\' signature helmets with the album title written on the top left. The font is reminiscent to that of Michael Jackson\'s Thriller.',
        spotify: 'https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa?si=_LCcmFpKRMakzLCktR1EtQ',
        applemusic: 'https://music.apple.com/ee/album/random-access-memories/617154241',
    },
    Jul272022: {
        date: todaysDate,
        artist: 'The Fugees',
        artist2: 'Fugees',
        album: 'The Score',
        album2: 'Score',
        hint1: 'Genre: Hip Hop',
        hint2: 'Release date: 1996',
        info: 'One of the best selling albums of all time. Cover photo by Marc Baptiste.',
        spotify: 'https://open.spotify.com/album/4z6F5s3RVaOsekuaegbLfD?si=lV4K4iDmTaC8yY21JQuYzA',
        applemusic: 'https://music.apple.com/ee/album/the-score/281701670',
    },
    Jul282022: {
        date: todaysDate,
        artist: 'The Beatles',
        artist2: 'Beatles',
        album: 'Abbey Road',
        album2: 'Abbey Road',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1969',
        info: 'This infamous cover photo was taken from the stepladder in the middle of the Abbey Road by Iain Macmillan in a 15-minute photoshoot. The license plate on the white Volkswagen Beetle (LMW 281F) in the back was repeatedly stolen after the album was released.',
        spotify: 'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN?si=pLWu1lAsRx6r8u23lPcQmQ',
        applemusic: 'https://music.apple.com/ee/album/abbey-road-remastered/1441164426',
    },
    Jul292022: {
        date: todaysDate,
        artist: 'Talking Heads',
        artist2: 'Talkingheads',
        album: 'Remain in light',
        album2: 'Remain in light',
        hint1: 'Genre: Electronic, Rock',
        hint2: 'Release date: 1980',
        info: 'Initial name for the album was planned as "Melody attack", but the cover design process made them realize it did not fit with the music. It was one of the first computer-designed record jackets. The process was tortuous because computer power was limited in the early 1980s and the mainframe alone took up several rooms.',
        spotify: 'https://open.spotify.com/album/3AQgdwMNCiN7awXch5fAaG?si=sJX0wluhT7ucBdCOT8yqeQ',
        applemusic: 'https://music.apple.com/ee/album/remain-in-light-deluxe-version/124922154',
    },
}
let todaysData = Data[todaysDate];
export default todaysData;