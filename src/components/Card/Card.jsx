import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import { requestProductCardById } from "../../services/api.js";
import css from '../Card/Card.module.css'
import FeaturesPage from "./FeaturesPage.jsx";
import ReviewsPage from "./ReviewsPage.jsx";

const Card = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  // console.log(productDetails);
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
          <h1>{productDetails.name}</h1>
          <p>{productDetails.price}</p>
          <p>{productDetails.rating}</p>
          <p>{productDetails.location}</p>
          <p>{productDetails.description}</p>
          <p>{productDetails.form}</p>
          {productDetails.gallery && (
            <div className={css.gallery}>
              {productDetails.gallery.map((item, index) => (
                <img
                  key={index}
                  src={item.original}
                  alt={`Gallery image ${index + 1}`}
                  className={css.galleryImage}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <Link to={'features'}>Features</Link>
      <Link to={'reviews'}>Reviews</Link>
      <Routes>
      <Route path="features" element={<FeaturesPage />} />
      <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
    </div>
  );
};

export default Card;
