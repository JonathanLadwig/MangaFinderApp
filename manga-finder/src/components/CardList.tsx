import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  IMangaAttributes,
  IMangaData,
  IMangaDescription,
  IMangaRelationship,
  IMangaRelationshipAttributes,
  IMangaResponse,
  IMangaTitle,
} from "../models/IManga";
import { ITagResponse } from "../models/ITag";
import Card from "./Card";

function CardList() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get(
          "https://api.mangadex.org/manga?includes[]=cover_art&&limit=24&&offset=0"
        )
        .then((res) => res.data),
  });

  if (isLoading) return <h1>Loading...</h1>;

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
    <>
      <button>Sort</button>
      <div className="CardList bg-transparent h-auto w-screen grid grid-flow-row grid-rows-auto grid-cols-3 min-h-screen sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {mangaData.map((manga) => {
          const mangaAttributes: IMangaAttributes = manga.attributes;

          const mangaRelationship: IMangaRelationship[] = manga.relationships;

          const mangaTitle: IMangaTitle = mangaAttributes.title;

          const mangaDescription: IMangaDescription =
            mangaAttributes.description;

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
            ></Card>
          );
        })}
      </div>
    </>
  );
}
export default CardList;
