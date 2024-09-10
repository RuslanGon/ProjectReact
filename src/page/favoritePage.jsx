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

  const handleDelete = (productId) => {
    // Удаляем товар из избранного и обновляем localStorage
    const updatedFavorites = products.filter((product) => product.id !== productId);
    setProducts(updatedFavorites);
    
    const storedIds = JSON.parse(localStorage.getItem("ids")) || [];
    const updatedIds = storedIds.filter((id) => id !== productId);
    localStorage.setItem("ids", JSON.stringify(updatedIds));
  };

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error />}
      <div>
        {products && (
          <ProductList
            products={products}
            showDeleteIcon={true} // Показываем иконку удаления
            handleDelete={handleDelete} // Обработчик удаления
          />
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
