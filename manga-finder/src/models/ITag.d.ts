export interface ITagResponse {
    id: string
    type: string
    attributes: ITagAttributes
    // relationships: any[]
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