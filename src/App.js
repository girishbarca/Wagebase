import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import HomeScreen from "./screens/HomeScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import CompareScreen from "./screens/CompareScreen";
import WageUploadScreen from "./screens/WageUploadScreen";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/share" children={<WageUploadScreen />} />
            <Route path="/compare" children={<CompareScreen />} />
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
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
