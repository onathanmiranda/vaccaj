import SongHeader from "@/components/molecules/song-header";
import SongInstructions from "@/components/molecules/song-instructions";
import SongImage from "@/components/molecules/song-image";

export default function SongSection(props) {
  return (
    <section className="pb-36 mt-8">
      <section className="max-w-screen-md mx-auto flex justify-between">
        <div>
          {props.song.title}
          <div>{props.song.beginning}</div>
        </div>
        <button>instruções</button>
      </section>
      <SongHeader song={props.song} />
      <SongImage song={props.song} />
      <SongInstructions song={props.song} className={`mt-8`} />
    </section>
  );
}
