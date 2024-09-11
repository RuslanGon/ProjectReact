import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestProductCardById } from "../../services/api.js";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from '../../components/Reviews/Reviews.module.css'


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

  return (
    <div className={css.cardContainer}>
      {isLoading && <Loader />}
      {isError && <Error />}
      {productDetails !== null && (
        <div className={css.card}>
          <div className={css.reviews}>
          <p>{productDetails.rating}</p>
            {productDetails.reviews.map((review, index) => (
              <div key={index} className={css.review}>
                <p><strong>{review.reviewer_name}:</strong> {review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Reviews