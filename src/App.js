import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  apiKey = "88f565fe49f54261a032781311561122";

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router basename="/NewsPanda">
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key=" "
                  pageSize={30}
                  category="general"
                />
              }
            />

            <Route
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key=" science"
                  pageSize={30}
                  category="science"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="entertainment "
                  pageSize={30}
                  category="entertainment"
                />
              }
            ></Route>

            <Route
              path="/buisness"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key=" buisness"
                  pageSize={30}
                  category="buisness"
                />
              }
            ></Route>

            <Route
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key=" health"
                  pageSize={30}
                  category="health"
                />
              }
            ></Route>

            <Route
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key=" sports"
                  pageSize={30}
                  category="sports"
                />
              }
            ></Route>

            <Route
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="technology "
                  pageSize={30}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
