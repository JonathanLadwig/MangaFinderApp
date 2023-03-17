import { useQuery } from "@tanstack/react-query";
import { ChaoticOrbit } from "@uiball/loaders";
import axios from "axios";
import MangaPageInfo from "../components/MangaPageInfo";
import {
  IMangaData,
  IMangaRelationship,
  IMangaRelationshipAttributes,
  IMangaResponse,
} from "../models/IManga";

function getManga(mangaID: string) {
  console.log("https://api.mangadex.org" + mangaID + "?includes[]=cover_art");
  const { isLoading, error, data } = useQuery({
    queryKey: ["chapterQuery"],
    queryFn: () =>
      axios
        .get("https://api.mangadex.org" + mangaID + "?includes[]=cover_art")
        .then((res) => res.data),
  });
  return { isLoading, error, data };
}

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

function Manga() {
  const url: string = window.location.pathname;
  const { isLoading, error, data } = getManga(url);

  if (isLoading)
    return (
      <div className="flex h-screen w-screen flex-col justify-center align-middle content-center items-center">
        <h2 className="text-2xl">Loading</h2>
        <ChaoticOrbit size={35} color="#FFFFFF" />
      </div>
    );

  if (error) return <h1>An error has occured</h1>;

  const mangaResponse: IMangaResponse = data;
  const manga: IMangaData[] = mangaResponse.data;

  return (
    <>
      <h1>{"Manga"}</h1>
      <MangaPageInfo
        id={manga.id}
        title={manga.attributes.title.en}
        description={manga.attributes.description.en}
        isLocked={manga.attributes.isLocked}
        originalLanguage={manga.attributes.originalLanguage}
        lastVolume={manga.attributes.lastVolume}
        lastChapter={manga.attributes.lastChapter}
        publicationDemographic={manga.attributes.publicationDemographic}
        status={manga.attributes.status}
        year={0}
        contentRating={""}
        tags={[]}
        state={""}
        chapterNumbersResetOnNewVolume={false}
        createdAt={""}
        updatedAt={""}
        version={0}
        availableTranslatedLanguages={[]}
        latestUploadedChapter={""}
        coverFileName={getCoverFileName(manga.relationships)}
      />
    </>
  );
}

export default Manga;
