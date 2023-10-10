import { useState } from "react";

const FormInput = (props) => {
  const [change, setChange] = useState("");
  const { type, label, placeholder, name, value, getChange } = props;

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   const value = e.target.value;
  //   getChange(value);
  // };
  return (
    <>
      <label htmlFor="movie-image">
        {label}
        <input
          type={type}
          id={"movie" + name}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={() => handleChange}
          required
        />
      </label>
    </>
  );
};
export default FormInput;
