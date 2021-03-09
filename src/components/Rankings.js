import React from "react";
import { Col, Row } from "react-bootstrap";

import ShareComponent from "./ShareComponent";

import Dropdown from "react-dropdown";

import "./css/Rankings.css";

const Rankings = () => {
  return (
    <div className="rankings-container">
      <div className="rankings-header">Rankings</div>
      <Row className="rankings-location-selector-container justify-content-md-center">
        In the{" "}
        <select
          name="location"
          id="location"
          className="rankings-dropdown-selector"
        >
          <option value="Palo Alto">Palo Alto</option>
          <option value="Menlo Park">Menlo Park</option>
          <option value="Mountain View">Mountain View</option>
        </select>{" "}
        area
      </Row>
      <Row className="rankings-type-selector-container justify-content-md-center">
        <select
          name="location"
          id="location"
          className="rankings-dropdown-selector dropdown-large"
        >
          <option value="Top 5 Highest Paying">Top 5 Highest Paying</option>
          <option value="Top 5 Lowest Paying">Top 5 Lowest Paying</option>
          <option value="Top 5 on Yelp">Top 5 on Yelp</option>
        </select>{" "}
      </Row>
      <div className="rankings-table-container">
        <table className="rankings-table">
          <tr>
            <td className="rankings-number">1</td>
            <td className="rankings-name">Pizza Pizza</td>
            <td className="rankings-wage">$18/hr</td>
          </tr>
          <tr>
            <td className="rankings-number">2</td>
            <td className="rankings-name">Paulie's Italian</td>
            <td className="rankings-wage">$17.50/hr</td>
          </tr>
          <tr>
            <td className="rankings-number">3</td>
            <td className="rankings-name">Delicieux</td>
            <td className="rankings-wage">$17.25/hr</td>
          </tr>
          <tr>
            <td className="rankings-number">4</td>
            <td className="rankings-name">Umami Burger</td>
            <td className="rankings-wage">$15.50/hr</td>
          </tr>
          <tr>
            <td className="rankings-number">5</td>
            <td className="rankings-name">TAP Cafe</td>
            <td className="rankings-wage">$15/hr</td>
          </tr>
        </table>
      </div>
      <div className="rankings-share-container">
        <ShareComponent />
      </div>
    </div>
  );
};

export default Rankings;
