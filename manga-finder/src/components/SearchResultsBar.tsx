import { IMangaData } from "../models/IManga";
import { IPagination, IParams } from "../models/IParam";
import { getCoverFileName } from "../services/GetCoverFileName";
import { getData } from "../services/SearchQuery";
import Card from "./Card";

function searchResultsBar(searchString: string) {
  let pagination: IPagination = {
    limit: 5,
    offset: 0,
  };

  let params: IParams = {
    search: searchString,
    pages: pagination,
    qKey: searchString,
  };
  const { isLoading, error, data } = getData(params);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error + ""}</div>;

  const searchBarResults: IMangaData[] = data?.data;

  return (
    <div className="flex flex-row w-screen h-16">
      {searchBarResults.map((manga) => {
        const mangaCover: string = getCoverFileName(manga.relationships);
        return (
          <Card
            id={manga.id}
            title={manga.attributes.title.en}
            coverFilename={mangaCover}
            description={manga.attributes.description.en}
            status={manga.attributes.status}
            year={manga.attributes.year}
            contentRating={manga.attributes.contentRating}
            tags={manga.attributes.tags}
            availableTranslatedLanguages={
              manga.attributes.availableTranslatedLanguages
            }
            altTitles={manga.attributes.altTitles}
          ></Card>
        );
      })}
      ;
    </div>
  );
}
