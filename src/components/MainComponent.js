import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PHOTOS } from "../shared/photos";
import WardWise from "./WardWise";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: PHOTOS,
    };
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };

    const Ward = () => {
      return <WardWise photos={this.state.photos} />;
    };

    return (
      <div className="Main">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/ward" component={Ward} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
