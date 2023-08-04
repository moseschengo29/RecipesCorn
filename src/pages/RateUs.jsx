import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RatingForm from "../components/RatingForm";
import ReviewsList from "../components/ReviewsList";

function RateUs() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/ratings")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  function handleAddReview(rev) {
    setReviews((reviews) => [...reviews, rev]);
  }

  return (
    <div>
      <Navbar />
      <ReviewsList reviews={reviews} />
      <RatingForm onAdd={handleAddReview} />
    </div>
  );
}

export default RateUs;
