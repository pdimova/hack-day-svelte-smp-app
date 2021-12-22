<script>
	import StockNewsItem from './StockNewsItem.svelte';
	export let news;
</script>

<h2>Latest news</h2>
{#each news as newsItem}
	<StockNewsItem {...newsItem} />
{/each}
