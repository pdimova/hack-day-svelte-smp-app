<script lang="ts" context="module">
	import { getNews, getStock } from './api';

	export const load = async ({ page: { params }, fetch }) => {
		const response = await getStock(params.slug);
    const newsResponse = await getNews(params.slug);
		const stock = response[0];

		return {
			props: { 
        stock,
        news: newsResponse
      }
		};
	};
</script>

<script>
import StockNews from '$lib/stock-news/StockNews.svelte';

	export let stock;
  export let news;

  const priceStatus = stock.regularMarketChange < 0 ? 'negative' : 'positive';
  const priceChangeClass = `no-margin price-change ${priceStatus}`
</script>

<div class="stock-detail">
  <div class="name-container">
    <h2 class="stock-detail-name">{stock.shortName} ({stock.symbol})</h2>
    <p class="no-margin">{stock.quoteSourceName}</p>
  </div>
  <div class="price-container">
    <p class="price no-margin">{stock.regularMarketPrice.toFixed(2)}</p>
    <p class={priceChangeClass}>{stock.regularMarketChange.toFixed(2)}</p>
    <p class={priceChangeClass}>({stock.regularMarketChangePercent.toFixed(2)}%)</p>
  </div>
</div>

<div>
	<StockNews news={news} />
</div>

<style>
	* :global(.stock-detail) {
		display: flex;
		justify-content: center;
	}

  * :global(.name-container) {
    margin-bottom: 10px;
	}
  * :global(.no-margin) {
		margin: 0;
	}

  * :global(.price) {
    font-size: 36px;
    font-weight: bold;
    color: #000;
    font: 'Helvetica Neue',Helvetica,Arial,sans-serif;
	}

  * :global(.price-change) {
    font-size: 24px;
    font-weight: 500;
    font: 'Helvetica Neue',Helvetica,Arial,sans-serif;
	}

  * :global(.positive) {
    color:  #00873c;
  }

  * :global(.negative) {
    color: #eb0f29;
  }

  * :global(.price-container) {
		display: flex;
    align-items: center;
	}

  * :global(.price-container > p) {
		padding-right: 10px;
	}  
  * :global(.stock-detail-name) {
		margin: 0;
	}
</style>
