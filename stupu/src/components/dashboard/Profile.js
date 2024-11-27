import React from "react";
import Button from "components/button/button2";
import "./Profile.css";
import EditableIcon from "components/button/EditIcon";
import Verified from "assets/img/verified.png";

const Profile = ({
  profileImage,
  name,
  gender,
  birthDate,
  language,
  hobby,
  favoriteCourse,
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
    <div className="profile-details flex-colomn justify-content-center ptb-1">
      <div className="name mt-1">
        Dhr. {name}
        <span className="verified">
          <img className="verified-img" src={Verified} alt="default" />
        </span>
      </div>
      <ul className="mt-1">
        <li className="flex ptb-05">
          <div className="bold mr-1">Geslacht:</div>
          <div>{gender}</div>
        </li>
        <li className="flex ptb-05">
          <div className="bold mr-1">Geboortedatum:</div>
          <div>{birthDate}</div>
        </li>
        <li className="flex ptb-05">
          <div className="bold mr-1">Talenkennis:</div>
          <div>{language}</div>
        </li>
        <li className="flex ptb-05">
          <div className="bold mr-1">Hobbies:</div>
          <div>{hobby}</div>
        </li>
        <li className="flex ptb-05">
          <div className="bold mr-1">Favorite vak:</div>
          <div>{favoriteCourse}</div>
        </li>
      </ul>
    </div>
  </>
);

export default Profile;
