import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import blueArrow from "../img/bluearrow.svg";
import checkmark from "../img/checkmark.svg";
import questionmark from "../img/questionmark.svg";

import "./css/RestaurantWageSummary.css";

const RoleSummary = (props) => {
  return (
    <Row className="role-summary-container">
      <Col xs={6}>
        <p className="role">{props.role}</p>
      </Col>
      <Col xs={6}>
        <Row className="role-summary-right-column">
          <p className="role-wage">{props.roleAvgWage}/hr</p>
          <img
            src={props.verified ? checkmark : questionmark}
            className={
              props.verified
                ? "verification-icon checkmark-icon"
                : "verification-icon questionmark-icon"
            }
            alt="verification-icon"
          />
        </Row>
        <Row className="role-summary-right-column">
          <p className="role-wage-verified-date">{props.verifiedDate}*</p>
        </Row>
        <Row className="role-summary-right-column">
          <Link
            className="standalone-learn-more-link"
            to={`/restaurant/${props.id}/wageDetails/${props.roleID}`}
          >
            <p className="role-wages-learn-more">
              {`View All ${props.role} Wages`}
              {"  "}
              <img
                src={blueArrow}
                className="learn-more-icon"
                alt="learn-more"
              />
            </p>
          </Link>
        </Row>
      </Col>
    </Row>
  );
};

const RestaurantWageSummary = (props) => {
  return (
    <div>
      <div className="wage-summary-container">
        <div className="avg-wage-bar">
          <Row className="avg-wage-figure">{`${props.wage}/hr`}</Row>
          <Row className="avg-wage-label">Overall Average Wage</Row>
        </div>
        <div className="avg-role-wages-list">
          <Row className="column-heading-row">
            <Col className="column-heading" xs={6}>
              Role
            </Col>
            <Col className="column-heading column-heading-right" xs={6}>
              Average Wage
            </Col>
          </Row>
          {props.roleWages.map((roleWage) => {
            const roleProps = { id: props.id, ...roleWage };
            return <RoleSummary {...roleProps} />;
          })}
        </div>
      </div>
      <p className="verified-definition">
        *A verified wage is the most recent wage submission that WageBase has a
        certified pay stub for{" "}
      </p>
    </div>
  );
};

export default RestaurantWageSummary;
