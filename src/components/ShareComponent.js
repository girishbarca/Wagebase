import React from "react";

import fb from "../img/fb.svg";
import twitter from "../img/twitter.svg";
import reddit from "../img/reddit.svg";
import insta from "../img/insta.svg";

import "../common.css";
import "./css/ShareComponent.css";

const ShareComponent = (props) => {
  return (
    <div className="share-row">
      <div className="share-header">Share Graph</div>
      <div className="share-icon-row">
        <a
          className="share-icon custom-btn"
          href="https://www.facebook.com/sharer/sharer.php?u=#url"
        >
          <img src={fb} className="share-img" alt="Facebook" />
        </a>
        <a className="share-icon custom-btn" href="http://twitter.com/share">
          <img src={twitter} className="share-img" alt="Twitter" />
        </a>
        <a className="share-icon custom-btn">
          <img src={insta} className="share-img" alt="Instagram" />
        </a>
        <a
          className="share-icon custom-btn"
          href="http://www.reddit.com/submit?url="
        >
          <img src={reddit} className="share-img" alt="Reddit" />
        </a>
      </div>
    </div>
  );
};

export default ShareComponent;
