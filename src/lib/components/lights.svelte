<script>
	import { theme } from '$lib/store/store';
	import { browser } from '$app/environment';
	/**
	 * @type string
	 */
	let themeValue;

	const configs = new Map();
	configs.set('dark', {
		background: 'rgba(26, 26, 26, 1)',
		font: 'rgba(255, 255, 255, 0.81)',
		accent: 'rgb(225, 100, 91)',
		'header-background': 'rgba(92, 92, 92, 1)'
	});

	configs.set('light', {
		background: 'rgba(255, 255, 255, 1)',
		font: 'rgb(54, 54, 48)',
		accent: 'rgb(225, 100, 91)',
		'header-background': 'rgba(227, 227, 227, 1)'
	});

	/**
	 *
	 * @param {HTMLElement} element
	 * @param {string} property
	 * @param {string} value
	 */
	const setCssProperty = (element, property, value) => {
		element.style.setProperty(property, value);
	};

	const setTheme = () => {
		if (!browser) {
			return;
		}
		const root = document.querySelector('body');
		if (!root) {
			throw new Error('Wait what? HTML Body not found?');
		}
		const colors = configs.get(themeValue);
		console.info({ colors, theme });
		for (const key in colors) {
			setCssProperty(root, `--${key}`, colors[key]);
		}
	};

	theme.subscribe((t) => {
		themeValue = t;
		setTheme();
	});

	const toggleLights = () => {
		theme.update((v) => {
			return v === 'dark' ? 'light' : 'dark';
		});
	};
</script>

<div class="theme-select">
	{#if themeValue === 'dark'}
		<button on:click={toggleLights}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-sun"
			>
				<circle cx="12" cy="12" r="5"></circle>
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			</svg>
			Lights On</button
		>
	{/if}
	{#if themeValue === 'light'}
		<button on:click={toggleLights}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-moon"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>
			Going Dark</button
		>
	{/if}
</div>

<style>
	.theme-select {
		cursor: pointer;
		display: flex;
		gap: 15px;
	}

	.theme-select button {
		background: none;
		border: none;
		color: var(--font);
		font-size: 1em;
		display: flex;
		align-items: center;
		gap: 5px;
		cursor: pointer;
	}
</style>
