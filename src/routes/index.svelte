<script>
	import "../styles/global.css";
	import todaysData from "../stores/data.js";
	import { user } from "../stores/data.js";
	import { stats } from "../stores/data.js";
	import { SvelteToast, toast } from "@zerodevx/svelte-toast";

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
	];
	$: albumImg = `/albumArt/${todaysData.date}/${
		albumImgArr[$user.lastGuessNo]
	}`;
	let largestNumber;

	// Save yesterdays date — this is for streak calculation
	let yesterday = new Date();
	yesterday.setUTCDate(yesterday.getDate() - 1);
	let ddY = String(yesterday.getUTCDate());
	let mmY = String(yesterday.getUTCMonth());
	let monthsY = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	let mmmY = monthsY[mmY];
	let yyyyY = yesterday.getUTCFullYear();

	let yesterdaysDate = mmmY + ddY + yyyyY;

	// Reset user data, if new day
	if (todaysData.date != $user.lastDate) {
		$user.lastGuessNo = 0;
		$user.lastGuessArtist = "";
		$user.lastGuessAlbum = "";
		$user.guessedArtist = false;
		$user.guessedAlbum = false;
		$user.gameWon = false;
		$user.gameLost = false;
	}

	// Remove all the characters that are not from the latin alphabet, or numbers
	function removeChar(str) {
		return str
			.toLowerCase()
			.replace(/&/g, "and")
			.replace(/[^A-Za-z0-9äöõüÄÖÕÜ]/g, "");
	}

	let submit = () => {
		// Check if any of the answers is correct
		if (
			removeChar($user.lastGuessArtist) ==
				removeChar(todaysData.artist) ||
			removeChar($user.lastGuessArtist) == removeChar(todaysData.artist2)
		) {
			if (
				$user.guessedArtist == false ||
				$user.guessedArtist == undefined
			) {
				$stats.pointsDist[$user.lastGuessNo] += 1;
				$stats.totalPoints += 1;
			}
			$user.guessedArtist = true;
		} else {
			$user.lastGuessArtist = "";
			$user.guessedArtist = false;
		}
		if (
			removeChar($user.lastGuessAlbum) == removeChar(todaysData.album) ||
			removeChar($user.lastGuessAlbum) == removeChar(todaysData.album2)
		) {
			if (
				$user.guessedAlbum == false ||
				$user.guessedAlbum == undefined
			) {
				$stats.pointsDist[$user.lastGuessNo] += 1;
				$stats.totalPoints += 1;
			}
			$user.guessedAlbum = true;
		} else {
			$user.lastGuessAlbum = "";
			$user.guessedAlbum = false;
		}

		// Enhance image
		if ($user.lastGuessNo < albumImgArr.length - 1) {
			$user.lastGuessNo += 1;
			albumImg = `/albumArt/${todaysData.date}/${
				albumImgArr[$user.lastGuessNo]
			}`;
		} else {
			$user.lastGuessNo += 1;
			// @ts-ignore
			document.getElementById("btnSubmit").disabled = true;
			$user.gameLost = true;
			$stats.gamesLost += 1;
			$stats.playCount += 1;
			$user.lastDate = todaysData.date;
			$stats.winPerc = Math.round(
				($stats.gamesWon * 100) / $stats.playCount
			);
			$stats.streak = 0;
			largestNumber = biggestNumberInArray($stats.pointsDist);
			toast.pop(0);
		}
		// Check if both answers are correct
		if ($user.guessedArtist == true && $user.guessedAlbum == true) {
			$user.gameWon = true;
			$stats.gamesWon += 1;
			$stats.playCount += 1;
			largestNumber = biggestNumberInArray($stats.pointsDist);
			if (yesterdaysDate == $user.lastDate) {
				$stats.streak += 1;
				if ($stats.maxStreak < $stats.streak) {
					$stats.maxStreak = $stats.streak;
				}
			} else {
				$stats.streak += 1;
				if ($stats.maxStreak < $stats.streak) {
					$stats.maxStreak = $stats.streak;
				}
			}
			$user.lastDate = todaysData.date;
			$stats.winPerc = Math.round(
				($stats.gamesWon * 100) / $stats.playCount
			);
			toast.pop(0);
		}
		// Check if it's hint time
		if ($user.lastGuessNo == 2) {
			toast.push(todaysData.hint1);
		} else if ($user.lastGuessNo == 4) {
			toast.push(todaysData.hint2);
		} else if ($user.lastGuessNo == 6) {
			toast.push(todaysData.hint3);
		}
	};
	function handleKeyDown(event) {
		if (event.keyCode === 13) {
			submit();
		}
	}

	// Calc points distribution on page render
	if ($user.guessedArtist == true && $user.guessedAlbum == true) {
		largestNumber = biggestNumberInArray($stats.pointsDist);
	}
	// Calc points distribution on page render
	if ($user.guessedArtist == false && $user.guessedAlbum == false) {
		largestNumber = biggestNumberInArray($stats.pointsDist);
	}

	// Check if it's a first visit and show guide
	let guideOpen;
	if ($user.firstVisit === true) {
		guideOpen = true;
	} else {
		guideOpen = false;
	}

	function guideToggle() {
		if ($user.firstVisit == true) {
			$user.firstVisit = false;
		}
		guideOpen = !guideOpen;
	}

	function biggestNumberInArray(arr) {
		const max = Math.max(...arr);
		return max;
	}

	let today = new Date();

	function copyResult() {
		let asciiGuessCount;
		if ($user.lastGuessNo == 1) {
			asciiGuessCount = "▓░░░░░░░░░";
		} else if ($user.lastGuessNo == 2) {
			asciiGuessCount = "▓▓░░░░░░░░";
		} else if ($user.lastGuessNo == 3) {
			asciiGuessCount = "▓▓▓░░░░░░░";
		} else if ($user.lastGuessNo == 4) {
			asciiGuessCount = "▓▓▓▓░░░░░░";
		} else if ($user.lastGuessNo == 5) {
			asciiGuessCount = "▓▓▓▓▓░░░░░";
		} else if ($user.lastGuessNo == 6) {
			asciiGuessCount = "▓▓▓▓▓▓░░░░";
		} else if ($user.lastGuessNo == 7) {
			asciiGuessCount = "▓▓▓▓▓▓▓░░░";
		} else if ($user.lastGuessNo == 8) {
			asciiGuessCount = "▓▓▓▓▓▓▓▓░░";
		} else if ($user.lastGuessNo == 9) {
			asciiGuessCount = "▓▓▓▓▓▓▓▓▓░";
		} else if ($user.lastGuessNo == 10) {
			asciiGuessCount = "▓▓▓▓▓▓▓▓▓▓";
		}
		navigator.clipboard.writeText(
			"Pixelcover " +
				String(today.getUTCDate()) +
				"." +
				String(today.getUTCMonth()) +
				"." +
				yesterday.getUTCFullYear() +
				" — " +
				$user.lastGuessNo +
				"/10\n" +
				asciiGuessCount
		);
		toast.push("Result copied to clipboard", {
			duration: 2000,
			initial: 1,
		});
	}

	const options = {
		duration: 6000, // duration of progress bar tween to the `next` value
		initial: 0, // initial progress bar value
		next: 0, // next progress value
		pausable: true, // pause progress bar tween on mouse hover
		dismissable: true, // allow dismiss with close button
		reversed: false, // insert new toast to bottom of stack
		intro: { y: -200 }, // toast intro fly animation settings
	};
</script>

<SvelteToast {options} />
{#if $user.gameWon || $user.gameLost}
	<div class="modal-wrapper">
		<div class="modal">
			{#if $user.gameLost || ($user.guessedArtist == true && $user.guessedAlbum == false) || ($user.guessedArtist == false && $user.guessedAlbum == true)}
				<h1>Correct answer:</h1>
				<h1>{todaysData.artist} - {todaysData.album}</h1>
			{/if}
			{#if $user.gameWon}
				<h1>{todaysData.artist} - {todaysData.album}</h1>
				<h2>Well done! You got it on guess #{$user.lastGuessNo}</h2>
			{/if}
			{#if ($user.guessedArtist == true && $user.guessedAlbum == false) || ($user.guessedArtist == false && $user.guessedAlbum == true)}
				<h2>Almost! You guessed one of them.</h2>
			{/if}
			{#if $user.guessedArtist == false && $user.guessedAlbum == false}
				<h2>
					It's ok. We can't know all the things in the world, right?
				</h2>
			{/if}
			<p>Want to play again? Just refresh the page for another round.</p>
			<img
				src="/albumArt/{todaysData.date}/{todaysData.date}-full.jpg"
				alt=""
			/>
			<p style="margin-bottom: 1.5rem">{todaysData.info}</p>
			{#if $user.gameWon == true}
				<div class="btn btn-main" on:click={copyResult}>
					Share your result
				</div>
			{/if}
			{#if todaysData.spotify != ""}
				<a href={todaysData.spotify} class="btn btn-secondary"
					>Listen on Spotify</a
				>
			{/if}
			{#if todaysData.spotify != ""}
				<a href={todaysData.applemusic} class="btn btn-secondary"
					>Listen on Apple Music</a
				>
			{/if}
			<a
				href="https://instagram.com/pixelcover.xyz"
				class="btn btn-secondary">Follow us on Instagram</a
			>
			<!-- <button id="btnSubmit" on:click={guideToggle}>Got it, lets play!</button> -->
		</div>
		<div class="separator" />
		<div class="modal stats">
			<h2>Statistics</h2>
			<div class="stats-wrapper">
				<div class="stat">
					<p>Points</p>
					<h3>{$stats.totalPoints}</h3>
				</div>
				<div class="stat">
					<p>Played</p>
					<h3>{$stats.playCount}</h3>
				</div>
				<div class="stat">
					<p>Win %</p>
					<h3>{$stats.winPerc}</h3>
				</div>
				<div class="stat">
					<p>Streak</p>
					<h3>{$stats.streak}</h3>
				</div>
				<div class="stat">
					<p>Max Str</p>
					<h3>{$stats.maxStreak}</h3>
				</div>
			</div>
			<h2>Points distribution</h2>
			<div class="points-wrapper">
				{#each $stats.pointsDist as point, i}
					<div class="points-item">
						<div class="points-meta">
							<p>Guess #{i + 1}</p>
						</div>
						<div class="points-bar-bg">
							<div
								class="points-bar"
								style="width: {(point * 100) / largestNumber}%"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}

<!-- Guide screen -->
{#if guideOpen == true}
	<div class="modal-wrapper">
		<div class="modal">
			<h1>How to play</h1>
			<h2>
				Pixelcover - a daily quiz to try and identify an artist's album
				art
			</h2>
			<p>
				The game begins with a heavily pixelated (4x4 pixels) album
				cover and with each guess the picture becomes clearer.
			</p>
			<img src="pixelcovers-example.gif" alt="" />
			<p>
				If you can't think of what the image might be, you can leave the
				textfield blank and just click "Submit".
			</p>
			<p>
				Capitalization won't affect the answer, but spelling will so
				watch out for typos.
			</p>
			<p>
				1 point is awarded identifying the artist, and another for the
				album name. 2 points in total.
			</p>
			<p>Want to play another round? Just refresh the page.</p>
			<p>
				Even if you don't guess the right album — you still might
				discover some music, art or even learn something new.
			</p>
			<!-- <p class="p-small">Pixelcovers is a project by <a href="https://twitter.com/m2rt" target="_blank">Märt Villemsaar</a>.</p> -->
			<button id="btnSubmit" on:click={guideToggle}
				>Got it, lets play!</button
			>
		</div>
	</div>
{/if}
<div class="wrapper">
	<!-- {#if $user.firstVisit == true}
        <p on:click={toggleFirstVisit}>this is an intro modal</p>
    {/if} -->
	<div class="info-wrapper">
		<h1>Pixelcover.xyz</h1>
		<nav>
			<p on:click={guideToggle}>?</p>
		</nav>
		<h2>Daily quiz about album artworks</h2>
		<div class="progress-wrapper">
			<div class="progress-bar-bg">
				<div
					class="progress-bar"
					style="width: {($user.lastGuessNo + 1) *
						10}%; transition: width 0.6s ease-out;"
				/>
			</div>
			<p>Guess #{$user.lastGuessNo + 1}</p>
		</div>
	</div>
	<div class="album-wrapper">
		<img class="albumCover" src={albumImg} alt="" />
	</div>

	<div class="form-wrapper">
		<div class="form-artist">
			<input
				type="text"
				bind:value={$user.lastGuessArtist}
				placeholder="Artist"
				disabled={$user.guessedArtist}
				on:keydown={handleKeyDown}
			/>
			{#if $user.guessedArtist}
				<svg
					class="icon-answer-correct"
					width="21"
					height="16"
					viewBox="0 0 21 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 7L8.5 13.5L19 1"
						stroke="#1A1919"
						stroke-width="3"
					/>
				</svg>
			{/if}
			{#if $user.guessedArtist == false && $user.lastGuessArtist == ""}
				<svg
					class="icon-answer-incorrect"
					width="17"
					height="18"
					viewBox="0 0 17 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.5 16L15.5 2"
						stroke="#F1EAE4"
						stroke-width="3"
					/>
					<path
						d="M15.5 16L1.5 2"
						stroke="#F1EAE4"
						stroke-width="3"
					/>
				</svg>
			{/if}
		</div>
		<div class="form-album">
			<input
				type="text"
				bind:value={$user.lastGuessAlbum}
				placeholder="Album"
				disabled={$user.guessedAlbum}
				on:keydown={handleKeyDown}
			/>
			{#if $user.guessedAlbum}
				<svg
					class="icon-answer-correct"
					width="21"
					height="16"
					viewBox="0 0 21 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 7L8.5 13.5L19 1"
						stroke="#1A1919"
						stroke-width="3"
					/>
				</svg>
			{/if}
			{#if $user.guessedAlbum == false && $user.lastGuessAlbum == ""}
				<svg
					class="icon-answer-incorrect"
					width="17"
					height="18"
					viewBox="0 0 17 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.5 16L15.5 2"
						stroke="#F1EAE4"
						stroke-width="3"
					/>
					<path
						d="M15.5 16L1.5 2"
						stroke="#F1EAE4"
						stroke-width="3"
					/>
				</svg>
			{/if}
		</div>
	</div>
</div>
<button id="btnSubmit" on:click={submit} disabled={$user.gameWon}>Submit</button
>

<style>
	.modal-wrapper {
		width: 100%;
		min-height: 100%;
		position: absolute;
		background-color: var(--gray-lightest);
		z-index: 999;
	}
	.modal {
		max-width: 600px;
		margin: 0 auto;
		padding: 0rem 2rem 0rem 2rem;
	}
	.modal:first-child {
		padding-top: 4rem;
	}
	.modal:last-child {
		padding-bottom: 6rem;
	}
	.modal img {
		margin: 2rem auto;
		width: 100%;
		max-width: 400px;
	}
	.modal p {
		margin-bottom: 1rem;
	}
	.modal p a {
		color: var(--black);
	}
	.modal h1 {
		color: var(--white);
	}
	.modal h2 {
		color: var(--black);
		padding-bottom: 1rem;
	}
	.modal img {
		width: 100%;
		max-width: 400px;
		margin: 2rem auto;
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
	nav {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
	nav p {
		font-size: 1.5rem;
		line-height: 1.1;
		letter-spacing: -0.75px;
		color: var(--black);
		font-weight: 700;
		cursor: pointer;
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
		margin-top: 0.875rem;
		position: sticky;
		top: 0;
	}
	.progress-wrapper p {
		font-size: 0.75rem;
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
		padding: 0.5rem 0.5rem 0.5rem 0;
		margin-top: 0.5rem;
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

	input:placeholder-shown {
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
	.form-artist,
	.form-album {
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
		margin-top: 0.5rem;
		width: 100%;
		padding: 1.2rem 0.5rem 1.4rem 0.5rem;
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

	.btn {
		width: 100%;
		text-align: center;
		margin-top: 1rem;
		cursor: pointer;
	}

	.btn-main {
		padding-top: 1rem;
		padding-bottom: 1rem;
		background-color: var(--black);
		color: var(--white);
	}

	.btn-secondary {
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		border: 2px solid var(--black);
		color: var(--black);
		text-decoration: none;
		display: inline-block;
	}

	/* STATS STYLES */

	.stats h2 {
		color: var(--white);
		line-height: 100%;
		letter-spacing: -0.75px;
	}
	.stats-wrapper {
		display: flex;
		width: 100%;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
	.points-item {
		margin-bottom: 1rem;
	}
	@media (min-width: 1024px) {
		.points-item {
			margin-bottom: 1.25rem;
		}
	}
	.stat p {
		font-size: 0.75rem;
		line-height: 110%;
		font-weight: 600;
		color: var(--gray-dark);
		margin-bottom: 0rem;
	}
	.points-meta p {
		font-size: 0.75rem;
		line-height: 110%;
		font-weight: 600;
		color: var(--black);
		margin-bottom: 0.25rem;
	}
	.points-meta {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.points-bar-bg {
		width: 100%;
		height: 4px;
		background-color: var(--gray-light);
	}
	.points-bar {
		height: 4px;
		background-color: var(--black);
	}
	@media (min-width: 1024px) {
		.stat p,
		.points-meta p {
			font-size: 0.875rem;
		}
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
		.info-wrapper,
		.form-wrapper {
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
		h1,
		h2,
		nav p {
			font-size: 2.5rem;
		}
		nav {
			position: absolute;
			top: 5rem;
			right: 5rem;
		}
		input,
		button {
			font-size: 1.5rem;
		}
	}
</style>