// import axios from "axios";
// import { useEffect, useState } from "react";

// export const api = axios.create({
//     baseURL: "https://api.mangadex.org/manga?includes[]=cover_art"
// });

// export const getPostsPage = aysnc(pageParam = 1, options {}) => {
//     const response = await api.get(`&&limit=10&offset=${pageParam}`);
//     return response.data;
// };

// //hooks
// const usePosts = (pageNum = 1) {
//     const [results, setResults] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [isError, setIsError] = useState(false);
//     const [hasNextPage, setHasNextPage] = useState(true);

//     useEffect(() => {
//         setIsLoading(true)
//         setIsError(false)
//         setError(null)

//         const controller = new AbortController();
//         const signal = controller.signal;
//         getPostsPage(pageNum, { signal }).then(data => {setResults(prevResults => {)

//         return () => controller.abort()

//     }, [pageNum])

//     return { isLoading, error, results, hasNextPage, isError };

// }

