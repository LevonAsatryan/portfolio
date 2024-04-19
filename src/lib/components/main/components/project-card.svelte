<script>
	/**
	 * @type import('$lib/constants').ProjectCardInfo
	 */
	export let projectInfo;
</script>

<a href={projectInfo.url} target="_blank" class="card width-height">
	<img src={projectInfo.image} alt={projectInfo.title} class="img width-height" />

	<div class="positioned width-height">
		<h3>{projectInfo.title}</h3>
		<p>{projectInfo.description}</p>
	</div>
</a>

<style>
	.width-height {
		width: 344px;
		height: 336px;
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		animation: none;
		border-radius: 20px;
		padding: 0 10px;
	}

	.card:hover .positioned {
		opacity: 1;
	}

	.positioned {
		opacity: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: absolute;
		transition: all 0.45s ease-in-out;
		background-color: #141c3a;
		border-radius: 20px;
		padding: 0 10px;
	}

	.img {
		object-fit: cover;
		border-radius: 20px;
		width: 364px;
	}
</style>
