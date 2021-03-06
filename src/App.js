import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import WageUploadScreen from "./screens/WageUploadScreen";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/share" children={<WageUploadScreen />} />
          <Route
            path="/search/:searchTerm"
            children={<SearchResultsScreen />}
          />
          <Route
            path="/restaurant/:restaurantID"
            children={<RestaurantDetailsScreen />}
          />
          <Route path="/" children={<HomeScreen />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
