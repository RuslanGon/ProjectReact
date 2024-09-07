import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";

const CatalogPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true)
        const { data } = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        console.log(data);
        setProducts(data.items);
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
    {isLoading &&  <Loader />}
    <ul>
      {Array.isArray(products) &&
        products.map((product) => { 
          return(
          <li key={product.id}>
            <img src={product.gallery[0]?.thumb} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <h3>{product.location}</h3>
            <p>{product.description}</p>
            <p>Automatic</p>
            <p>Petrol</p>
            <p>Kitchen</p>
            <p>AC</p>
            <button>Show more</button>
          </li>
          
)})}
    </ul>
    </>
  );
};

export default CatalogPage;
