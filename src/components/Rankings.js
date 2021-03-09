import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ShareComponent from "./ShareComponent";

import { RANKINGS_DATA } from "../data/mock";

import "./css/Rankings.css";

const CustomDropdownSelector = (props) => {
  return (
    <select
      name={props.name}
      id={props.id}
      className={`rankings-dropdown-selector ${props.dropdownSize}`}
      onChange={(e) => props.handler(e)}
      value={props.value}
    >
      {props.options.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
};

const RankingTableRow = (props) => {
  return (
    <Link className="ranking-link" to={`/restaurant/${props.restaurantID}`}>
      <tr>
        <td className="rankings-number">{props.number}</td>
        <td className="rankings-name">{props.name}</td>
        <td className="rankings-wage">{props.wage}</td>
      </tr>
    </Link>
  );
};

const Rankings = () => {
  const locationNames = Object.keys(RANKINGS_DATA);

  const [currentLocation, setCurrentLocation] = useState(locationNames[0]);
  const [currentCategory, setCurrentCategory] = useState(
    Object.keys(RANKINGS_DATA[currentLocation])[0]
  );
  const [rankings, setRankings] = useState([]);
  const [shouldUpdateRankings, setShouldUpdateRankings] = useState(true);

  const onLocationChange = (e) => {
    setCurrentLocation(e.target.value);
    setCurrentCategory(Object.keys(RANKINGS_DATA[e.target.value])[0]);
    setShouldUpdateRankings(true);
  };

  const onCategoryChange = (e) => {
    setCurrentCategory(e.target.value);
    setShouldUpdateRankings(true);
  };

  useEffect(() => {
    if (shouldUpdateRankings) {
      setRankings(RANKINGS_DATA[currentLocation][currentCategory]);
      setShouldUpdateRankings(false);
    }
  }, [shouldUpdateRankings]);

  const locationDropdownProps = {
    dropdownSize: "dropdown-medium",
    handler: onLocationChange,
    name: "location",
    id: "location",
    value: currentLocation,
    options: Object.keys(RANKINGS_DATA),
  };

  const rankingCategoryDropdownProps = {
    dropdownSize: "dropdown-large",
    handler: onCategoryChange,
    name: "category",
    id: "category",
    value: currentCategory,
    options: Object.keys(RANKINGS_DATA[currentLocation]),
  };

  return (
    <div className="rankings-container">
      <div className="rankings-header">Rankings</div>
      <Row className="rankings-location-selector-container justify-content-md-center">
        In the <CustomDropdownSelector {...locationDropdownProps} /> area
      </Row>
      <Row className="rankings-type-selector-container justify-content-md-center">
        <CustomDropdownSelector {...rankingCategoryDropdownProps} />
      </Row>
      <div className="rankings-table-container">
        <table className="rankings-table">
          {rankings.map((ranking) => {
            return <RankingTableRow {...ranking} />;
          })}
        </table>
      </div>
      <div className="rankings-share-container">
        <ShareComponent />
      </div>
    </div>
  );
};

export default Rankings;
