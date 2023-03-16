export interface IManga {
    id: string
    title: string
    altTitles: string[]
    description: IMangaDescription
    isLocked: boolean
    links: string[]
    originalLanguage: string
    lastVolume: string
    lastChapter: string
    publicationDemographic: string
    status: string
    year: number
    contentRating: string
    tags: ITag[]
    state: string
    chapterNumbersResetOnNewVolume: boolean
    createdAt: string
    updatedAt: string
    version: number
    availableTranslatedLanguages: string[]
    latestUploadedChapter: string
}

export interface IMangaResponse {
    result: string
    response: string
    data: IMangaData[]
}

export interface IMangaData {
    id: string
    type: string
    attributes: IMangaAttributes
    relationships: IMangaRelationship[]
}

export interface IMangaAttributes {
    title: IMangaTitle
    altTitles: IMangaAltTitle[]
    description: IMangaDescription
    isLocked: boolean
    links: Links
    originalLanguage: string
    lastVolume: string
    lastChapter: string
    publicationDemographic: string
    status: string
    year: number
    contentRating: string
    tags: Tag[]
    state: string
    chapterNumbersResetOnNewVolume: boolean
    createdAt: string
    updatedAt: string
    version: number
    availableTranslatedLanguages: string[]
    latestUploadedChapter: string
}

export interface IMangaTitle {
    en: string
}

export interface IMangaAltTitle {
    "ja-ro"?: string
    ja?: string
    zh?: string
    "zh-hk"?: string
    "zh-ro"?: string
}

export interface IMangaDescription {
    en: string
    es?: string
}

export interface Links {
    al?: string
    ap?: string
    bw?: string
    kt?: string
    mu?: string
    amz?: string
    mal?: string
    raw?: string
}

export interface Name {
    en: string
}

export interface IMangaRelationship {
    id: string
    type: string
    attributes: IMangaRelationshipAttributes
}

export interface IMangaRelationshipAttributes {
    description: string
    volume: string
    fileName: string
    locale: string
    createdAt: string
    updatedAt: string
    version: number
}