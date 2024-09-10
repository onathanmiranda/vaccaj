import ModuloSection from "@/components/organisms/modulo-section";

export default function Modulo(props) {
  return (
      <div
        style={props.style}
        className={`h-full overflow-auto ${props.className || ""}`}
      >
        <ModuloSection modulo={props.modulo} />
      </div>
  );
}
