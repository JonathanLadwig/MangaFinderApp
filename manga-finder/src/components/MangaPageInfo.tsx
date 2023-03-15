import { IManga } from "../models/IManga";

function MangaPageInfo(props: IManga) {
  const manga = props;
  return (
    <div className="mangapageinfo min-h-screen w-screen h-auto bg-dark">
      <img
        src="https://i.imgur.com/hTmBaJL.jpeg"
        alt="Manga background"
        className="manga-background w-screen h-16 mt-16 overflow-auto"
      />
    </div>
  );
}

export default MangaPageInfo;
