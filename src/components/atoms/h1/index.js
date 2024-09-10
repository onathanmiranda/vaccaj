export default function H1(props) {
  return <h1 {...props} className={`text-3xl ${props.className}`} />;
}
