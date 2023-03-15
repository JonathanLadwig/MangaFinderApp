export interface IManga {
    id: string
    title: string
    altTitles: string[]
    description: Description
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
    data: Data
}

export interface Data {
    id: string
    type: string
    attributes: Attributes
    relationships: Relationship[]
}

export interface Attributes {
    title: Title
    altTitles: AltTitle[]
    description: Description
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

export interface Title {
    en: string
}

export interface AltTitle {
    "ja-ro"?: string
    ja?: string
    zh?: string
    "zh-hk"?: string
    "zh-ro"?: string
}

export interface Description {
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

export interface Relationship {
    id: string
    type: string
}