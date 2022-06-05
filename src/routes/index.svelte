<script>
    import '../styles/global.css';
    import todaysData from '../stores/data.js';
    import { user } from '../stores/data.js';
    import { stats } from '../stores/data.js';
    // import Nav from './Nav.svelte';

    // Paths to pixelated cover photos
    let albumImgArr = [
        `${todaysData.date}-4px.png`,
        `${todaysData.date}-6px.png`,
        `${todaysData.date}-8px.png`,
        `${todaysData.date}-12px.png`,
        `${todaysData.date}-16px.png`,
        `${todaysData.date}-20px.png`,
        `${todaysData.date}-24px.png`,
        `${todaysData.date}-28px.png`,
        `${todaysData.date}-32px.png`,
        `${todaysData.date}-36px.png`,
    ]
    let albumImg = `/albumArt/${todaysData.date}/${albumImgArr[$user.lastGuessNo]}`;

    // Reset user data, if new day
    if (todaysData.date != $user.lastDate) {
        $user.lastDate = todaysData.date;
        $user.lastGuessNo = 0;
        $user.lastGuessArtist = '';
        $user.lastGuessAlbum = '';
        $user.guessedArtist = undefined;
        $user.guessedAlbum = undefined;
        $user.gameWon = false;
    }

    let submit = () => {
        // Check if any of the answers is correct
        if ($user.lastGuessArtist.toLowerCase().trim() == todaysData.artist.toLowerCase() || $user.lastGuessArtist.toLowerCase().trim() == todaysData.artist2.toLowerCase()) {
            if($user.guessedArtist == false) {
                $stats.pointsDist[$user.lastGuessNo] += 1;
                $stats.totalPoints += 1;
            }
            $user.guessedArtist = true;
        } else {
            $user.lastGuessArtist = '';
            $user.guessedArtist = false;
        }
        if ($user.lastGuessAlbum.toLowerCase().trim() == todaysData.album.toLowerCase() || $user.lastGuessAlbum.toLowerCase().trim() == todaysData.album2.toLowerCase()) {
            if($user.guessedAlbum == false) {
                $stats.pointsDist[$user.lastGuessNo] += 1;
                $stats.totalPoints += 1;
            }
            $user.guessedAlbum = true;
        } else {
            $user.lastGuessAlbum = '';
            $user.guessedAlbum = false;
        }

        // Enhance image
        if ($user.lastGuessNo < albumImgArr.length-1) {
            $user.lastGuessNo += 1;
            albumImg = `/albumArt/${todaysData.date}/${albumImgArr[$user.lastGuessNo]}`
        } else {
            // @ts-ignore
            document.getElementById("btnSubmit").disabled = true; 
            $user.gameLost = true;
            $stats.gamesLost+=1;
        }

        // Check if both answers are correct
        if($user.guessedArtist == true && $user.guessedAlbum == true) {
            $user.gameWon = true;
            $stats.gamesWon+=1;
        }

    }

    let guideOpen = true;
    function guideClose(){
		$user.firstVisit = false;
        guideOpen = false;
	}

</script>

<!-- <Nav /> -->
{#if $user.gameWon || $user.gameLost}
<div class="modal-finish-wrapper">
    <div id="modal-finish">
        {#if $user.gameLost}
            <h1 style="color: var(--white)">Correct answer:</h1>
            <h1 style="color: var(--white)">{todaysData.artist} - {todaysData.album}</h1>
        {/if}
        {#if $user.gameWon}
            <h1 style="color: var(--white)">{todaysData.artist} - {todaysData.album}</h1>
            <h2 style="color: var(--black); margin-bottom: 2rem">Well done!<br> You got it on guess #{$user.lastGuessNo}</h2>
        {/if}
        {#if $user.gameLost}
            <h2 style="color: var(--black); margin-bottom: 2rem">It's ok. We can't know all the things in the world, right?</h2>
        {/if}
        <p>Check back tomorrow for a new round. The puzzle will be updated at midnight, UTC time.</p>
        <img src="/albumArt/{todaysData.date}/{todaysData.date}-full.jpg" alt="">
        <p>{todaysData.info}</p>
        <p><a href="https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY?si=Ebynq45CScec7Z2Ij50H7A">Listen on Spotify</a></p>
        <!-- <button id="btnSubmit" on:click={guideClose}>Got it, lets play!</button> -->
    </div>
</div>
{/if}

{#if $user.firstVisit}
<div class="modal-wrapper">
    <div id="modal-guide" class="modal">
        <h1>How to play</h1>
        <h2>Pixelcover is a daily quiz about the art of album covers.</h2>
        <p>The game starts off with a heavily pixelated (4x4 pixels) album cover. You have 10 tries to guess the artist and the album name.</p>
        <p>With each guess, the image gets enhanced a little.</p>
        <img src="pixelcovers-example.gif" alt="">
        <p>If nothing comes to mind, just click "Submit" without filling out the textfields.</p>
        <p>Capitalization of letters do not matter, but be mindful of making typos.</p>
        <p>You get 1 point for artist, and 1 for album name. So 2 points in total.</p>
        <p>Pixelcover is a daily game. New puzzle will be available at midnight, UTC time.</p>
        <p>Don't worry too much if you can't guess these albums — maybe you can discover some good music, art or learn something new.</p>
        <!-- <p class="p-small">Pixelcovers is a project by <a href="https://twitter.com/m2rt" target="_blank">Märt Villemsaar</a>.</p> -->
        <button id="btnSubmit" on:click={guideClose}>Got it, lets play!</button>
    </div>
</div>
{/if}
<div class="wrapper">
    <!-- {#if $user.firstVisit == true}
        <p on:click={toggleFirstVisit}>this is an intro modal</p>
    {/if} -->
    <div class="info-wrapper">
        <h1>Pixelcover.xyz</h1>
        <h2>Daily quiz about album artworks</h2>
        <div class="progress-wrapper">
            <div class="progress-bar-bg">
                <div class="progress-bar" style="width: {($user.lastGuessNo+1)*10}%; transition: width 0.6s ease-out;">
                </div>
            </div>
            <p>Guess #{$user.lastGuessNo+1}</p>
        </div>
    </div>
    <div class="album-wrapper">
        <img class="albumCover" src={albumImg} alt="">
    </div>

    <div class="form-wrapper">
        <div class="form-artist">
            <input type="text" bind:value={$user.lastGuessArtist} placeholder="Artist" disabled={$user.guessedArtist}>
            {#if $user.guessedArtist}
            <svg class="icon-answer-correct" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7L8.5 13.5L19 1" stroke="#1A1919" stroke-width="3"/>
            </svg>
            {/if}
            {#if $user.guessedArtist == false && $user.lastGuessArtist == ''}
            <svg class="icon-answer-incorrect" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 16L15.5 2" stroke="#F1EAE4" stroke-width="3"/>
                <path d="M15.5 16L1.5 2" stroke="#F1EAE4" stroke-width="3"/>
            </svg>
            {/if}
        </div>
        <div class="form-album">
            <input type="text" bind:value={$user.lastGuessAlbum} placeholder="Album" disabled={$user.guessedAlbum}>
            {#if $user.guessedAlbum}
            <svg class="icon-answer-correct" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7L8.5 13.5L19 1" stroke="#1A1919" stroke-width="3"/>
            </svg>
            {/if}
            {#if $user.guessedAlbum == false && $user.lastGuessAlbum == ''}
            <svg class="icon-answer-incorrect" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 16L15.5 2" stroke="#F1EAE4" stroke-width="3"/>
                <path d="M15.5 16L1.5 2" stroke="#F1EAE4" stroke-width="3"/>
            </svg>
            {/if}
        </div>
    </div>
</div>
<button id="btnSubmit" on:click={submit} disabled={$user.gameWon}>Submit</button>

<style>
    .modal-wrapper {
        width: 100%;
        min-height: 100%;
        position: absolute;
        background-color: var(--gray-lightest);
        z-index: 9999;
    }
    .modal-finish-wrapper {
        width: 100%;
        min-height: 100%;
        position: absolute;
        background-color: var(--gray-lightest);
        z-index: 9999;
    }
    #modal-finish {
        max-width: 600px;
        margin: 0 auto;
        padding: 4rem 2rem 8rem 2rem;
    }
    #modal-finish {
        max-width: 600px;
        margin: 0 auto;
        padding: 4rem 2rem 8rem 2rem;
    }
    #modal-finish img {
        margin: 2rem auto;
        width: 100%;
        max-width: 400px;
    }
    #modal-finish p {
        margin-bottom: 1rem;
    }
    #modal-finish p a {
        color: var(--black);
    }
    .modal {
        max-width: 600px;
        margin: 0 auto;
        padding: 4rem 2rem 8rem 2rem;
    }
    .modal h1 {
        color: var(--white);
    }
    .modal h2 {
        color: var(--black);
        padding-bottom: 1rem;
    }
    .modal p {
        margin-bottom: 1rem;
    }
    .modal .p-small {
        font-size: 0.875rem;
        color: var(--gray-dark);
    }
    .modal img {
        width: 100%;
        max-width: 400px;
        margin: 2rem auto;
    }
    
    .p-small a {
        color: var(--gray-dark);
    }
    .wrapper {
        width: 100%;
        min-height: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-rows: auto 1fr auto;
        padding: 2rem 2rem 7rem 2rem;
    }
    h1 {
        font-size: 1.5rem;
        line-height: 1.1;
        letter-spacing: -0.75px;
        color: var(--black);
    }
    h2 {
        font-size: 1.5rem;
        line-height: 1.1;
        letter-spacing: -0.75px;
        color: var(--white);
    }
    .info-wrapper h2 {
        display: none;
    }
    .progress-wrapper {
        margin-top: .875rem;
        position: sticky;
        top:0;
    }
    .progress-wrapper p {
        font-size: .75rem;
        font-weight: 500;
        line-height: 1;
        color: var(--black);
    }
    .progress-bar {
        height: 3px;
        background-color: var(--black);
    }
    .progress-bar-bg {
        width: 100%; 
        height: 100%; 
        background-color: var(--gray-light);
        margin-bottom: 0.5rem;
    }
    .album-wrapper {
        align-self: center;
        margin-top: 2rem;
        margin-bottom: 1.2rem;
    }
    .album-wrapper img {
        image-rendering: pixelated;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
    input {
        width: 100%;
        padding: .5rem .5rem .5rem 0;
        margin-top: .5rem;
        border-radius: 0;
        background-color: transparent;
        color: var(--black);
        border-top: none;
        border-right: none;
        border-bottom: 3px solid var(--black);
        border-left: none;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.5px;
    }

    input:placeholder-shown{
        border-bottom: 3px solid var(--white);
    }
    input:focus {
        color: var(--black);
        outline: none;
        border-top: none;
        border-right: none;
        border-bottom: 3px solid var(--black);
        border-left: none;
    }
    input::placeholder {
        color: var(--white);
    }
    input:focus::placeholder {
        color: transparent;
    }
    input:disabled {
        color: var(--black);
        -webkit-text-fill-color: var(--black);
        outline: none;
        border-top: none;
        border-right: none;
        border-bottom: 3px solid var(--black);
        border-left: none;
        opacity: 1;
    }
    .form-artist, .form-album {
        position: relative;
    }
    .icon-answer-incorrect {
        position: absolute;
        right: 0;
        bottom: 15px;
    }
    .icon-answer-correct {
        position: absolute;
        right: 0;
        bottom: 14px;
    }
    #btnSubmit {
        margin-top: .5rem;
        width: 100%;
        padding: 1.2rem .5rem 1.4rem .5rem;
        border: none;
        color: var(--white);
        background-color: var(--primary);
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1;
        letter-spacing: -0.5px;
        z-index: 1;
    }
    #btnSubmit:hover {
        cursor: pointer;
    }

    #btnSubmit:disabled {
        background-color: var(--gray-dark);
        cursor: not-allowed;
    }

    /* BREAKPOINTS */

    @media (min-width: 400px) {
        .album-wrapper img {
            max-width: 400px;
        }
    }

    @media (min-width: 1024px) {
        .wrapper {
            max-width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 2fr;
            padding: 5rem 0rem 9.5rem 0rem;
        }
        .info-wrapper h2 {
            display: block;
        }
        .info-wrapper, .form-wrapper {
            padding-left: 5rem;
        }
        .progress-bar {
            height: 4px;
        }
        .progress-wrapper {
            margin-top: 2rem;
        }
        .progress-wrapper p {
            font-size: 0.875rem;
        }
        .album-wrapper {
            width: 400px;
            grid-row: span 2;
            justify-self: center;
            align-self: center;
            padding-top: 8rem;
            padding-bottom: 8rem;
        }
        .form-wrapper {
            padding-top: 4rem;
        }
        .form-wrapper {
            align-self: end;
        }
        h1, h2 {
            font-size: 2.5rem;
        }
        input, button {
            font-size: 1.5rem;
        }
    }
</style>