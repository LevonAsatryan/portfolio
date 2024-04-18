<script>
	import avatar from '$lib/assets/avatar.webp';
	import note from '$lib/assets/note.svg';
</script>

<section class="intro">
	<h2>Software Engineer</h2>
	<p class="description">
		I <span class="code">code</span>, <span class="architect">design systems </span>, and sometimes
		write about it.
	</p>
	<img src={avatar} alt="This is me" />
</section>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 80px;
	}

	.intro .code {
		font-family:
			Consolas,
			Menlo,
			Monaco,
			Lucida Console,
			Liberation Mono,
			DejaVu Sans Mono,
			Bitstream Vera Sans Mono,
			Courier New,
			monospace,
			serif;
		color: var(--code-color);
	}

	.intro .architect {
		color: var(--architect-color);
	}

	.intro img {
		border-radius: 50%;
		width: 200px;
		height: 200px;
		margin-top: 1rem;
	}
</style>
