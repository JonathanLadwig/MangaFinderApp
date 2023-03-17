import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IParams } from "../models/IParam";

export function getData(params: IParams) {

    const pagination: string = "&&limit=" + params.pages.limit + "&&offset=" + params.pages.offset;
    let orderUrl: string = "";
    if (params.order) {
        orderUrl = "&&order[" + params.order.type + "]=" + params.order.direction;
    }

    const { isLoading, error, data } = useQuery({
        queryKey: [params.qKey],
        queryFn: () =>
            axios
                .get(
                    "https://api.mangadex.org/manga?includes[]=cover_art" + pagination + orderUrl
                )
                .then((res) => res.data),
    });

    return { isLoading, error, data };
}