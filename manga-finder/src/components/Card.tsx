import { IMangaCard } from "../models/IMangaCard";
import TagSquare from "./TagSquare";

function getImgUrl(title: string, id: string) {
  let url: string = "https://i.imgur.com/hTmBaJL.jpeg";
  if (title === "Alice") {
    url = "https://i.imgur.com/UsfSZvM.jpeg";
  }
  return url;
}

const MangaCard = (props: IMangaCard) => {
  const manga = props;
  //loop that makes a new TagSquare foreach manga.tag
  manga.tags.forEach((tag) => {
    <TagSquare
      id={tag.id}
      type={tag.type}
      name={tag.name}></TagSquare>;
  });
  return (
    <a
      href="#"
      className="mangacard rounded-lg w-24 h-36 bg-slate-100 m-4 relative">
      <img
        className="mangacover rounded-lg z-1 w-24 h-36"
        src={manga.imageUrl}
        alt={manga.title + "cover"}></img>
      <div className="MangaTitle text-neutral-50 w-full flex justify-center absolute bottom-0 z-2 bg-neutral-900/75 text-center p-1 rounded-b-lg">
        <h2>{manga.title}</h2>
      </div>
      <div className="MangaInfo absolute top-0">
        <div className="TagLine flex w-2/3">
          {/* For each loop for tags */}
          {manga.tags.map((tag) => {
            return (
              <TagSquare
                id={tag.id}
                type={tag.type}
                name={tag.name}></TagSquare>
            );
          })}
        </div>
      </div>
    </a>
  );
};
export default MangaCard;
