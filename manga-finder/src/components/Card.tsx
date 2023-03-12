import { IMangaCard } from "../models/IMangaCard";
import TagSquare from "./TagSquare";

function getImgUrl(title: string, id: string) {
  let url: string = "https://i.imgur.com/hTmBaJL.jpeg";
  return url;
}

const MangaCard = (props: IMangaCard) => {
  const manga = props;
  //loop that makes a new TagSquare foreach manga.tag
  return (
    <a
      href={manga.id}
      className="mangacard rounded-lg bg-slate-100 m-4 relative w-24 h-36 xl:w-48 xl:h-72 sm:h-48 sm:w-32"
    >
      <img
        className="mangacover rounded-lg z-1 w-full h-full"
        src={manga.imageUrl}
        alt={manga.title + "cover"}
      ></img>
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
                name={tag.name}
              ></TagSquare>
            );
          })}
        </div>
      </div>
    </a>
  );
};
export default MangaCard;
