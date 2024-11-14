import Avatar from "assets/img/defaultprofile.webp";
import Star from "assets/img/star.png";
import Verified from "assets/img/verified.png";
import "./TutorCard.css";
import Button from "components/common/button/Button";

const TutorCard = ({buttonText}) => {


  return (
        <div className="lesson-tutor w-100">
          <div className="box-top">
            <div className="profile-img">
              <div className="picture">
                <span className="verified">
                  <img className="verified-img" src={Verified} alt="default" />
                </span>
                <img className="picture-img" src={Avatar} alt="default" />
              </div>
            </div>
            <div className="flex w-100 justify-content-center">
              <div className="rating flex-colomn align-items-center">
                <img src={Star} alt=""/>
                <div className="rating-score bold">4.7</div>
                </div>
            </div>
          </div>
          <div className="name mt-1">Dhr. John Doe</div>
          <p className="ptb-1">
            Passie voor lesgeven | Hulp bij studie | Persoonlijke bijlessen op
            maat | Flexibel en geduldig | Samen leren, samen groeien
          </p>
          <Button type={"submit"} text={buttonText} className={"mt-1"} />
          <Button type={"submit"} text={"Annuleer"} className={" button-cancel mtb-1 white-text"} />
        </div>
  );
};

export default TutorCard;
