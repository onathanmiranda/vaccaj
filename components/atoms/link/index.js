import Markup from "./markup.jsx";

export default function Link({ children, className, href }) {
  return (
    <Markup href={href} className={className}>
      {children}
    </Markup>
  );
}
