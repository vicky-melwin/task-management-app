import { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    let errs = {};
    if (!values.title) errs.title = "Title is required";
    if (!values.description) errs.description = "Description is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  return { values, setValues, errors, handleChange, validate };
}
