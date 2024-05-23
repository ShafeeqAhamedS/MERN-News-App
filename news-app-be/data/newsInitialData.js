const newsInitialData = [
        {
        "newsTitle": "World Cup Final: Team A emerges victorious",
        "newsID": "001",
        "newsArticle": "Team A secured a stunning victory in the World Cup final with an exceptional performance.",
        "newsAuthor": "John Smith",
        "newsLocation": "London",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Turmoil: Government Faces Opposition",
        "newsID": "002",
        "newsArticle": "The government faces intense opposition as new policies are met with criticism from various parties.",
        "newsAuthor": "Jane Doe",
        "newsLocation": "Washington D.C.",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Movie Premiere: Blockbuster Film Hits Theaters",
        "newsID": "003",
        "newsArticle": "The highly anticipated blockbuster movie hits theaters, garnering positive reviews from critics and audiences alike.",
        "newsAuthor": "Michael Johnson",
        "newsLocation": "Los Angeles",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Economic Growth: Record-breaking GDP Growth Reported",
        "newsID": "004",
        "newsArticle": "The economy experiences a surge in growth, recording the highest GDP growth rate in recent years.",
        "newsAuthor": "Sarah Thompson",
        "newsLocation": "New York",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Sports Update: Tennis Champion Wins Grand Slam",
        "newsID": "005",
        "newsArticle": "The tennis champion claims victory in a thrilling match, securing another Grand Slam title.",
        "newsAuthor": "David Wilson",
        "newsLocation": "Paris",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Summit: World Leaders Discuss Global Issues",
        "newsID": "006",
        "newsArticle": "World leaders gather for a high-level summit to address pressing global issues and foster international cooperation.",
        "newsAuthor": "Emily Adams",
        "newsLocation": "Geneva",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Film Festival: Acclaimed Movies Showcase Artistic Excellence",
        "newsID": "007",
        "newsArticle": "A prestigious film festival showcases a collection of critically acclaimed movies, highlighting artistic excellence.",
        "newsAuthor": "Robert Anderson",
        "newsLocation": "Cannes",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Market Update: Stocks Soar Amidst Positive Investor Sentiment",
        "newsID": "008",
        "newsArticle": "Stock markets witness a significant surge as positive investor sentiment drives a bullish trend.",
        "newsAuthor": "Sophia Lee",
        "newsLocation": "Tokyo",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Football Championship: Team B Claims Victory in Thrilling Final",
        "newsID": "009",
        "newsArticle": "In an intense and closely contested final, Team B emerges as the champions of the football championship.",
        "newsAuthor": "Daniel Clark",
        "newsLocation": "Rio de Janeiro",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Election Results: New Government Sworn In",
        "newsID": "010",
        "newsArticle": "Following the election, the new government is sworn in, marking the beginning of a new political era.",
        "newsAuthor": "Olivia Roberts",
        "newsLocation": "London",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Movie Awards: Outstanding Films Recognized",
        "newsID": "011",
        "newsArticle": "The prestigious movie awards ceremony honors outstanding films and recognizes the talents of filmmakers.",
        "newsAuthor": "Christopher Moore",
        "newsLocation": "Hollywood",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Trade War Impact: Economic Consequences Unfold",
        "newsID": "012",
        "newsArticle": "The ongoing trade war between two major economies results in significant economic consequences for global markets.",
        "newsAuthor": "Eva Johnson",
        "newsLocation": "Washington D.C.",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Cricket Match: Nail-biting Finish in T20 World Cup",
        "newsID": "013",
        "newsArticle": "The T20 World Cup witnesses an exciting, last-over finish in a thrilling cricket match between two top teams.",
        "newsAuthor": "Andrew Smith",
        "newsLocation": "Melbourne",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Agreement: Nations Sign Historic Treaty",
        "newsID": "014",
        "newsArticle": "Multiple nations come together and sign a historic treaty, aiming to promote peace and cooperation among them.",
        "newsAuthor": "Isabella Martinez",
        "newsLocation": "Paris",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Film Industry Growth: Global Box Office Hits Record High",
        "newsID": "015",
        "newsArticle": "The film industry experiences substantial growth as the global box office revenue reaches an all-time high.",
        "newsAuthor": "Lucas Thompson",
        "newsLocation": "Los Angeles",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Market Analysis: Economic Indicators Point to Recovery",
        "newsID": "016",
        "newsArticle": "In-depth market analysis reveals positive economic indicators, suggesting a gradual recovery from recent setbacks.",
        "newsAuthor": "Emily Davis",
        "newsLocation": "New York",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Soccer Tournament: Underdog Team Surprises Fans",
        "newsID": "017",
        "newsArticle": "In a remarkable turn of events, an underdog team defies expectations and stuns fans with their performance in a soccer tournament.",
        "newsAuthor": "Jacob Wilson",
        "newsLocation": "Madrid",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Crisis: Government Faces Vote of No Confidence",
        "newsID": "018",
        "newsArticle": "The government faces a vote of no confidence amidst a political crisis, raising uncertainty about its future.",
        "newsAuthor": "Sophia Adams",
        "newsLocation": "Berlin",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Film Release: Highly Anticipated Sequel Hits Theaters",
        "newsID": "019",
        "newsArticle": "The much-awaited sequel of a popular film franchise releases in theaters, creating a frenzy among moviegoers.",
        "newsAuthor": "David Roberts",
        "newsLocation": "London",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Market Volatility: Global Stocks Witness Sharp Decline",
        "newsID": "020",
        "newsArticle": "Global stock markets experience a period of volatility, with sharp declines impacting investor confidence.",
        "newsAuthor": "Ava Johnson",
        "newsLocation": "Tokyo",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Athletics Championship: Records Broken in Sprint Events",
        "newsID": "021",
        "newsArticle": "The athletics championship witnesses the shattering of long-standing records in various sprint events.",
        "newsAuthor": "Benjamin Davis",
        "newsLocation": "Jamaica",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Announcement: Government Introduces New Policy",
        "newsID": "022",
        "newsArticle": "The government announces a new policy aimed at addressing a pressing social issue and initiating reforms.",
        "newsAuthor": "Emma Roberts",
        "newsLocation": "Ottawa",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Film Festival: Independent Films Gain Critical Acclaim",
        "newsID": "023",
        "newsArticle": "Independent films showcased at a renowned film festival receive widespread critical acclaim and recognition.",
        "newsAuthor": "Henry Wilson",
        "newsLocation": "Toronto",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Market Update: Cryptocurrency Surges to New All-Time High",
        "newsID": "024",
        "newsArticle": "Cryptocurrency experiences a significant surge, reaching a new all-time high, amid increasing investor interest.",
        "newsAuthor": "Olivia Anderson",
        "newsLocation": "New York",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Basketball Finals: Team C Crowned Champions in Overtime Thriller",
        "newsID": "025",
        "newsArticle": "In a thrilling overtime match, Team C emerges as the champions of the basketball finals, captivating fans worldwide.",
        "newsAuthor": "Lucas Garcia",
        "newsLocation": "Los Angeles",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Scandal Unveiled: Government Official Resigns",
        "newsID": "026",
        "newsArticle": "A major political scandal comes to light, leading to the resignation of a high-ranking government official.",
        "newsAuthor": "Sophie Adams",
        "newsLocation": "London",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Movie Release: Highly-Anticipated Thriller Hits The Big Screen",
        "newsID": "027",
        "newsArticle": "A much-awaited thriller movie releases, captivating audiences with its gripping storyline and stellar performances.",
        "newsAuthor": "Daniel Wilson",
        "newsLocation": "Los Angeles",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Economic Summit: Global Leaders Discuss Trade and Cooperation",
        "newsID": "028",
        "newsArticle": "Leaders from around the world convene at an economic summit to discuss trade agreements and foster international cooperation.",
        "newsAuthor": "Emily Thompson",
        "newsLocation": "Geneva",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Cricket Series: Rival Teams Set for Exciting Clash",
        "newsID": "029",
        "newsArticle": "Two rival cricket teams gear up for an exciting series, igniting the anticipation of fans and cricket enthusiasts.",
        "newsAuthor": "William Roberts",
        "newsLocation": "Mumbai",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Debate: Leaders Spar Over Key Policy Issues",
        "newsID": "030",
        "newsArticle": "In a heated political debate, leaders from opposing parties spar over crucial policy issues, offering different perspectives.",
        "newsAuthor": "Sophia Davis",
        "newsLocation": "Washington D.C.",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Film Industry Recognition: Acclaimed Director Receives Lifetime Achievement Award",
        "newsID": "031",
        "newsArticle": "An acclaimed director is honored with a prestigious lifetime achievement award for their remarkable contributions to the film industry.",
        "newsAuthor": "Thomas Johnson",
        "newsLocation": "Cannes",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Economic Report: Unemployment Rate Drops to Record Low",
        "newsID": "032",
        "newsArticle": "The latest economic report reveals a significant decline in the unemployment rate, reaching a record low.",
        "newsAuthor": "Isabella Thompson",
        "newsLocation": "Berlin",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Golf Championship: Player A Clinches Title with Spectacular Final Round",
        "newsID": "033",
        "newsArticle": "Player A delivers a stunning performance in the final round to claim the championship title in a prestigious golf tournament.",
        "newsAuthor": "David Anderson",
        "newsLocation": "Augusta",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Activism: Youth Movement Sparks Nationwide Protests",
        "newsID": "034",
        "newsArticle": "A youth-led movement mobilizes nationwide protests, advocating for social change and pressing political reform.",
        "newsAuthor": "Emma Johnson",
        "newsLocation": "Paris",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Film Premiere: Highly-Anticipated Fantasy Epic Takes the Audience by Storm",
        "newsID": "035",
        "newsArticle": "The premiere of a highly-anticipated fantasy epic captivates the audience with its breathtaking visuals and compelling storytelling.",
        "newsAuthor": "Michael Wilson",
        "newsLocation": "London",
        "newsCategory": "Cinema"
        },
        {
        "newsTitle": "Market Analysis: Tech Stocks Rally Amidst Innovation Boom",
        "newsID": "036",
        "newsArticle": "Tech stocks experience a significant rally as the market witnesses an innovation boom in the technology sector.",
        "newsAuthor": "Sophia Roberts",
        "newsLocation": "San Francisco",
        "newsCategory": "Economics"
        },
        {
        "newsTitle": "Sailing Regatta: Team B Emerges Victorious in Close Contest",
        "newsID": "037",
        "newsArticle": "In a closely contested sailing regatta, Team B emerges as the victor, showcasing exceptional skills and teamwork.",
        "newsAuthor": "Daniel Garcia",
        "newsLocation": "Auckland",
        "newsCategory": "Sports"
        },
        {
        "newsTitle": "Political Summit: Leaders Seek Solutions to Climate Change Crisis",
        "newsID": "038",
        "newsArticle": "World leaders gather at a high-profile summit to discuss and seek solutions to the pressing global issue of climate change.",
        "newsAuthor": "Olivia Moore",
        "newsLocation": "Stockholm",
        "newsCategory": "Politics"
        },
        {
        "newsTitle": "Documentary Release: Insightful Film Sheds Light on Social Injustice",
        "newsID": "039",
        "newsArticle": "A powerful documentary film release provides an insightful exploration of a pressing social injustice, raising awareness and inspiring change.",
        "newsAuthor": "Lucas Adams",
        "newsLocation": "New York",
        "newsCategory": "Cinema"
        }
]

module.exports = newsInitialData