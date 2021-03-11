import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import { Col, Row } from "react-bootstrap";

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
      <img src={imgurl} className="restaurant-img" alt="Restaurant" />
      <div className="restaurant-info-text">
        <div className="restaurant-info-name">{name}</div>
        <div className="restaurant-addr">{addr}</div>
        <div className="restaurant-desc">{desc}</div>
      </div>
    </div>
  );
};

const ProgressBar = (props) => {
  let first = undefined;
  let second = undefined;
  let third = undefined;
  let progressTitle = undefined;

  if (props.progress >= 1) {
    first = "bar-filled";
    progressTitle = "Step 1: Restaurant Details";
  }
  if (props.progress >= 2) {
    second = "bar-filled";
    progressTitle = "Step 2: Wage Details";
  }
  if (props.progress >= 3) {
    third = "bar-filled";
    progressTitle = "Step 3: Confirmation";
  }

  return (
    <div className="custom-progress-bar">
      <Row className="bars">
        <div className={`bar ${first}`}></div>
        <div className={`bar ${second}`}></div>
        <div className={`bar ${third}`}></div>
      </Row>
      <div className="progress-title">{progressTitle}</div>
    </div>
  );
};

const WageUploadScreen = (props) => {
  const [restName, setRestName] = useState("");
  const [location, setLocation] = useState("");
  const [wage, setWage] = useState("");
  const [status, setStatus] = useState(1);

  let cities = REST_DATA.map((rest) => rest.city);
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
    <Row className="justify-content-md-center wage-upload-master">
      <Col md={6} className="wage-upload-inputs">
        <div className="share-wage-header">
          <div className="share-wage-header-text">Share Wages</div>
          <ProgressBar {...{ progress: status }} />
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
                  style={{
                    background: isHighlighted ? "lightgray" : "white",
                  }}
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
      </Col>
      <Col md={6}>
        <img src={waiter} className="waiter-img" alt="Waiter Cartoon" />
      </Col>
    </Row>
  );

  const WageComp = (
    <Row className={`wage-upload-master ${status === 3 ? "blur-bg" : ""}`}>
      <Col md={6} className="wage-upload-inputs">
        <div className="share-wage-header">
          <div className="share-wage-header-text">Share Wages</div>
          <ProgressBar {...{ progress: status }} />
        </div>
        <div className="wage-upload-form">
          <div className="input-holder">
            <div className="input-label">Role</div>
            <select className="wage-input select-wage-role">
              <option value="waiter">Waiter</option>
              <option value="line-cook">Line Cook</option>
              <option value="chef">Chef</option>
              <option value="greeter">Greeter</option>
            </select>
          </div>
          <div className="input-holder">
            <div className="input-label">Hourly Wages</div>
            <div className="wage-input-bar">
              <span className="dollar-sign"> $ </span>
              <input
                className="wage-input hourly-wage-input"
                min="0"
                type="number"
                value={wage}
                onChange={(e) => setWage(e.target.value)}
              />
              <span className="hour-sign">/hr</span>
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
      </Col>
      <Col xs={6}>
        <RestaurantInfo
          name={curRest.name}
          addr={curRest.addr}
          desc={curRest.desc}
        />
      </Col>
    </Row>
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
  backgroundColor: "#fafafa",
  fontWeight: 400,
  border: 0,
  minHeight: 40,
  fontSize: "24px",
  borderRadius: 5,
  padding: "5px 20px",
  width: "calc(30vw - 20px)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
};

export default WageUploadScreen;
