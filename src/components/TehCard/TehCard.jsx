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
            <>
          <div className={css.divtextmain}>
            <p className={css.text}>
              Form <p className={css.textdesc}>{productDetails.form}</p>
            </p>
          </div>
          </>
          <div className={css.divtextmain}>
            <p className={css.text}>
              Length <p className={css.textdesc}>{productDetails.length}</p>
            </p>
          </div>
          <div className={css.divtextmain}>
            <p className={css.text}> Width 
            <p className={css.textdesc}>{productDetails.width}</p>
            </p>
          </div>
          <div className={css.divtextmain}>
            <p className={css.text}>
              Height <p className={css.textdesc}>{productDetails.height}</p>
            </p>
          </div>
          <div className={css.divtextmain}>
            <p className={css.text}>
              Tank <p className={css.textdesc}>{productDetails.tank}</p>
            </p>
          </div>
          <div>
            {" "}
            <p className={css.text}>
              Consumption{" "}
              <p className={css.textdesc}>{productDetails.consumption}</p>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TehCard