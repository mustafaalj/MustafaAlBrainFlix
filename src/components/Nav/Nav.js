import React, { Component } from "react";
import NavLogo from "../../images/BrainFlix-logo.svg";
import SearchIcon from "../../images/search.svg";
import "./Nav.scss";
import search__img from "../../images/Mohan-muruge.jpg";
import uploadIcon from "../../images/upload.svg";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div>
          <img className="nav__logo" src={NavLogo} alt="" />
        </div>
        <div className="search">
          <div className="search__right">
            <img src={SearchIcon} alt="" className="search__icon" />
            <input placeholder="Search" type="text" />
          </div>

          <img src={search__img} alt="" className="search__img" />
        </div>
        <div className="nav__uploadButton">
          <img src={uploadIcon} alt="" />
          <p className="nav__uploadButton__text">UPLOAD</p>
        </div>
      </div>
    );
  }
}

export default Nav;
