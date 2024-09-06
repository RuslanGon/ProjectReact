import { useEffect, useState } from "react";
import { Link, Navigate} from "react-router-dom";

const NotFoundPage = () => {

  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
       setTimer(prevTimer => prevTimer + 1)
    },1000)

    return () => clearInterval(intervalId)
  }, [])

  if(timer === 5){
return <Navigate to='/' replace />
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go home</Link>
      <h2>You will be redirected to home page in {5 - timer} seconds</h2>
    </div>
  );
};

export default NotFoundPage;