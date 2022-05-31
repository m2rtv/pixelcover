<script>
    import '../styles/global.css';
    import { user } from '../stores/data.js';
    import { stats } from '../stores/data.js';
    import Nav from './Nav.svelte';
    import { each } from 'svelte/internal';
    import dayjs from "dayjs";
    let largestNumber = biggestNumberInArray($stats.pointsDist);
    function biggestNumberInArray(arr) {
        const max = Math.max(...arr);
        return max;
    }
</script>

<Nav />
<div class="subpage-wrapper">
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
    </div>
    <h2>Points distribution</h2>
    {#each $stats.pointsDist as point, i}
        <div class="points-item">
            <div class="points-meta">
                <p>Guess #{i+1}</p>
                <p>{point}</p>
            </div>
            <div class="points-bar-bg">
                <div class="points-bar" style="width: {point*100/largestNumber}%"></div>
            </div>
        </div>
    {/each}
</div>

<style>
    .subpage-wrapper h2 {
        color: var(--white);
        margin-bottom: .5rem;
        letter-spacing: -0.75px;
    }
    .stats-wrapper {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
    .points-item {
        margin-bottom: .75rem;
    }
    .stat p, .points-meta p {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--black);
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
</style>