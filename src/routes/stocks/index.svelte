<script context="module">
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
	
  const getClass = (stock) => {
    const priceStatus = stock.regularMarketChange < 0 ? 'negative' : 'positive';
    return `stock-item ${priceStatus}`
  }
</script>

<div>
  <div style={'display: flex'}>
    <span class="stock-item">Symbol</span>
    <span class="stock-item">Name</span>
    <span class="stock-item">Price</span>
    <span class="stock-item">Change</span>
    <span class="stock-item">Change in %</span>
 </div>
	{#each stockList as stock (stock.symbol)}
		<div class="stock">
			<h4 class="stock-item">
				<a sveltekit:prefetch href="/stocks/{stock.symbol}">{stock.symbol}</a>
			</h4>
			<p class="stock-item">{stock.displayName ? stock.displayName : stock.longName}</p>
			<p class="stock-item">{stock.regularMarketPrice.toFixed(2)}</p>
			<p class={getClass(stock)}>{stock.regularMarketChange.toFixed(2)}</p>
			<p class={getClass(stock)}>{stock.regularMarketChangePercent.toFixed(2)}%</p>
		</div>
	{/each}
</div>

<div>
	<StockNews news={news} />
</div>

<style>
	* :global(.stock) {
		display: flex;
		justify-content: space-between;
	}
	* :global(.stock-item) {
		flex: 1;
	}

  * :global(.positive) {
    color:  #00873c;
  }

  * :global(.negative) {
    color: #eb0f29;
  }
	* :global(.myClass) {
		font-style: italic;
	}
</style>
