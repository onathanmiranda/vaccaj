import { useCallback } from "react";

import Markup from "./markup.jsx";

export default function ButtonPlay({
  onClick,
  playing = false,
  hasPause = false,
  buttonClassName = "",
  iconClassName = "",
}) {
  const onClickHandler = useCallback(
    (e) => {
      if (onClick) return onClick(e);
    },
    [onClick]
  );

  return (
    <Markup
      buttonClassName={buttonClassName}
      iconClassName={iconClassName}
      playing={playing}
      onClick={onClickHandler}
      hasPause={hasPause}
    />
  );
}
