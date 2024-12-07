// OverviewLessons.js
import React from "react";
import Avatar from "assets/img/defaultprofile.webp";
import Slider from "components/slider/Slider";
import "./OverviewReview.css";
import Button from "components/button/Button";

const OverviewReview = () => {

  const reviews = [{ tutor: "John" }, { tutor: "Lisa" }, { tutor: "Karen" }];

  return (
    <section className="box review box-3 w-100 ">
      <div className="flex-colomn pb-2">
        <h2>Beoordeel jouw docent!</h2>
        <span>Geef jouw docenten een score op 5.</span>
      </div>
      <Slider
        items={reviews.map((review, index) => (
          <div className="review-item  w-100 p-1" key={index}>
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
                <label htmlFor={`age-${index}`}>Score:</label>
                <input
                  className="score box-shadow"
                  type="number"
                  id={`age-${index}`}
                  name="age"
                  min="1"
                  max="5"
                  placeholder="5"
                />
              </div>
              <div className="input textarea flex-colomn ">
                <label htmlFor={`comments-${index}`}>Bericht:</label>
                <textarea
                  className="box-shadow"
                  id={`comments-${index}`}
                  name="comments"
                  rows="4"
                  cols="50"
                  placeholder="Bericht"
                ></textarea>
              </div>
            </div>
            <Button className={"custom-button button-choiceSec"} type={"subtmit"} text={"verstuur"} />
          </div>
        ))}
        initialItemsToShow={2}
        itemClassName="slide-w-50"
        draggable={false}
        btnColorChange={'#59b2a5'}
      />
    </section>
  );
};

export default OverviewReview;
