import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import SkeletonScreen from "./SkeletonScreen";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { REST_DATA } from "../data/mock";

import "./css/SearchResultScreen.css";
import "../common.css";
import arrow from "../img/arrow.svg";

const RestaurantInfo = (props) => {
  const history = useHistory();

  const imgurl =
    props.imgurl ||
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
  const name = props.name || "Pizza Pizza";
  const addr = props.addr || "123 Street Way,  Suite 204, Stanford, CA, 94305";
  const desc =
    props.desc ||
    "A small scale pizza joint based in Stanford, CA that is popular with the locals. Winner of best pizza pie for the last 3 years in a row.";
  const wage = props.wage || "$18.42";
  return (
    <div
      className="restaurant-info-master"
      style={{
        flexDirection: "row",
        height: "30vh",
        width: "80%",
        alignSelf: "center",
        margin: "0 auto",
        borderRadius: 10,
        backgroundColor: "#FAFAFA",
        marginBottom: "7vh",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img
        src={imgurl}
        style={{
          height: "100%",
          width: "25%",
          borderRadius: "10px 0px 0px 10px",
          objectFit: "cover",
        }}
        alt="Restaurant Splash"
      />
      <div style={{ width: 20 }}> </div>
      <div className="restaurant-info-text" style={{ marginLeft: "1em" }}>
        <div
          className="restaurant-name"
          style={{ fontSize: "35px", color: "black", marginTop: 0 }}
        >
          {name}
        </div>
        <div className="restaurant-addr" style={{ maxLines: 2, width: "20vw" }}>
          {addr}
        </div>
        <div style={{ height: 10 }}> </div>

        <div className="restaurant-desc">{desc}</div>
      </div>
      <div style={{ width: 20 }}> </div>

      <div
        style={{
          backgroundColor: "#43b3ae",
          width: "30%",
          height: "100%",
          borderRadius: "0px 10px 10px 0px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "80%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "45%",
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <text
              className="wage-info"
              style={{ maxLines: 2, fontWeight: 700 }}
            >
              {wage}
            </text>
            <text style={{ color: "white", fontSize: 30 }}>/hr</text>
          </div>
          <hr
            style={{
              color: "white",
              backgroundColor: "white",
              height: 0.05,
              width: "80%",
              marginBottom: "20px",
              borderColor: "white",
            }}
          />
          <text style={{ color: "white", fontSize: 20, fontWeight: "lighter" }}>
            Overall Average Wage
          </text>
        </div>
        <div
          onClick={() => {
            history.push(`/restaurant/${props.id}`);
          }}
          style={{
            position: "relative",
            cursor: "pointer",
            bottom: 0,
            width: "100%",
            height: "25%",
            backgroundColor: "#19647E",
            borderRadius: "0px 0px 10px 0px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            Learn More
          </text>
          <img src={arrow} className="search-icon" alt="learn-more" />
        </div>
      </div>
    </div>
  );
};

const SearchResultsScreen = (props) => {
  let { searchTerm } = useParams();

  return (
    <SkeletonScreen>
      {
        <div
          style={{
            alignContent: "center",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              alignContent: "center",
              justifyContent: "space-between",
              width: "80%",
              alignSelf: "center",
              margin: "0 auto",
              marginTop: "6vh",
              marginBottom: "3.5vh",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <text style={{ fontSize: "35px" }}>
              {" "}
              {REST_DATA.length} Search Results for <b>{searchTerm}</b>
            </text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <text style={{ fontSize: "20px", marginRight: "10px" }}>
                Filter by:
              </text>

              <Dropdown
                options={["Most Relevant", "Closest Distance"]}
                onChange={this._onSelect}
                value="Most Relevant"
                placeholder="Select an option"
              />
            </div>
          </div>
          {REST_DATA.map((rest) => (
            <RestaurantInfo {...rest} />
          ))}
        </div>
      }
    </SkeletonScreen>
  );
};

export default SearchResultsScreen;
