import React from "react";
import { Col, Row } from "react-bootstrap";

import RestaurantWageSummary from "../components/RestaurantWageSummary";

import "./css/RestaurantGraphAndSummary.css";

const RestaurantGraphAndSummary = (props) => {
  return (
    <Row>
      <Col xs={12} md={8}>
        {/*---remove placeholder and insert graph component---*/}
        <div className="graph-placeholder"></div>
      </Col>
      <Col xs={12} md={4}>
        <RestaurantWageSummary {...props} />
      </Col>
    </Row>
  );
};

export default RestaurantGraphAndSummary;
