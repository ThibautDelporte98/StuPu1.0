import React, { useState, useEffect } from "react";
import "../Navigation.css";
import Logo from "assets/img/logo.png";
import ProfileDropdown from "layouts/ProfileDropdown";
import SearchInput from "components/inputs/SearchInput";
import OverviewIcon from "components/button/OverviewIcon";
import ProfileIcon from "components/button/ProfileIcon";
import LessonIcon from "components/button/LessonIcon";
import AvailibleIcon from "components/button/AvailibleIcon";

function DashNav() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth < 1024.5);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth < 1024.5);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <a href="/dashboard">
              {widthScreen ? <OverviewIcon /> : "Overview"}
            </a>
          </li>
          <li>
            <a href="/mijn-profiel">
              {widthScreen ? <ProfileIcon /> : "Mijn Profiel"}
            </a>
          </li>
          <li>
            <a href="mijn-bijlessen">
              {widthScreen ? <LessonIcon /> : "Mijn Bijlessen"}
            </a>
          </li>
          <li>
            <a href="mijn-beschikbaarheid">
              {widthScreen ? <AvailibleIcon /> : "Mijn Beschikbaarheid"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DashNav;
