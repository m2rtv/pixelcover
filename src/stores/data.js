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
    Jul302022: {
        date: todaysDate,
        artist: 'The Prodigy',
        artist2: 'Prodigy',
        album: 'The fat of the land',
        album2: 'Fat of the land',
        hint1: 'Genre: Electronic',
        hint2: 'Release date: 1997',
        info: 'Although the cover itself is a bit confusing, it\'s the first time the famous ant logo made it\'s appearance. The album title comes from the old English phrase "living off the fat of the land", which means living well or being wealthy.',
        spotify: 'https://open.spotify.com/album/4fdgcEVMdJe0KVgupMNJAP?si=sUY4RQnBQHeaZdUbAbkQZQ',
        applemusic: 'https://music.apple.com/ee/album/the-fat-of-the-land/1450123945',
    },
    Jul312022: {
        date: todaysDate,
        artist: 'Grace Jones',
        artist2: 'Grace Jones',
        album: 'Island Life',
        album2: 'Island Life',
        hint1: 'Genre: Reggae, Funk / Soul, Pop',
        hint2: 'Release date: 1985',
        info: 'This compilation album cover was created by photographer, illustrator and graphic designer Jean-Paul Goude, who was Jones\' partner at the time. This impossibly graceful pose is actually a montage of separate images, following Goude\'s ideas on creating credible illusions with his cut-and-paint technique.',
        spotify: 'https://open.spotify.com/album/0IgaRsWGL9c4bovxkwU7YI?si=sON_y1cZQV-le2A-9543Kg',
        applemusic: 'https://music.apple.com/ee/album/island-life/1564504203',
    },
    Aug12022: {
        date: todaysDate,
        artist: 'Lady Gaga',
        artist2: 'Lady Gaga',
        album: 'The Fame Monster',
        album2: 'Fame Monster',
        hint1: 'Genre: Electronic, Rock, Pop',
        hint2: 'Release date: 2009',
        info: 'A reissue of Lady Gaga\'s debut studio album, The Fame. Two covers were created for The Fame Monster, both of which were shot by French photographer and fashion designer Hedi Slimane.',
        spotify: 'https://open.spotify.com/album/6rePArBMb5nLWEaY9aQqL4?si=rrj00f8LQ6CAIIprsbWfog',
        applemusic: 'https://music.apple.com/ee/album/the-fame-monster-deluxe-edition/1476727669',
    },
    Aug22022: {
        date: todaysDate,
        artist: 'Metallica',
        artist2: 'Metallica',
        album: 'Master of puppets',
        album2: 'Master of puppets',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1986',
        info: 'The cover art was made by illustrator and painter Don Brautigam in just three days, using a combination of airbrush and paintbrush. He had never heard a note of music from the album, not even "Disposable Heroes," which is frequently cited as the reference for the soldier\'s helmet on the cross headstone to the far left. Obviously, the concept for the artwork came from Metallica and their manager.',
        spotify: 'https://open.spotify.com/album/2Lq2qX3hYhiuPckC8Flj21?si=eWMRNq_HR9qCRTX3Hk9neA',
        applemusic: 'https://music.apple.com/ee/album/master-of-puppets-remastered/1440901428',
    },
    Aug32022: {
        date: todaysDate,
        artist: 'The Weeknd',
        artist2: 'Weeknd',
        album: 'After Hours',
        album2: 'After Hours',
        hint1: 'Genre: Electronic, Hip Hop, Funk / Soul, Pop',
        hint2: 'Release date: 2020',
        info: 'The title of the album was inspired by the 1985 movie of the same name by Martin Scorsese. The album\'s overall art direction was primarily handled by the Tammi brothers, with its design being handled by Aleksi Tammi, and its photography and visual direction being handled by Anton Tammi, who directed the music videos for the album\'s singles, and the project\'s same-titled short film.',
        spotify: 'https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj?si=9xIT3Bs7QfGa4js4mlj1fw',
        applemusic: 'https://music.apple.com/ee/album/after-hours/1499378108',
    },
    Aug42022: {
        date: todaysDate,
        artist: 'Fleetwood Mac',
        artist2: 'Fleetwood Mac',
        album: 'Rumours',
        album2: 'Rumours',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1977',
        info: 'The cover art features singer Stevie Nicks and drummer Mick Fleetwood. The black and white photo was shot by Herbert Worthington. And yes, Mick is wearing two wooden balls between his legs.',
        spotify: 'https://open.spotify.com/album/1bt6q2SruMsBtcerNVtpZB?si=HmXE1cIBQae5TMISk0-6jQ',
        applemusic: 'https://music.apple.com/ee/album/rumours/594061854',
    },
    Aug52022: {
        date: todaysDate,
        artist: 'Bruce Springsteen',
        artist2: 'Bruce Springsteen',
        album: 'Born in the USA',
        album2: 'Born in the U.S.A.',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1984',
        info: 'Springsteen\'s butt, blue jeans and american flag. Shot by legendary photographer Annie Leibovitz.',
        spotify: 'https://open.spotify.com/album/0PMasrHdpaoIRuHuhHp72O?si=-PPHAdLERXKS9q22fE7E-Q',
        applemusic: 'https://music.apple.com/ee/album/born-in-the-u-s-a/203708420',
    },
    Aug62022: {
        date: todaysDate,
        artist: 'Aphex Twin',
        artist2: 'Aphex Twin',
        album: 'Selected Ambient Works 85-92',
        album2: 'Selected ambient works',
        hint1: 'Genre: Electronic',
        hint2: 'Release date: 1992',
        info: 'The album\'s sleeve prominently displays the Aphex Twin symbol, designed by Paul Nicholson who was also a stage dancer at several of James\'s live gigs around this period. Nicholson stated that the duo\'s intention for the logo was to be an "amorphic and soft form with no sharp lines".',
        spotify: 'https://open.spotify.com/album/7aNclGRxTysfh6z0d8671k?si=BgmMi34VQOKTcsREw1yIZA',
        applemusic: 'https://music.apple.com/ee/album/selected-ambient-works-85-92/1108845101',
    },
    Aug72022: {
        date: todaysDate,
        artist: 'N.W.A',
        artist2: 'NWA',
        album: 'Straight Outta Compton',
        album2: 'Straight out of Compton',
        hint1: 'Genre: Hip Hop',
        hint2: 'Release date: 1988',
        info: 'This, now iconic cover photo was shot by Eric Poppleton. He and the group were just wandering the streets and trying different locations. At one point, they strolled down an alley. Poppleton hopped on the ground. "We were just trying stuff. It wasn\'t lit. It was raw, just like those guys," he says. "Photographically, I just laid on the ground and looked up and all these guys stood over me with a gun." (Source: CNN)',
        spotify: 'https://open.spotify.com/album/0Y7qkJVZ06tS2GUCDptzyW?si=tyoqODFOT5m4xzzZY6sgJQ',
        applemusic: 'https://music.apple.com/ee/album/straight-outta-compton/1440816032',
    },
    Aug82022: {
        date: todaysDate,
        artist: 'Prince And The Revolution',
        artist2: 'Prince',
        album: 'Purple Rain',
        album2: 'Purple Rain',
        hint1: 'Genre: Rock, Funk / Soul, Pop',
        hint2: 'Release date: 1984',
        info: 'The album cover was photographed at the Warner Bros Studio Backlot in California. The area known as Hennesy St, designed to look like a New York tenement area, was the location of the balcony where the album photo was taken.',
        spotify: 'https://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc?si=DSgHCJ56TDCAA-GPHPT7Xw',
        applemusic: 'https://music.apple.com/ee/album/purple-rain-soundtrack-2015-paisley-park-remaster/214145442',
    },
    Aug92022: {
        date: todaysDate,
        artist: 'Billie Eilish',
        artist2: 'Billie Eilish',
        album: 'Happier than ever',
        album2: 'Happier than ever',
        hint1: 'Genre: Electronic, Rock, Pop',
        hint2: 'Release date: 2021',
        info: 'There\'s also an alternative cover of this release, where Eilish teamed up with Italian fashion house Gucci for an eco-friendly limited edition vinyl. It was designed by Alessandro Michele and has a "psychedelic pattern" in the background.',
        spotify: 'https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp?si=G4KPaDOcQ0Kw9PKF_cUKPQ',
        applemusic: 'https://music.apple.com/ee/album/happier-than-ever/1564530719',
    },
    Aug102022: {
        date: todaysDate,
        artist: 'Joy Division',
        artist2: 'Joy Division',
        album: 'Unknown Pleasures',
        album2: 'Unknown Pleasures',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1979',
        info: 'Designed by Factory Records co-founder Peter Saville. The cover image is a “stacked plot” of the radio emissions given out by a pulsar, a “rotating neutron star”. Originally named CP 1919, the pulsar was discovered in November 1967 by student Jocelyn Bell Burnell and her supervisor Antony Hewish at Cambridge University.',
        spotify: 'https://open.spotify.com/album/5Dgqy4bBg09Rdw7CQM545s?si=VqF6q0PETwWQZAeeGLem9A',
        applemusic: 'https://music.apple.com/ee/album/unknown-pleasures-2019-master/1476702180',
    },
    Aug112022: {
        date: todaysDate,
        artist: 'Lorde',
        artist2: 'Lorde',
        album: 'Solar Power',
        album2: 'Solar Power',
        hint1: 'Genre: Pop',
        hint2: 'Release date: 2021',
        info: 'In an interview with Stephen Colbert, Lorde revealed that the album cover was photographed by her friend Ophelia on the beach while she jumped over them. Colbert could not show the cover on TV, with Lorde saying that it is "a little hardcore, but it was so joyful to me" and "a little bit feral". In some markets, including mainland China, Hong Kong, Japan, Saudi Arabia, and the United Arab Emirates, Lorde\'s buttocks are censored by a bright sunlight lens flare.',
        spotify: 'https://open.spotify.com/album/3lK2JRwfIOn2NaYtgEGTmZ?si=IOGpNs8BSXG_SGuBx43e6Q',
        applemusic: 'https://music.apple.com/ee/album/solar-power-deluxe-edition/1592682009',
    },
    Aug122022: {
        date: todaysDate,
        artist: 'Queen',
        artist2: 'Queen',
        album: 'Queen II',
        album2: 'II',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1974',
        info: 'Probably the most famous image of the band, which would later be brought to life for the "Bohemian Rhapsody" music video. It was inspired by a similar photograph of Marlene Dietrich from the 1932 film Shanghai Express. Shot by Mick Rock.',
        spotify: 'https://open.spotify.com/album/48MhNEYxMJvcBbqz85UTQP?si=914r-891QxWx0XwrDbfmlw',
        applemusic: 'https://music.apple.com/ee/album/queen-ii-deluxe-edition/1441458110',
    },
    Aug132022: {
        date: todaysDate,
        artist: 'Madvillain',
        artist2: 'Madvillain',
        album: 'Madvillainy',
        album2: 'Madvillainy',
        hint1: 'Genre: Hip Hop',
        hint2: 'Release date: 2004',
        info: 'The cover photo was created by photographer Eric Coleman and edited by Stones Throw\'s art director Jeff Jank. While working on the Madvillainy album cover, Jank drew inspiration from King Crimson\'s In the Court of the Crimson King artwork, however, following its completion, he noticed the artwork eerily resembled Madonna\'s Madonna artwork. Despite this, Jank stuck with the original artwork, labeling it as the "rap version of Beauty and the Beast". A small orange square was added to the final version of Madvillainy, due to Jank\'s thinking that the artwork "needed something distinctive", comparing it to the orange "O" on the Madonna cover.',
        spotify: 'https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk?si=BwJ1np0aTZSmLzRvjjHZyw',
        applemusic: 'https://music.apple.com/ee/album/madvillainy/887699504',
    },
    Aug142022: {
        date: todaysDate,
        artist: 'The Human League',
        artist2: 'Human League',
        album: 'Dare',
        album2: 'Dare!',
        hint1: 'Genre: Electronic, Pop',
        hint2: 'Release date: 1981',
        info: 'The cover art and other album artwork is based on an issue of Vogue. The final design is a joint effort between Philip Adrian Wright (also the band\'s director of visuals) and graphic designer Ken Ansell. Its typography closely resembles the cover of Vogue\'s April 1979 issue, which inspired the album\'s title.',
        spotify: 'https://open.spotify.com/album/3ls7tE9D2SIvjTmRuEtsQY?si=1I0GCrj8Qn6RrzKYbCOxAg',
        applemusic: 'https://music.apple.com/ee/album/dare-love-and-dancing/724302878',
    },
    Aug152022: {
        date: todaysDate,
        artist: 'The Beach Boys',
        artist2: 'Beach Boys',
        album: 'Pet Sounds',
        album2: 'Pet Sounds',
        hint1: 'Genre: Rock, Pop',
        hint2: 'Release date: 1966',
        info: 'Just the boys feeding some goats in the zoo. Apparently the band members did not like that cover very much. Photo was shot by George Jerman and texts are written in Cooper Black font (Vox has a really good short-film of Cooper on YouTube)',
        spotify: 'https://open.spotify.com/album/6GphKx2QAPRoVGWE9D7ou8?si=pmIqrzm-RyucCmBP5Pgb6w',
        applemusic: 'https://music.apple.com/ee/album/pet-sounds/1440841241',
    },
    Aug162022: {
        date: todaysDate,
        artist: 'Taylor Swift',
        artist2: 'Taylor Swift',
        album: '1989',
        album2: '1989',
        hint1: 'Genre: Pop',
        hint2: 'Release date: 2014',
        info: 'As creative director for the album\'s packaging, Swift included pictures taken with a Polaroid instant camera. Polaroid Corporation chief executive Scott Hardy reported that the 1989 Polaroid concept propelled a revival in instant film.',
        spotify: 'https://open.spotify.com/album/5fy0X0JmZRZnVa2UEicIOl?si=fHLGQWojSa-367bCrhLK_w',
        applemusic: 'https://music.apple.com/ee/album/1989/1445888258',
    },
    Aug172022: {
        date: todaysDate,
        artist: 'David Bowie',
        artist2: 'David Bowie',
        album: '“Heroes”',
        album2: 'Heroes',
        hint1: 'Genre: Electronic, Rock',
        hint2: 'Release date: 1977',
        info: 'The cover photo was taken by Japanese photographer Masayoshi Sukita. Like the artwork for Iggy Pop\'s The Idiot, the cover is a nod to German artist Erich Heckel\'s paintings Roquairol and Young Man. Pegg describes Bowie\'s pose as "a wild-eyed Bowie locked in a rigid pose of serio-comic agitation, raising a flat palm as though he has just mimetically lifted the final mask of artifice from his face." Bowie said that the quotation marks in the title "indicate a dimension of irony about the word \'heroes\' or about the whole concept of heroism".',
        spotify: 'https://open.spotify.com/album/4I5zzKYd2SKDgZ9DRf5LVk?si=m7ba9HUNTbyMassXPa2_LA',
        applemusic: 'https://music.apple.com/ee/album/heroes-2017-remaster/1347894082',
    },
    Aug182022: {
        date: todaysDate,
        artist: 'Stevie Wonder',
        artist2: 'Stevie Wonder',
        album: 'Songs In The Key Of Life',
        album2: 'Songs In The Key Of Life',
        hint1: 'Genre: Funk/Soul',
        hint2: 'Release date: 1976',
        info: 'Not much info on that cover, which is weird, given how influential and famous this album is. For example Wikipedia lists 8 people responsible only for handclaps. AllMusic credits the illustration to Tony Warren. On his page, it\'s the only credit for illustration work — others mostly include background vocals and composing.',
        spotify: 'https://open.spotify.com/album/6YUCc2RiXcEKS9ibuZxjt0?si=YyunZ_V8QTaClF-YqhzAog',
        applemusic: 'https://music.apple.com/ee/album/songs-in-the-key-of-life/1440788438',
    },
    Aug192022: {
        date: todaysDate,
        artist: 'Rage Against The Machine',
        artist2: 'Rage Against The Machine',
        album: 'Rage Against The Machine',
        album2: 'Rage Against The Machine',
        hint1: 'Genre: Rock, Hip Hop',
        hint2: 'Release date: 1992',
        info: 'The cover features a crop of Malcolm Browne\' famous photograph of the self-immolation of Thích Quảng Đức, a Vietnamese Buddhist monk, in Saigon in 1963. The monk was protesting President Ngô Đình Diệm\'s administration for oppressing the Buddhist religion. The photograph drew international attention and persuaded U.S. President John F. Kennedy to withdraw support for Diệm\'s government. In 1963, Associated Press correspondent Browne\'s coverage of the event earned the World Press Photo of the Year award.',
        spotify: 'https://open.spotify.com/album/4LaRYkT4oy47wEuQgkLBul?si=eFlUkL7qTveQBpJysbG5KA',
        applemusic: 'https://music.apple.com/ee/album/rage-against-the-machine/191450810',
    },
    Aug202022: {
        date: todaysDate,
        artist: 'Sex Pistols',
        artist2: 'Sex Pistols',
        album: 'Never mind the bollocks here\'s the Sex Pistols',
        album2: 'Never mind the bollocks',
        hint1: 'Genre: Punk',
        hint2: 'Release date: 1977',
        info: 'The title of the album created a lot of stir at the time. Record shops were prohibited to showcase the album sleeve or posters and cover up the word "bollocks". Sex Pistols\' and the overall punk movement aesthetics can be credited largely to fashion designers Malcolm McLaren and Vivienne Westwood.',
        spotify: 'https://open.spotify.com/album/6ggO3YVhyonYuFWUPBRyIv?si=EhvNMHHzT2-eRexjztcmCw',
        applemusic: 'https://music.apple.com/ee/album/never-mind-the-bollocks-heres-the-sex-pistols/1440810369',
    },
    Aug212022: {
        date: todaysDate,
        artist: 'FKA Twigs',
        artist2: 'FKA Twigs',
        album: 'LP1',
        album2: 'LP 1',
        hint1: 'Genre: Electronic',
        hint2: 'Release date: 2014',
        info: 'This heavily manipulated portrait of Tahliah Barnett (FKA Twigs) is made by Jesse Kanda. The style feels like a weird mix of porcelain dolls and manga characters — which somehow visualizes her music quite well. They worked together on music videos as well.',
        spotify: 'https://open.spotify.com/album/25PQxi9SR1OODB5XG6m48J?si=KBn9zGuFQRCNm5t-r7vZKA',
        applemusic: 'https://music.apple.com/ee/album/lp1/1540694437',
    },
    Aug222022: {
        date: todaysDate,
        artist: 'Adele',
        artist2: 'Adele',
        album: '21',
        album2: '21',
        hint1: 'Genre: Jazz, Funk / Soul, Blues, Pop',
        hint2: 'Release date: 2011',
        info: 'Photographed by Lauren Dukhoff. She works almost exclusively with the medium format film camera (Mamiya 645).',
        spotify: 'https://open.spotify.com/album/5duyQokC4FMcWPYTV9Gpf9?si=BzoxcAW4SHmR-tRJKIA_ng',
        applemusic: 'https://music.apple.com/ee/album/21/403037872',
    },
    Aug232022: {
        date: todaysDate,
        artist: 'Blink 182',
        artist2: 'Blink-182',
        album: 'Enema of the state',
        album2: 'Enema of the state',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1999',
        info: 'The cover artwork features porn star Janine Lindemulder dressed in a nurse uniform, pulling on a rubber glove. The trio was oblivious to the fact that Lindemulder worked in the porn industry. The original cover had a red cross on the hat, but this was removed on the pressure of American Red Cross.',
        spotify: 'https://open.spotify.com/album/652N05EcNH1a4bIlUixQE2?si=xYInHoEQTHOuj6HmKIaegw',
        applemusic: 'https://music.apple.com/ee/album/enema-of-the-state/1440839912',
    },
    Aug242022: {
        date: todaysDate,
        artist: 'Marvin Gaye',
        artist2: 'Marvin Gaye',
        album: 'What\'s going on',
        album2: 'What’s going on',
        hint1: 'Genre: Funk / Soul',
        hint2: 'Release date: 1971',
        info: 'The cover was designed by Motown art director Curtis McNair and photographed by Jim Hendin. McNair designed more than a hundred album covers in his role as Motown’s art director. In an interview for The Charlotte Observer, McNair was asked to choose the cover of which he is most proud, and immediately named What’s Going On.',
        spotify: 'https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B?si=JVPAy9YeRyyMYvsp2dQUdg',
        applemusic: 'https://music.apple.com/ee/album/whats-going-on/1538081586',
    },
    Aug252022: {
        date: todaysDate,
        artist: 'The Streets',
        artist2: 'Streets',
        album: 'Original pirate material',
        album2: 'Original pirate material',
        hint1: 'Genre: Electronic, Hip Hop, UK Garage',
        hint2: 'Release date: 2002',
        info: 'The cover artwork depicts the south face of the Kestrel House tower block on City Road, London at night. The photo was taken in 1995 by German photographer Rut Blees Luxemburg using an eight-minute exposure. It also features The Streets lighter logo. Each of his albums has one, but in different color and it has always been a Clipper lighter. While touring, they sold them as a merchandise.',
        spotify: 'https://open.spotify.com/album/0hkZGxfsFypXbjq15hM6U9?si=R2ty4xl6Rxm-rooqg0fRXQ',
        applemusic: 'https://music.apple.com/ee/album/original-pirate-material/63836809',
    },
    Aug262022: {
        date: todaysDate,
        artist: 'Rihanna',
        artist2: 'Rihanna',
        album: 'Anti',
        album2: 'Anti',
        hint1: 'Genre: R&B, Hip Hop, Pop',
        hint2: 'Release date: 2016',
        info: '“Anti” cover art is part of a series of artworks called “Blind” and made by Israeli-born artist Roy Nachum. Most of Nachum’s works include subjects with obstructed eyesight and corresponding messages in Braille.',
        spotify: 'https://open.spotify.com/album/4UlGauD7ROb3YbVOFMgW5u?si=DLR8gTrPT_KYtm6AhrWPtA',
        applemusic: 'https://music.apple.com/ee/album/anti-deluxe/1440933869',
    },
    Aug272022: {
        date: todaysDate,
        artist: 'Depeche Mode',
        artist2: 'Depeche Mode',
        album: 'Violator',
        album2: 'Violator',
        hint1: 'Genre: Electronic, Synth-Pop',
        hint2: 'Release date: 1990',
        info: 'This cover art was made by Depeche Mode\'s long-time collaborator Anton Corbijn. In his own words: “With Violator, I just painted a flower red and nailed it to a board and wrote under it \'Violator\'.” He’s also responsible for quite a lot of music videos for them.',
        spotify: 'https://open.spotify.com/album/0Tg76MY2wNK4j37iCb6qyH?si=78gnqBcoQLK9VgSL9b_CVA',
        applemusic: 'https://music.apple.com/ee/album/violator-deluxe/1174246686',
    },
    Aug282022: {
        date: todaysDate,
        artist: 'Kanye West',
        artist2: 'Kanye West',
        album: 'My beautiful dark twisted fantasy',
        album2: 'My beautiful dark twisted fantasy',
        hint1: 'Genre: Hip Hop',
        hint2: 'Release date: 2010',
        info: 'Virgil Abloh grabs the credits as Art Director for this one. The painting is made by American visual artist George Condo, who works in painting, drawing, sculpture and printmaking. The final design has been censored/pixelated and resembles quite a lot of this game. Condo also produced four alternate copies of the album cover that, although not included on the actual cover of the record, came included with certain productions of the record on vinyl and as individual posters.',
        spotify: 'https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv?si=GxQvr3CDTLWKDhDhSlHOJw',
        applemusic: 'https://music.apple.com/ee/album/my-beautiful-dark-twisted-fantasy/1440742903',
    },
    Aug292022: {
        date: todaysDate,
        artist: 'The Jimi Hendrix Experience',
        artist2: 'Jimi Hendrix Experience',
        album: 'Electric Ladyland',
        album2: 'Electric Ladyland',
        hint1: 'Genre: Rock',
        hint2: 'Release date: 1968',
        info: 'Hendrix had written to Reprise Records describing what he wanted for the cover art, but was mostly ignored. The company instead used a blurred red and yellow photo of his head while performing at Saville Theatre, taken by Karl Ferris. The intended artwork for the UK version of the album did not arrive in time to press the album, so a cover of 19 nude women lounging in front of a black background was issued from David Montgomery in its place.',
        spotify: 'https://open.spotify.com/album/5z090LQztiqh13wYspQvKQ?si=lNKh58UfS-qDKsR7TY8yMQ',
        applemusic: 'https://music.apple.com/ee/album/electric-ladyland/357652252',
    },
    Aug302022: {
        date: todaysDate,
        artist: 'The Beastie Boys',
        artist2: 'Beastie Boys',
        album: 'Hello Nasty',
        album2: 'Hello Nasty',
        hint1: 'Genre: Hip Hop, Electronic',
        hint2: 'Release date: 1998',
        info: 'The cover art makes a reference to a song on the album called “Body Movin'", in which the lyric goes, \"MCA, where have you been? Packed like sardines in a tin.” Art director for this was Cey Adams, who co-founded the Drawing Board, Def Jam Recording's in-house visual design firm overseeing the visual style of Def Jam's artists as well as artists signed to MCA, Universal, Warner Bros., Bad Boy and BMG. He started out as a graffiti artist and was also featured in the legendary PBS documentary “Style Wars”.',
        spotify: 'https://open.spotify.com/album/6eGYLONkDMja0MNtZWnRRB?si=SGv2LOKRTKeji5jQfrCJ6w',
        applemusic: 'https://music.apple.com/ee/album/hello-nasty-deluxe/721224205',
    },
}
let todaysData = Data[todaysDate];
export default todaysData;