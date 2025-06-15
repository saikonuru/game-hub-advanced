import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  page: number;
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

const usePostsPaging = (query: PostQuery) =>
  useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: () => getPosts((query.page - 1) * query.pageSize, query.pageSize),
    staleTime: 10 * 1000,
    keepPreviousData: true,
  });

export default usePostsPaging;
