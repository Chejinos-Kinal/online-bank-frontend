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
  options,
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
      ) : type === 'select' ? (
        <select
          value={value || ''}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          className={className}
          /* defaultValue={defaultValue} */
        >
          <option value="">Seleccione una opción</option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
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
