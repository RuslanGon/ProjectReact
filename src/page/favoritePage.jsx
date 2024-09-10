import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import Error from "../components/Error/Error.jsx";
import { requestProductsByIds } from "../services/api.js";
import ProductList from "../components/ProductList/ProductList.jsx";
// import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("ids")) || [];

    if (ids.length > 0) {
      async function fetchFavorites() {
        try {
          setIsLoading(true);
          const data = await requestProductsByIds(ids);
          setProducts(data.items);
        } catch (error) {
          console.error("Error fetching data: ", error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
      fetchFavorites();
    }
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error />}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default FavoritePage;