import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function getChapterData(mangaID: string) {
    const { isLoading, error, data } = useQuery({
        queryKey: [mangaID + "ChapterQuery"],
        queryFn: () =>
            axios
                .get(
                    "https://api.mangadex.org/manga/" + mangaID + "/feed?translatedLanguage[]=en&limit=500"
                )
                .then((res) => res.data),
    });
    return { isLoading, error, data };
}
