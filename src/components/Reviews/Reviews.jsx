import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestProductCardById } from "../../services/api.js";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from '../../components/Reviews/Reviews.module.css'
import star from "../../assets/images/star.png";

const Reviews = () => {

  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        setIsLoading(true);
        const data = await requestProductCardById(productId);
        setProductDetails(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProductDetails();
  }, [productId]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating); // округляем рейтинг
    const starsArray = Array(totalStars).fill(0).map((_, index) => (
      <img
        key={index}
        className={css.star}
        src={star}
        alt="star"
        style={{ opacity: index < filledStars ? 1 : 0.2 }} // добавляем полупрозрачность для пустых звезд
      />
    ));
    return starsArray;
  };

  return (
    <div className={css.cardContainer}>
      {isLoading && <Loader />}
      {isError && <Error />}
      {productDetails !== null && (
        <div className={css.card}>
          <div className={css.reviews}>
            {productDetails.reviews.map((review, index) => (
              <div key={index} className={css.review}>
                <p className={css.name}>{review.reviewer_name}</p>
                <div className={css.rating}>
                  <div className={css.stars}>{renderStars(review.reviewer_rating)}</div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Reviews;
