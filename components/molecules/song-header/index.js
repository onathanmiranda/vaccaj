export default function SongHeader({ skillTitle, lessonTitle, songTitle, songBeginning }){
  return (
    <header className="mb-34 mt-55 max-w-lg mx-auto">
      {skillTitle && <div className="text-base lowercase font-normal px-21 mt">{skillTitle}</div>}
      {lessonTitle && <div className="text-base text-highlight lowercase font-light mt-13 px-21">{lessonTitle}</div>}
      {songTitle && <h1 className="text-2xl lowercase font-normal mt-13 px-21">{songTitle}</h1>}
      {songBeginning && <p className="text-xl text-brand lowercase font-normal px-21">{songBeginning}</p>}
    </header>
  );
}