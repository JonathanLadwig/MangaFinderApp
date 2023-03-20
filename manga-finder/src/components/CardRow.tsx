import { ChaoticOrbit } from "@uiball/loaders";
import {
  IMangaAttributes,
  IMangaData,
  IMangaDescription,
  IMangaRelationship,
  IMangaRelationshipAttributes,
  IMangaResponse,
  IMangaTitle,
} from "../models/IManga";
import { IParams } from "../models/IParam";
import { ITagResponse } from "../models/ITag";
import { getData } from "../services/SearchQuery";
import Card from "./Card";

function CardRow(params: IParams) {
  console.log(params);

  const { isLoading, error, data } = getData(params);

  if (isLoading)
    return (
      <div className="flex h-48 w-screen flex-col justify-center align-middle content-center items-center">
        <h2 className="text-2xl">Loading</h2>
        <ChaoticOrbit size={35} color="#FFFFFF" />
      </div>
    );

  if (error) return <h1>An error has occured</h1>;

  const mangaListResponse: IMangaResponse = data;

  const mangaData: IMangaData[] = mangaListResponse.data;

  function getCoverFileName(mangaRelationship: IMangaRelationship[]): string {
    let coverFilename: string = "";
    let relationshipAttributes: IMangaRelationshipAttributes;
    mangaRelationship.forEach((relationship) => {
      if (relationship.type.includes("cover_art")) {
        relationshipAttributes = relationship.attributes;
        coverFilename = relationshipAttributes.fileName;
      }
    });
    return coverFilename;
  }

  return (
    <div className="bg-transparent h-auto flex flex-row overflow-x-scroll ">
      {mangaData.map((manga) => {
        const mangaAttributes: IMangaAttributes = manga.attributes;

        const mangaRelationship: IMangaRelationship[] = manga.relationships;

        const mangaTitle: IMangaTitle = mangaAttributes.title;

        const mangaDescription: IMangaDescription = mangaAttributes.description;

        const mangaTags: ITagResponse[] = mangaAttributes.tags;

        const mangaCover: string = getCoverFileName(mangaRelationship);
        return (
          <Card
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
  );
}
export default CardRow;
