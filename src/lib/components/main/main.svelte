<script>
	import Project from '$lib/components/main/components/project.svelte';
	import Intro from '$lib/components/intro.svelte';
	import About from '$lib/components/main/components/about.svelte';
	import Highlights from '$lib/components/main/components/highlights.svelte';
	import Achievements from '$lib/components/main/components/achievements.svelte';
	import Projects from '$lib/components/main/components/projects.svelte';

	import '$lib/assets/styles/styles.css';
</script>

<main class="main max-width-limitor">
	<Intro />
	<About />
	<Highlights />
	<Projects />
	<Achievements />
</main>

<style>
	.main {
		padding-top: var(--header-height);
		padding-left: var(--body-padding);
		padding-right: var(--body-padding);
	}
</style>
