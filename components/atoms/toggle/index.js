import { useCallback } from "react";
import Markup from "./markup.jsx";

export default function Toggle({
  toggledLabel = false,
  unToggledLabel = false,
  toggled = false,
  onToggle = () => {},
}) {
  const onClick = useCallback(() => {
    onToggle(!toggled);
  }, [toggled]);

  return (
    <Markup
      toggledLabel={toggledLabel}
      unToggledLabel={unToggledLabel}
      onClick={onClick}
      toggled={toggled}
    />
  );
}
