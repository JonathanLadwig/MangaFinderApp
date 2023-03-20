import { IMangaRelationship, IMangaRelationshipAttributes } from "../models/IManga";

export function getCoverFileName(mangaRelationship: IMangaRelationship[]): string {
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