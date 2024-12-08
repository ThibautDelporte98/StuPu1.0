import React, { useState, useEffect } from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import TutorCard from "components/cards/TutorCard";
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
      <div>
        <section className="my-lesson-detail">
          <div className="title">
            <h1>Bijles Wiskunde 24/10</h1>
          </div>
          <div
            className={`flex  align-items-start  ${
              isSmallScreen ? "flex-colomn ptb-1 mt-2" : "flex-reverse p-1"
            }`}
          >
            <TutorCard buttonText={"CONTACTEER JOHN"} />
            <article className="detail-lesson w-100">
              <LessonAbout title={"Info over deze les"}>
                <ul>
                  <li className="flex">
                    <div className="bold mr-1">Datum & Tijd:</div>24/10/24 |
                    12:00-14:00
                  </li>
                  <li className="flex">
                    <div className="bold mr-1">Locatie:</div> Online ( link:
                    https//teams.meeting.com/... )
                  </li>
                  <li className="flex">
                    <div className="bold mr-1">Onderwerp:</div> Vervolg op de
                    vierkantswortel.
                  </li>
                </ul>
              </LessonAbout>
              <LessonAbout title={"Betalings gegevens"}>
                <div className="payment flex space-between">
                  <div className="status flex-colomn space-between">
                    <div>
                      <span className="status-state">Betaling voltooid</span>
                    </div>
                    <div className="status-price">
                      Totaal: €50{" "}
                      <span className="status-price-btw">incl. btw</span>
                    </div>
                  </div>

                  <div className="info w-50">
                    <ul>
                      <li className="flex">
                        <div className="bold mr-1">Datum uitgifte:</div>8/12/24
                      </li>
                      <li className="flex">
                        <div className="bold mr-1">Betalingsmethode:</div>{" "}
                        Bancontact
                      </li>
                      <li className="flex">
                        <div className="bold mr-1">Referentie nr.:</div>{" "}
                        202411458888
                      </li>
                      <a
                        href="/path-to-your-file.pdf"
                        download
                        className="pdf-download-button"
                      >
                        Download PDF bestand
                      </a>
                    </ul>
                  </div>
                </div>
              </LessonAbout>
              <LessonAbout title={"Contact gegevens docent"}>
                <ul>
                  <li className="flex">
                    <div className="bold mr-1">Telefoon:</div>
                    <a href="tel:+32492998877">+ 32492998877</a>
                  </li>
                  <li className="flex">
                    <div className="bold mr-1">Email:</div>
                    <a href="mailto:John@gmail.com">John@gmail.com</a>
                  </li>
                </ul>
              </LessonAbout>
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
