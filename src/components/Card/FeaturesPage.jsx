import { useParams } from "react-router-dom";


const FeaturesPage = () => {
    const { productId } = useParams();
  return (
    <div>{productId}</div>
  )
}

export default FeaturesPage