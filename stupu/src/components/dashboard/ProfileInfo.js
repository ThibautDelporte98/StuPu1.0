import "./ProfileInfo.css";

const ProfileInfo = ({title, children}) => (
  <div className=" ptb-05">
    <div className="box-edit  flex">
      <h2>{title}:</h2>
    </div>
    <div className="mt-1">
      {children}
    </div>
  </div>
);

export default ProfileInfo;
