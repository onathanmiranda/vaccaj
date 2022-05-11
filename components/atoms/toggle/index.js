import { useCallback } from "react";
import Markup from "./markup.jsx";

export default function Toggle({
  options = [],
  selectedOption,
  onToggle = () => {},
  name = "default_options_name",
}) {
  const onChange = useCallback(
    (id) => {
      onToggle(id);
    },
    [onToggle]
  );

  return (
    <Markup
      options={options}
      onChange={onChange}
      selectedOption={selectedOption}
      name={name}
    />
  );
}
