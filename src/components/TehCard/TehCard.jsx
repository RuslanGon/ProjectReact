import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestProductCardById } from "../../services/api.js";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from '../../components/TehCard/TehCard.module.css'


const TehCard = () => {

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
    <div>
      {isLoading && <Loader />}
      {isError && <Error />}
      <h2 className={css.title}>Vehicle details</h2>
      <hr className={css.line} />
      {productDetails !== null && (
        <div className={css.card}>
          <div className={css.divtextmain}>
            <p className={css.text}>Form</p>
            <span className={css.textdesc}>{productDetails.form}</span>
          </div>
          <div className={css.divtextmain}>
            <p className={css.text}>Length </p>
            <span className={css.textdesc}>{productDetails.length}</span>
          </div>
          <div className={css.divtextmain}>
            <p className={css.text}>Width </p>
            <span className={css.textdesc}>{productDetails.width}</span>
          </div>
          <div className={css.divtextmain}>
            <p className={css.text}>Height </p>
            <span className={css.textdesc}>{productDetails.height}</span>
          </div>
          <div className={css.divtextmain}>
            <p className={css.text}>Tank </p>{" "}
            <span className={css.textdesc}>{productDetails.tank}</span>
          </div>
          <div className={css.divtextmain}>
            <p className={css.text}>Consumption </p>
            <span className={css.textdesc}>{productDetails.consumption}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TehCard