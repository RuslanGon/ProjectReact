
import Reviews from "../Reviews/Reviews.jsx";
import TehForm from "../TehForm/TehForm.jsx";
import css from '../../components/Card/ReviewsPage.module.css'

const ReviewsPage = () => {

  return (
   <div className={css.maindiv}>
    <Reviews />
    <TehForm />
   </div>
  )
}

export default ReviewsPage