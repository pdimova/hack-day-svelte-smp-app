<script lang="ts" context="module">
  import { getStock } from './api'
  
  export const load = async ({ page: { params }, fetch }) => {
    const response = await getStock(params.slug);
    const stock = response[0];
   
    return {
				props: { stock }
		};
  }
</script>

<script>
  export let stock
</script>

<div class="stock-detail">
  <h1>{stock.shortName} ({stock.symbol})</h1>
</div>

<style>
  * :global(.stock-detail) {
		display: flex;
    justify-content: center;
	}
</style>