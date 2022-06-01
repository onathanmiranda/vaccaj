import { useCallback } from "react";

import Markup from "./markup.jsx";

export default function ButtonPlay({
  onClick = false,
  className = "",
  iconClassName = "",
  iconName = "play",
}) {
  const onClickHandler = useCallback(
    (e) => {
      if (onClick) return onClick(e);
    },
    [onClick]
  );

  return (
    <Markup
      className={className}
      iconClassName={iconClassName}
      iconName={iconName}
      onClick={onClickHandler}
    />
  );
}
