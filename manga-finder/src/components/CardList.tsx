import MangaCard from "./Card";

function CardList() {
  return (
    <div className="CardList bg-transparent h-9/10 w-screen grid grid-rows-auto grid-col-4 gap-4 mt-16">
      <MangaCard
        id={""}
        title={"Trese"}
        imageUrl={"https://i.imgur.com/hTmBaJL.jpeg"}
        description={""}
        status={""}
        year={0}
        contentRating={""}
        tags={[]}
        availableTranslatedLanguages={[]}
      />
    </div>
  );
}
export default CardList;
