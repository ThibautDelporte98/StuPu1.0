import React from "react";
import Button from "components/button/button2";
import "./Profile.css";
import EditableIcon from "components/button/EditIcon";
import Verified from "assets/img/verified.png";

const Profile = ({
  profileImage,
  name,
  onEditClick,
}) => (
  <>
    <div className="flex justify-content-end">
      <Button
        className="button-edit"
        icon={<EditableIcon />}
        onClick={onEditClick}
      />
    </div>
    <div className="profile-img">
      <div className="picture flex space-around">
        <img className="picture-img" src={profileImage} alt={profileImage} />
        <div className="lesson-amount flex-colomn align-items-center">
          <div>Gevolgde lessen:</div>
          <div className="score mt-1">12</div>
        </div>
      </div>
    </div>
    <div className="profile-details flex justify-content-center">
      <div className="name mt-1">
        Dhr. {name}
        <span className="verified">
          <img className="verified-img" src={Verified} alt="default" />
        </span>
      </div>

    </div>
  </>
);

export default Profile;
