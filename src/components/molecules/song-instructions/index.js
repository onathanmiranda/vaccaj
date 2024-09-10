import P from "@/components/atoms/p";

export default function SongInstructions(props) {
  if (
    !props.song ||
    !props.song.instructions ||
    props.song.instructions === "null"
  )
    return null;

  const instructions = props.song.instructions.split("\\n");

  return (
    <section className={`max-w-screen-sm mx-auto ${props.className || ""}`}>
      {instructions.map((instruction) => {
        return (
          <P key={instruction} className={`mt-2`}>
            {instruction}
          </P>
        );
      })}
    </section>
  );
}
