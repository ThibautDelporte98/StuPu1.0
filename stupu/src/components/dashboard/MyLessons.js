import DashFilter from "./DashboardFilter";
import Avatar from "assets/img/defaultprofile.webp";
import "./MyLessons.css";
import Slider from "components/common/Slider";

const MyLessons = () => {
  const lessons = [
    { type: "online", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },
    { type: "aan huis", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },
    { type: "op locatie", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },
    { type: "online", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },
    { type: "online", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },

  ];

  const renderLesson = (lesson, index) => (
    <div className="box lesson" key={index}>
      <div className="lesson-type box-shadow">
        {lesson.type}
      </div>
      <div className="lesson-teacher flex pb-1">
        <img className="avatar-small box-shadow" src={Avatar} alt="avatar" />
        <p>{lesson.tutor}</p>
      </div>
      <div className="lesson-date-time flex justify-content-center ptb-1">
        <p>{lesson.date} | {lesson.time}</p>
      </div>
      <div className="list-information ptb-1-05">
        <ul>
          <li className="flex ptb-05"><div className="medium mr-1">Vak:</div> {lesson.title}</li>
          <li className="flex ptb-05"><div className="medium mr-1">Locatie:</div> Teams meeting</li>
        </ul>
      </div>
      <div className="actions">
        <button className="custom-button button-border-sec-color">EMAIL "{lesson.tutor.split(" ")[0]}"</button>
        <button className="custom-button button-choiceSec mt-05">BEL "{lesson.tutor.split(" ")[0]}"</button>
        <button className="custom-button button-cancel mt-05">Annuleer</button>
      </div>
    </div>
  );

  return (
    <>
      <div className="box-top">
        <h1>Mijn Bijlessen</h1>
        <DashFilter />
      </div>
      <div className="my-lessons flex justify-content-center ptb-1-05">
        {lessons.length > 3 ? (
          <Slider items={lessons.map(renderLesson)} initialItemsToShow={3} />
        ) : (
          lessons.map(renderLesson)
        )}
      </div>
    </>
  );
};

export default MyLessons;
