<script>
	import ProjectCard from '$lib/components/main/components/project-card.svelte';
	import { PROJECTS_CARD_INFO } from '$lib/constants';
</script>

<section>
	<h1 class="title">Projects I'm most proud of.</h1>
	<div class="projects">
		{#each PROJECTS_CARD_INFO as project}
			<ProjectCard projectInfo={project} />
		{/each}
	</div>
</section>

<style>
	.title {
		text-align: center;
	}
	.projects {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
