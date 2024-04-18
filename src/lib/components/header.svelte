<script>
	import Lights from './lights.svelte';
	import { scrollToElement } from '$lib/utils';
	import logo from '$lib/assets/logo.jpg';

	import '$lib/assets/styles/styles.css';
</script>

<header class="header">
	<div class="content max-width-limitor">
		<nav class="header-nav">
			<a
				class="header-link header-link-home scale-on-hover"
				href="#home"
				data-link="home"
				on:click={() => scrollToElement('home')}
			>
				<img src={logo} alt="logo" class="logo" />
			</a>
		</nav>
		<Lights />
	</div>
</header>

<style>
	.header {
		position: fixed;

		padding: 0 var(--body-padding);
		width: calc(100% - 2 * var(--body-padding));
		height: 60px;
		background-color: var(--header-background);
		color: var(--font);
		left: 0;
		top: 0;

		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		z-index: 1;
	}

	.header-nav {
		margin-top: 4px;
	}

	.header .content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header .logo {
		width: 50px;
	}
</style>
