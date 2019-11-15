import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item.jsx';
import ReviewsForm from '../reviews-form/reviews-form.jsx';

const ReviewsList = (props) => {
  const {reviews} = props;

  const mappedReviews = reviews.map((review) => <ReviewsItem
    key={review.id}
    review={review}
  />);

  const isAuth = true;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">{mappedReviews}</ul>

      {isAuth && <ReviewsForm />}
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default ReviewsList;
