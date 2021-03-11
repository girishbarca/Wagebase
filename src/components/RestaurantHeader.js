import React, { useContext, useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { UserContext } from "../context";

import "./css/RestaurantHeader.css";
import "../common.css";

const RestaurantHeader = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const user = useContext(UserContext);

  const { currRests, setCurrRests } = user;
  const { addr, desc, imgurl, id, name } = props;

  const addBookmark = () => {
    setCurrRests(currRests.concat([props]));
    setIsBookmarked(true);
  };

  const removeBookmark = () => {
    setCurrRests(
      currRests.filter((rest) => {
        return rest.id !== props.id;
      })
    );
    setIsBookmarked(false);
  };

  useEffect(() => {
    let isCurrBookmarked = false;

    for (const rest of currRests) {
      if (rest.name == name && rest.id == id) {
        isCurrBookmarked = true;
      }
    }

    if (isCurrBookmarked) {
      setIsBookmarked(true);
    }
  }, []);

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
        <div
          onClick={isBookmarked ? removeBookmark : addBookmark}
          className={`custom-btn ${
            isBookmarked ? "custom-btn-alert" : "custom-btn-primary"
          } custom-btn-extra-large`}
        >
          {isBookmarked ? "Remove Bookmark" : "Bookmark"}
        </div>
        <div className="spacer"></div>
        {isBookmarked ? (
          <Link to="/compare">
            <div className="custom-btn custom-btn-secondary custom-btn-extra-large">
              Compare
            </div>
          </Link>
        ) : (
          <div className="custom-btn custom-btn-secondary custom-btn-extra-large custom-btn-disabled">
            Compare
          </div>
        )}
      </Col>
    </div>
  );
};

export default RestaurantHeader;
