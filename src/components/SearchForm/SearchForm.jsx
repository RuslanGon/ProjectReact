import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from '../SearchForm/SearchForm.module.css'
import Filter from "../Filter/Filter.jsx";
import map from "../../assets/images/map.png";


const searchSchema = Yup.object({
searchTerm: Yup.string().required("Search term is required"),
});


const FORM_INITIAL_VALUES = {
  searchTerm: ''
};

const SearchForm = ({ onSetSearchQuery }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onSetSearchQuery(values.searchTerm);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={searchSchema}>
      <Form className={css.form}>
        <label>
          <p className={css.loc}>location</p>
          <Field className={css.input} type="text" name="searchTerm" placeholder="Ukraine" />
          <ErrorMessage className={css.errorMessage} name="searchTerm" component="span" />
          <img className={css.map} src={map} alt="map" />
        </label>
        <br />
        <Filter />
      <button className={css.button} type="submit" aria-label="Search">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;