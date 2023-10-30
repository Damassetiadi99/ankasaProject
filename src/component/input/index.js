import React from "react";
import styles from "@/component/input/input.module.css";

const Input = ({
  type,
  className,
  classNameLabel,
  placeholder,
  name,
  id,
  value,
  onChange,
  label,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles[classNameLabel]}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={styles[className]}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
