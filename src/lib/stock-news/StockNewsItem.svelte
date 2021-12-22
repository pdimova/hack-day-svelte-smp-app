<script>
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

	export let title;
	export let text;
	export let source_name;
	export let date;
	export let sentiment;
  export let image_url;
  export let news_url;
  export let tickers;
  
  const truncate = (input, target) => input.length > target ? `${input.substring(0, target)}...` : input;
</script>

<div class="card-display">
	<div class="card-container">
		<Card class="msa-card">
			<!-- <PrimaryAction> -->
			<Media class="card-media-16x9 msa-card-media" aspectRatio="16x9" >
        <MediaContent>
          <img src={image_url} alt="" />
        </MediaContent>
      </Media>
			<div class="msc-card-content-and-action">
				<Content class="mdc-typography--body2">
					<h3 class="mdc-typography--headline6" style="margin: 0;">
            <a href={news_url} target="_blank">({tickers[0]}) {truncate(title, 100)}</a>
          </h3>
					{truncate(text, 255)}
				</Content>
				<Actions class="msa-card-actions">
					<Set chips={[tickers[0]]} let:chip nonInteractive>
						<Chip {chip}>
							<Text>{chip}</Text>
						</Chip>
					</Set>|
					<Text>{source_name}</Text> | <Text>{date}</Text> | <Text>{sentiment}</Text>
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
	:global(.msa-card) {
    max-height: 185px;
		display: flex;
		flex-direction: row;
    margin-bottom: 10px;
	}

	:global(.msa-card-media) {
		flex: 1;
	}

	:global(.msc-card-content-and-action) {
		flex: 2;
	}

	:global(.msa-card-actions) {
		/* flex-direction: column; */
		align-items: center;
	}

  img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
