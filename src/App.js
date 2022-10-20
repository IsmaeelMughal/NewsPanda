import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />

          <News pageSize={30} category="Science" />
        </Router>
      </>
    );
  }
}
