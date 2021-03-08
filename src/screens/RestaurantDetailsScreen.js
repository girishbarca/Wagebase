import React from "react";
import { Row } from "react-bootstrap";
import { Route, Switch, useParams } from "react-router-dom";

import RestaurantHeader from "../components/RestaurantHeader";
import SkeletonScreen from "./SkeletonScreen";

import { REST_DATA } from "../data/mock";

import RestaurantGraphAndSummary from "../components/RestaurantGraphAndSummary";
import WageDetailList from "../components/WageDetailList";

const RestaurantDetailsScreen = (props) => {
  const { restaurantID } = useParams();
  const currRestaurant = REST_DATA[restaurantID];

  return (
    <SkeletonScreen>
      <Row>
        <RestaurantHeader {...currRestaurant} />
      </Row>
      <Switch>
        <Route
          path="/restaurant/:restaurantID/wageDetails/:roleID"
          children={<WageDetailList {...currRestaurant} />}
        />
        <Route
          path="/"
          children={<RestaurantGraphAndSummary {...currRestaurant} />}
        />
      </Switch>
    </SkeletonScreen>
  );
};

export default RestaurantDetailsScreen;
