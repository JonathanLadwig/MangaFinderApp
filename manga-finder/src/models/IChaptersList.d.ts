export interface IChapterListReponse {
    result: string
    response: string
    data: IChapterListDaum[]
    limit: number
    offset: number
    total: number
}

export interface IChapterListDaum {
    id: string
    type: string
    attributes: IChapterListAttributes
    relationships: IChapterListRelationship[]
}

export interface IChapterListAttributes {
    volume: string
    chapter: string
    title: string
    translatedLanguage: string
    externalUrl: any
    publishAt: string
    readableAt: string
    createdAt: string
    updatedAt: string
    pages: number
    version: number
}

export interface IChapterListRelationship {
    id: string
    type: string
}