import DashFilter from "./DashboardFilter";
import "./MyLessons.css";


const MyLessons = () => {
  

  return (
<>
    <DashFilter />
      <div className="my-lessons flex  justify-content-center">
        <div className="box lesson w-100">
          <div className="teacher flex">
            <img src="" alt="hello" />
            <p>John Doe</p>
          </div>
          <div className="date-time">
            <p>24/10/24 | 16:00 - 18:00</p>
          </div>
          <div className="list-information">
            <ul>
                <li >Vak: Wiskunde </li>
                <li >Locatie: Teams meeting </li>
            </ul>
          </div>
          <div className="actions">
            <button className="custom-button button-border-sec-color mt-1">EMAIL "JOHN" </button>
            <button className="custom-button button-choiceSec mt-1">BEL "JOHN"</button>
            <button className="custom-button button-cancel mt-1">Annuleer</button>
          </div>
        </div>
        <div className="box lesson w-100">
          <div className="teacher flex">
            <img src="" alt="hello" />
            <p>John Doe</p>
          </div>
        </div>
        <div className="box lesson w-100">
          <div className="teacher flex">
            <img src="" alt="hello" />
            <p>John Doe</p>
          </div>
        </div>
      </div>        
</>

  );
};

export default MyLessons;
