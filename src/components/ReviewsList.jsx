import { useEffect, useState } from "react";
import Review from "./Review";

function ReviewsList({ reviews }) {
  return (
    <>
      <h1 className="subheading center mg-top">All Reviews</h1>
      <h1 className="heading center">What people say about us</h1>

      <ul className="review-list">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
