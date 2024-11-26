import React from "react";
import Avatar2 from "assets/img/defaultprofile.webp";
import "./ProfileHeader.css";

const ProfileImage = ({ lessonsCount }) => (
  <div className="profile-img">
    <div className="picture flex justify-content-center">
      <img className="picture-img" src={Avatar2} alt="default" />
      <div className="lesson-amount flex-colomn align-items-center">
        <div>Gevolgde lessen:</div>
        <div className="score mt-1">{lessonsCount}</div>
      </div>
    </div>
  </div>
);

export default ProfileImage;
