import { IChapter, IChapterResponse } from "../models/IChapter";

function MangaReader() {
  //IChapterResponse request string below
  // https://api.mangadex.org/at-home/server/{chapter.id}

  const response: IChapterResponse = {
    result: "",
    baseUrl: "",
    chapter: undefined,
  };

  const chapter: IChapter = response.chapter;

  const chapterPages: string[] = chapter.data;
  return (
    <div className="manga-reader bg-dark w-auto h-auto">
      {chapterPages.map((page) => {
        return (
          <img
            src={
              "https://uploads.mangadex.org/data/" + chapter.hash + "/" + page
            }
            alt={page.charAt(0)}
          />
        );
      })}
      ;
    </div>
  );
}

export default MangaReader;

{
  /* https://uploads.mangadex.org/data/3303dd03ac8d27452cce3f2a882e94b2/1-f7a76de10d346de7ba01786762ebbedc666b412ad0d4b73baa330a2a392dbcdd.png */
}
