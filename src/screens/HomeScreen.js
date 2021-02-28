import React from 'react'

import logo from'../img/logo.svg';
import search from'../img/search.svg';

import './css/HomeScreen.css'
import '../common.css'

const HomeScreen = (props) => {
  return (
    <div className="home-screen">
      <div className="logo-holder">
        <img src={logo} className="home-logo" alt="Wagebase Logo"/>
      </div>
      <form className="search-form">
        <div className="search-bar">
          <input className="search-input" type="text"
            placeholder={"e.g. Zareen’s Restaurant, Palo Alto"}/>
          <img src={search} className="search-icon" alt="Search"/>
        </div>
        <div className="btn-group">
          <div className="btn btn-primary btn-large">
            Search
          </div>
          <div className="btn btn-secondary btn-large">
            Compare
          </div>
        </div>
      </form>
      <div className="upload-text">
        Work at a restaurant? Share your wages&nbsp;
        <a>here</a> and empower others
      </div>
    </div>
  )
}

export default HomeScreen