import React from "react";
// import ErrorMessage from "./../Common/ErrorMessage";

const InputForm = ({
  name,
  type,
  placeholder,
  handleChange,
  values,
  errors,
  className,
  touched,
}) => {
  return (
    <div className="input-container">
      <input
        autoComplete="off"
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
      />

      {/* <ErrorMessage error={errors[name]} visable={touched[name]} /> */}
    </div>
  );
};

export default InputForm;
