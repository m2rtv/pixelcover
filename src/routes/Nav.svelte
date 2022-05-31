<script>
    import '../styles/global.css';
    let navOpen = false;
	function menuClick(){
		navOpen = !navOpen;
	}
</script>

<div id="nav-icon" class={navOpen?'open':''} on:click={menuClick}>
    <span></span>
    <span></span>
    <span></span>
</div>
{#if navOpen}
<div class="nav-wrapper">
    <div class="nav">
        <p><a href="./guide">Guide</a></p>
        <p><a href="./stats">Stats</a></p>
        <p><a href="./about">About</a></p>
    </div>
</div>
{/if}

<style>
    .nav-wrapper {
        width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: var(--gray-lightest);
        z-index: 9999;
    }
    .nav {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
        max-width: 600px;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: -0.75px;
    }
    .nav a {
        color: var(--black);
        text-decoration: none;
        cursor: pointer;
    }
    #nav-icon {
        width: 26px;
        height: 17px;
        position: fixed;
        right: 0;
        margin-top: 2.25rem;
        margin-right: 2rem;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
        z-index: 99999;
    }
    #nav-icon span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: var(--black);
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }
    #nav-icon span:nth-child(1) {
        top: 0px;
    }
    #nav-icon span:nth-child(2) {
        top: 7px;
    }
    #nav-icon span:nth-child(3) {
        top: 14px;
    }
    #nav-icon.open span:nth-child(1) {
        top: 7px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }
    #nav-icon.open span:nth-child(2) {
        opacity: 0;
    }
    #nav-icon.open span:nth-child(3) {
        top: 7px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    @media (min-width: 1024px) {
        .nav {
            font-size: 2.5rem;
        }
        #nav-icon {
            width: 32px;
            height: 20px;
            position: absolute;
            right: 0;
            margin-top: 5.75rem;
            margin-right: 5rem;
        }
        #nav-icon span {
            height: 4px;
        }
        #nav-icon span:nth-child(1) {
            top: 0px;
        }

        #nav-icon span:nth-child(2) {
            top: 8px;
        }

        #nav-icon span:nth-child(3) {
            top: 16px;
        }

        #nav-icon.open span:nth-child(1) {
            top: 8px;
        }

        #nav-icon.open span:nth-child(3) {
            top: 8px;
        }
    }
</style>