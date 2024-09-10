import SongSection from "@/components/organisms/song-section";

export default function Song(props) {
  return (
    <div className="h-full overflow-auto">
      <SongSection song={props.song} />
    </div>
  );
}
