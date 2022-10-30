import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  static defaultProps = {
    pageSize: 30,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsPanda - ${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }`;
  }

  async updateNewsPage() {
    this.props.setProgress(0);
    this.setState({ loading: true });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}&page=${this.state.page}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles.slice(0, 99),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.props.setProgress(0);
    this.setState({ loading: true });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}&page=${this.state.page}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles.slice(0, 99),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  handleNextBtn = async () => {
    console.log("Next");
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.setState({ page: this.state.page + 1 });
      this.updateNewsPage();
    }
  };

  handlePreviousBtn = async () => {
    console.log("Previous");
    if (this.state.page - 1 >= 1) {
      this.setState({ page: this.state.page - 1 });
      this.updateNewsPage();
    }
  };

  fetchMoreData = async () => {
    this.props.setProgress(0);
    this.setState({ page: this.state.page + 1 });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}&page=${this.state.page}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles).slice(0, 99),
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  };

  render() {
    return (
      <>
        <div className="container">
          <h2 className="my-3 text-center">NewsPanda - Top Headlines</h2>
          {/* {this.state.loading && <Spinner />}
          {!this.state.loading && (
            <div className="row">
              {this.state.totalResults === 0 ? (
                <>
                  <div className="col-md-4" key="Dummy"></div>
                  <div className="col-md-4" key="Dummy">
                    <NewsItem
                      title="OOPS!!!"
                      description="No News For This Category Yet Come Back Some Other time"
                      imgUrl="./panda.jpg"
                      newsUrl="/"
                      author="NewsPanda"
                      date={new Date().getDate()}
                      source="Panda"
                    />
                  </div>
                  <div className="col-md-4" key="Dummy"></div>
                </>
              ) : (
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imgUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : "./panda.jpg"
                        }
                        newsUrl={element.url}
                        author={element.author ? element.author : "Unknown"}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })
              )}
            </div>
          )} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < 99}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.totalResults === 0 ? (
                  <>
                    <div className="col-md-4" key="Dummy"></div>
                    <div className="col-md-4" key="Dummy">
                      <NewsItem
                        title="OOPS!!!"
                        description="No News For This Category Yet Come Back Some Other time"
                        imgUrl="./panda.jpg"
                        newsUrl="/"
                        author="NewsPanda"
                        date={new Date().getDate()}
                        source="Panda"
                      />
                    </div>
                    <div className="col-md-4" key="Dummy"></div>
                  </>
                ) : (
                  this.state.articles.map((element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title ? element.title : ""}
                          description={
                            element.description ? element.description : ""
                          }
                          imgUrl={
                            element.urlToImage
                              ? element.urlToImage
                              : "./panda.jpg"
                          }
                          newsUrl={element.url}
                          author={element.author ? element.author : "Unknown"}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </InfiniteScroll>
        </div>
        {/* {!this.state.loading && (
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
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNextBtn}
              className="btn btn-dark my-3"
            >
              Next &#8594;
            </button>
          </div>
        )} */}
      </>
    );
  }
}

export default News;
