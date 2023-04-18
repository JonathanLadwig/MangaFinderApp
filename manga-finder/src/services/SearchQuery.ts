import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IParams } from "../models/IParam";

export function getData(params: IParams) {

    const pagination: string = "&&limit=" + params.pages.limit + "&&offset=" + params.pages.offset;
    let orderUrl: string = "";
    let filterUrl: string = "";
    let searchUrl: string = "";

    if (params.order && params.order.type) {
        orderUrl = "&&order[" + params.order.type + "]=" + params.order.direction;
    }
    if (params.search) {
        searchUrl = "&&title=" + params.search;
    }

    const { isLoading, error, data } = useQuery({
        queryKey: [params.qKey],
        queryFn: () =>
            axios
                .get(
                    "https://api.mangadex.org/manga?includes[]=cover_art&contentRating[]=safe" + pagination + searchUrl + orderUrl
                )
                .then((res) => res.data),
    });

    return { isLoading, error, data };
}