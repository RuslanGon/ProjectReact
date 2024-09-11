import { NavLink, Route, Routes } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import css from '../page/MainPage.module.css';
import clsx from 'clsx';
import { Suspense, lazy } from 'react';
// import HomePage from './HomePage.jsx';
// import CatalogPage from './CatalogPage.jsx';
// import NotFoundPage from './NotFoundPage.jsx';
// import Loader from '../components/Loader/Loader.jsx';
// import FavoritePage from './favoritePage.jsx';
// import Card from '../components/Card/Card.jsx';

const HomePage = lazy(() => import('./HomePage.jsx'))
const CatalogPage = lazy(() => import('./CatalogPage.jsx'))
const NotFoundPage = lazy(() => import('./NotFoundPage.jsx'))
const Loader = lazy(() => import('../components/Loader/Loader.jsx'))
const FavoritePage = lazy(() => import('./favoritePage.jsx'))
const Card = lazy(() => import('../components/Card/Card.jsx'))


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
          <NavLink className={getNavLinkClassName} to="/favorite">
            Favorite
          </NavLink>
        </nav>
      </div>
      <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path='/products/:productId/*'  element={<Card/>}/>
              <Route path="/favorite" element={<FavoritePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

    </>
  );
};

export default MainPage;
