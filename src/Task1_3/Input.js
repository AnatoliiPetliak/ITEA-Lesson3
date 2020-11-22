import React from "react";
import PropTypes from "prop-types";

export const Input = ({ type, value, onChange, name, placeholder }) => {
  let convertedName = name.toUpperCase();
  return (
    <label>
      <p>{convertedName}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
      <span>{value.length > 20 ? `"Max(20)"${value.length}` : ""}</span>
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "number", "required"]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentLength: PropTypes.bool,
  contentMaxLength: PropTypes.number,
};
