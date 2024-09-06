import logo from '../assets/images/logo.svg'
import css from '../page/MainPage.module.css'


const MainPage = () => {
  return (
    <div>
    <img className={css.logo} src={logo} alt="logo" />

    </div>
  )
}

export default MainPage