import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import Error from "../components/Error/Error.jsx";
import { requestProducts } from "../services/api.js";
import ProductList from "../components/ProductList/ProductList.jsx";
import SearchForm from "../components/SearchForm/SearchForm.jsx";

const CatalogPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data  = await requestProducts();
        console.log(data);
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsError(true); 
      } finally {
        setIsLoading(false); 
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      {products && (
        <>
        <SearchForm />
       <ProductList products={products} />
       </>
      )}
    </>
  );
};

export default CatalogPage;
