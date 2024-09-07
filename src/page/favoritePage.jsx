import { useEffect } from "react";
import css from "./FavoritePage.module.css"; 

const FavoritePage = () => {

  useEffect(() => {
    document.body.classList.add(css.pageBackground);

    return () => {
      document.body.classList.remove(css.pageBackground);
    };
  }, []);

  return (
    <div>FavoritePage</div>
  )
}

export default FavoritePage