import H1 from "@/components/atoms/h1";
import P from "@/components/atoms/p";

export default function SongHeader(props) {
  return (
    <div className="max-w-screen-sm mx-auto">
      <H1>{props.song.title}</H1>
      <P>{props.song.beginning}</P>
    </div>
  );
}
