import { ChaoticOrbit } from "@uiball/loaders";
import {
  IMangaAttributes,
  IMangaCollectionResponse,
  IMangaData,
  IMangaDescription,
  IMangaRelationship,
  IMangaTitle,
} from "../models/IManga";
import { IParams } from "../models/IParam";
import { ITagResponse } from "../models/ITag";
import { getCoverFileName } from "../services/GetCoverFileName";
import { getData } from "../services/SearchQuery";
import Card from "./Card";

function CardList(params: IParams) {
  const { isLoading, error, data } = getData(params);

  if (isLoading)
    return (
      <div className="flex h-screen w-screen flex-col justify-center align-middle content-center items-center">
        <h2 className="text-2xl">Loading</h2>
        <ChaoticOrbit size={35} color="#FFFFFF" />
      </div>
    );

  if (error)
    return <p className="text-xl rounded-lg p-4">An error has occured</p>;

  const mangaListResponse: IMangaCollectionResponse = data;

  const mangaData: IMangaData[] = mangaListResponse.data;

  return (
    <>
      <div className="CardList bg-transparent h-screen w-screen grid grid-flow-row grid-rows-auto grid-cols-3 min-h-screen sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 overflow-scroll">
        {mangaData.map((manga, i) => {
          const mangaAttributes: IMangaAttributes = manga.attributes;

          const mangaRelationship: IMangaRelationship[] = manga.relationships;

          const mangaTitle: IMangaTitle = mangaAttributes.title;

          const mangaDescription: IMangaDescription =
            mangaAttributes.description;

          const mangaTags: ITagResponse[] = mangaAttributes.tags;

          const mangaCover: string = getCoverFileName(mangaRelationship);

          return (
            <Card
              key={i}
              id={manga.id}
              title={mangaTitle.en}
              coverFilename={mangaCover}
              description={mangaDescription.en}
              status={mangaAttributes.status}
              year={mangaAttributes.year}
              contentRating={mangaAttributes.contentRating}
              tags={mangaTags}
              availableTranslatedLanguages={
                mangaAttributes.availableTranslatedLanguages
              }
              altTitles={mangaAttributes.altTitles}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
export default CardList;
