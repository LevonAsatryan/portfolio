<script>
	import Lights from './lights.svelte';
	import { scrollToElement } from '$lib/utils';
	import logo from '$lib/assets/logo.png';
</script>

<header class="header">
	<div class="content max-width-limitor">
		<nav class="header-nav">
			<a
				class="header-link header-link-home"
				href="#home"
				data-link="home"
				on:click={() => scrollToElement('home')}
			>
				<span><img src={logo} alt="logo" class="logo" /></span>
			</a>
		</nav>
		<Lights />
	</div>
</header>

<style>
	.header-nav {
		display: flex;
		gap: 50px;
	}

	.header {
		position: fixed;

		padding: 20px var(--body-padding);
		width: calc(100% - 2 * var(--body-padding));
		background-color: var(--header-background);
		color: var(--font);
		left: 0;
		top: 0;

		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		z-index: 1;
	}

	.header .content {
		display: grid;
		grid-template-columns: 3fr 1fr;
	}

	.header .logo {
		width: 180px;
	}
</style>
