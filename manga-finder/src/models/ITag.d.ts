export interface ITagResponse {
    id: string
    type: string
    attributes: ITagAttributes
    relationships: Relationship[]
}

export interface ITagAttributes {
    name: Name
    description: Description
    group: string
    version: number
}

export interface ITag {
    id: string
    type: string
    name: string
}

interface Relationship {
    id: string
    type: string
}

export interface Description {
    en: string
    es?: string
}