// OverviewLessons.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Avatar from "assets/img/defaultprofile.webp";
import Slider from "components/common/Slider";
import "./OverviewReview.css";
import Button from "components/common/Button";

const OverviewReview = () => {
    const navigate = useNavigate(); // Initialize useNavigate

  const reviews = [{ tutor: "John" }, { tutor: "Lisa" }, { tutor: "Karen" }];

  const handleDetails = () => {
    navigate("/details"); // Redirect to the student sign-up path
  };

  return (
    <section className="box box-2 w-100 ">
      <div className="flex-colomn pb-2">
        <h2>Beoordeel jouw docent!</h2>
        <span>Geef jouw docenten een score op 5.</span>
      </div>
      <Slider
        items={reviews.map((review, index) => (
          <div className="review-item w-100 p-1" key={index}>
            <div className="box-top ptb-1">
              <div className="flex review-tutor">
                <img className="avatar-small" src={Avatar} alt={"tutor"} />
                <h3>{review.tutor}</h3>
              </div>
              <button className="button-delete flex justify-content-end">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.01562 9.01562L27.0468 27.0468"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.01562 27.0469L27.0468 9.01565"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className=" ptb-1">
              <div className="input flex-colomn align-items-end  ">
                <label for="number">Score:</label>
                <input
                className="score"
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  max="5"
                  placeholder="5"
                />
              </div>
              <div className="input textarea flex-colomn">
                <label for="comments">Bericht:</label>
                <textarea
                  id="comments"
                  name="comments"
                  rows="4"
                  cols="50"
                  placeholder="Bericht"
                ></textarea>
              </div>
            </div>
            <Button type={"subtmit"} text={"verstuur"} />
          </div>
        ))}
        itemsToShow={2}
        draggable={false}
      />
    </section>
  );
};

export default OverviewReview;
