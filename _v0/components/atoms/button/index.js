import Markup from "./markup.jsx";

export default function Button({
  onClick,
  children,
  className,
  outlined = false,
}) {
  return (
    <Markup onClick={onClick} className={className} outlined={outlined}>
      {children}
    </Markup>
  );
}
