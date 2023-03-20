//IChapterResponse request string below
// https://api.mangadex.org/at-home/server/{chapter.id}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function getChapterData(mangaID: string) {
    const { isLoading, error, data } = useQuery({
        queryKey: [mangaID],
        queryFn: () =>
            axios
                .get(
                    "https://api.mangadex.org/manga/" + mangaID + "/feed?translatedLanguage[]=en&limit=500"
                )
                .then((res) => res.data),
    });
    return { isLoading, error, data };
}

/* https://uploads.mangadex.org/data/3303dd03ac8d27452cce3f2a882e94b2/1-f7a76de10d346de7ba01786762ebbedc666b412ad0d4b73baa330a2a392dbcdd.png */