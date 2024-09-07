

const ProductList = ({products}) => {
  return (
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
  )
}

export default ProductList