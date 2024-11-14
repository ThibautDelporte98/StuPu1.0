import React, {useState, useEffect} from "react";
import DashNav from "layouts/DashboardNav";
import LessonTutor from "components/common/cards/TutorCard";
import LessonInfo from "components/common/LessonInfo";
import "../dashboard.css";
import useChangeBackground from "utils/changeBackground";

const CompletedLessonDetail = () => {
  useChangeBackground("/dashboard", "#59b2a5");

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="cstm-container">
      <DashNav />
      <div className="flex-wrap">
        {/* <MyLessonDetail /> */}
        <section className="my-lesson-detail">
          <h1>Bijles Wiskunde 24/10</h1>
          <div
            className={`flex p-1 align-items-start  ${
              isSmallScreen ? "flex-colomn" : "flex-reverse"
            }`}
          >
            <LessonTutor buttonText={"HERBOEK JOHN"} />
            <article className="my-lesson-content w-100">
              <LessonInfo />
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

export default CompletedLessonDetail;
