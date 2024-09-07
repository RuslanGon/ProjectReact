import axios from "axios";
import { useEffect, useState } from "react";

const CatalogPage = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        console.log(data);
        setProducts(data.items); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ul>
      {Array.isArray(products) && products.map((product) => (
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
      ))}
    </ul>
  );
};

export default CatalogPage;
