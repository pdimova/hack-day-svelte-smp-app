<script lang="ts" context="module">
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';
	import Chip, { Set, Text } from '@smui/chips';

	import StockNews from '../lib/stock-news/StockNews.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Button>
	<Label>Default</Label>
</Button>

<Button variant="raised">
	<Label>Raised</Label>
</Button>

GOTO http://localhost:3000/stocks

<!--
  You need to import `@material/typography/mdc-typography` in SCSS for
  these classes to work. Check out "_Typography.scss"
-->

<!-- <div class="mdc-typography--headline1">Headline 1</div>
<div class="mdc-typography--headline2">Headline 2</div>
<div class="mdc-typography--headline3">Headline 3</div>
<div class="mdc-typography--headline4">Headline 4</div>
<div class="mdc-typography--headline5">Headline 5</div>
<div class="mdc-typography--headline6">Headline 6</div>
<div class="mdc-typography--subtitle1">Subtitle 1</div>
<div class="mdc-typography--subtitle2">Subtitle 2</div>
<div class="mdc-typography--body1">Body 1</div>
<div class="mdc-typography--body2">Body 2</div>
<div class="mdc-typography--caption">Caption</div>
<div class="mdc-typography--button">Button</div>
<div class="mdc-typography--overline">Overline</div>
<div class="mdc-typography--body1">
	<small>small</small>
	<big>big</big>
	<sup>sup</sup>
	<sub>sub</sub>
	<strong>strong</strong>
	<em>em</em>
</div> -->

<!-- <style></style> -->
