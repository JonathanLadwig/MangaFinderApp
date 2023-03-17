import MangaPageInfo from "../components/MangaPageInfo";
import { IManga } from "../models/IManga";

function getManga() {}

const manga: IManga = {
  id: "",
  title: "", //used
  altTitles: [], //used
  description: "", //used
  isLocked: false,
  links: [], //used
  originalLanguage: "", //used
  lastVolume: "", //used
  lastChapter: "", //used
  publicationDemographic: "",
  status: "", //used
  year: 0, //used
  contentRating: "", //used
  tags: [], //used
  state: "",
  chapterNumbersResetOnNewVolume: false,
  createdAt: "", //used
  updatedAt: "", //used
  version: 0,
  availableTranslatedLanguages: [], //used
  latestUploadedChapter: "", //used
};

function Manga() {
  return (
    <>
      <h1>{"Manga"}</h1>
      <MangaPageInfo
        id={manga.id}
        title={manga.title}
        altTitles={manga.altTitles}
        description={manga.description}
        isLocked={manga.isLocked}
        links={manga.links}
        originalLanguage={manga.originalLanguage}
        lastVolume={manga.lastVolume}
        lastChapter={manga.lastChapter}
        publicationDemographic={manga.publicationDemographic}
        status={manga.status}
        year={0}
        contentRating={""}
        tags={[]}
        state={""}
        chapterNumbersResetOnNewVolume={false}
        createdAt={""}
        updatedAt={""}
        version={0}
        availableTranslatedLanguages={[]}
        latestUploadedChapter={""}
      />
    </>
  );
}

export default Manga;
