import React from "react";
import "./Navigation.css";
import Logo from "assets/img/logo.png";
import ProfileDropdown from "components/ProfileDropdown";
import SearchInput from "components/common/SearchInput";

function DashNav() {
  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <div className="navbar-links flex">
          <div className="navbar-logo">
            <a href="/">
              <img src={Logo} alt="Logo StuPu" />
            </a>
          </div>
          <SearchInput />
        </div>
        <div className="navbar-signup flex">
          <ProfileDropdown />
        </div>
      </div>
      <div className="navbar-menu flex justify-content-center p-3">
        <ul>
          <li>
            <a href="word-lesvolger">Overview</a>
          </li>
          <li>
            <a href="#hoe">Mijn Profiel</a>
          </li>
          <li>
            <a href="word-lesgever">Mijn Bijlessen</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DashNav;
