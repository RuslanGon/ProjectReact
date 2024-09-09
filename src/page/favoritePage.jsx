import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import Error from "../components/Error/Error.jsx";
import { requestProductsByIds } from "../services/api.js";
import ProductList from "../components/ProductList/ProductList.jsx";
// import css from "./FavoritePage.module.css"; 

const FavoritePage = () => {
  const location = useLocation();
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log(location.search); // Проверить, что в URL есть query-параметры
    const params = new URLSearchParams(location.search);
    const ids = params.get('ids')?.split(',') || [];
    console.log(ids); // Убедитесь, что ids содержит массив ID

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
  }, [location.search]);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error />}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default FavoritePage;
