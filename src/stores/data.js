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
    Nov182022: {
        date: todaysDate,
        artist: 'Sade',
        artist2: 'Sade',
        album: 'The Best Of Sade',
        album2: 'The Best Of',
        hint1: 'Genre: Soul, Smooth Jazz',
        hint2: 'Country: UK',
        hint3: 'Release date: 1994',
        info: 'First best-of album in our quiz. The cover is shot by Scottish fashion, celebrity and art photographer Albert Watson. He has created major advertising campaigns for clients such as Prada, Chanel and Levis. Watson has also taken some well-known photographs, from the portrait of Steve Jobs that appeared on the cover of his biography, a photo of Alfred Hitchcock holding a plucked goose, and a portrait of a nude Kate Moss taken on her 19th birthday.',
        spotify: 'https://open.spotify.com/album/3uSWaQxJAdm5MWKQkQJNoK?si=p_TNEFigRYSg2NMUzNThzw',
        applemusic: 'https://music.apple.com/ee/album/the-best-of-sade/604770232',
    },
    Nov192022: {
        date: todaysDate,
        artist: 'Vampire Weekend',
        artist2: 'Vampire Weekend',
        album: 'Vampire Weekend',
        album2: 'Vampire Weekend',
        hint1: 'Genre: Indie Pop',
        hint2: 'Country: USA',
        hint3: 'Release date: 2008',
        info: 'The album’s cover depicts the chandelier in St. Anthony Hall, a Columbia University semi-secret society. The photo is a Polaroid picture from one of the band’s early shows at Columbia.',
        spotify: 'https://open.spotify.com/album/5fedTyx7AnXeyxLL0giq6x?si=0pFvYJ65TiezEG71rsYnGw',
        applemusic: 'https://music.apple.com/ee/album/vampire-weekend/271489741',
    },
    Nov202022: {
        date: todaysDate,
        artist: 'New Order',
        artist2: 'New Order',
        album: 'Power, Corruption & Lies',
        album2: 'Power Corruption and Lies',
        hint1: 'Genre: Synth-Pop, New Wave, Post-Punk',
        hint2: 'Country: UK',
        hint3: 'Release date: 1983',
        info: 'Another cover from Peter Saville. It’s a reproduction of the painting "A Basket of Roses" by French artist Henri Fantin-Latour, which is part of the National Gallery’s permanent collection in London. Saville had originally planned to use a Renaissance portrait of a dark prince to tie in with the Machiavellian theme of the title, but could not find a suitable portrait. At the gallery Saville picked up a postcard with Fantin-Latour’s painting, and his girlfriend mockingly asked him if he was going to use it for the cover. Fashion designer Raf Simons and street-fashion label Supreme have both used the cover in their collections.',
        spotify: 'https://open.spotify.com/album/6NTrwu1XJ56jBPx7HMksbZ?si=rk3hKEBcT8Sbzup_-fwFpQ',
        applemusic: 'https://music.apple.com/ee/album/power-corruption-lies/1040981945',
    },
    Nov212022: {
        date: todaysDate,
        artist: 'A Tribe Called Quest',
        artist2: 'Tribe Called Quest',
        album: 'The Low End Theory',
        album2: 'Low End Theory',
        hint1: 'Genre: Hip Hop',
        hint2: 'Country: US',
        hint3: 'Release date: 1991',
        info: '“Following up the sunny day illustration from their happy-go-lucky debut, Tribe went decidedly darker on the cover for the more mature (and classic) The Low End Theory. Painting the contours of an invisible model’s body with glow-in-the-dark paint, the red, green, and black image was sexy and Afrocentric all at once—a delicate balance that mirrored Tribe’s jazz-heavy sound at the time. The iconic imagery would continue to pop up throughout Tribe’s career (gracing the covers of their next two albums), making the painted lady hip-hop’s most recognizable mascot. Stripped-down, stylish, and original, The Low End Theory is everything a great rap album cover should be.” via Conplex. AD: ZombArt, Photography: Joe Gran1',
        spotify: 'https://open.spotify.com/album/1p12OAWwudgMqfMzjMvl2a?si=QEj6ZLq6SXiStj36ilUPUw',
        applemusic: 'https://music.apple.com/ee/album/the-low-end-theory/278911460',
    },
    Nov222022: {
        date: todaysDate,
        artist: 'Aphex Twin',
        artist2: 'Aphex Twin',
        album: 'Drukqs',
        album2: 'Drugs',
        hint1: 'Genre: Electronic, IDM, Classical',
        hint2: 'Country: England (Irish-born)',
        hint3: 'Release date: 2001',
        info: 'Supposedly a photo from inside his Yamaha Disklavier, which was connected to a computer to control it, to give some tracks that “human, but not-quite” feel.',
        spotify: 'https://open.spotify.com/album/1maoQPAmw44bbkNOxKlwsx?si=W0JU2tIWRtSOitgBtcH-_A',
        applemusic: 'https://music.apple.com/ee/album/drukqs/282559693',
    },
}
let todaysData = Data[todaysDate];
export default todaysData;