<script>
	/**
	 * @type {import('$lib/constants').CardInfo}
	 */
	export let cardInfo;
</script>

<div class="highlight-card">
	<div class="content">
		<img class="icon" src={cardInfo.icon} alt={cardInfo.title} />
		<h3>{cardInfo.title}</h3>
		<p>{cardInfo.description}</p>
		<div>
			<h4 class="highlight-text">{cardInfo.techStackTitle}</h4>
			{#each cardInfo.techStack as techStack}
				<span><small>#{techStack}</small> </span>
			{/each}
		</div>
		<div>
			<h4 class="highlight-text">{cardInfo.toolsTitle}</h4>
			{#each cardInfo.tools as tool}
				<span><small class="tool-tag">#{tool}</small> </span>
			{/each}
		</div>
	</div>
</div>

<style>
	.highlight-card {
		border-radius: 10px;
		padding: 70px 20px;
		max-width: 290px;
		text-align: center;
		box-shadow:
			0 5px 5px 0 rgba(233, 240, 243, 0.5),
			0 0 0 1px #e6ecf8;
	}

	@media (max-width: 1280px) {
		.highlight-card {
			max-width: unset;
			width: 100%;
		}
	}

	.highlight-card .content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.icon {
		width: 50px;
		color: white;
	}

	.highlight-text {
		font-weight: bold;
		color: var(--accent);
	}

	.tool-tag {
		color: var(--code-color);
	}
</style>
