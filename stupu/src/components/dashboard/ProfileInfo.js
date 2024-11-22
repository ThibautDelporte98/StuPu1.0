import "./ProfileInfo.css";

const ProfileInfo = ({ infoList }) => (
  <div className="profile-info">
    <ul>
      {infoList.map(({ label, value }, index) => (
        <li key={index} className="flex ptb-05">
          <div className="bold mr-1">{label}:</div>
          <div>{value}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default ProfileInfo;
