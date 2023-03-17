import { IManga } from "../models/IManga";

function MangaPageInfo(props: IManga) {
  const manga = props;
  return (
    <div className="mangapageinfo min-h-screen w-screen h-auto bg-dark">
      <img
        src={
          "https://uploads.mangadex.org/covers/" +
          manga.id +
          "/" +
          manga.coverFileName
        }
        alt="Manga background"
        className="w-screen h-16 mt-16"
      />
      <h2>{manga.title}</h2>
      <p>{manga.description}</p>
    </div>
  );
}

export default MangaPageInfo;
