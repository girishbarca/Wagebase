import React from "react";
import { Col, Row } from "react-bootstrap";

import "./css/RestaurantHeader.css";
import "../common.css";

const RestaurantHeader = (props) => {
  const { addr, desc, imgurl, name } = props;

  return (
    <div
      className="restaurant-container"
      style={{ backgroundImage: `url(${imgurl})` }}
    >
      <div className="overlay"></div>
      <Col xs={12} md={9} className="restaurant-details">
        <h1 className="restaurant-name">{name}</h1>
        <p className="restaurant-address">{addr}</p>
        <p className="restaurant-description">{desc}</p>
      </Col>
      <Col xs={12} md={3} className={"restaurant-ctas"}>
        <div className="custom-btn custom-btn-primary custom-btn-extra-large">
          Bookmark
        </div>
        <div className="spacer"></div>
        <div className="custom-btn custom-btn-secondary custom-btn-extra-large">
          Compare
        </div>
      </Col>
    </div>
  );
};

export default RestaurantHeader;
