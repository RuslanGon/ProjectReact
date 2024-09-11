import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestProductCardById } from "../../services/api.js";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import TehCard from "../TehCard/TehCard.jsx";
const FeaturesPage = () => {
const { productId } = useParams();
const [productDetails, setProductDetails] = useState(null);
console.log(productDetails);
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
      <TehCard />
    </div>
  )
}

export default FeaturesPage