import { forwardRef } from "react";

import styles from "./styles.module.scss";

export default forwardRef(function Markup(props, ref) {
  const {
    onChange = () => {},
    options = [],
    value = "",
    name = "",
    className = "",
  } = props;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <select ref={ref} onChange={onChange} value={value} name={name}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
});
