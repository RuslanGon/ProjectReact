import axios from "axios";
import { useEffect, useState } from "react";

const CatalogPage = () => {
  const [products, setProducts] = useState([]); // Начальное состояние пустого массива

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        console.log(data);
        setProducts(data.items); // Сохранение данных в состояние
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.gallery[0]?.thumb} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{`Price: $${product.price}`}</p>
          <p>{`Rating: ${product.rating}`}</p>
          <h3>{product.location}</h3>
          <p>{product.description}</p>
          <p>{product.transmission === "automatic" ? "Automatic" : "Manual"}</p>
          <p>{product.engine === "petrol" ? "Petrol" : "Diesel"}</p>
          {product.kitchen && <p>Kitchen</p>}
          {product.AC && <p>AC</p>}
          <button>Show more</button>
        </li>
      ))}
    </ul>
  );
};

export default CatalogPage;