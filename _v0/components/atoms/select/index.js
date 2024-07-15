import { forwardRef } from "react";

import Markup from "./markup.jsx";

export default forwardRef(function Select(props, ref) {
  const { options, value, onChange, name, className } = props;

  return (
    <Markup
      ref={ref ? ref : null}
      options={options}
      value={value}
      onChange={onChange}
      name={name}
      className={className}
    />
  );
});
