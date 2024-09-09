import css from '../Filter/Filter.module.css'
import wind from "../../assets/images/wind.png";
import cah from "../../assets/images/cah.png";
import cup from "../../assets/images/cup.png";
import tv from "../../assets/images/tv.png";
import kap from "../../assets/images/kap.png";
import bi1 from "../../assets/images/bi1.png";
import bi2 from "../../assets/images/bi2.png";
import bi3 from "../../assets/images/bi3.png";

const Filter = () => {
  return (
    <div>
      <p className={css.filter}>filters</p>
      <h2 className={css.title}>Vehicle equipment</h2>
      <hr className={css.line} />
      <ul className={css.filterlist}>
        <li className={css.filteritem}>
          <img className={css.logo} src={wind} alt="" />
          <p className={css.logotext}>AC</p>
        </li>
        <li className={css.filteritem}>
          <img className={css.logo} src={cah} alt="" />
          <p className={css.logotext}>Automatic</p>
        </li>
        <li className={css.filteritem}>
          <img className={css.logo} src={cup} alt="" />
          <p className={css.logotext}>Kitchen</p>
        </li>
        <li className={css.filteritem}>
          <img className={css.logo} src={tv} alt="" />
          <p className={css.logotext}>TV</p>
        </li>
        <li className={css.filteritem}>
          <img className={css.logo} src={kap} alt="" />
          <p className={css.logotext}>Bathroom</p>
        </li>
      </ul>
      <h2 className={css.title}>Vehicle type</h2>
      <hr className={css.line} />
      <ul className={css.filterlist}>
        <li className={css.filteritem}>
          <img className={css.logo} src={bi1} alt="" />
          <p className={css.logotext}>Van</p>
        </li>
        <li className={css.filteritem}>
          <img className={css.logo} src={bi2} alt="" />
          <p className={css.logotext}>Fully Integrated</p>
        </li>
        <li className={css.filteritem}>
          <img className={css.logo} src={bi3} alt="" />
          <p className={css.logotext}>Alcove</p>
        </li>
      </ul>
    </div>
  );
}

export default Filter