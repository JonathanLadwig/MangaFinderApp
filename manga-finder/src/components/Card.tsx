import { useNavigate } from "react-router-dom";
import { IMangaCard } from "../models/IMangaCard";
import { ITagResponse } from "../models/ITag";
import TagSquare from "./TagSquare";

const MangaCard = (props: IMangaCard) => {
  let counter = 0;

  const manga = props;

  const mangaTags: ITagResponse[] = manga.tags;

  const navigate = useNavigate();

  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      console.log(manga.id);
      navigate("/manga/" + manga.id);
    };
  };

  function tagLooper(tag: ITagResponse) {
    if (tag.attributes.group.includes("genre") && counter < 3) {
      console.log(counter);
      counter += 1;
      return (
        <TagSquare
          id={tag.id}
          type={tag.type}
          name={tag.attributes.name.en}
        ></TagSquare>
      );
    }
  }

  //loop that makes a new TagSquare foreach manga.tag
  //onclick navigate to link (useNavigate)
  return (
    <div
      className="rounded-lg bg-slate-100 m-4 relative min-w-[6rem] w-24 h-36 sm:h-48 sm:min-w-[8rem] sm:w-32 xl:min-w-[12rem] xl:w-48 xl:h-72"
      onClick={clickHandler()}
    >
      <img
        className="rounded-lg z-1 h-full w-full"
        src={
          "https://uploads.mangadex.org/covers/" +
          manga.id +
          "/" +
          manga.coverFilename +
          ".256.jpg"
        }
        alt={manga.title + "cover"}
      ></img>
      <div className=" text-neutral-50 w-full flex justify-center absolute bottom-0 z-2 bg-neutral-900/75 text-center p-1 rounded-b-lg">
        <h2>{manga.title}</h2>
      </div>
      <div className="absolute top-0">
        <div className="flex flex-col">
          {/* For each loop for tags */}
          {mangaTags.map((tag) => {
            return tagLooper(tag);
          })}
        </div>
      </div>
    </div>
  );
};
export default MangaCard;
