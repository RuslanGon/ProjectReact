import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from '../TehForm/TehForm.module.css'

const TehSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  data: Yup.number().required("data is required"),
  comment: Yup.string(),
});

const FORM_INITIAL_VALUES = {
  name: '',
  email: '',
  data: '',
  comment: ''
};

const TehForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.divmainform}>
        <h2 className={css.title}>Book your campervan now</h2>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={TehSchema}>
        <Form className={css.form}>
          <label>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <br />
          <label>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <br />
          <label>
            <Field
              className={css.input}
              type="number"
              name="data"
              placeholder="Booking date*"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="data"
              component="span"
            />
          </label>
          <br />
          <label>
            <Field
              className={css.input1}
              type="text"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="comment"
              component="span"
            />
          </label>
          <br />
          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TehForm;
