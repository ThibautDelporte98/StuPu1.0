import "./ProfileInfo.css";

const ProfileInfo = ({title, children}) => (
  <div className=" ptb-1">
    <div className="box-edit  flex">
      <h3>{title}</h3>
    </div>
    <div className="mt-1">
      {children}
    </div>
  </div>
);

export default ProfileInfo;
