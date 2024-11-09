// OverviewLessons.js
import React from "react";
import Slider from "components/common/Slider";
import "./OverviewReview.css";
import Button from "components/common/Button";

const OverviewReview = () => {
  const reviews = [{ tutor: "John" }, { tutor: "Lisa" }, { tutor: "Karen" }];

  return (
    <section className="box box-2 w-100 ">
      <div className="flex-colomn pb-2">
        <h2>Beoordeel jouw docent!</h2>
        <span>Geef jouw docenten een score op 5.</span>
      </div>
      <Slider
        items={reviews.map((review, index) => (
          <div className="review-item w-100 p-1" key={index}>
            <div className="box-top">
              <h3>{review.tutor}</h3>
            </div>
            <div className=" ptb-1">
              <div className="score flex-colomn">
                <label for="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  max="100"
                  placeholder="Enter your age"
                />
              </div>
              <div className="textarea flex-colomn">
                <label for="comments">Bericht:</label>
                <textarea
                  id="comments"
                  name="comments"
                  rows="4"
                  cols="50"
                  placeholder="Enter your comments here..."
                ></textarea>
              </div>
            </div>
            <Button type={"subtmit"} text={"verstuur"} />
          </div>
        ))}
        itemsToShow={2}
      />
    </section>
  );
};

export default OverviewReview;
