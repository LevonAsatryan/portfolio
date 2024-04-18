<script>
	import HighlightCard from '$lib/components/main/components/highlight-card.svelte';
	import { HIGHLIGHT_CARDS_DATA } from '$lib/constants';
</script>

<section class="highlights">
	{#each HIGHLIGHT_CARDS_DATA as cardInfo}
		<HighlightCard {cardInfo} />
	{/each}
</section>

<style>
	.highlights {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 80px 0px;
	}
</style>
