import React, { Component } from 'react'
import Newscomponent from './NewsItems'

export class News extends Component {
  articles=[
    
    {
      "source": { "id": null, "name": "CNET" },
      "author": "Robin Mosley",
      "title": "Make Sure You Check Out These Hidden Tricks Before Your Next Target Trip - CNET",
      "description": "Ready to save at Target any day of the week? Here's what you should know to maximize your savings.",
      "url": "https://www.cnet.com/deals/make-sure-you-check-out-these-hidden-tricks-before-your-next-target-trip/",
      "urlToImage": "https://www.cnet.com/a/img/resize/3eeac51695d820f964cb543023e99801f9963d8a/hub/2022/10/28/df4fd2e8-c802-4f04-88db-a6615fd1dfec/target-logo-phone-4-blue-red.jpg?auto=webp&fit=crop&height=630&width=1200",
      "publishedAt": "2022-11-05T11:00:02Z",
      "content": "It's a running joke that if you go to Target for one thing, you'll end up buying a bunch of other stuff too. Many people feel drawn to Target, because of its affordability, convenience and everyday p… [+4185 chars]"
    },
    {
      "source": { "id": null, "name": "CNET" },
      "author": "Sarah Lord",
      "title": "Chromecast with Google TV HD Review: Raising the Bar - CNET",
      "description": "This cheap streamer might lack 4K, but it's got everything else you'll want.",
      "url": "https://www.cnet.com/tech/home-entertainment/chromecast-with-google-tv-hd-review-raising-the-bar/",
      "urlToImage": "https://www.cnet.com/a/img/resize/47ceaf1e15bff005d6b70978a2155e1cc7d256f6/hub/2022/11/03/6082ac7f-4b21-4dcc-9199-3dae41c0298f/chromecast-with-google-tv-hd-0065.jpg?auto=webp&fit=crop&height=630&width=1200",
      "publishedAt": "2022-11-05T11:00:32Z",
      "content": "Few things give me more pleasure than when inexpensive products look, feel and behave like they are worth more than what I paid. So imagine my delight when I opened the entry-level Chromecast with Go… [+6068 chars]"
    },
    {
      "source": { "id": null, "name": "MacRumors" },
      "author": "MacRumors Staff",
      "title": "Top Stories: iOS 16.2 in Mid-December, No New Macs Until 2023, and More",
      "description": "Apple's apparent final hardware launch of 2022 is here with the latest Apple TV 4K, as it seems we won't be seeing any Mac updates until early next year.\n\n\n\n\n\nThere's still a bit more on the calendar before the end of the year, however, including the holiday …",
      "url": "https://www.macrumors.com/2022/11/05/top-stories-ios-16-2-mid-december/",
      "urlToImage": "https://images.macrumors.com/t/tUeDxFHujfYa9m_944SRRzK_ztU=/1600x/article-new/2022/11/top-stories-5nov2022.jpg",
      "publishedAt": "2022-11-05T13:00:00Z",
      "content": "Apple's apparent final hardware launch of 2022 is here with the latest Apple TV 4K, as it seems we won't be seeing any Mac updates until early next year.\r\nThere's still a bit more on the calendar bef… [+4328 chars]"
    },
    {
      "source": { "id": null, "name": "Slashdot.org" },
      "author": "EditorDavid",
      "title": "Apple Kills Fan's Long-Time Archive of WWDC Videos on YouTube",
      "description": "\"An Apple archivist has had his YouTube account disabled after Apple filed multiple takedown requests against his account,\" reports the blog Apple Insider:\n\nBrendan Shanks, owner of the Apple WWDC Videos channel on YouTube, tweeted that Apple had filed a seri…",
      "url": "https://apple.slashdot.org/story/22/11/05/2019204/apple-kills-fans-long-time-archive-of-wwdc-videos-on-youtube",
      "urlToImage": "https://a.fsdn.com/sd/topics/youtube_64.png",
      "publishedAt": "2022-11-05T20:34:00Z",
      "content": "\"An Apple archivist has had his YouTube account disabled after Apple filed multiple takedown requests against his account,\" reports the blog Apple Insider:\r\nBrendan Shanks, owner of the Apple WWDC Vi… [+767 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "insider@insider.com (Bethany Biron)",
      "title": "Twitter is already rolling out Elon Musk's divisive $7.99 blue check paid verification subscription",
      "description": "A new description of the Twitter app appeared on the Apple app store on Saturday, which also includes longer videos and priority ranking for posts.",
      "url": "https://www.businessinsider.com/twitter-rolls-out-elon-musks-blue-check-verification-2022-11",
      "urlToImage": "https://i.insider.com/6366b876c81699001894a2cb?width=1200&format=jpeg",
      "publishedAt": "2022-11-05T19:43:38Z",
      "content": "Twitter appears to already be rolling out Elon Musk's controversial Twitter blue check verification subscription for $7.99. \r\nAccording to an updated description of the Twitter app that appeared on t… [+2220 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "ktangalakislippert@insider.com (Katherine Tangalakis-Lippert)",
      "title": "The #StopToxicTwitter coalition urging brands to stop advertising on Twitter has resulted in 'a massive drop in revenue,' Musk says: 'They're trying to destroy free speech in America.'",
      "description": "Musk said revenue has dropped \"even though nothing has changed with content moderation and we did everything we could to appease the activists.\"",
      "url": "https://www.businessinsider.com/activists-urging-brands-stop-ads-twitter-massive-drop-revenue-musk-2022-11",
      "urlToImage": "https://i.insider.com/6365db4c00d7c60018785179?width=1200&format=jpeg",
      "publishedAt": "2022-11-05T05:36:21Z",
      "content": "Advertisers have been suspending their use of Twitter to promote their brands following Elon Musk's $44 billion takeover of the social platform, leading to a \"massive drop in revenue,\" the new owner … [+3090 chars]"
    },
    {
      "source": { "id": null, "name": "Entrepreneur" },
      "author": "Entrepreneur Store",
      "title": "Get a Black Friday Deal on This Go-Anywhere Apple Watch Charger",
      "description": "Don't wait until Black Friday to save on a portable Apple Watch charger.",
      "url": "https://www.entrepreneur.com/science-technology/get-a-black-friday-deal-on-this-go-anywhere-apple-watch/438457",
      "urlToImage": null,
      "publishedAt": "2022-11-05T13:00:00Z",
      "content": "It has become abundantly clear that remote work is here to stay, at least in some capacity. For entrepreneurs, that may be a blessing, allowing them to bypass expensive office space and provide more … [+1595 chars]"
    },
    {
      "source": { "id": null, "name": "VentureBeat" },
      "author": "Rachel Kaser",
      "title": "Kaser Focus: The end-of-year game releases are upon us",
      "description": "GamesBeat's Rachel Kaser looks ahead to the great games in the November-December release window, while lamenting the closure of Onoma.",
      "url": "https://venturebeat.com/games/kaser-focus-the-end-of-year-game-releases-are-upon-us/",
      "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/06/sonic-frontiers_screenshot07.jpg?w=1200&strip=all",
      "publishedAt": "2022-11-05T01:06:38Z",
      "content": "Did you miss a session from GamesBeat Summit Next 2022? All sessions are now available for viewing in our on-demand library. Click here to start watching.\r\nI have finally finished my review of God of… [+3906 chars]"
    },
    {
      "source": { "id": null, "name": "Hipertextual" },
      "author": "José María López",
      "title": "Cómo funciona la fototeca compartida de iOS 16.1",
      "description": "Una de las novedades más esperadas de iOS 16.1 era la fototeca compartida. La app Fotos recibe cambios y mejoras en cada nueva actualización. Y en esta ocasión no podía ser de otra manera. De ahora en adelante podrás compartir fotos y vídeos con amigos y fami…",
      "url": "https://hipertextual.com/2022/11/fototeca-compartida-icloud",
      "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/10/Fototeca-Compartida-iCloud-iPhone.jpg?fit=1920%2C1280&quality=60&strip=all&ssl=1",
      "publishedAt": "2022-11-05T04:22:00Z",
      "content": "Una de las novedades más esperadas de iOS 16.1 era la fototeca compartida. La app Fotos recibe cambios y mejoras en cada nueva actualización. Y en esta ocasión no podía ser de otra manera. De ahora e… [+8235 chars]"
    },
    
  ]
  constructor()
  {
    super();
    this.state={
      articles : this.articles,
      loading : false,
    }
  }
  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-10-21&sortBy=publishedAt&apiKey=0262c63f78b842bdbd29439b49b51e9a";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
}


  render() {
    return (

      <div>
        <div className="container my-3">
            <h2>NewsDuck - Top Headlines</h2>
            <div className="row">
              {this.state.articles?.map((element)=>{
                return(
                  <div className="col-md-3 my-1"  key={element?.url}>
                <Newscomponent title={element?.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0,70):""} Url={element.url} imageUrl={element.urlToImage}/>
              </div>
                )

              })}
                
                
            </div>
        
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-info d-flex justify-content-between">&larr;Prev</button>
                <button type="button" className="btn btn-info d-flex justify-content-between">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News