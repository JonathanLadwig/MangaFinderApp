export interface IParams {
    qKey: string
    pages: IPagination
    filters?: IFilter
    order?: IOrder
    search?: string
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

