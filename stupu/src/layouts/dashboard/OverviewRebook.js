import DashFilter from "components/dashboard/Filter";
import Avatar from "assets/img/defaultprofile.webp";
import "./OverviewRebook.css";

const OverviewRebook = () => {
  const lessons = [
    {
      type: "online",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      type: "aan huis",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      type: "op locatie",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    { type: "online", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },
    { type: "online", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },
  ];

  return (
    <section className="box-2 w-100">
      <div className="flex-colomn">
        <div className="box box-transparent">
          <DashFilter title={"Opnieuw inplannen"} />
          <div className="scroll-container p-1 mtb-1">
            {lessons.map((lesson, index) => (
            <div className="box lesson" key={index}>
            <div className="lesson-teacher flex pb-1">
              <img className="avatar-small box-shadow" src={Avatar} alt="avatar" />
              <p>{lesson.tutor}</p>
            </div>
            <div className="lesson-date-time  flex justify-content-center ptb-1">
              <p className="bold">
                {lesson.title} 
              </p>
            </div>
            <div className="actions">
            <button className="custom-button button-border-sec-color mt-05">
                HERBOEK
              </button>
              <button className="custom-button button-choiceSec mt-05">
                DETAILS
              </button>
            </div>
          </div>
            ))}
          </div>          
        </div>
      </div>

    </section>
  );
};

export default OverviewRebook;
