import Avatar from "assets/img/defaultprofile.webp";
import "./MyLesson.css";

const LessonView = ({ index, type, date, time, title, tutor, children }) => {
  return (
    <div className="box lesson" key={index}>
      {type && <div className="lesson-type box-shadow">{type}</div>}
      {tutor && (
        <div className="lesson-teacher flex pb-1">
          <img className="avatar-small box-shadow" src={Avatar} alt="avatar" />
          <p>{tutor}</p>
        </div>
      )}
      {(date || time) && (
        <div className="lesson-date-time flex justify-content-center ptb-1">
          <p className="bold">
            {date && date} {date && time && "|"} {time && time}
          </p>
        </div>
      )}
      {title && (
        <div className="list-information ptb-1-05">
          <ul>
          <li className="flex ptb-05">
              <div className="medium mr-1">Onderwijsvorm:</div> Middelbareschool
            </li>
            <li className="flex ptb-05">
              <div className="medium mr-1">Vak:</div> {title}
            </li>
            <li className="flex ptb-05">
              <div className="medium mr-1">Locatie:</div> Teams meeting
            </li>
          </ul>
        </div>
      )}
      <div className="actions">
        {children}
      </div>
    </div>
  );
};

export default LessonView;
