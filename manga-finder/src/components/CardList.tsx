import { IMangaCard } from "../models/IMangaCard";
import { ITag } from "../models/ITag";
import Card from "./Card";

const tag1: ITag = {
  id: "0",
  type: "genre",
  name: "hentai",
};

const tag2: ITag = {
  id: "1",
  type: "genre",
  name: "horror",
};

const manga1: IMangaCard = {
  id: "0",
  title: "Triese",
  imageUrl: "https://i.imgur.com/hTmBaJL.jpeg",
  description: "A scary manga",
  status: "Ongoing",
  year: 0,
  contentRating: "Suggestive",
  tags: [tag1, tag2],
  availableTranslatedLanguages: ["en"],
};

const manga2: IMangaCard = {
  id: "1",
  title: "Alice in Borderland",
  imageUrl: "https://i.imgur.com/UsfSZvM.jpeg",
  description: "An action manga",
  status: "Finished",
  year: 0,
  contentRating: "Suggestive",
  tags: [tag1, tag2],
  availableTranslatedLanguages: ["en"],
};

const mangaList: IMangaCard[] = [
  manga1,
  manga2,
  manga1,
  manga2,
  manga1,
  manga2,
];

function CardList() {
  return (
    <div className="CardList bg-transparent h-auto w-screen grid grid-flow-row grid-cols-3 grid-rows-auto mt-16">
      {mangaList.map((manga) => {
        return (
          <Card
            id={manga.id}
            title={manga.title}
            imageUrl={manga.imageUrl}
            description={manga.description}
            status={manga.status}
            year={manga.year}
            contentRating={manga.contentRating}
            tags={manga.tags}
            availableTranslatedLanguages={
              manga.availableTranslatedLanguages
            }></Card>
        );
      })}
    </div>
  );
}
export default CardList;
