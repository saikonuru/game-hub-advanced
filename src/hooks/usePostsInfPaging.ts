import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
}

const getPosts = (start: number, limit: number) => {
  return axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _start: start,
        _limit: limit,
      },
    })
    .then((res) => res.data);
};

const usePostsInfPaging = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      getPosts((pageParam - 1) * query.pageSize, query.pageSize),
    staleTime: 10 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPae, allPages) => {
      return lastPae.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePostsInfPaging;
