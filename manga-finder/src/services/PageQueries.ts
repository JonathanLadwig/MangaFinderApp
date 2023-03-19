import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function getChapterPages(chapterID: string) {
    const { isLoading, error, data } = useQuery({
        queryKey: [chapterID],
        queryFn: () =>
            axios
                .get(
                    "https://api.mangadex.org/at-home/server/" + chapterID
                )
                .then((res) => res.data),
    });
    return { isLoading, error, data };
}