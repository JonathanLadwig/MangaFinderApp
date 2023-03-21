export interface IMangaCard {
    id: string
    title: string
    altTitles?: IMangaAltTitle[]
    coverFilename: string
    description: string
    status: string
    year: number
    contentRating: string
    tags: ITag[]
    availableTranslatedLanguages: string[]
}