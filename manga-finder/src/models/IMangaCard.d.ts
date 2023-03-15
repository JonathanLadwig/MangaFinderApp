export interface IMangaCard {
    id: string
    title: string
    coverFilename: string
    description: string
    status: string
    year: number
    contentRating: string
    tags: ITag[]
    availableTranslatedLanguages: string[]
}