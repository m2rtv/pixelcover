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
    Nov232022: {
        date: todaysDate,
        artist: 'Pet Shop Boys',
        artist2: 'Pet Shop Boys',
        album: 'Actually',
        album2: 'Actually',
        hint1: 'Genre: Synth-Pop',
        hint2: 'Country: England',
        hint3: 'Release date: 1987',
        info: 'Designed by Pet Shop Boys’ long time collaborator Mark Farrow (@farrowlondon). Cover photo by Cindy Palmano. Although not released as a single, the track "Shopping" is frequently featured as background music in British television news and current affairs programmes dealing with retail business issues and as bumper music on home shopping shows. This is despite the fact that the song is actually a critique of privatisation in 1980s Britain, and has little to do with actual shopping.',
        spotify: 'https://open.spotify.com/album/0p5QwhEke5P9mFY4CY9u4j?si=WwsS1dlVTmOt_8P9HrH8fw',
        applemusic: 'https://music.apple.com/ee/album/actually-2018-remaster/1645128416',
    },
    Nov242022: {
        date: todaysDate,
        artist: 'Public Enemy',
        artist2: 'Public Enemy',
        album: 'It Takes a Nation of Millions to Hold Us Back',
        album2: 'It Takes a Nation',
        hint1: 'Genre: Hip Hop',
        hint2: 'Country: US',
        hint3: 'Release date: 1988',
        info: '#15, and highest Hip Hop album in the Rolling Stones’ “500 greatest albums of all time” list. Cover photo by American photographer Glen E. Friedman who has worked with punk and hip hop artists like Black Flag, Dead Kennedys, Beastie Boys, Run-DMC, to name a few.',
        spotify: 'https://open.spotify.com/album/03Mx6yaV7k4bsEmcTH8J49?si=471Ah5X-QeObDgJJPoGyaA',
        applemusic: 'https://music.apple.com/ee/album/it-takes-a-nation-of-millions-to-hold-us-back/1440837788',
    },
    Nov252022: {
        date: todaysDate,
        artist: 'Radiohead',
        artist2: 'Radiohead',
        album: 'Kid A',
        album2: 'Kid A',
        hint1: 'Genre: Electronic, Alternative Rock',
        hint2: 'Country: UK',
        hint3: 'Release date: 2000',
        info: 'The Kid A artwork and packaging was created by Thom Yorke with Stanley Donwood, who has worked with Radiohead since their 1994 EP My Iron Lung. Donwood painted on large canvases with knives and sticks, then photographed the paintings and manipulated them with Photoshop. While working on the artwork, Yorke and Donwood became "obsessed" with the Worldwatch Institute website, which was full of "scary statistics about ice caps melting, and weather patterns changing"; this inspired them to use an image of a mountain range as the cover art.',
        spotify: 'https://open.spotify.com/album/6GjwtEZcfenmOf6l18N7T7?si=IVtGhgEDRtuJJK-izC-ksg',
        applemusic: 'https://music.apple.com/ee/album/kid-a/1097862870',
    },
    Nov262022: {
        date: todaysDate,
        artist: 'Solange',
        artist2: 'Solange',
        album: 'A Seat At The Table',
        album2: 'Seat At The Table',
        hint1: 'Genre: Neo Soul',
        hint2: 'Country: US',
        hint3: 'Release date: 2016',
        info: 'From the interview with her sister Beyoncé, Solange said about the cover: "I wanted to create an image that invited people to have an up-close and personal experience—and that really spoke to the album title—that communicated, through my eyes and my posture, like, “Come and get close. It’s not going to be pretty. It’s not going to be perfect. It’s going to get a little gritty, and it might get a little intense, but it’s a conversation we need to have.” I wanted to nod to the Mona Lisa and the stateliness, the sternness that that image has.”',
        spotify: 'https://open.spotify.com/album/3Yko2SxDk4hc6fncIBQlcM?si=A9i2LbiPRIGnfa7KXN5OHQ',
        applemusic: 'https://music.apple.com/ee/album/a-seat-at-the-table/1159507212',
    },
    Nov272022: {
        date: todaysDate,
        artist: 'Mike Oldfield',
        artist2: 'Mike Oldfield',
        album: 'Tubular Bells',
        album2: 'Tubular Bells',
        hint1: 'Genre: Progressive Rock',
        hint2: 'Country: UK',
        hint3: 'Release date: 1973',
        info: 'The cover of Tubular Bells was created by designer and photographer Trevor Key. The backdrop was photographed in Sussex, England and the triangular "bent bell" on the front was inspired by the damage Oldfield had caused to the tubular bells while playing them on the record. Key was paid £100 for his work, but he went on to design several other sleeves for Virgin and Factory Records artists.',
        spotify: 'https://open.spotify.com/album/0a3YQpBnRzJzNktOjb6Dum?si=xN5__0FAQ-C7juF2X0iU5Q',
        applemusic: 'https://music.apple.com/ee/album/tubular-bells/1440852773',
    },
    Nov282022: {
        date: todaysDate,
        artist: 'Nine Inch Nails',
        artist2: 'NIN',
        album: 'The Downward Spiral',
        album2: 'The Downward Spiral',
        hint1: 'Genre: Industrial Rock, ALternative Rock',
        hint2: 'Country: US (Ohio)',
        hint3: 'Release date: 1994',
        info: 'When Trent Reznor contacted British collagist Russell Mills in 1994 about creating a cover for The Downward Spiral, he had a list of words he wanted the art to evoke. Chief among them were "attrition," "wound," and "decay”. The result you see here is made of plaster, acrylics, oils, rusted metals, insects, moths, Mills’ blood, wax, varnishes, and surgical bandaging on a wooden panel.',
        spotify: 'https://open.spotify.com/album/5I7lLu8xXJfGRdFUqHaLQU?si=AgNlsFZKS4acFlTXmh671Q',
        applemusic: 'https://music.apple.com/ee/album/the-downward-spiral-deluxe-edition/1418210351',
    },
    Nov292022: {
        date: todaysDate,
        artist: 'Outkast',
        artist2: 'Outcast',
        album: 'Aquemini',
        album2: 'Aquemini',
        hint1: 'Genre: Hip Hop, Southern Hip Hop',
        hint2: 'Country: US (Atlanta, Georgia)',
        hint3: 'Release date: 1998',
        info: 'Illustrated by Greg Hawkins, designed and art directed by LaFace Records in-house designer D.L. Warfield. The former has worked on many covers for the record label — for TLC, Toni Braxton, Usher etc.',
        spotify: 'https://open.spotify.com/album/5ceB3rxgXqIRpsOvVzTG28?si=bqhrtqZLT9GYfIqi5ZsyCw',
        applemusic: 'https://music.apple.com/ee/album/aquemini/266365274',
    },
    Nov302022: {
        date: todaysDate,
        artist: 'Taylor Swift',
        artist2: 'Taylor Swift',
        album: 'Midnights',
        album2: 'Midnights (3am Edition)',
        hint1: 'Genre: Pop',
        hint2: 'Country: US',
        hint3: 'Release date: 2022',
        info: 'The standard cover artwork takes inspiration from old-fashioned LP jackets whose songs were listed on the front cover. The typeface used here is Neue Haas Grotesk. Three limited-edition color variants of the physical album, featuring different cover artworks were also issued. Photographed by Beth Garrabrant (@bethgarrabrant)',
        spotify: 'https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=423W60w5T7mIcDUORUCV-w',
        applemusic: 'https://music.apple.com/ee/album/midnights/1649434004',
    },
    Dec12022: {
        date: todaysDate,
        artist: 'Beastie Boys',
        artist2: 'Beastie Boys',
        album: 'Check Your Head',
        album2: 'Check Your Head',
        hint1: 'Genre: Hip Hop, Rap Rock',
        hint2: 'Country: US',
        hint3: 'Release date: 1992',
        info: 'The album was somewhat of a return by the Beastie Boys to their punk roots. It featured the trio playing their own instruments on the majority of the album, for the first time on record since their early EPs, due to the commercial failure of Paul’s Boutique. This inspired photographer Glen E. Friedman to shoot photos of the Beasties with their instrument cases, one of which was used as the cover of the album.',
        spotify: 'https://open.spotify.com/album/7CSP7J60QKIBCqOV64qILq?si=JHAmELEHTxCGx-cRrhVuLw',
        applemusic: 'https://music.apple.com/ee/album/check-your-head-deluxe-version-remastered/724303425',
    },
    Dec22022: {
        date: todaysDate,
        artist: 'The Jimi Hendrix Experience',
        artist2: 'Jimi Hendrix',
        album: 'Axis: Bold As Love',
        album2: 'Axis',
        hint1: 'Genre: Psychedelic Rock',
        hint2: 'Country: US',
        hint3: 'Release date: 1967',
        info: 'The album cover depicts Hendrix and the Experience as various forms of Vishnu, incorporating a painting of the musicians by Roger Law, from a photo-portrait by Karl Ferris. Hendrix expressed dismay at the choice of cover art. He stated that the cover would have been more appropriate had it highlighted his Native American heritage. Also, some Hindus have since expressed anger over the use of religious images for the album’s artwork.',
        spotify: 'https://open.spotify.com/album/3uFZf8rykoHo7XMIQVYW6r?si=KzVVrZK8RIGAEF4po6qK-g',
        applemusic: 'https://music.apple.com/ee/album/axis-bold-as-love/344562307',
    },
    Dec32022: {
        date: todaysDate,
        artist: 'Spice Girls',
        artist2: 'Spice Girls',
        album: 'Spice',
        album2: 'Spice',
        hint1: 'Genre: Pop',
        hint2: 'Country: UK',
        hint3: 'Release date: 1996',
        info: '“Spice” is considered to be the record that brought teen pop back, opening the doors for a wave of teen pop artists. Conceptually, the album centered on the idea of Girl Power, and the hype surrounding the group was compared to Beatlemania (it was dubbed "Spicemania").',
        spotify: 'https://open.spotify.com/album/3x2jF7blR6bFHtk4MccsyJ?si=UuumCxZVSeO1h5oewyHXXQ',
        applemusic: 'https://music.apple.com/ee/album/spice/723398173',
    },
    Dec42022: {
        date: todaysDate,
        artist: 'George Michael',
        artist2: 'George Michael',
        album: 'Faith',
        album2: 'Faith',
        hint1: 'Genre: Pop, Funk/Soul, Synth-Pop, Pop Rock',
        hint2: 'Country: UK',
        hint3: 'Release date: 1987',
        info: 'Cover photo by Russell Young. The symbols below the album name stand for: Faith, Music, Money, Religion, Love.',
        spotify: 'https://open.spotify.com/album/34K1Kvskt9arWy8E1Gz3Lw?si=Iaq2FzFDTdyh-ij9UhEXBQ',
        applemusic: 'https://music.apple.com/ee/album/faith-2010-remaster/395918916',
    },
    Dec52022: {
        date: todaysDate,
        artist: 'Dr. Dre',
        artist2: 'Dr Dre',
        album: 'The Chronic',
        album2: 'Chronic',
        hint1: 'Genre: Hip Hop, Gangsta Rap',
        hint2: 'Country: US (Los Angeles, California)',
        hint3: 'Release date: 1992',
        info: 'Designed by Kimberly Holt, the cover is an homage to Zig-Zag rolling papers.',
        spotify: '',
        applemusic: '',
    },
    Dec62022: {
        date: todaysDate,
        artist: 'Daft Punk',
        artist2: 'Daft Punk',
        album: 'Homework',
        album2: 'Homework',
        hint1: 'Genre: House, Techno, Disco',
        hint2: 'Country: France',
        hint3: 'Release date: 1997',
        info: 'The artwork for the front cover and inner sleeve was conceived by Daft Punk, photographed by artist and film producer Nicolas Hidiroglou. Homem-Christo had previously designed the Daft Punk wordmark, which was the basis for this image.',
        spotify: 'https://open.spotify.com/album/5uRdvUR7xCnHmUW8n64n9y?si=a8CejEX7SK2njoV9s7GsTw',
        applemusic: 'https://music.apple.com/ee/album/homework/696884422',
    },
    Dec72022: {
        date: todaysDate,
        artist: 'Black Sabbath',
        artist2: 'Black Sabbath',
        album: 'Master Of Reality',
        album2: 'Masters Of Reality',
        hint1: 'Genre: Heavy Metal, Doom Metal',
        hint2: 'Country: England',
        hint3: 'Release date: 1971',
        info: 'The first editions of Master of Reality came in an “envelope sleeve” containing a poster of the band, and with the album’s title embossed in black lettering, visible in relief. On the first North American editions of the album incorrectly listed the album title as Masters of Reality. Art Director: Mike Stanford',
        spotify: 'https://open.spotify.com/album/3kBG6q0aXKxzn01wKTwZr5?si=4kNylw7kQ82KvrfD2Zk_MA',
        applemusic: 'https://music.apple.com/ee/album/master-of-reality-2009-remastered-version/1193822439',
    },
    Dec82022: {
        date: todaysDate,
        artist: 'Madonna',
        artist2: 'Madonna',
        album: 'Madonna',
        album2: 'Madonna',
        hint1: 'Genre: Pop, Synth-Pop',
        hint2: 'Country: US',
        hint3: 'Release date: 1983',
        info: 'The album cover was shot by photographer Gary Heery and directed by Carin Goldberg. The album was re-released in 1985 for the European market and re-packaged as Madonna: The First Album with a different artwork created by photographer George Holy. The cover features Madonna in similar style of dress to the original cover but this time with crucifix as her earrings.',
        spotify: 'https://open.spotify.com/album/1DWWb4Q39mp1T3NgyscowF?si=yBOGU3YERuWrTrEKTWolVA',
        applemusic: 'https://music.apple.com/ee/album/madonna-bonus-tracks-2001-remaster/80815644',
    },
    Dec92022: {
        date: todaysDate,
        artist: 'David Bowie',
        artist2: 'David Bowie',
        album: 'David Bowie',
        album2: 'Space Oddity',
        hint1: 'Genre: Rock, Psychedelic Rock',
        hint2: 'Country: UK',
        hint3: 'Release date: 1969',
        info: 'The original UK cover artwork features a photograph by British photographer Vernon Dewhurst, exposed on top of a work by Victor Vasarely — a Hungarian-French artist, who is widely accepted as a "grandfather" and leader of the Op art movement. The artwork, was designed by Bowie and Lee, who enthusiastically collected Vasarely’s works.',
        spotify: 'https://open.spotify.com/album/1ay9Z4R5ZYI2TY7WiDhNYQ?si=8C2YeIprQnOu5We72Ch9LA',
        applemusic: 'https://music.apple.com/ee/album/david-bowie-2015-remaster/1039799506',
    },
    Dec112022: {
        date: todaysDate,
        artist: 'Coldplay',
        artist2: 'Coldplay',
        album: 'Viva la Vida or Death and All His Friends',
        album2: 'Viva la Vida',
        hint1: 'Genre: Rock, Pop Rock',
        hint2: 'Country: UK',
        hint3: 'Release date: 2008',
        info: 'Viva la Vida takes its artwork from Eugène Delacroix’s 1830 painting Liberty Leading the People.',
        spotify: 'https://open.spotify.com/album/1CEODgTmTwLyabvwd7HBty?si=9wxa4lYsTf-tpLOK_C8PQA',
        applemusic: 'https://music.apple.com/ee/album/viva-la-vida-or-death-and-all-his-friends/1122773394',
    },
    Dec122022: {
        date: todaysDate,
        artist: 'The Chemical Brothers',
        artist2: 'Chemical Brothers',
        album: 'Push the Button',
        album2: 'Push the Button',
        hint1: 'Genre: Electronic/Dance, Big Beat',
        hint2: 'Country: UK',
        hint3: 'Release date: 2005',
        info: 'Inspired by the protest posters of the past, this cover was illustrated by Kam Tang. Art Directed by a graphic design duo Tappin Gofton (Mark Tappin and Simon Gofton), who did the previous Coldplay “Viva la Vida” album as well.',
        spotify: 'https://open.spotify.com/album/715rku55lldqdw9WiEuPgi?si=3X8ytvhSSXyIamTq5wuVZQ',
        applemusic: 'https://music.apple.com/ee/album/push-the-button/724514728',
    },
    Dec132022: {
        date: todaysDate,
        artist: '2Pac',
        artist2: '2 Pac',
        album: 'All Eyez on Me',
        album2: 'All Eyes on Me',
        hint1: 'Genre: Hip Hop',
        hint2: 'Country: US',
        hint3: 'Release date: 1996',
        info: 'All Eyez on Me was the second album by 2Pac to chart at number one on both the Billboard 200 and the Top R&B/Hip-Hop Albums charts, selling 566,000 copies in the first week. Seven months later, 2Pac was fatally wounded in a drive-by shooting. Cover photograph shot by Ken Nahoum.',
        spotify: 'https://open.spotify.com/album/78iX7tMceN0FsnmabAtlOC?si=7qTtIqJ-SwitPqEzdHtA2w',
        applemusic: 'https://music.apple.com/ee/album/all-eyez-on-me/1588480719',
    },
    Dec142022: {
        date: todaysDate,
        artist: 'Portishead',
        artist2: 'Portishead',
        album: 'Dummy',
        album2: 'Dummy',
        hint1: 'Genre: Trip Hop, Downtempo',
        hint2: 'Country: UK',
        hint3: 'Release date: 1994',
        info: 'The cover of the album is a still image of vocalist Beth Gibbons taken from To Kill a Dead Man—the short film that the band created—for which the self-composed soundtrack earned the band its record contract.',
        spotify: 'https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno?si=wA2LFM0mSPOZEWRaLCyzpA',
        applemusic: 'https://music.apple.com/ee/album/dummy/1440653096',
    },
    Dec152022: {
        date: todaysDate,
        artist: 'Bad Bunny',
        artist2: 'Bad Bunny',
        album: 'Un Verano Sin Ti',
        album2: 'Un Verano Sin Ti',
        hint1: 'Genre: Reggaeton, Pop Rap, Pop',
        hint2: 'Country: Puerto Rico',
        hint3: 'Release date: 2022',
        info: 'If you follow Spotify’s streaming lists, you’ve probably seen this album cover week in and out. Boasting with a whopping 9,914,668,592 streams as of today, this all-Spanish language LP is one of the most streamed albums out there.',
        spotify: 'https://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5?si=0ltOhEQQRQ2TZJhn6txgfQ',
        applemusic: 'https://music.apple.com/ee/album/un-verano-sin-ti/1622045624',
    },
    Dec162022: {
        date: todaysDate,
        artist: 'The Killers',
        artist2: 'The Killers',
        album: 'Hot Fuss',
        album2: 'Hot Fuss',
        hint1: 'Genre: Rock, New Wave',
        hint2: 'Country: US',
        hint3: 'Release date: 2004',
        info: 'The album cover was photographed by Matthias Clamer in 2000, in the southern region of the suburbs of Beijing, China. The characters on top of each building ("建", "材", "开", and "发") translate to "construction material development".',
        spotify: 'https://open.spotify.com/album/4piJq7R3gjUOxnYs6lDCTg?si=XZwF3xnORPqUSClS7LQlGQ',
        applemusic: 'https://music.apple.com/ee/album/hot-fuss-deluxe-edition/1440717563',
    },
    Dec172022: {
        date: todaysDate,
        artist: 'Bob Marley & the Wailers',
        artist2: 'Bob Marley',
        album: 'Legend',
        album2: 'The Best Of',
        hint1: 'Genre: Reggae',
        hint2: 'Country: Jamaica',
        hint3: 'Release date: 1984',
        info: 'As of 13 December 2022, Legend has spent a total of 760 nonconsecutive weeks on the Billboard 200 albums chart—the second longest run in history. Cover photo by one of Britain’s best-known music photographers Adrian Boot.',
        spotify: 'https://open.spotify.com/album/4jKeipwuUTjlx9USNYdhZn?si=MS89FCwoTJG6cfJFeDM4QA',
        applemusic: 'https://music.apple.com/ee/album/legend-the-best-of-bob-marley-and-the-wailers-remastered/1469575763',
    },
    Dec182022: {
        date: todaysDate,
        artist: 'Pink Floyd',
        artist2: 'Pink Floyd',
        album: 'Wish You Were Here',
        album2: 'Wish You Were Here',
        hint1: 'Genre: Prog Rock',
        hint2: 'Country: UK',
        hint3: 'Release date: 1975',
        info: 'The album’s cover images were photographed by Aubrey "Po" Powell, Thorgerson’s partner at the design studio Hipgnosis, and inspired by the idea that people tend to conceal their true feelings, for fear of "getting burned", and thus two businessmen were pictured shaking hands, one man on fire. "Getting burned" was also a common phrase in the music industry, used often by artists denied royalty payments. The photograph was taken at Warner Bros. Studios in California.',
        spotify: 'https://open.spotify.com/album/6uvBKDGlJAYLH5Vy6RQVsc?si=HemceW8GS9SWxHNc-ysdVw',
        applemusic: 'https://music.apple.com/ee/album/wish-you-were-here/704223460',
    },
    Dec192022: {
        date: todaysDate,
        artist: 'Erykah Badu',
        artist2: 'Eryka Badu',
        album: 'Baduizm',
        album2: 'Baduism',
        hint1: 'Genre: Neo Soul',
        hint2: 'Country: US',
        hint3: 'Release date: 1997',
        info: 'Along with fellow contemporary albums such as D’Angelo’s Brown Sugar and Maxwell’s Urban Hang Suite, Baduizm’s success helped establish Badu as one of the leading artists in the neo-soul genre and is one of the albums credited with contributing to the genre’s commercial visibility at the time. Cover photo by Marc Baptiste.',
        spotify: 'https://open.spotify.com/album/3qr4pTBWEU1SVf01j6RAx3?si=nbAudY9SQe28sd2GOooWig',
        applemusic: 'https://music.apple.com/ee/album/baduizm/1440837269',
    },
    Dec202022: {
        date: todaysDate,
        artist: 'John Coltrane',
        artist2: 'John Coltrain',
        album: 'Blue Train',
        album2: 'Blue Train',
        hint1: 'Genre: Jazz, Hard Bop, Saxophone Jazz',
        hint2: 'Country: US',
        hint3: 'Release date: 1958',
        info: 'Recorded at the Van Gelder Studio in Hackensack, New Jersey, it is the only Blue Note recording by Coltrane as session leader. It has been certified a gold record by the RIAA.',
        spotify: 'https://open.spotify.com/album/2Z11cXWEa2qqYQBGkJrCga?si=CaenRyzVSqqMVN17gRbVNg',
        applemusic: 'https://music.apple.com/ee/album/blue-train/1468202477',
    },
    Dec212022: {
        date: todaysDate,
        artist: 'The Doors',
        artist2: 'The Doors',
        album: 'The Doors',
        album2: 'The Doors',
        hint1: 'Genre: Psychedelic Rock',
        hint2: 'Country: US',
        hint3: 'Release date: 1967',
        info: 'The Doors remains the band’s best-selling studio album, with sales of over 13 million copies, as of 2015. For the album’s cover, Joel Brodsky was hired to provide a photo of the group, which later received a Grammy nomination.',
        spotify: 'https://open.spotify.com/album/1jWmEhn3ggaL6isoyLfwBn?si=XzgZs7jeQae0j9zec8dKWw',
        applemusic: 'https://music.apple.com/ee/album/the-doors/1622368510',
    },
    Dec222022: {
        date: todaysDate,
        artist: 'Eminem',
        artist2: 'Eminem',
        album: 'The Marshall Mathers LP',
        album2: 'The Marshall Mathers',
        hint1: 'Genre: Hip Hop',
        hint2: 'Country: US',
        hint3: 'Release date: 2000',
        info: 'The Marshall Mathers LP was released with three different album covers. The original features Eminem sitting on the porch of the house he lived in during his teenage years. The other cover features the rapper seated in a fetal position beneath a loading dock with alcohol and prescription pill bottles at his feet. Third one is a portrait of him behind a table.',
        spotify: 'https://open.spotify.com/album/5H0rjI1TW8F2tORPYMJXHJ?si=BPxyI3I-QNqlsz0PFuybxw',
        applemusic: 'https://music.apple.com/ee/album/the-marshall-mathers-lp/1453737727',
    },
    Dec232022: {
        date: todaysDate,
        artist: 'Queen',
        artist2: 'Queen',
        album: 'A Night at the Opera',
        album2: 'Night at the Opera',
        hint1: 'Genre: Rock, Pop',
        hint2: 'Country: UK',
        hint3: 'Release date: 1975',
        info: 'The cover artwork features the band’s logo, which was designed by Mercury himself, on a white background. The band’s next album, A Day at the Races, featured a similar design but on a black background.',
        spotify: 'https://open.spotify.com/album/1GbtB4zTqAsyfZEsm1RZfx?si=lpa9yYFATr6Tkr7Wt5-DKw',
        applemusic: 'https://music.apple.com/ee/album/a-night-at-the-opera/1440854433',
    },
    Dec242022: {
        date: todaysDate,
        artist: 'Elvis Presley',
        artist2: 'Elvis',
        album: "Elvis' Christmas Album",
        album2: 'Elvis Christmas Album',
        hint1: 'Genre: Pop, Gospel, Ballad',
        hint2: 'Country: US',
        hint3: 'Release date: 1957',
        info: 'Even rarer than the cover and record itself is a gold foil price tag-shaped "gift giving" sticker attached to the shrink wrap, reading "TO ___, FROM ___, ELVIS SINGS". Original copies with the gold sticker intact on the shrink wrap have proven to be among the most valuable of Presley’s albums. Adding to its already high value are limited red vinyl albums and album covers with gold print down the spine. With total sales of more 20 million copies worldwide, it remains the world’s best-selling Christmas album and one of the best-selling albums of all time.',
        spotify: 'https://open.spotify.com/album/6zk4RKl6JFlgLCV4Z7DQ7N?si=j5XgT7snRpq5q8oC3l7SpA',
        applemusic: 'https://music.apple.com/ee/album/elvis-christmas-album/676288305',
    },
    Dec252022: {
        date: todaysDate,
        artist: 'Mariah Carey',
        artist2: 'Mariah Carey',
        album: 'Merry Christmas',
        album2: 'Merry Christmas',
        hint1: 'Genre: Pop, Ballad',
        hint2: 'Country: US',
        hint3: 'Release date: 1994',
        info: 'As of 2021, Merry Christmas has sold 15 million copies worldwide, becoming one of the best-selling holiday albums of all time.',
        spotify: 'https://open.spotify.com/album/61ulfFSmmxMhc2wCdmdMkN?si=-ZHTlZZzRO-JNlrla57XzQ',
        applemusic: 'https://music.apple.com/ee/album/merry-christmas/585972750',
    },
    Dec262022: {
        date: todaysDate,
        artist: 'Neneh Cherry',
        artist2: 'Neneh Cherry',
        album: 'Raw Like Sushi',
        album2: 'Raw Like Sushi',
        hint1: 'Genre: Hip Hop, New Jack Swing, R&B',
        hint2: 'Country: UK / born in Sweden',
        hint3: 'Release date: 1989',
        info: 'The cover and inner photos for “Raw Like Sushi” were shot by fashion photographer Jean-Baptiste Mondino.',
        spotify: 'https://open.spotify.com/album/2AyJzvREOnlnYhaBzF1Kxp?si=2LAghRi_QkKL8n3ZyF2I4A',
        applemusic: 'https://music.apple.com/ee/album/raw-like-sushi/716751901',
    },
    Dec272022: {
        date: todaysDate,
        artist: 'Arctic Monkeys',
        artist2: 'Arctic Monkeys',
        album: 'Favourite Worst Nightmare',
        album2: 'Favorite Worst Nightmare',
        hint1: 'Genre: Rock, Indie Rock, Garage Rock',
        hint2: 'Country: UK',
        hint3: 'Release date: 2007',
        info: 'The cover features a photograph of a dark, bland house in Liverpool, with illuminated rooms, where local artists painted the inside walls with colourful pieces. The band said they also considered naming the album Lesbian Wednesdays, Gordon Brown, or Gary Barlow.',
        spotify: 'https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm?si=pDHzaK23SwaNKQhEABGidg',
        applemusic: 'https://music.apple.com/ee/album/favourite-worst-nightmare/251126923',
    },
    Dec282022: {
        date: todaysDate,
        artist: 'Mac Miller',
        artist2: 'Mc Miller',
        album: 'Swimming',
        album2: 'Swimming',
        hint1: 'Genre: Hip Hop',
        hint2: 'Country: US',
        hint3: 'Release date: 2018',
        info: 'Full of meaning, the overall cover has often been posed as a combination of Miller’s previous works. The central vertical stripe references the debut Blue Slide Park, the central facial expression from WMWTSO, a white background from GO:OD AM, and a suit the tone of Divine Feminine. Photographed by Christian Weber.',
        spotify: 'https://open.spotify.com/album/5wtE5aLX5r7jOosmPhJhhk?si=yOR3v2EAQ8yTunb5TRl9tA',
        applemusic: 'https://music.apple.com/ee/album/swimming/1408996052',
    },
    Dec292022: {
        date: todaysDate,
        artist: 'Bon Jovi',
        artist2: 'Bon Jovi',
        album: 'Slippery When Wet',
        album2: 'Slippery When Wet',
        hint1: 'Genre: Rock, Pop Rock',
        hint2: 'Country: US',
        hint3: 'Release date: 1986',
        info: 'The album originally was to feature a busty woman in a wet yellow T-shirt with the album name on the front of the shirt. Sambora said, "Our label freaked out a bit when they saw what we’d done. They thought it would be banned by American stores, so we had to come up with something else – fast." In Japan, most releases of the album still included the original cover art.',
        spotify: 'https://open.spotify.com/album/0kBfgEilUFCMIQY5IOjG4t?si=bf0ibKQYR1aEcKBt27U50Q',
        applemusic: 'https://music.apple.com/ee/album/slippery-when-wet/1422954626',
    },
    Dec302022: {
        date: todaysDate,
        artist: 'The Beatles',
        artist2: 'Beatles',
        album: 'Let It Be',
        album2: 'Let It Be',
        hint1: 'Genre: Rock, Pop',
        hint2: 'Country: UK',
        hint3: 'Release date: 1970',
        info: 'The LP cover was designed by John Kosh and photographed by Ethan Russell. The album title appears in white text above the images but, as on Abbey Road and other Beatles LPs, the cover does not include the band’s name.',
        spotify: 'https://open.spotify.com/album/0jTGHV5xqHPvEcwL8f6YU5?si=u30KebtbSom4OmR48c82wA',
        applemusic: 'https://music.apple.com/ee/album/let-it-be/1441164495',
    },
    Dec312022: {
        date: todaysDate,
        artist: 'ABBA',
        artist2: 'ABBA',
        album: 'Super Trouper',
        album2: 'Super Trooper',
        hint1: 'Genre: Pop',
        hint2: 'Country: Sweden',
        hint3: 'Release date: 1980',
        info: 'Super Trouper is a registered trademark owned by Strong Entertainment Lighting, for their brand of followspots, i.e., directional spotlights used to follow a performer on stage. Album cover designer, Rune Söderqvist, decided to use the spotlight theme and photograph the group, surrounded by circus performers, at Piccadilly Circus, London.',
        spotify: 'https://open.spotify.com/album/3ZdkT5buYFi1WQaB0XNNtf?si=tFW9CDzsQDKy5qqbskOV4g',
        applemusic: 'https://music.apple.com/ee/album/super-trouper-bonus-track-version/1440823811',
    },
    Jan12023: {
        date: todaysDate,
        artist: 'Rick Astley',
        artist2: 'Rick Astley',
        album: 'Whenever You Need Somebody',
        album2: 'Whenever You Need Somebody',
        hint1: 'Genre: Pop',
        hint2: 'Country: UK',
        hint3: 'Release date: 1987',
        info: 'VICE has a great documentary on Youtube about him called “The Legendary Song That Became the Rick Roll”. Well worth the watch. On the tracklist, there’s a writing credit of Dick Spatsley on "The Love Has Gone" which was a reference to a running gag by Smash Hits magazine that deliberately misspelled his name.',
        spotify: 'https://open.spotify.com/album/5Z9iiGl2FcIfa3BMiv6OIw?si=p6qqwVzgRSW1MBKJTyrGPA',
        applemusic: 'https://music.apple.com/ee/album/whenever-you-need-somebody-2022-remaster/1626265761',
    },
    Dec002022: {
        date: todaysDate,
        artist: '',
        artist2: '',
        album: '',
        album2: '',
        hint1: 'Genre: ',
        hint2: 'Country: ',
        hint3: 'Release date: ',
        info: '',
        spotify: '',
        applemusic: '',
    },
}
let todaysData = Data[todaysDate];
export default todaysData;