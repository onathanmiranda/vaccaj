import Modulo from "../modulo";

export default function ModuloSong(props) {
  return (
    <div className="h-full overflow-hidden">
      <Modulo modulo={props.modulo} style={{ height: 0 }} />
      {props.children}
    </div>
  );
}
