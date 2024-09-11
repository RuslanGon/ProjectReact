import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import { requestProductCardById } from "../../services/api.js";
import css from "../Card/Card.module.css";
import FeaturesPage from "./FeaturesPage.jsx";
import ReviewsPage from "./ReviewsPage.jsx";
import star from "../../assets/images/star.png";
import map from "../../assets/images/map.png";


const Card = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation(); 

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

  if (!location.pathname.includes("features") && !location.pathname.includes("reviews")) {
    return <Navigate to="features" />;
  }

  return (
    <div className={css.cardContainer}>
      {isLoading && <Loader />}
      {isError && <Error />}
      {productDetails !== null && (
        <div className={css.card}>
          <h2 className={css.title}>{productDetails.name}</h2>
          <div className={css.starmap}>
            <div className={css.divstar}>
              <img className={css.star} src={star} alt="star" />
              <p className={css.rating}>
                {productDetails.rating} ({productDetails.reviews?.length || 0} Reviews)
              </p>
            </div>
            <div className={css.divstar}>
              <img className={css.map} src={map} alt="star" />
              <h3 className={css.location}>{productDetails.location}</h3>
            </div>
          </div>
          <p className={css.titleone}>€ {productDetails.price}.00</p>
          {productDetails.gallery && (
            <div className={css.gallery}>
              {productDetails.gallery.map((item, index) => (
                <img
                  key={index}
                  src={item.original}
                  alt={`Gallery image ${index + 1}`}
                  className={css.galleryImage}/>
              ))}
            </div>
          )}
          <p className={css.desc}>
            Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice
            for solo travelers or couples seeking a compact and efficient way to explore the
            open roads. This no-frills yet reliable panel truck offers the essentials for a
            comfortable journey, making it the perfect companion for those who value simplicity
            and functionality.
          </p>
        </div>
      )}
      <div className={css.navLinks}>
        <Link
          className={`${css.rout} ${location.pathname.includes("features") ? css.active : ""}`}
          to={"features"}> Features
        </Link>
        <Link
          className={`${css.rout} ${location.pathname.includes("reviews") ? css.active : ""}`}
          to={"reviews"}> Reviews
        </Link>
      </div>
      <hr className={css.line} />
      <Routes>
        <Route className={css.rout} path="features" element={<FeaturesPage />} />
        <Route className={css.rout} path="reviews" element={<ReviewsPage />} />
      </Routes>
    </div>
  );
};

export default Card;