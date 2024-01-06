import PropTypes from "prop-types";

function Review({ username, description, rating }) {
  return (
    <div>
      <p>
        <strong>{username}:</strong> {description}
      </p>
      <p>Rating: {rating}</p>
    </div>
  );
}

Review.propTypes = {
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Reviews({ reviews }) {
  return (
    <div>
      <h5>Reviews:</h5>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Reviews;
