import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestProductCardById } from "../../services/api.js";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from "../../components/TehCard/TehCard.module.css";
import cah from "../../assets/images/cah.png";
import oil from "../../assets/images/oil.png";
import cup from "../../assets/images/cup.png";
import wind from "../../assets/images/wind.png";
import radio from "../../assets/images/radio.png";

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
      <div className={css.divcah1}>
        <img className={css.cah} src={cah} alt="" />
        <p className={css.auto}>Automatic</p>
      </div>
      <div className={css.divcah1}>
        <img className={css.oil} src={oil} alt="" />
        <p>Petrol</p>
      </div>
      <div className={css.divcah1}>
        <img className={css.cup} src={cup} alt="" />
        <p>Kitchen</p>
      </div>
      <br />
      <div className={css.divcah1}>
        <img className={css.wind} src={wind} alt="" />
        <p>AC</p>
      </div>
      <div className={css.divcah1}>
        <img className={css.radio} src={radio} alt="" />
        <p>Radio</p>
      </div>
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
};

export default TehCard;
