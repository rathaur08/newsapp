import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "https://www.engadget.com/about/editors/mariella-moon",
            "title": "HTC Vive Flow headset images leak days before reported launch - Engadget",
            "description": "A collection of HTC Vive Flow images has made its way online, courtesy of evleaks, before the launch event..",
            "url": "https://www.engadget.com/htc-vive-flow-headset-images-leak-050326367.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/353df300-2bda-11ec-9eee-235c6870125d",
            "publishedAt": "2021-10-13T05:04:59Z",
            "content": "HTC is expected to launch a new VR headset within the week, but you don't have to wait till then to see what it looks like. A collection of Vive Flow images has made its way online, courtesy of evlea… [+1323 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "China developers' bonds, shares hit again by Evergrande contagion worries - Reuters",
            "description": "Shares and bonds of Chinese property companies fell further on Wednesday after China Evergrande Group missed a third round of interest payments on its dollar bonds in three week…",
            "url": "https://www.reuters.com/world/china/china-developers-bonds-shares-hit-again-by-evergrande-contagion-worries-2021-10-13/",
            "urlToImage": "https://www.reuters.com/resizer/_F-QNro6WmRZvwNGuAd1h1SboUs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FDXZ5CAEJJPQDHFPLCNOKAAPCA.jpg",
            "publishedAt": "2021-10-13T04:49:00Z",
            "content": "SHANGHAI, Oct 13 (Reuters) - Shares and bonds of Chinese property companies fell further on Wednesday after China Evergrande Group (3333.HK) missed a third round of interest payments on its dollar bo… [+2764 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Anmar Frangoul",
            "title": "IEA says clean energy progress remains 'far too slow' - CNBC",
            "description": "The shadow of the Paris Agreement looms large over the IEA's report.",
            "url": "https://www.cnbc.com/2021/10/13/iea-says-clean-energy-progress-remains-far-too-slow.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106958868-1634045422886-gettyimages-516043447-000048672358_XXXLarge.jpeg?v=1634045586",
            "publishedAt": "2021-10-13T04:43:43Z",
            "content": "The International Energy Agency issued a sobering warning Wednesday, claiming that clean energy progress remained \"far too slow to put global emissions into sustained decline towards net zero.\"\r\nThe … [+3401 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "INSIDER"
            },
            "author": "Cheryl Teh",
            "title": "North Korea says 'Squid Game' reflects the South's 'beastly' society - Insider",
            "description": "A North Korean propaganda website said \"Squid Game\" reflects how South Korea is where \"corruption and immoral scoundrels are commonplace.\"",
            "url": "https://www.insider.com/north-korea-says-squid-game-reflects-the-souths-beastly-society-2021-10",
            "urlToImage": "https://i.insider.com/61664266155c280019206b8a?width=1200&format=jpeg",
            "publishedAt": "2021-10-13T04:33:34Z",
            "content": "A state-run North Korean propaganda website praised \r\n Netflix's \"Squid Game,\" saying the Netflix drama highlighted how South Korea is where \"corruption and immoral scoundrels are commonplace.\" \r\nThe… [+2136 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Los Angeles Times"
            },
            "author": "Sam Farmer, Nathan Fenno",
            "title": "Jon Gruden emails part of WFT owner Dan Snyder court filing - Los Angeles Times",
            "description": "A federal court filing four months ago revealed new e-mail correspondence of former Washington Football Team executive Bruce Allen that extended beyond Jon Gruden.",
            "url": "https://www.latimes.com/sports/story/2021-10-12/nfl-jon-gruden-emails-washington-football-team",
            "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/50f71d4/2147483647/strip/true/crop/2539x1333+0+180/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff9%2Fa4%2F3b9d0f684deeb1285030d9f46e78%2Fredskins-allen-fired-football-24427.jpg",
            "publishedAt": "2021-10-13T03:40:00Z",
            "content": "Several inflammatory emails by Jon Gruden were filed as exhibits in federal court by attorneys for Washington Football Team owner Daniel Snyder in mid-June, almost four months before they were leaked… [+6774 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Vincent Goodwill",
            "title": "Kyrie Irving's vaccine stance could push limits of player empowerment - Yahoo Sports",
            "description": "The executives polled by Yahoo Sports believe an Irving trade can be done, but the phrase “special circumstances” was used more than once — especially with...",
            "url": "https://sports.yahoo.com/kyrie-irvings-vaccine-stance-could-push-limits-of-player-empowerment-025947704.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/oj7nRsOptMkjzTle2ZktrQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/07bcc880-2bcf-11ec-973e-1f0f2ade01df",
            "publishedAt": "2021-10-13T02:59:00Z",
            "content": "The black card labeled player empowerment had its bill returned with a red mark on it for the first time in nearly a decade after increasingly testing the limits of what can be expressed or exposed.\r… [+6215 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Zolan Kanno-Youngs, Emily Cochrane",
            "title": "U.S. to Open Canada and Mexico Borders for Vaccinated Travelers - The New York Times",
            "description": "The opening of the land borders 19 months after they closed will reconnect neighbors, and provide a reprieve for businesses.",
            "url": "https://www.nytimes.com/2021/10/12/us/politics/us-canada-mexico-borders-open.html",
            "urlToImage": "https://static01.nyt.com/images/2021/10/12/us/12virus-brief-border-opening/merlin_193107153_100f87d8-e890-49b5-8817-be9176e9f723-facebookJumbo.jpg",
            "publishedAt": "2021-10-13T02:58:45Z",
            "content": "The Centers for Disease Control and Prevention considers people fully inoculated two weeks after they receive the second dose of the Pfizer-BioNTech or Moderna vaccine, or a single dose of Johnson &a… [+1691 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Physicists Have Made the World’s Most Precise Measurement of Neutron Lifetime - SciTechDaily",
            "description": "An international team of researchers has made the world's most precise measurement of the neutron's lifetime, which may help answer questions about the early universe. An international team of physicists led by researchers at Indiana University Bloomington ha…",
            "url": "https://scitechdaily.com/physicists-have-made-the-worlds-most-precise-measurement-of-neutron-lifetime/",
            "urlToImage": "https://scitechdaily.com/images/Ultracold-Neutron-Detector-Bathtub-Trap.jpg",
            "publishedAt": "2021-10-13T02:52:04Z",
            "content": "The high-efficiency ultracold neutron detector employed in the “bathtub” trap. Credit: Los Alamos National Lab / Michael Pierce\r\nAn international team of researchers has made the world’s most precise… [+4821 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Nate Day",
            "title": "Kim Kardashian wins Hidden Hills estate in Kanye West divorce: report - Fox News",
            "description": "Kim Kardashian will reportedly keep the Hidden Hills estate that she once shared with her estranged husband Kanye West.",
            "url": "https://www.foxnews.com/entertainment/kim-kardashian-hidden-hills-kanye-west-divorce",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/02/Kimye-ap.jpg",
            "publishedAt": "2021-10-13T02:49:54Z",
            "content": "Kim Kardashian has come out on top after a new ruling in her divorce from Kanye West.\r\nThe 40-year-old socialite has reportedly been awarded the $60 million estate in Hidden Hills, Calif., that the t… [+2723 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Napier Lopez",
            "title": "M1X MacBook Pro event: What to expect from Apple on October 18 - The Next Web",
            "description": "The moment many an Apple fan has been waiting for is almost here: The company today announced its second fall 'special event' of the year, where it almost surely will reveal its latest ...",
            "url": "https://thenextweb.com/news/apple-october-18-2021-event",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/plugged?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F06%2FApple-M1X-Mystery-1.jpg&signature=12067417ba3680ae19e274d424a1e98f",
            "publishedAt": "2021-10-13T02:30:00Z",
            "content": "The moment many an Apple fan has been waiting for is almost here: The company today announced its second fall special event of the year, where it almost surely will reveal its latest set of ARM-power… [+5232 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Phil Helsel",
            "title": "Florida man charged after toddler fatally shot mom during Zoom call - NBC News",
            "description": "A Florida man was arrested on a negligent manslaughter charge after a toddler found his gun and the weapon went off, killing the child's mother as she was on a Zoom call, officials said.",
            "url": "https://www.nbcnews.com/news/us-news/florida-man-charged-after-toddler-fatally-shot-mom-during-zoom-n1281388",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_41/3512202/211012-altamonte-springs-florida-police-fatal-zoom-call-toddler-shot-mom-snip-ac-847p.jpg",
            "publishedAt": "2021-10-13T02:11:00Z",
            "content": "A Florida man was arrested Tuesday in the shooting death of a woman who was on a Zoom call when her 2-year-old fired a gun, officials said.\r\nThe man, Veondre Avery, 22, the child's father, faces char… [+1759 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "China's Exports Climb to Record in September Despite Energy Crisis - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=cbd62535-2bf2-11ec-8edd-64546a754e48&url=L25ld3MvYXJ0aWNsZXMvMjAyMS0xMC0xMy9jaGluYS1zLWV4cG9ydHMtY2xpbWItYWJvdXQtMjAtaW4tc2VwdGVtYmVyLWluLXl1YW4tdGVybXM=",
            "urlToImage": null,
            "publishedAt": "2021-10-13T02:09:00Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": null,
                "name": "fox8.com"
            },
            "author": "Suzanne Stratford",
            "title": "‘It was heartbreaking’: Cleveland Clinic denies woman liver transplant over COVID vaccine - WJW FOX 8 News Cleveland",
            "description": "CLEVELAND (WJW) – A Northeast Ohio woman is the latest patient being denied a lifesaving transplant surgery over the COVID-19 vaccine. Michelle Vitullo has been battling stage 4 liver disease for years and began seeing doctors at the Cleveland Clinic in 2019.…",
            "url": "https://fox8.com/news/coronavirus/it-was-heartbreaking-cleveland-clinic-denies-woman-liver-transplant-over-covid-vaccine/",
            "urlToImage": "https://fox8.com/wp-content/uploads/sites/12/2021/10/F684161F84540DD726C6F715F5FE3220.jpg?w=1280",
            "publishedAt": "2021-10-13T02:03:15Z",
            "content": "CLEVELAND (WJW) – A Northeast Ohio woman is the latest patient being denied a lifesaving transplant surgery over the COVID-19 vaccine.\r\nMichelle Vitullo has been battling stage 4 liver disease for ye… [+3114 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "House passes bill to raise US debt ceiling through early December - The Guardian",
            "description": "Legislation raises US government’s borrowing limit to $28.9tn, as hard-fought vote passes entirely along party lines",
            "url": "https://amp.theguardian.com/us-news/2021/oct/12/house-approves-us-debt-ceiling-limit-increase",
            "urlToImage": null,
            "publishedAt": "2021-10-13T01:57:00Z",
            "content": "US Congress<ul><li>Legislation raises governments borrowing limit to $28.9tn</li><li>Hard-fought House vote passes entirely along party lines</li></ul>\r\nGuardian staff and agencies\r\nTue 12 Oct 2021 1… [+4166 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Chicago Tribune"
            },
            "author": "Paul Sullivan",
            "title": "Tony La Russa calls out Houston Astros for 'intentional' plunking - Chicago Tribune",
            "description": "The end of Game 4 of the American League Division Series featured a heated Tony La Russa after José Abreu was plunked. La Russa questioned the Astros' &quot;character&quot; and called it &quot;intentional.&quot;",
            "url": "https://www.chicagotribune.com/sports/white-sox/ct-chicago-white-sox-jose-abreu-tony-la-russa-20211013-itn6u3dsanhzfd4nddrr7odlwe-story.html",
            "urlToImage": "https://www.chicagotribune.com/resizer/bJ9DQ06lalgsCE06ZTNw4t2cZAY=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/XRBL5LQXLJDP7GRW6W3C7Y7GG4.jpg",
            "publishedAt": "2021-10-13T01:30:00Z",
            "content": "Though Game 4 of the American League Division Series was all but over by the eighth inning of the Houston Astros 10-1 win over the Chicago White Sox, the fireworks were just starting.\r\nAstros relieve… [+2105 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Kenya Moore's Viennese Waltz – Dancing with the Stars - Dancing With The Stars",
            "description": "Kenya Moore and Brandon Armstrong dance the Viennese Waltz to “Dangerous Woman” by Ariana Grande from the movie “Snow White and The Seven Dwarfs” on Dancing ...",
            "url": "https://www.youtube.com/watch?v=sm8LyTesDFA",
            "urlToImage": "https://i.ytimg.com/vi/sm8LyTesDFA/maxresdefault.jpg",
            "publishedAt": "2021-10-13T01:05:23Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kenneth Garger",
            "title": "FDA authorizes first e-cigarette, cites benefit for smokers - New York Post ",
            "description": "The FDA authorization applies to Vuse’s Solo e-cigarette and its tobacco-flavored nicotine cartridges which are manufactured by R.J. Reynolds.",
            "url": "https://nypost.com/2021/10/12/fda-authorizes-first-e-cigarette-cites-benefit-for-smokers/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/10/fda-e-cig-approval-296.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-10-13T01:02:00Z",
            "content": "The Food and Drug Administration on Tuesday for the first time authorized an electronic cigarette that the regulator says may help smokers cut back on traditional tobacco cigarettes.\r\nThe authorizati… [+1603 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KATU"
            },
            "author": "Frances Lin and Kellee Azar, KATU News",
            "title": "Flu shot could reduce COVID-19 symptoms, study finds - KOMO News",
            "description": "Last year, there were nearly no flu cases in Oregon; it was unlike anything many health officials had ever seen. &ldquo;Last year was completely unprecedented. I have never seen anything like it,&rdquo; Dr. Paul Cieslak, with the Oregon Health Authority, said…",
            "url": "https://katu.com/news/local/flu-shot-could-reduce-covid-19-symptoms-study-finds",
            "urlToImage": "https://static-22.sinclairstoryline.com/resources/media/a0be9ed4-9af5-467d-9580-9c228fa6dc0e-large16x9_FluandColdSeasoncaptioned.jpg?1634084233895",
            "publishedAt": "2021-10-13T00:42:20Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Jon Brown",
            "title": "Kamala Harris denounces European explorers for ushering in 'wave of devastation' for Native Americans - Fox News",
            "description": "Vice President Kamala Harris denigrated the European explorers who discovered the Americas during a Tuesday speech at the National Congress of American Indians 78th Annual Convention.",
            "url": "https://www.foxnews.com/politics/harris-denounces-european-explorers-for-ushering-in-wave-of-devastation",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/06/KAMALAHARRIS-BORDER-TRUMPVISIT.jpg",
            "publishedAt": "2021-10-13T00:39:39Z",
            "content": "Vice President Kamala Harris denigrated the European explorers who discovered the Americas during a Tuesday speech at the National Congress of American Indians 78th Annual Convention.\r\n\"Since 1934, e… [+1958 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hello I am a constructor from News Component");
        this.state ={
            articles: this.articles,
            loading: false

        }
    }

    async componentDidMount(){
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=93d253a1024344abb951599bb1c4b1bd"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log("parseData");
        this.setState({articles: parseData.articles})
        // console.log("data");
    }


    render() {
        console.log("render")
        return (
            <div className="container my-3">
                <h2>NewsA-Z - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-3" key={element.url}>
                        <NewsItem title={element.title.slice(0, 47)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
