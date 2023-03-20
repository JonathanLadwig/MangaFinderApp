import { ChaoticOrbit } from "@uiball/loaders";
import { useNavigate } from "react-router-dom";
import { IChapterListDaum, IChapterListReponse } from "../models/IChaptersList";
import { IManga } from "../models/IManga";
import { getChapterData } from "../services/ChapterQueries";

function MangaPageInfo(props: IManga) {
  const { isLoading, error, data } = getChapterData(props.id);

  const navigate = useNavigate();

  function chapterLooper(chapter: IChapterListDaum) {
    return (
      <button
        onClick={() => navigate("/reader/" + chapter.id)}
        className=" col-span-4 md:col-span-2 lg:col-span-1 text-white bg-theme px-4 py-2 rounded-lg hover:bg-theme/80 transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-white/10"
      >
        {chapter.attributes.volume
          ? `Volume: ${chapter.attributes.volume} - Chapter: ${chapter.attributes.chapter}`
          : `Chapter: ${chapter.attributes.chapter}`}
      </button>
    );
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
    <div
      className="mangapageinfo w-screen bg-dark bg-cover bg-no-repeat bg-center"
      style={{
        height: "calc(100vh - 3rem)",
        backgroundImage: `url(${"https://uploads.mangadex.org/covers/" +
          manga.id +
          "/" +
          manga.coverFileName}) `,
      }}
    >
      <div className=" absolute top-0 py-12 lg:pt-16 lg:pb-0 w-full bg-neutral-900/80 px-4 md:px-16 lg:px-32 h-screen overflow-y-scroll">
        <h2 className=" mt-8 text-2xl lg:text-4xl font-bold">
          {manga.title || "MangaTitle"}
        </h2>
        <br />
        <p>{manga.description}</p>
        <br />
        <ul className="grid grid-cols-4 text-gray-50 gap-4">
          {chapterListData.map((chapter) => {
            return chapterLooper(chapter);
          })}
        </ul>
      </div>
    </div>
  );
}

export default MangaPageInfo;
