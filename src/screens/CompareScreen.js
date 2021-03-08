import React, { useState } from "react";
import Autocomplete from "react-autocomplete";

import SkeletonScreen from "./SkeletonScreen";
import ShareableGraph from "../components/ShareableGraph";

import remove from "../img/remove.svg";

import { REST_DATA } from "../data/mock";

import "./css/CompareScreen.css";
import "../common.css";


const CompSideBar = (props) => {
  const [restName, setRestName] = useState("");
  const [location, setLocation] = useState("");
  let cities = REST_DATA.map((rest) => rest.city);
  let rest_names = REST_DATA.map((rest) => rest.name);
  cities = [...new Set(cities)];
  rest_names = [...new Set(rest_names)];
  return (
    <div className="sidebar-master">
      <div className="rest-form">
        <div className="input-holder">
          <div className="input-label">Restaurant Name</div>
          <Autocomplete
            getItemValue={(item) => item}
            items={rest_names}
            renderItem={(item, isHighlighted) => (
              <div
                className="dropdownItem"
                style={{ background: isHighlighted ? "lightgray" : "white" }}
              >
                {item}
              </div>
            )}
            inputProps={{ style: inputStyles }}
            value={restName}
            onChange={(e) => setRestName(e.target.value)}
            onSelect={(val) => setRestName(val)}
          />
        </div>
        <div className="input-holder">
          <div className="input-label">Location (Optional)</div>
          <Autocomplete
            getItemValue={(item) => item}
            items={cities}
            renderItem={(item, isHighlighted) => (
              <div
                className="dropdownItem"
                style={{ background: isHighlighted ? "lightgray" : "white" }}
              >
                {item}
              </div>
            )}
            inputProps={{ style: inputStyles }}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onSelect={(val) => setLocation(val)}
          />
        </div>
        <div
          className="btn btn-primary btn-stretch"
          onClick={() => {
            if (restName && location) {
              props.addRestaurant(restName, location)
              setRestName("")
              setLocation("")
            }
          }}
        >
          Add Restaurant
        </div>
      </div>
      <div className="restaurant-snippet-list">
        <div className="rest-comp-header">Restaurants Being Compared</div>
        <div className="rest-comp-list">
          {
            props.rests.map(
              (rest, idx) => {
                return (
                  <RestaurantSnippet name={rest.name} imgurl={rest.imgurl}
                    removeRest={() => props.removeRest(idx)}
                  />
                )
              }
            )
          }
        </div>
      </div>
    </div>
  )
}

const RestaurantSnippet = (props) => {
  const imgurl =
    props.imgurl ||
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
  const name = props.name || "Pizza Pizza";
  return (
    <div className="restaurant-snippet">
      <img src={imgurl} className="restaurant-snippet-img" alt="Saljuk's Mom" />
      <div className="restaurant-name">
        {name}
      </div>
      <div className="remove-button btn" onClick={() => props.removeRest(props.idx)}>
        <img src={remove} className="remove-img" alt="Saljuk's Mom" />
      </div>
    </div>
  );
};

const EmptyCompScreen = (props) => {
  return (
    <div className="empty-comp">
      <div className="empty-comp-holder">
        <div className="empty-comp-header">
          Compare Restaurants
        </div>
        <div className="empty-comp-desc">
          Add up to 4 restaurants to compare their wage practices simultaneously
        </div>
      </div>
      <div className="empty-comp-placeholder">
        <div className="empty-comp-placeholder-text">
          Pick a restaurant to get started
        </div>
      </div>
    </div>
  )
}

const CompareScreen = (props) => {
  const [curRests, setRests] = useState([REST_DATA[0]]);

  const removeRest = (idx) => {
    setRests(curRests.filter((value, index, arr) => {return index !== idx}))

  }

  const addRest = (restName, city) => {
    let foundrest;
    for (const rest of REST_DATA) {
      if (rest.name == restName && rest.city == city) {
        foundrest = rest;
      }
    }
    if (foundrest) {
      setRests(curRests.concat([foundrest])) 
    }
  }

  return (
    <SkeletonScreen>
      <div className="comp-master">
        <CompSideBar
          rests={curRests} removeRest={removeRest}
          addRestaurant={addRest}
        />
        <div className="graph-div">
          {
            curRests.length > 0
            ? <ShareableGraph restaurants={curRests}/>
            : <EmptyCompScreen/>
          }
        </div>
      </div>
    </SkeletonScreen>
  );
};

const inputStyles = {
  backgroundColor: "#FFFFFF",
  fontWeight: 400,
  border: 0,
  minHeight: 40,
  fontSize: 18,
  borderRadius: 5,
  padding: "1px 10px",
  width: "calc(25vw - 20px)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
};

export default CompareScreen;
