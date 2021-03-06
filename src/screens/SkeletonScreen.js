import React from 'react'

import logo from'../img/logo.svg';
import search from'../img/search.svg';

import './css/SkeletonScreen.css'
import '../common.css'

const SkeletonScreen = (props) => {
  return (
    <div className="full-screen">
      <div className="top-search-bar">
        <div className="logo-holder">
          <img src={logo} className="small-logo" alt="Wagebase Logo"/>
        </div>
        <form className="small-search-form">
          <div className="small-search-bar">
            <input className="search-input" type="text"
              placeholder={"e.g. Zareen’s Restaurant, Palo Alto"}/>
            <img src={search} className="search-icon" alt="Search"/>
          </div>
          <div className="btn-group">
            <div onClick={()=>console.log("navigate to search")} className="btn btn-primary btn-small">
              Search
            </div>
            <div className="btn btn-secondary btn-small">
              Compare
            </div>
          </div>
        </form>
      </div>
      <div className="screen-children">
        {props.children}
      </div>
      <div className="bottom-bar">
        <img src={logo} className="small-logo" alt="Wagebase Logo"/>
        <div className="rights-text">
          2021 WageBase - All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default SkeletonScreen