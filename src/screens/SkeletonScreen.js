import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../img/logo.svg";
import invertedLogo from "../img/inverted_logo.svg";
import search from "../img/search.svg";

import "./css/SkeletonScreen.css";
import "../common.css";

const SkeletonScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${searchTerm}`);
  };

  return (
    <div className="full-screen">
      <div className="top-search-bar">
        <div className="logo-holder">
          <Link to="/">
            <img src={logo} className="small-logo" alt="Wagebase Logo" />
          </Link>
        </div>
        <form className="small-search-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="small-search-bar">
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
              <div className="custom-btn custom-btn-primary custom-btn-small">
                Search
              </div>
            </Link>

            <Link to={`/compare/${searchTerm}`}>
              <div className="custom-btn custom-btn-secondary custom-btn-small">
                Compare
              </div>
            </Link>
          </div>
        </form>
      </div>
      <div className="screen-children">{props.children}</div>
      <div className="bottom-bar">
        <img src={invertedLogo} className="small-logo" alt="Wagebase Logo" />
        <div className="rights-text">2021 WageBase - All Rights Reserved</div>
      </div>
    </div>
  );
};

export default SkeletonScreen;
