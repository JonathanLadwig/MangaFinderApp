import { IMangaCard } from "../models/IMangaCard";
import TagSquare from "./TagSquare";

function getMangaCover(title: string, id: string) {
  let url: string = "https://i.imgur.com/hTmBaJL.jpeg";
  return url;
}

const MangaCard = (props: IMangaCard) => {
  const manga = props;
  //loop that makes a new TagSquare foreach manga.tag
  //onclick navigate to link (useNavigate)
  return (
    <div className="rounded-lg bg-slate-100 m-4 relative min-w-[6rem] h-36 sm:h-48 sm:min-w-[8rem] xl:min-w-[12rem] xl:h-72">
      <img
        className="rounded-lg z-1 h-full w-full"
        src={manga.coverFilename}
        alt={manga.title + "cover"}
      ></img>
      <div className=" text-neutral-50 w-full flex justify-center absolute bottom-0 z-2 bg-neutral-900/75 text-center p-1 rounded-b-lg">
        <h2>{manga.title}</h2>
      </div>
      <div className="absolute top-0">
        <div className="flex w-2/3">
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
    </div>
  );
};
export default MangaCard;
