import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = (userId: number | undefined): Post[] | Promise<Post[]> => {
  return axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        userId,
      },
    })
    .then((res) => res.data);
};

const usePosts = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: () => getPosts(userId),
    staleTime: 10 * 1000,
  });

export default usePosts;
