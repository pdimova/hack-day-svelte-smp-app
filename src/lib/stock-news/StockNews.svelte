<script context="module" lang="ts">
	import StockNewsItem from './StockNewsItem.svelte';
	export let data;
	console.log('in StockNews', data);

	const final = data || [
		{
			news_url:
				'https://www.benzinga.com/trading-ideas/movers/21/12/24737625/why-tesla-shares-are-rising-today',
			image_url: 'https://cdn.snapi.dev/images/v1/a/f/tsldk2-1-1160418.jpg',
			title: 'TEST',
			text: 'Test body',
			source_name: 'Test source',
			date: 'Wed, 22 Dec 2021 09:16:17 -0500',
			sentiment: 'Test sentiment'
		}
	];
</script>

{#each final as newsItem}
	<!-- <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
	{cat.name}
</a></li> -->
	<StockNewsItem {...newsItem} />
{/each}
