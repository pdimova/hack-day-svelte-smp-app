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

	export let title = '';
	export let text = '';
	export let source_name = '';
	export let date = '';
	export let sentiment = '';
</script>

<div class="card-display">
	<div class="card-container">
		<Card class="msa-card">
			<!-- <PrimaryAction> -->
			<Media class="card-media-16x9 msa-card-media" aspectRatio="16x9" />
			<div class="msc-card-content-and-action">
				<Content class="mdc-typography--body2">
					<h2 class="mdc-typography--headline6" style="margin: 0;">{title}</h2>
					{text}
				</Content>
				<Actions class="msa-card-actions">
					<Set chips={['NKE']} let:chip nonInteractive>
						<Chip {chip}>
							<Text>{chip}</Text>
						</Chip>
					</Set>|
					<Text>{source_name}</Text> | <Text>{date}</Text> | <Text
						>{sentiment}</Text
					>
					<!-- <ActionButtons>
					  <Button>
						<Label>Action</Label>
					  </Button>
					  <Button>
						<Label>Another</Label>
					  </Button>
					</ActionButtons> -->
					<ActionIcons>
						<IconButton toggle aria-label="Add to favorites" title="Add to favorites">
							<Icon class="material-icons" on>favorite</Icon>
							<Icon class="material-icons">favorite_border</Icon>
						</IconButton>
						<IconButton class="material-icons" title="Share">share</IconButton>
						<IconButton class="material-icons" title="More options">more_vert</IconButton>
					</ActionIcons>
				</Actions>
			</div>

			<!-- </PrimaryAction> -->
		</Card>
	</div>
</div>

<style>
	* :global(.card-media-16x9) {
		background-image: url(https://place-hold.it/320x180?text=16x9&fontsize=23);
	}

	:global(.msa-card) {
		display: flex;
		flex-direction: row;
	}

	:global(.msa-card-media) {
		border: 1px solid red;
		flex: 1;
	}

	:global(.msc-card-content-and-action) {
		flex: 2;
	}

	:global(.msa-card-actions) {
		/* flex-direction: column; */
		align-items: unset;
	}
</style>
