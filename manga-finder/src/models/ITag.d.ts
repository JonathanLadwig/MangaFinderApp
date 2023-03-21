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

interface ITagRelationship {
    id: string
    type: string
}

export interface ITagDescription {
    en: string
    es?: string
}