<script>
	import { scrollToElement } from '$lib/utils';
	import { ACHIEVEMENTS_DATA } from '$lib/constants';
	import githubIcon from '$lib/assets/github-mark-white.png';
	import githubIconBlack from '$lib/assets/github-mark.png';

	import { theme } from '$lib/store/store';
	/**
	 * @type string
	 */
	let themeValue;

	theme.subscribe((v) => (themeValue = v));
</script>

<section class="achievements">
	<p>
		<b>Among my professional achievemnts:</b>
	</p>
	<ul class="achievements">
		{#each ACHIEVEMENTS_DATA as achievement}
			<li>{achievement}</li>
		{/each}
	</ul>

	<p>
		As a person, I'm always happy to share my experience and help people solve puzzles. I'm a geek
		with a passion for code. Currently I am obsessed with GameDev and GoLang, so if you can't find
		me, I'm probably digging through some forums, most likely trying to figure out an issue with the
		project.
	</p>
	<p>
		As a matter of fact, this very website was my experiment with SvelteKit. I wanted to familiarize
		myself with the library, and decided to treat myself to a personal website. You can find the
		source code of this project <a href="https://github.com/LevonAsatryan/portfolio">
			On my
			<div class="github-icon">
				<img src={themeValue === 'dark' ? githubIcon : githubIconBlack} alt="Github icon" />
			</div>
			account:
		</a>
	</p>
	<p>
		Also checkout my <a href="https://medium.com/@levonasatryan28">Medium</a> profile, where I'm logging
		the development of my game :)
	</p>

	<p>
		You can check out some of
		<a href="#projects" on:click={() => scrollToElement('projects')}>my work</a>
		bellow.
	</p>
</section>

<style>
	.achievements {
		margin-top: 80px;
	}
	.github-icon {
		height: 20px;
		width: 20px;
		display: inline-block;
	}

	.github-icon img {
		height: 100%;
		width: 100%;
	}

	.achievements {
		list-style: none;
	}

	.achievements li {
		margin-top: 20px;
	}

	.achievements li:before {
		content: '✓';
		margin-right: 10px;
		color: green;
	}
</style>
