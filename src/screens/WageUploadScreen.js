import React, { useState } from "react";
import Autocomplete from "react-autocomplete";

import waiter from "../img/waiter.svg";

import SkeletonScreen from "./SkeletonScreen";
import UploadConfirmationModal from "../components/UploadConfirmationModal";

import { REST_DATA } from "../data/mock";

import "./css/WageUploadScreen.css";
import "../common.css";

const RestaurantInfo = (props) => {
  const imgurl =
    props.imgurl ||
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
  const name = props.name || "Pizza Pizza";
  const addr = props.addr || "123 Street Way,  Suite 204, Stanford, CA, 94305";
  const desc =
    props.desc ||
    "A small scale pizza joint based in Stanford, CA that is popular with the locals. Winner of best pizza pie for the last 3 years in a row.";
  return (
    <div className="restaurant-info-master">
      <img src={imgurl} className="restaurant-img" alt="Saljuk's Mom" />
      <div className="restaurant-info-text">
        <div className="restaurant-name">{name}</div>
        <div className="restaurant-addr">{addr}</div>
        <div className="restaurant-desc">{desc}</div>
      </div>
    </div>
  );
};

const WageUploadScreen = (props) => {
  const [restName, setRestName] = useState("");
  const [location, setLocation] = useState("");
  const [wage, setWage] = useState("");
  const [status, setStatus] = useState(1);

  let cities = REST_DATA.map((rest) => rest.city);
  console.log(cities);
  let rest_names = REST_DATA.map((rest) => rest.name);
  cities = [...new Set(cities)];
  rest_names = [...new Set(rest_names)];

  let curRest = REST_DATA[0];
  if (restName && location) {
    for (const rest of REST_DATA) {
      if (rest.name == restName && rest.location == location) {
        curRest = rest;
      }
    }
  }

  const NameLocationComp = (
    <div className="wage-upload-master">
      <div className="wage-upload-inputs">
        <div className="share-wage-header">
          <div className="share-wage-header-text">Share Wages</div>
          <div className="dumbass-rect" />
        </div>
        <div className="wage-upload-form">
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
          <div className="next-custom-btn-holder">
            <div
              className="custom-btn custom-btn-primary custom-btn-small"
              onClick={() => {
                if (restName && location) {
                  setStatus(2);
                }
              }}
            >
              Next
            </div>
          </div>
        </div>
      </div>
      <div className="person-img-holder">
        <img src={waiter} className="waiter-img" alt="Saljuk's Mom" />
      </div>
    </div>
  );

  const WageComp = (
    <div className="wage-upload-master">
      <div className="wage-upload-inputs">
        <div className="share-wage-header">
          <div className="share-wage-header-text">Share Wages</div>
          <div className="smartass-rect" />
        </div>
        <div className="wage-upload-form">
          <div className="input-holder">
            <div className="input-label">Role</div>
            <select className="wage-input">
              <option value="waiter">Waiter</option>
              <option value="line-cook">Line Cook</option>
              <option value="chef">Chef</option>
              <option value="greeter">Greeter</option>
            </select>
          </div>
          <div className="input-holder">
            <div className="input-label">Hourly Wages</div>
            <div className="wage-input-bar">
              <div className="dollar-sign"> $ </div>
              <input
                className="wage-input"
                type="number"
                value={wage}
                onChange={(e) => setWage(e.target.value)}
              />
            </div>
          </div>
          <div className="next-custom-btn-holder">
            <div className="custom-btn-group">
              <div
                className="custom-btn custom-btn-tertiary custom-btn-small"
                onClick={() => setStatus(1)}
              >
                Back
              </div>
              <div
                className="custom-btn custom-btn-primary custom-btn-small"
                onClick={() => {
                  if (wage) {
                    setStatus(3);
                  }
                }}
              >
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
      <RestaurantInfo
        name={curRest.name}
        addr={curRest.addr}
        desc={curRest.desc}
      />
    </div>
  );

  return (
    <SkeletonScreen>
      {status === 1 ? NameLocationComp : WageComp}
      {status === 3 && (
        <div className="modal-holder">
          <UploadConfirmationModal
            closeModal={() => {
              setStatus(1);
              setRestName("");
              setLocation("");
            }}
          />
        </div>
      )}
    </SkeletonScreen>
  );
};

const inputStyles = {
  backgroundColor: "#E5E5E5",
  fontWeight: 400,
  border: 0,
  minHeight: 40,
  fontSize: 18,
  borderRadius: 5,
  padding: "1px 10px",
  width: "calc(30vw - 20px)",
};

export default WageUploadScreen;
