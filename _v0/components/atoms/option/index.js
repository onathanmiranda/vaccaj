import Markup from "./markup";

export default function Option({
  name,
  value,
  onChange,
  label,
  checked,
  className,
}) {
  return (
    <Markup
      checked={checked}
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      className={className}
    />
  );
}
