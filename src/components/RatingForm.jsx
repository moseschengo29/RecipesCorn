import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../pages/RateUs";
import Navbar from "./Navbar";

function RatingForm({ onAdd }) {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  function handleAddReview() {
    setShowForm((form) => !form);
  }

  function addRating(data) {
    fetch("http://localhost:3000/ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      id: crypto.randomUUID(),
      rating,
      feedback,
    };

    addRating(userData);
    onAdd(userData);

    setRating(null);
    setFeedback("");
  };

  return (
    <div style={styles.container}>
      <button className="btn-addreview" onClick={handleAddReview}>
        {showForm ? "Close Form" : "Add Review!"}
      </button>
      {showForm && (
        <div className="Rating">
          <div className="rating-card">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={currentRating}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => handleRatingChange(currentRating)}
                  />
                  <FaStar
                    className="star"
                    size={50}
                    color={currentRating <= (hover || rating) ? "gold" : "#ccc"}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          {rating && <p style={styles.ratingText}>Your Rating is {rating}</p>}
          <textarea
            placeholder="What's Your Feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            style={styles.textarea}
          />
          <button style={styles.button} onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: "5px",
    width: "300px",
    height: "150px",
    padding: "10px",
    margin: "20px 0",
  },
  button: {
    border: "none",
    backgroundColor: "#f4d06f",
    color: "#333",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "15px 30px",
    borderRadius: "10px",
    cursor: "pointer",
    margin: "10px 0",
  },
  ratingText: {
    fontSize: "20px",
    fontWeight: "bold",
    font: "italic",
    margin: "10px 0",
  },
};

export default RatingForm;
