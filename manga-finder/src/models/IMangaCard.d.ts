export interface IMangaCard {
    id: string
    title: string
    imageUrl: string
    description: string
    status: string
    year: number
    contentRating: string
    tags: ITag[]
    availableTranslatedLanguages: string[]
}