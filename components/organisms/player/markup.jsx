/* eslint-disable react/display-name */

import { forwardRef } from "react";
import styles from "./styles.module.scss";

export default forwardRef((props, ref) => {
  const { src, type, className } = props;
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <audio ref={ref} controls={true}>
        <source src={src} type={type} />
        Seu navegador não suporta áudio em HTML5.
      </audio>
    </div>
  );
});
