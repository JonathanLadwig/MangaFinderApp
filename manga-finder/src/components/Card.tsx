import { IMangaCard } from "../models/IMangaCard";

function getImgUrl(title: string, id: string) {
  const url: string = "https://i.imgur.com/hTmBaJL.jpeg";
  return url;
}

const MangaCard = (props: IMangaCard) => {
  const manga = props;
  console.log(manga);
  return (
    <a
      href="#"
      className="mangacard rounded-lg w-48 h-auto bg-slate-600 m-4 relative">
      <img
        className="mangacover rounded-t-lg z-1"
        src={getImgUrl(manga.title, manga.id)}
        alt={manga.title + "cover"}></img>
      <div className="MangaTitle text-neutral-50 w-full flex justify-center absolute bottom-0 z-2 bg-neutral-900/75 text-center p-2">
        <h2>{manga.title}</h2>
      </div>
      <div className="MangaInfo">
        <div className="Tags"></div>
      </div>
    </a>
  );
};
export default MangaCard;
