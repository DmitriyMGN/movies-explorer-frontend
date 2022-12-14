import React from "react";
import { useCallback } from "react";

function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });

    if (name === "name") {
      if(value.length < 2 || value.length > 30 ) {
        setErrors({...errors, [name]: "Поле должно быть не менее 2 или не более 30 символов"});
      } 
      if(value.length === 0) {
        setErrors({...errors, [name]: "Пожалуйста заполните это поле"});
      }
    } 

    if (name === "email" || name === "password") {
      if(value.length === 0) {
        setErrors({...errors, [name]: "Пожалуйста заполните это поле"});
      }
    }

    setIsValid(target.closest("form").checkValidity());

  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

export default useFormWithValidation;