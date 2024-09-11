
import TehCard from "../TehCard/TehCard.jsx";
import TehForm from "../TehForm/TehForm.jsx";
import css from '../Card/FeaturesPage.module.css'
const FeaturesPage = () => {

  return (
    <div className={css.maindiv}>
      <TehCard />
      <TehForm />
    </div>
  )
}

export default FeaturesPage