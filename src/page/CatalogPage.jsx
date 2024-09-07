import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import Error from "../components/Error/Error.jsx";

const CatalogPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
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
        <ul>
          {Array.isArray(products) &&
            products.map((product) => (
              <li key={product.id}>
                <img src={product.gallery[0]?.thumb} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>{product.rating}</p>
                <h3>{product.location}</h3>
                <p>{product.description}</p>
                <p>automatic</p>
                <p>petrol</p>
                <p>Kitchen</p>
                <p>AC</p>
                <button>Show more</button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default CatalogPage;
