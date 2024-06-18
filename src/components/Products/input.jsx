export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
  className,
  defaultValue,
  textarea,
}) => {
  const handleValueChange = (e) => {
    onChangeHandler(e.target.value, field);
  };

  const handleInputBlur = (e) => {
    onBlurHandler(e.target.value, field);
  };

  return (
    <>
      <div className="auth-form-label">
        <span>{label}</span>
      </div>
      {textarea ? (
        <textarea
          value={value}
          rows={5}
          style={{ maxWidth: '400px' }}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          className={className}
          defaultValue={defaultValue}
        />
      ) : (
        <input
          type={type}
          value={value || ''}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          className={className}
          defaultValue={defaultValue}
        />
      )}
      <span>{showErrorMessage && validationMessage}</span>
    </>
  );
};
