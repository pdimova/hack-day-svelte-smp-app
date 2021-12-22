<script lang="ts" context="module">
	import { getStockNews, getTrendingStock } from './api';
	import StockNews from '../../lib/stock-news/StockNews.svelte';

	export const load = async ({ fetch }) => {
		const response = await getTrendingStock();
		const newsResponse = await getStockNews();
		const stockList = response;

		return {
			props: {
				stockList,
				news: newsResponse
			}
		};
	};
</script>

<script>
	export let stockList, news;
	console.log('stocks/index', news[0]);
</script>

<div>
	{#each stockList as stock (stock.symbol)}
		<div class="stock">
			<h4 class="stock-item">
				<a sveltekit:prefetch href="/stocks/{stock.symbol}">{stock.symbol}</a>
			</h4>
			<p class="stock-item">{stock.displayName ? stock.displayName : stock.longName}</p>
			<p class="stock-item">{stock.regularMarketPrice.toFixed(2)}</p>
			<p class="stock-item">{stock.regularMarketChange.toFixed(2)}</p>
			<p class="stock-item">{stock.regularMarketChangePercent.toFixed(2)}</p>
		</div>
	{/each}
</div>

<div>
	<StockNews data={news} />
</div>

<style>
	* :global(.stock) {
		display: flex;
		justify-content: space-between;
	}
	* :global(.stock-item) {
		flex: 1;
	}
	* :global(.myClass) {
		font-style: italic;
	}
</style>
