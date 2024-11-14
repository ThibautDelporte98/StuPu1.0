import React, {useState, useEffect} from "react";
import "./LessonDetail.css";
import LessonInfo from "./LessonInfo";
import LessonTutor from "./LessonTutor";

const MyLessonDetail = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="my-lesson-detail">
      <h1>Bijles Wiskunde 24/10</h1>
      <div className={`flex p-1 align-items-start  ${isSmallScreen ? "flex-colomn" : "flex-reverse"}`}>
          <LessonTutor />
          <LessonInfo />
      </div>
    </section>
  );
};

export default MyLessonDetail;
