import { useParams } from "react-router-dom"


const Card = () => {

    const {productId} = useParams()

  return (
    <div>
        <h1>Car {productId}</h1>
    </div>
  )
}

export default Card