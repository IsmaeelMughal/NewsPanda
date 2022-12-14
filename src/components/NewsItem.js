import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "50%" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img className="card-img-top" src={imgUrl} alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
          <div className="card-footer text-muted text-center">
            By {author} on {new Date(date).toGMTString()}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
