import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={<News key=" " pageSize={30} category="general" />}
            />

            <Route
              path="/science"
              element={<News key=" science" pageSize={30} category="science" />}
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment "
                  pageSize={30}
                  category="entertainment"
                />
              }
            ></Route>

            <Route
              path="/buisness"
              element={
                <News key=" buisness" pageSize={30} category="buisness" />
              }
            ></Route>

            <Route
              path="/health"
              element={<News key=" health" pageSize={30} category="health" />}
            ></Route>

            <Route
              path="/sports"
              element={<News key=" sports" pageSize={30} category="sports" />}
            ></Route>

            <Route
              path="/technology"
              element={
                <News key="technology " pageSize={30} category="technology" />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
