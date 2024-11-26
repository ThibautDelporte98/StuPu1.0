import React, { useState, useEffect } from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import TutorCard from "components/cards/TutorCard";
import LessonInfo from "components/dashboard/LessonInfo";
import LessonAbout from "components/dashboard/LessonAbout";
import "./LessonDetail.css";


const LessonDetail = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useChangeBackground("/mijn-bijles-detail", "#59b2a5");

  return (
    <div className="cstm-container">
      <DashNav />
      <div className="flex-wrap">
        <section className="my-lesson-detail">
            <h1>Bijles Wiskunde 24/10</h1>
          <div
            className={`flex p-1 align-items-start  ${
              isSmallScreen ? "flex-colomn" : "flex-reverse"
            }`}
          >
            <TutorCard buttonText={"CONTACTEER JOHN"}/>
            <article className="my-lesson-content w-100">
              <LessonInfo />
              <LessonAbout
                title={"Manier van lesgeven"}
                text={
                  "John Doe hanteert een gestructureerde en persoonlijke aanpak in zijn lessen. Hij stemt zijn onderwijsmethode af op de behoeften enhet leervermogen van elke student. Door complexe onderwerpen opeen eenvoudige manier uit te leggen, zorgt John ervoor dat zijnstudenten stap voor stap vertrouwen opbouwen in hun vaardigheden."
                }
              />
              <LessonAbout
                title={"Ervaringen & Kwalificaties"}
                text={
                  "John Doe hanteert een gestructureerde en persoonlijke aanpak in zijn lessen. Hij stemt zijn onderwijsmethode af op de behoeften enhet leervermogen van elke student. Door complexe onderwerpen opeen eenvoudige manier uit te leggen, zorgt John ervoor dat zijnstudenten stap voor stap vertrouwen opbouwen in hun vaardigheden."
                }
              />
            </article>
          </div>
        </section>
        <div className="box-6 flex-colomnn align-items-end box-support p-2">
          <h2>Hulp nodig?</h2>
          <div className="ptb-1">
            Telefoon: <a href="tel:0477889944">04 77 88 99 44 </a>{" "}
          </div>
          <div>
            Email: <a href="mailto:info@stupu.be">info@stupu.be</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
