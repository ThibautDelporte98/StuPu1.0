import React, { useState } from "react";
import Avatar from "assets/img/defaultprofile.webp";
import Verified from "assets/img/verified.png";
import ProfileInfo from "components/dashboard/ProfileInfo";
import "./OverviewProfile.css";

const OverviewProfile = () => {
  const [personalInfo] = useState({
    profileImage: { value: Avatar, type: "file" },
    name: { value: "John Doe", type: "text" },
    gender: { value: "Man", type: "radio", options: ["Man", "Vrouw", "Ander"] },
    birthDate: { value: "1998-04-06", type: "date" },
    phone: { value: "+3292538149", type: "tel" },
    email: { value: "school@example.com", type: "email" },
    address: { value: "123 Main St, 1000 City", type: "text" },
    hobbies: { value: "Voetbal", type: "text" },
    language: { value: "Nederlands", type: "options", options: ["Dutch", "English", "French", "German"] },
    favoriteCourse: { value: "Wiskunde", type: "options", options: ["Wiskunde", "Nederlands", "Engels", "Ander"] },
    school: { value: "Howest", type: "text" },
    education: { value: "Onderwijs", type: "options", options: ["Basisonderwijs", "Secundair Onderwijs", "Hoger Onderwijs"] },
    educationLevel: { value: "VWO", type: "options", options: ["Niet van toepassing", "VWO", "HAVO", "MBO", "HBO", "WO"] },
    studyDirection: { value: "Wiskunde", type: "text" },
    why: { value: "Ik volg bijles voor extra ondersteuning in wiskunde...", type: "textarea" },
  });

  return (
    <section className="box profile box-border box-1">
      <div className="box-top flex">
        <h2>Profiel</h2>
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
        <div className="picture">
          <img className="picture-img" src={personalInfo.profileImage.value} alt="default" />
        </div>
      </div>
      <div>
        <div className="name mt-1">
          Dhr. John Doe
          <span className="verified">
            <img className="verified-img" src={Verified} alt="default" />
          </span>
        </div>
        <ProfileInfo title={"Bio"}>
          <p className="profile-bio">
            Als leerkracht ben ik gepassioneerd over het creëren van een
            positieve en ondersteunende leeromgeving waarin mijn studenten zich
            kunnen ontwikkelen. Ik geloof in een persoonlijke aanpak, waarbij ik
            rekening houd met de unieke leerstijlen en behoeften van elke
            leerling. Mijn doel is niet alleen om kennis over te brengen, maar
            ook om mijn studenten te inspireren om kritisch te denken en
            vertrouwen te krijgen in hun eigen capaciteiten.
          </p>
        </ProfileInfo>
      </div>
      <div>        
        <ProfileInfo title={"Persoonlijke informatie"}>
        <ul>
              <li className="flex ptb-05">
                <div className="bold mr-1">Telefoon:</div>
                <div>{personalInfo.phone.value}</div>
              </li>
              <li className="flex ptb-05">
                <div className="bold mr-1">Email:</div>
                <div>{personalInfo.email.value}</div>
              </li>
              <li className="flex ptb-05">
                <div className="bold mr-1">Adres:</div>
                <div>{personalInfo.address.value}</div>
              </li>
            </ul>
        </ProfileInfo>
      </div>
    </section>
  );
};

export default OverviewProfile;
