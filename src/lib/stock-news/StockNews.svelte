<script>
	import StockNewsItem from './StockNewsItem.svelte';

	const NEWS_LIST = [
    {
        "news_url": "https://nypost.com/2021/12/22/elon-musk-says-he-has-met-the-goal-of-selling-10-percent-of-tesla/",
        "image_url": "https://cdn.snapi.dev/images/v1/y/h/elon-musk-tesla-shares-comp-1-1jpgquality90stripall-1160295.jpg",
        "title": "Elon Musk says he has sold 10 percent of his stake in Tesla, meeting goal",
        "text": "Tesla CEO Elon Musk has met his goal of selling 10 percent of his stake in the electronic car company, he said in an interview on December 21, 2021.",
        "source_name": "New York Post",
        "date": "Wed, 22 Dec 2021 08:26:17 -0500",
        "topics": [
            "CEO"
        ],
        "sentiment": "Neutral",
        "type": "Article",
        "tickers": [
            "TSLA"
        ]
    },
    {
        "news_url": "https://www.proactiveinvestors.co.uk//companies/news/969986/tesla-boss-elon-musk-sells-enough-stock-to-reach-10-goal-969986.html?SNAPI",
        "image_url": "https://cdn.snapi.dev/images/v1/h/f/1640177595-2020-11-25-13-27-12-ecded99c1b0e6f512c4f954a5215a1e8-1160176.jpg",
        "title": "Tesla boss Elon Musk sells “enough stock” to reach 10% goal",
        "text": "Tesla Inc (NASDAQ:TSLA) chief executive office Elon Musk said he sold enough shares in the electric carmaker to meet his goal of offloading 10% of his holdings. The world's richest person announced in November that he would sell 10% of his Tesla shares after his Twitter followers voted in favour of the move.",
        "source_name": "Proactive Investors",
        "date": "Wed, 22 Dec 2021 07:53:31 -0500",
        "topics": [
            "CEO"
        ],
        "sentiment": "Positive",
        "type": "Article",
        "tickers": [
            "TSLA"
        ]
    },
    {
        "news_url": "https://www.zacks.com/stock/news/1842072/tesla-tsla-sees-hammer-chart-pattern-time-to-buy",
        "image_url": "https://cdn.snapi.dev/images/v1/2/p/105797044-1552679487674gettyimages-1130611572530x298-1160072.jpeg",
        "title": "Tesla (TSLA) Sees Hammer Chart Pattern: Time to Buy?",
        "text": "Tesla (TSLA) has been struggling lately, but the selling pressure may be coming to an end soon.",
        "source_name": "Zacks Investment Research",
        "date": "Wed, 22 Dec 2021 06:54:03 -0500",
        "topics": [],
        "sentiment": "Negative",
        "type": "Article",
        "tickers": [
            "TSLA"
        ]
    },
    {
        "news_url": "https://www.reuters.com/world/us/us-opens-investigation-into-580000-tesla-vehicles-over-game-feature-2021-12-22/",
        "image_url": "https://cdn.snapi.dev/images/v1/s/g/m02d20211222t2i1585527565w940fhfwllplsqrlynxmpehbl0eb-1160039.jpg",
        "title": "U.S. opens investigation into 580,000 Tesla vehicles over game feature",
        "text": "U.S auto safety regulators said Wednesday they have opened a formal safety investigation into 580,000 Tesla vehicles sold since 2017 over the automaker's decision to allow games to be played on the front center touchscreen.",
        "source_name": "Reuters",
        "date": "Wed, 22 Dec 2021 06:20:00 -0500",
        "topics": [],
        "sentiment": "Neutral",
        "type": "Article",
        "tickers": [
            "TSLA"
        ]
    },
    {
        "news_url": "https://www.barrons.com/articles/elon-musk-sells-more-tesla-stock-51640167569",
        "image_url": "https://cdn.snapi.dev/images/v1/t/s/tslmsk-1159971.jpg",
        "title": "Elon Musk Sells More Tesla Stock and Says He's 'Sold Enough' to Meet 10% Goal",
        "text": "Musk sold close to 584,000 shares and exercised two million more options, according to a Securities and Exchange Commission filing Tuesday.",
        "source_name": "Barrons",
        "date": "Wed, 22 Dec 2021 05:07:00 -0500",
        "topics": [
            "CEO",
            "paywall"
        ],
        "sentiment": "Neutral",
        "type": "Article",
        "tickers": [
            "TSLA"
        ]
    },
    {
        "news_url": "https://markets.businessinsider.com/news/stocks/elon-musk-tesla-stock-sales-sold-enough-options-selling-spree-2021-12",
        "image_url": "https://cdn.snapi.dev/images/v1/6/1/61c2ddf332956b00117e54afformatjpeg-1159975.jpg",
        "title": "Elon Musk says he's sold enough Tesla stock to meet his 10% goal, after offloading another $548 million in shares",
        "text": "\"I sold enough stock to get to around 10%, plus the option exercise stuff,\" Musk said in an interview with The Babylon Bee.",
        "source_name": "Business Insider",
        "date": "Wed, 22 Dec 2021 04:54:06 -0500",
        "topics": [
            "CEO",
            "paylimitwall"
        ],
        "sentiment": "Neutral",
        "type": "Article",
        "tickers": [
            "TSLA"
        ]
    },
    {
        "news_url": "https://www.investopedia.com/biggest-companies-in-the-world-by-market-cap-5212784",
        "image_url": "https://cdn.snapi.dev/images/v1/x/p/johnson-and-johnson-among-trending-stocks-this-week-again-735721-741824-1159916.jpg",
        "title": "Biggest Companies in the World by Market Cap",
        "text": "With Apple in the top spot, these are the biggest companies in the world by market capitalization.",
        "source_name": "Investopedia",
        "date": "Wed, 22 Dec 2021 00:30:30 -0500",
        "topics": [],
        "sentiment": "Positive",
        "type": "Article",
        "tickers": [
            "AAPL",
            "AMZN",
            "FB",
            "GOOGL",
            "MSFT",
            "NVDA",
            "TSLA",
            "TSM",
            "BRK-A"
        ]
    },
    {
        "news_url": "https://www.marketwatch.com/story/elon-musk-says-hes-sold-enough-tesla-stock-to-satisfy-his-10-goal-11640149728",
        "image_url": "https://cdn.snapi.dev/images/v1/h/s/social-1159910.jpg",
        "title": "Elon Musk says he's ‘sold enough' Tesla stock to satisfy his 10% goal",
        "text": "Elon Musk said Tuesday he's met his goal of selling 10% of his stake in Tesla Inc., and criticized California for “overtaxation.”",
        "source_name": "Market Watch",
        "date": "Wed, 22 Dec 2021 00:08:00 -0500",
        "topics": [
            "CEO",
            "paylimitwall"
        ],
        "sentiment": "Neutral",
        "type": "Article",
        "tickers": [
            "TSLA"
        ]
    },
    {
        "news_url": "https://www.reuters.com/markets/deals/teslas-musk-says-he-sold-enough-stock-slams-california-overtaxation-2021-12-22/",
        "image_url": "https://cdn.snapi.dev/images/v1/s/f/m02d20211222t2i1585494190w940fhfwllplsqrlynxmpehbl03c-1159904.jpg",
        "title": "Tesla's Musk says he sold 'enough stock'; slams California for 'overtaxation'",
        "text": "Tesla CEO Elon Musk said he had sold \"enough stock\" to reach his plan to sell 10% of his shares in the world's most valuable car company, according to an interview released on Tuesday.",
        "source_name": "Reuters",
        "date": "Tue, 21 Dec 2021 23:08:00 -0500",
        "topics": [
            "CEO"
        ],
        "sentiment": "Neutral",
        "type": "Article",
        "tickers": [
            "TSLA"
        ]
    },
    {
        "news_url": "https://seekingalpha.com/article/4476301-lithium-miners-news-for-the-month-of-december-2021",
        "image_url": "https://cdn.snapi.dev/images/v1/4/5/45gr3-1159639.",
        "title": "Lithium Miners News For The Month Of December 2021",
        "text": "Lithium prices were much higher again in the past month. BNEF forecasts lithium prices likely to stay elevated in 2022. Metals key for EVs will be pricier for longer after record year.",
        "source_name": "Seeking Alpha",
        "date": "Tue, 21 Dec 2021 16:41:30 -0500",
        "topics": [
            "paylimitwall"
        ],
        "sentiment": "Neutral",
        "type": "Article",
        "tickers": [
            "ALB",
            "AMVMF",
            "BATT",
            "CORX",
            "CXOXF",
            "GNENF",
            "LAC",
            "LIT",
            "LTHM",
            "MALRY",
            "OROCF",
            "PILBF",
            "SQM",
            "TSLA",
            "WFAFY"
        ]
    }
];
</script>

{#each NEWS_LIST as newsItem}
<!-- <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
	{cat.name}
</a></li> -->
<StockNewsItem {...newsItem}/>
{/each}
