export default function P(props) {
  return (
    <p
      {...props}
      className={`text-base font-light tracking-wider leading-relaxed ${props.className || ""}`}
    />
  );
}
