<script>
	import { scrollToElement } from '$lib/utils';
	import Project from './project.svelte';
	import { projects } from '$lib/constants';

	import githubIcon from '$lib/assets/github-mark-white.png';
	import '../styles.css';
</script>

<main class="main max-width-limitor">
	<section>
		<h1>Levon Asatryan - Personal Website</h1>
		<small>
			Welcome to my personal website. Here you can find information about me, my projects and how to
			contact me.
		</small>
	</section>
	<section data-name="about">
		<h2>About me</h2>
		<p>Hi!</p>
		<p>
			I'm Levon Asatryan. A software engineer, with <b>8+</b> years of experience. And as already somewhat
			obvious, my main expertise is on web.
		</p>
		<p>
			<b>Among my professional achievemnts:</b>
		</p>
		<ul class="achievements">
			<li>Successfully shipped a project with embedded systems using C++ and LabView.</li>
			<li>Created games for Microsoft.</li>
			<li>
				Worked in teams of all sizes, varying from 1-2 developers, to scrum teams of 6-12 people in
				big enterprises
			</li>
			<li>
				Contributed to variety of fields including: Medical, FinTech, GameDev, Law & Education.
			</li>
			<li>
				I'm comfortable with working in Startups, Outsource companies, big and small teams as well
				as solo
			</li>
			<li>
				Throughout my experience I contributed to the CI/CD experience of the teams. As well as came
				up with ideas on how to improve them
			</li>
			<li>
				Successfully integrated testing environment and guidelines for a team of front-end engineers
				to improve the quality of the product.
			</li>
			<li>
				Lead a team of 13 developers at Sololearn. My responsibilities included: mentoring, code
				reviews, designing new projects and improving the existing ones.
			</li>
		</ul>

		<p>
			As a person, I'm always happy to share my experience and help people solve puzzles. I'm a geek
			with a passion for code. Currently I am obsessed with GameDev and GoLang, so if you can't find
			me, I'm probably digging through some forums, most likely trying to figure out an issue with
			the project.
		</p>
		<p>
			As a matter of fact, this very website was my experiment with SvelteKit. I wanted to
			familiarize myself with the library, and decided to treat myself to a personal website. You
			can find the source code of this project <a href="https://github.com">
				On my
				<div class="github-icon">
					<img src={githubIcon} alt="Github icon" />
				</div>
				account:
			</a>
		</p>
		<p>
			Also checkout my <a href="https://medium.com/@levonasatryan28">Medium</a> profile, where I'm logging
			the development of my game :)
		</p>

		<p>
			You can check out some of my work bellow. Or by clicking <a
				href="#projects"
				on:click={() => scrollToElement('projects')}>here</a
			>
		</p>
	</section>

	<section data-name="projects">
		<h1>Projects</h1>
		{#each projects as project}
			<Project projectInfo={project} />
		{/each}
	</section>
</main>

<style>
	.main {
		padding-top: var(--header-height);
		padding-left: var(--body-padding);
		padding-right: var(--body-padding);
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
