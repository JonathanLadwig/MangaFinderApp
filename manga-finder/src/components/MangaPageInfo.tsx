import { ChaoticOrbit } from "@uiball/loaders";
import { IChapterListDaum, IChapterListReponse } from "../models/IChaptersList";
import { IManga } from "../models/IManga";
import { getChapterData } from "../services/ChapterQueries";

function MangaPageInfo(props: IManga) {
  const { isLoading, error, data } = getChapterData(props.id);

  function chapterLooper(chapter: IChapterListDaum) {
    console.log("/reader/" + chapter.id);
    return <a href={"/reader/" + chapter.id}>{chapter.attributes.title}</a>;
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

  console.log(chapterListData);

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
      <ol>
        {chapterListData.map((chapter) => {
          return chapterLooper(chapter);
        })}
        ;
      </ol>
    </div>
  );
}

export default MangaPageInfo;
