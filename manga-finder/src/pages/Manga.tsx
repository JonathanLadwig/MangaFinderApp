import MangaPageInfo from "../components/MangaPageInfo";
import NavBar from "../components/Navbar";
import { IManga } from "../models/IManga";

const manga: IManga = {
  id: "",
  title: "",
  altTitles: [],
  description: undefined,
  isLocked: false,
  links: [],
  originalLanguage: "",
  lastVolume: "",
  lastChapter: "",
  publicationDemographic: "",
  status: "",
  year: 0,
  contentRating: "",
  tags: [],
  state: "",
  chapterNumbersResetOnNewVolume: false,
  createdAt: "",
  updatedAt: "",
  version: 0,
  availableTranslatedLanguages: [],
  latestUploadedChapter: "",
};

function Manga() {
  return (
    <div className="mangapage">
      <NavBar />
      <h1 className="mt-16">{"Manga"}</h1>
      <MangaPageInfo />
    </div>
  );
}

export default Manga;
