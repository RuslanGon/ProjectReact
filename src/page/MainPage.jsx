import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import css from '../page/MainPage.module.css'
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) => {
    return clsx(css.navLink, {
      [css.active]: isActive,
    });
  };


const MainPage = () => {
  return (
    <div className={css.header}>
      <img className={css.logo} src={logo} alt="logo" />
      <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/">
        Catalog
      </NavLink>
      </nav>
    </div>
  );
}

export default MainPage