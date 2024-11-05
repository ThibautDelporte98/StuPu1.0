import Avatar from "assets/img/login-avatar.png";
import Avatar2 from "assets/img/defaultprofile.webp";
import Verified from "assets/img/verified.png";

import "./OverviewProfile.css";

const OverviewProfile = () => {
  return (
    <section className="overview-box box-1 overview-box-profile w-100">
      <div className="box-top flex">
        <h2>Profiel</h2>
        <button className="button-edit">
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
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="box-img">
        <span className="verified">
          <img className="verified-img" src={Verified} alt="default image" />
        </span>
        <div className="picture">
          <img className="picture-img" src={Avatar2} alt="default image" />
        </div>
      </div>
      <div className="box-info">
        <h3>Persoonlijke info</h3>
        <p>
          Passie voor lesgeven | Hulp bij studie | Persoonlijke bijlessen op
          maat | Flexibel en geduldig | Samen leren, samen groeien
        </p>
      </div>
      <div className="box-info">
        <h3>student gegevens</h3>
        <p>
          Categorie :6de ASO Latijn-Wiskunde School: Sint-Amands college
          Studentennummer: 10001459974 Jaar: 2023-2024
        </p>
      </div>
    </section>
  );
};

export default OverviewProfile;
