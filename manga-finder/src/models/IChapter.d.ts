export interface IChapterResponse {
    result: string
    baseUrl: string
    chapter: Chapter
}

export interface IChapter {
    hash: string
    data: string[]
    dataSaver: string[]
}