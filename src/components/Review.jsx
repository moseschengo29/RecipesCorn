function Review({ review }) {
  const { rating, feedback } = review;

  let ratingEmojis;

  if (rating === 5) ratingEmojis = "5 ⭐⭐⭐⭐⭐";
  if (rating === 4) ratingEmojis = "4 ⭐⭐⭐⭐";
  if (rating === 3) ratingEmojis = "3 ⭐⭐⭐";
  if (rating === 2) ratingEmojis = "2 ⭐⭐";
  if (rating === 1) ratingEmojis = "1 ⭐";

  return (
    <li className="review">
      <p>
        <span className="review-title">Rating</span> : {ratingEmojis}
      </p>
      <p>
        <span className="review-title">Review:</span> {feedback}
      </p>
    </li>
  );
}

export default Review;
