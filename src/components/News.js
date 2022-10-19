import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "The Guardian" },
      author: "PA Media",
      title:
        "Scotland pull off impressive thrashing of West Indies in T20 World Cup",
      description:
        "<ul><li>Scotland 160-5; West Indies 118 all out</li><li>George Munsey’s unbeaten 66 key to Hobart victory</li></ul>Scotland claimed one of the greatest wins in their history, upsetting the odds at the T20 World Cup as they beat West Indies by 42 runs at Hobar…",
      url: "https://www.theguardian.com/sport/2022/oct/17/scotland-pull-off-impressive-thrashing-of-west-indies-in-t20-world-cup-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/318bcf145435f2698ae2fe291d2e13bdeffe662c/0_219_6571_3943/master/6571.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=83509328424cc433bba0188878d5e910",
      publishedAt: "2022-10-17T08:51:58Z",
      content:
        "Scotland claimed one of the most impressive wins in their history, upsetting the odds at the T20 World Cup again as they beat West Indies by 42 runs at Hobart.\r\nGeorge Munseys unbeaten 66 off 53 ball… [+1774 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton at the Gabba",
      title:
        "Liam Livingstone states his case as England beat Pakistan in final warm-up",
      description:
        "<ul><li>Pakistan 160-8; England 163-4 – England won by six wickets</li><li>Brook impresses again but may not make starting XI</li></ul>With a mis-hit shot that squirmed past the wicketkeeper and away for four, Sam Curran brought England’s eighth game against …",
      url: "https://www.theguardian.com/sport/2022/oct/17/liam-livingstone-england-beat-pakistan-final-warm-up-t20-world-cup-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/ee513a6ece8f4fc0d08f79632bbad856495723cf/0_52_4102_2462/master/4102.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4b21cc062a17723a038f1ce1593b38bf",
      publishedAt: "2022-10-17T15:00:38Z",
      content:
        "With a mis-hit shot that squirmed past the wicketkeeper and away for four, Sam Curran brought Englands eighth game against Pakistan in little more than a month, and their T20 World Cup preparations, … [+4385 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Geoff Lemon",
      title:
        "Aaron Finch finds form but Australia lose T20 World Cup warm-up to India",
      description:
        "<ul><li>India 186-7; Australia 180 | India win by six runs</li><li>Finch hits 76 before India take four wickets with last four balls</li></ul>Australia and India finished off their T20 World Cup preparations in a warm-up match at an empty Gabba ground in Bris…",
      url: "https://www.theguardian.com/sport/2022/oct/17/aaron-finch-finds-form-but-australia-lose-t20-world-cup-warm-up-to-india",
      urlToImage:
        "https://i.guim.co.uk/img/media/b8f62dc233285a26ff8a2a6e1e10919bcb208e89/86_0_6904_4146/master/6904.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d558dfd4e940a42baa6935df56501372",
      publishedAt: "2022-10-17T08:03:51Z",
      content:
        "Australia and India finished off their T20 World Cup preparations in a warm-up match at an empty Gabba ground in Brisbane, won by India by six runs in a contest that lacked much intensity until the f… [+4108 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Sports Desk",
      title:
        "Watch: Mohammed Shami shares tips to Shaheen Shah Afridi on seam position",
      description:
        "Shaheen Shah Afridi and Mohammed Shami were talking about the latter's upright seam position at the sidelines of the Gabba.",
      url: "https://indianexpress.com/article/sports/cricket/watch-mohammed-shami-shares-tips-to-shaheen-shah-afridi-on-seam-position-8213726/",
      urlToImage:
        "https://images.indianexpress.com/2022/10/Shami-and-Shaheen.jpg",
      publishedAt: "2022-10-17T09:09:24Z",
      content:
        "The upright seam has been the standout feature in Mohammed Shamis bowling, courtesy of his wrist position. It seems like Pakistan left-arm pacer Shaheen Shah Afridi, too, is a big fan of Shami’s bowl… [+1674 chars]",
    },
    {
      source: { id: null, name: "Nakedcapitalism.com" },
      author: "Lambert Strether",
      title: "Links 10/17/2022",
      description: "Our cooked-to-perfection daily links",
      url: "https://www.nakedcapitalism.com/2022/10/links-10-17-2022.html",
      urlToImage:
        "https://www.nakedcapitalism.com/wp-content/uploads/2022/10/tiger.png",
      publishedAt: "2022-10-17T10:55:21Z",
      content:
        "Lambert and I, and many readers, agree that Ukraine has prompted the worst informational environment ever. We hope readers will collaborate in mitigating the fog of war both real fog and stage fog in… [+12524 chars]",
    },
    {
      source: { id: null, name: "Telegraph.co.uk" },
      author: "Tim Wigmore, Greg Wilcox",
      title:
        "T20 World Cup 2022: Schedule, who’s in the England squad, and latest odds",
      description:
        "Plus: Latest news on England's form in the warm-ups, odds, competition format and their chances before their first match on Oct 22",
      url: "https://www.telegraph.co.uk/cricket/2022/10/17/t20-world-cup-2022-schedule-england-squad-latest-odds/",
      urlToImage:
        "https://www.telegraph.co.uk/content/dam/cricket/2022/10/17/TELEMMGLPICT000313072682_trans_NvBQzQNjv4BqA7N2CxnJWnYI3tCbVBgu9T0aesusvN1TE7a0ddd_esI.jpeg?impolicy=logo-overlay",
      publishedAt: "2022-10-17T12:14:25Z",
      content:
        "The first stage of the T20 World Cup involves eight teams that had to go through a qualification phase: Namibia, Sri Lanka, United Arab Emirates and the Netherlands in Group A and then Ireland, Scotl… [+1987 chars]",
    },
    {
      source: { id: null, name: "Telegraph.co.uk" },
      author: "David Cosgrove",
      title:
        "Ireland vs Zimbabwe live: score and latest updates from T20 World Cup 2022",
      description: "",
      url: "https://www.telegraph.co.uk/cricket/2022/10/17/ireland-vs-zimbabwe-live-score-latest-t20-world-cup-2022",
      urlToImage:
        "https://www.telegraph.co.uk/content/dam/cricket/2022/10/17/TELEMMGLPICT000236429874_trans_NvBQzQNjv4BqsfOCuR7AN27npnm9MstSEO0qDkeOSoE6CY77wUtmKLU.jpeg?impolicy=logo-overlay",
      publishedAt: "2022-10-17T07:56:43Z",
      content:
        "Welcome to our live coverage of Ireland vs Zimbabwe in the final qualification stage for the T20 World Cup.\r\nThese two sides are in a qualifying group alongside Scotland and West Indies (who are curr… [+1573 chars]",
    },
    {
      source: { id: null, name: "Telegraph.co.uk" },
      author: "Tim Wigmore",
      title: "Scotland thrash West Indies – now England must watch out",
      description:
        "Mark Watt takes three for 12 as the two-times champions fall short by 42 runs",
      url: "https://www.telegraph.co.uk/cricket/2022/10/17/scotland-thrash-west-indies-2022-t20-world-cup-england-must/",
      urlToImage:
        "https://www.telegraph.co.uk/content/dam/cricket/2022/10/17/TELEMMGLPICT000313056726_trans_NvBQzQNjv4BqA7N2CxnJWnYI3tCbVBgu9T0aesusvN1TE7a0ddd_esI.jpeg?impolicy=logo-overlay",
      publishedAt: "2022-10-17T08:52:27Z",
      content:
        "Another day in the 2022 T20 World Cup and another upset. Scotlands dismantling of West Indies, the only team to have won the T20 World Cup twice, was not as unexpected as Namibias victory over Sri La… [+2871 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "ESPNcricinfo staff",
      title: "Colin Ingram agrees new two-year Glamorgan deal",
      description:
        "Former South Africa batter made prolific return to red-ball cricket in 2022",
      url: "https://www.espncricinfo.com/story/colin-ingram-agrees-new-two-year-glamorgan-deal-1340355",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340900/340924.6.jpg",
      publishedAt: "2022-10-17T11:32:57Z",
      content:
        "Colin Ingram was prolific in the County Championship last season  •  Getty Images",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "AAP",
      title:
        "Bancroft shines with hundred before Victoria's spinners fight back",
      description:
        "Sri Lanka spinner Ruwantha Kellapotha claimed his first wicket in Australian state cricket",
      url: "https://www.espncricinfo.com/series/sheffield-shield-2022-23-1322367/victoria-vs-western-australia-5th-match-1322400/match-report",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/347600/347695.6.png",
      publishedAt: "2022-10-17T07:16:47Z",
      content:
        "Cameron Bancroft made his 20th first-class century  •  Getty Images",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=pakistan&pageSize=30&apiKey=88f565fe49f54261a032781311561122&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleNextBtn = async () => {
    console.log("Next");
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 30)) {
      let url = `https://newsapi.org/v2/everything?q=pakistan&pageSize=30&apiKey=88f565fe49f54261a032781311561122&page=${
        this.state.page + 1
      }`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
    }
  };

  handlePreviousBtn = async () => {
    console.log("Previous");
    if (this.state.page - 1 >= 1) {
      let url = `https://newsapi.org/v2/everything?q=pakistan&pageSize=30&apiKey=88f565fe49f54261a032781311561122&page=${
        this.state.page - 1
      }`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="my-3">NewsPanda - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={
                      element.urlToImage ? element.urlToImage : "./panda.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousBtn}
            type="button"
            className="btn btn-dark my-3"
          >
            &#8592; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 30)
            }
            onClick={this.handleNextBtn}
            className="btn btn-dark my-3"
          >
            Next &#8594;
          </button>
        </div>
      </>
    );
  }
}

export default News;
