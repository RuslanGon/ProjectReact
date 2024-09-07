import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const searchSchema = Yup.object({
searchTerm: Yup.string().required("Search term is required"),
});


const FORM_INITIAL_VALUES = {
  searchTerm: ''
};

const SearchForm = ({ onSetSearchQuery }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onSetSearchQuery(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={searchSchema}
    >
      <Form>
        <h2>Search campers by brand or name</h2>
        <label>
          <Field type="text" name="searchTerm" placeholder="search" />
          <ErrorMessage name="searchTerm" component="span" />
        </label>
        <br />
      <button type="submit" aria-label="Search">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;