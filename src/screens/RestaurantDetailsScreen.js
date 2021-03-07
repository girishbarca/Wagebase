import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import RestaurantHeader from "../components/RestaurantHeader";
import SkeletonScreen from "./SkeletonScreen";

import { REST_DATA } from "../data/mock";

import "./css/RestaurantDetailsScreen.css";
import RestaurantWageSummary from "../components/RestaurantWageSummary";

const RestaurantDetailsScreen = (props) => {
  const { restaurantID } = useParams();
  const currRestaurant = REST_DATA[restaurantID];

  return (
    <SkeletonScreen>
      <Row>
        <RestaurantHeader {...currRestaurant} />
      </Row>
      <Row>
        <Col xs={12} md={8}>
          {/*---remove placeholder and insert graph component---*/}
          <div className="graph-placeholder"></div>
        </Col>
        <Col xs={12} md={4}>
          <RestaurantWageSummary {...currRestaurant} />
        </Col>
      </Row>
    </SkeletonScreen>
  );
};

export default RestaurantDetailsScreen;
