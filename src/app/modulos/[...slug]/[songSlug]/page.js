import Models from "@/models";
import Song from "@/components/templates/song";

export default async function Page(props) {
  const song = await Models.Songs.getSongAndRelatedDataBySlug(
    props.params.songSlug
  );
  return <Song song={song} />;
}
