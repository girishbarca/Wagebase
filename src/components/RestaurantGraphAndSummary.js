import React from "react";
import { Col, Row } from "react-bootstrap";

import RestaurantWageSummary from "../components/RestaurantWageSummary";

import "./css/RestaurantGraphAndSummary.css";
import ShareableGraph from "./ShareableGraph";

const RestaurantGraphAndSummary = (props) => {
  const graphProps = { addMarginTop: true, restaurants: [{ ...props }] };

  return (
    <Row>
      <Col xs={12} md={8}>
        <div className="restaurant-graph-div">
          <ShareableGraph {...graphProps} />
        </div>
      </Col>
      <Col xs={12} md={4}>
        <RestaurantWageSummary {...props} />
      </Col>
    </Row>
  );
};

export default RestaurantGraphAndSummary;
