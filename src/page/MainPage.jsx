import { NavLink, Route, Routes } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import css from '../page/MainPage.module.css';
import clsx from 'clsx';
import { Suspense } from 'react';
import HomePage from './HomePage.jsx';
import CatalogPage from './CatalogPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Loader from '../components/Loader/Loader.jsx';

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const MainPage = () => {
  return (
    <>
      <div className={css.header}>
        <NavLink className={css.mainlogo} to="/">
          <img className={css.logo} src={logo} alt="logo" />
        </NavLink>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/catalog">
            Catalog
          </NavLink>
        </nav>
      </div>
      <>
      <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        </>
      <section className={css.section}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>You can find everything you want in our catalog</p>
      </section>
    </>
  );
};

export default MainPage;
