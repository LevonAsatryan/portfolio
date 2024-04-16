<script>
	/**
	 * @typedef TypeInfo
	 * @property {string} name
	 * @property {string} description
	 * @property {string} url
	 * @property {string[]} techStack
	 */

	/**
	 * @typedef ProjectDescription
	 * @property {TypeInfo[]} info
	 * @property {string} client
	 */

	/**
	 * @typedef Project
	 * @property {string} name
	 * @property {ProjectDescription[]} projectsDescription
	 */

	/**
	 * @type Project
	 */
	export let projectInfo;
</script>

<article>
	<h2>{projectInfo.name}</h2>

	<ul>
		{#each projectInfo.projectsDescription as projectDescription}
			<h3>{projectDescription.client}</h3>
			{#each projectDescription.info as info}
				<li>
					<a href={info.url} target="_blank">{info.name}</a>
					<br />
					<p>
						{info.description}
					</p>
				</li>
				{#each info.techStack as tech}
					<span> <small class="tech-stack">#{tech}</small> </span>
				{/each}
			{/each}
		{/each}
	</ul>
</article>

<style>
	ul {
		list-style: none;
	}

	li {
		margin-top: 20px;
		position: relative;
		left: 15px;
	}

	li:before {
		content: '👨‍💻';
		margin-right: 10px;
	}

	.tech-stack {
		color: var(--font);
	}
</style>
