<script>
	import Lights from './lights.svelte';
	import { scrollToElement } from '../lib/utils';
	/**
	 * @param {string} elementName
	 */
	const headerHeight = 80;
</script>

<header class="header max-width-limitor">
	<nav class="header-nav">
		<a
			class="header-link header-link-home"
			href="#home"
			data-link="home"
			on:click={() => scrollToElement('home')}
		>
			<span>Home</span>
		</a>

		<a data-link="about" on:click={() => scrollToElement('about')} href="#about">
			<span>About me</span>
		</a>
		<a data-link="projects" on:click={() => scrollToElement('projects')} href="#projects">
			<span>Projects</span>
		</a>
		<a data-link="contacts" on:click={() => scrollToElement('footer')} href="#contacts">
			<span>Contacts</span>
		</a>
	</nav>
	<Lights />
</header>

<style>
	.header-nav {
		display: flex;
		gap: 50px;
	}

	.header {
		position: fixed;
		display: grid;
		padding: 20px var(--body-padding);
		grid-template-columns: 3fr 0.5fr;
		width: calc(100% - 2 * var(--body-padding));
		background-color: var(--header-background);
		color: var(--font);
		left: 0;
		top: 0;

		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		z-index: 1;
	}
</style>
