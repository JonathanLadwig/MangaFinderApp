import { ChaoticOrbit } from "@uiball/loaders";
import { IChapterListDaum, IChapterListReponse } from "../models/IChaptersList";
import { IManga } from "../models/IManga";
import { getChapterData } from "../services/ChapterQueries";

function MangaPageInfo(props: IManga) {
  const { isLoading, error, data } = getChapterData(props.id);

  function chapterLooper(chapter: IChapterListDaum) {
    if (chapter.attributes.volume) {
      return (
        <a
          href={"/reader/" + chapter.id}
          className=" text-white hover:text-theme"
        >
          {"Volume: " +
            chapter.attributes.volume +
            " Chapter: " +
            chapter.attributes.chapter}
        </a>
      );
    } else {
      return (
        <a
          href={"/reader/" + chapter.id}
          className=" text-white hover:text-theme"
        >
          {"Chapter: " + chapter.attributes.chapter}
        </a>
      );
    }
  }

  if (isLoading)
    return (
      <div className="flex h-screen w-screen flex-col justify-center align-middle content-center items-center">
        <h2 className="text-2xl">Loading</h2>
        <ChaoticOrbit size={35} color="#FFFFFF" />
      </div>
    );

  if (error) return <h1>An error has occured</h1>;

  const chapterListReponse: IChapterListReponse = data;

  const chapterListData: IChapterListDaum[] = chapterListReponse.data;

  const englishListData: IChapterListDaum[] = chapterListData.filter(
    (chapter) => chapter.attributes.translatedLanguage.includes("en")
  );

  chapterListData.sort((a, b) => {
    return (
      parseInt(a.attributes.volume) - parseInt(b.attributes.volume) ||
      parseInt(a.attributes.chapter) - parseInt(b.attributes.chapter)
    );
  });

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
        className="w-screen h-auto -z-10 linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)"
      />
      <div className=" absolute top-12 lg:top-16 w-4/5 bg-neutral-900/75 ml-[10%] p-4 h-auto">
        <h2 className=" text-xl">{manga.title || "MangaTitle"}</h2>
        <br />
        <p>{manga.description}</p>
        <br />
        <ul className="flex flex-col text-gray-50">
          {chapterListData.map((chapter) => {
            return chapterLooper(chapter);
          })}
        </ul>
      </div>
    </div>
  );
}

export default MangaPageInfo;
