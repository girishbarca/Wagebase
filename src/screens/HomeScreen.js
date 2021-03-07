import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../img/logo.svg";
import search from "../img/search.svg";

import "./css/HomeScreen.css";
import "../common.css";

const HomeScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${searchTerm}`);
  };

  return (
    <div className="home-screen">
      <div className="logo-holder">
        <img src={logo} className="home-logo" alt="Wagebase Logo" />
      </div>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={"e.g. Zareen’s Restaurant, Palo Alto"}
          />
          <img src={search} className="search-icon" alt="Search" />
        </div>
        <div className="custom-btn-group">
          <Link to={`/search/${searchTerm}`}>
            <div className="custom-btn custom-btn-primary custom-btn-large">
              Search
            </div>
          </Link>
          <Link to={`/compare/${searchTerm}`}>
            <div className="custom-btn custom-btn-secondary custom-btn-large">
              Compare
            </div>
          </Link>
        </div>
      </form>
      <div className="upload-text">
        Work at a restaurant? Share your wages&nbsp;
        <Link to={`/share`} className="standalone-link">
          here
        </Link>{" "}
        and empower others
      </div>
    </div>
  );
};

export default HomeScreen;
