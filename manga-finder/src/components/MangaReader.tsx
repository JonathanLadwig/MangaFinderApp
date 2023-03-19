import { ChaoticOrbit } from "@uiball/loaders";
import { IChapter, IChapterResponse } from "../models/IChapter";
import { getChapterPages } from "../services/PageQueries";

function MangaReader() {
  function getChapterID() {
    const chapterID = window.location.pathname.substring(
      7,
      window.location.pathname.length
    );
    return chapterID;
  }
  const { isLoading, error, data } = getChapterPages(getChapterID());

  if (isLoading)
    return (
      <div className="flex h-screen w-screen flex-col justify-center align-middle content-center items-center">
        <h2 className="text-2xl">Loading</h2>
        <ChaoticOrbit size={35} color="#FFFFFF" />
      </div>
    );

  if (error) return <h1>An error has occured</h1>;

  const response: IChapterResponse = data;

  const chapter: IChapter = response.chapter;

  const chapterPages: string[] = chapter.data;

  let counter = 1;
  return (
    <div className="manga-reader bg-dark w-screen h-auto flex flex-col items-center">
      {chapterPages.map((page) => {
        return (
          <>
            <img
              src={
                "https://uploads.mangadex.org/data/" + chapter.hash + "/" + page
              }
              alt={page.charAt(0)}
            />
            <div>{counter++ + " of " + chapterPages.length}</div>
          </>
        );
      })}
    </div>
  );
}

export default MangaReader;
/* https://uploads.mangadex.org/data/3303dd03ac8d27452cce3f2a882e94b2/1-f7a76de10d346de7ba01786762ebbedc666b412ad0d4b73baa330a2a392dbcdd.png */
