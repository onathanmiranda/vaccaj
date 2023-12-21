import { textBody } from "../../styles";

export default function SongInstructions({ instructions }){
  return (
    <section className='mb-233 pl-55 px-21 max-w-lg mx-auto'>
      {instructions.split(`\n`).map((paragraph) => (
        <p className={`mt-13 ${textBody}`} key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}