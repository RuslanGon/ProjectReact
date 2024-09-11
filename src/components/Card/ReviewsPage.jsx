import { useParams } from "react-router-dom";


const ReviewsPage = () => {
    const { productId } = useParams();

  return (
    <div>{productId}</div>
  )
}

export default ReviewsPage