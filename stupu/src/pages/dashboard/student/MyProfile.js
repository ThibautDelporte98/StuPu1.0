import React from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import Avatar2 from "assets/img/defaultprofile.webp";
import Verified from "assets/img/verified.png";

import "./LessonDetail.css";

const LessonDetail = () => {
  useChangeBackground("/mijn-bijles-detail", "#59b2a5");

  return (
    <div className="cstm-container">
      <DashNav />
      <div className="flex-wrap">
        <div className="box-top">
          <h1>Mijn Profiel</h1>
        </div>
        <div className="flex ptb-1">
          <section className="box box-border box-2">
            <div className="box-top flex">
              <button className="button">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5 4.49996C25.894 4.106 26.3617 3.79349 26.8764 3.58028C27.3912 3.36706 27.9428 3.25732 28.5 3.25732C29.0571 3.25732 29.6088 3.36706 30.1236 3.58028C30.6383 3.79349 31.106 4.106 31.5 4.49996C31.894 4.89393 32.2065 5.36164 32.4197 5.87638C32.6329 6.39112 32.7426 6.94281 32.7426 7.49997C32.7426 8.05712 32.6329 8.60881 32.4197 9.12355C32.2065 9.63829 31.894 10.106 31.5 10.5L11.25 30.75L3 33L5.25 24.75L25.5 4.49996Z"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="profile-img">
              <span className="verified">
                <img className="verified-img" src={Verified} alt="default" />
              </span>
              <div className="picture">
                <img className="picture-img" src={Avatar2} alt="default" />
              </div>
            </div>
            <div className="profile-info">
              <h3 className="ptb-1">John Doe</h3>
              <ul>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Onderwijsvorm:</div>
                  Middelbareschool
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Vak:</div> 
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Locatie:</div> Teams meeting
                </li>
              </ul>
            </div>
            <div className="profile-info">
              <h3>student gegevens</h3>
              <ul>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Onderwijsvorm:</div>
                  Middelbareschool
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Vak:</div> 
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Locatie:</div> Teams meeting
                </li>
              </ul>
            </div>
          </section>
          <section className="w-100">
          <div className="profile-info">
              <h3>student gegevens</h3>
              <ul>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Onderwijsvorm:</div>
                  Middelbareschool
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Vak:</div> 
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Locatie:</div> Teams meeting
                </li>
              </ul>
            </div>
            <div className="profile-info">
              <h3>student gegevens</h3>
              <ul>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Onderwijsvorm:</div>
                  Middelbareschool
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Vak:</div> 
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Locatie:</div> Teams meeting
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
