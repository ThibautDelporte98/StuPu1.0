import React from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import Button from "components/common/button/Button";
import EditableIcon from "components/common/button/EditIcon";
import ProfileImage from "components/dashboard/ProfileHeader";
import ProfileInfo from "components/dashboard/ProfileInfo";
import Verified from "assets/img/verified.png";
import "./MyProfile.css";


const LessonDetail = () => {
  useChangeBackground("/mijn-profiel", "#59b2a5");

  const personalInfo = [
    { label: "Geslacht", value: "Man" },
    { label: "Geboortedatum", value: "01/01/2000" },
    { label: "Hobbies", value: "Voetbal, lezen" },
  ];

  const contactDetails = [
    { label: "Telefoon", value: "123-456-789" },
    { label: "Email", value: "johndoe@example.com" },
    { label: "Adres", value: "Straatnaam 123, Stad" },
  ];

  const schoolDetails = [
    { label: "School", value: "School X" },
    { label: "Onderwijsvorm", value: "TSO" },
    { label: "Onderwijs Niveau", value: "Niveau Y" },
    { label: "Studierichting", value: "Houtbewerking" },
  ];

  return (
    <div className="cstm-container">
      <DashNav />
      <div className="box-top">
        <h1>Mijn Profiel</h1>
      </div>
      <div className="dash-overview">
        <section className="box box-border box-2">
          <div className="flex justify-content-end">
            <Button className={"button-edit"} icon={<EditableIcon />} />
          </div>

          <ProfileImage lessonsCount={12} />

          <div className="mt-2">
            <div className="name mt-1">
              Dhr. John Doe
              <span className="verified">
                <img className="verified-img" src={Verified} alt="default" />
              </span>
            </div>
            <ProfileInfo
              title="Persoonlijke informatie"
              infoList={personalInfo}
            />
          </div>

          <div className="mt-1">
            <h2>Contactgegevens:</h2>
            <ProfileInfo title="Contactgegevens" infoList={contactDetails} />
          </div>
        </section>

        <section className="box box-transparent box-3 flex-colomn justify-content-center ">
          <div className=" ptb-1">
            <div className="box-edit  flex">
              <h2>School gegevens:</h2>
              <Button
                className={"button-edit"}
                icon={<EditableIcon strokeColor="white" />}
              />
            </div>

            <ProfileInfo title="School gegevens" infoList={schoolDetails} />
          </div>

          <div className="ptb-1">
            <div className="box-edit  flex">
              <h2>Waarom volg ik bijles?</h2>
              <Button
                className={"button-edit"}
                icon={<EditableIcon strokeColor="white" />}
              />
            </div>
            <p>
              Ik volg bijles voor extra ondersteuning in wiskunde binnen mijn
              TSO-opleiding Houtbewerking. Mijn doel is om beter te worden in
              rekenvaardigheden die ik nodig heb voor mijn vakken en toekomstige
              werk.
            </p>
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
