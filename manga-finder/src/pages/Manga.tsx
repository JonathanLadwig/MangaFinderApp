import MangaPageInfo from "../components/MangaPageInfo";
import NavBar from "../components/Navbar";

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
