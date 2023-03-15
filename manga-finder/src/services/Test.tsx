import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { IChapter, IChapterResponse } from "../models/IChapter";

const queryClient = new QueryClient();

function Example() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get(
          "https://api.mangadex.org/at-home/server/4e2908ef-42e8-4ea2-a3c0-9d0948c482af"
        )
        .then((res) => res.data),
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occured</h1>;

  const chapterResponse: IChapterResponse = data;

  const chapter: IChapter = chapterResponse.chapter;

  const chapterPages: string[] = chapter.data;

  const firstPage: string = chapterPages[0];

  return (
    <div className="manga-reader bg-dark w-screen h-auto flex flex-col justify-center items-center">
      {chapterPages.map((page) => {
        return (
          <img
            src={
              "https://uploads.mangadex.org/data/" + chapter.hash + "/" + page
            }
            alt={page.charAt(0)}
          />
        );
      })}
    </div>
  );
}

export default function Test() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
