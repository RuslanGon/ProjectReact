
import css from './Error.module.css'; // Импорт CSS-модулей для стилизации (опционально)

const Error = () => {
  return (
    <div className={css.errorContainer}>
      <h1 className={css.errorTitle}>Something went wrong</h1>
      <p className={css.errorMessage}>We couldnt fetch the data. Please try again later.</p>
    </div>
  );
};

export default Error;
