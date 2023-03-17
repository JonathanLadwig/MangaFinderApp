export interface IParams {
    pages: IPagination
    filters?: IFilter
    order?: IOrder
}

export interface IFilter {
    whiteList: string[]
    blackList: string[]
}

export interface IPagination {
    limit: number
    offset: number
}

export interface IOrder {
    type: string
    direction: string
}

