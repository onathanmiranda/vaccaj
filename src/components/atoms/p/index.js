export default function P(props) {
  return (
    <p
      {...props}
      className={`text-base leading-relaxed ${props.className || ""}`}
    />
  );
}
