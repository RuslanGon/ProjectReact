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
      {productDetails !== null && (
        <div className={css.card}>
          <h1>{productDetails.name}</h1>
          <p>{productDetails.price}</p>
        </div>
      )}
    </div>
  )
}

export default TehCard