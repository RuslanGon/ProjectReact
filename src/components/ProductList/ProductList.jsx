import { useState } from "react";
import css from "../ProductList/ProductList.module.css";
import fav from "../../assets/images/fav.png";
import favRed from "../../assets/images/fav-red.png";
import star from "../../assets/images/star.png";
import map from "../../assets/images/map.png";
import cah from "../../assets/images/cah.png";
import oil from "../../assets/images/oil.png";
import cup from "../../assets/images/cup.png";
import wind from "../../assets/images/wind.png";
import del from "../../assets/images/del.png"; 

const ProductList = ({ products, showDeleteIcon, handleDelete }) => {
  const idsFromLS = JSON.parse(localStorage.getItem("ids"));
  const ids = idsFromLS || [];
  const [favorites, setFavorites] = useState(ids);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      let updatedFavorites;
      if (prevFavorites.includes(productId)) {
        updatedFavorites = prevFavorites.filter((id) => id !== productId);
      } else {
        updatedFavorites = [...prevFavorites, productId];
      }
      localStorage.setItem("ids", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <ul className={css.list}>
      {Array.isArray(products) &&
        products.map((product) => {
          const isFavorited = favorites.includes(product.id);

          return (
            <li className={css.item} key={product.id}>
              <div>
                <img
                  className={css.img}
                  src={
                    product.gallery && product.gallery.length > 0
                      ? product.gallery[0]?.thumb
                      : ""
                  }
                  alt={product.name}
                />
              </div>
              <div>
                <div className={css.divname}>
                  <h2 className={css.title}>{product.name}</h2>
                  <div className={css.divprice}>
                    <p className={css.title}>€ {product.price}.00</p>
                    <button
                      className={css.butfav}
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <img
                        className={css.fav}
                        src={isFavorited ? favRed : fav}
                        alt="favorite"
                      />
                    </button>
                  </div>
                </div>
                <div className={css.starmap}>
                  <div className={css.divstar}>
                    <img className={css.star} src={star} alt="" />
                    <p className={css.rating}>
                      {product.rating} ({product.reviews?.length || 0} Reviews)
                    </p>
                  </div>
                  <div className={css.divstar}>
                    <img className={css.map} src={map} alt="" />
                    <h3 className={css.location}>{product.location}</h3>
                  </div>
                </div>
                <p className={css.desc}>
                  The pictures shown here are example vehicles of the
                  respective...
                </p>
                <div className={css.divcah}>
                  <img className={css.cah} src={cah} alt="" />
                  <p className={css.auto}>Automatic</p>
                </div>
                <div className={css.divcah}>
                  <img className={css.oil} src={oil} alt="" />
                  <p>Petrol</p>
                </div>
                <div className={css.divcah}>
                  <img className={css.cup} src={cup} alt="" />
                  <p>Kitchen</p>
                </div>
                <br />
                <div className={css.divcah}>
                  <img className={css.wind} src={wind} alt="" />
                  <p>AC</p>
                </div>
                <br />
                <div className={css.divbutton}>
                  <button className={css.button} type="button">
                    Show more
                  </button>

                  {/* Условное отображение иконки удаления на странице Favorites */}
                  {showDeleteIcon && (
                    <button
                      className={css.deleteBtn}
                      onClick={() => handleDelete(product.id)}
                    >
                      <img className={css.del} src={del} alt="Delete" />
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductList;
