import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import ApiClient from "../services/api-client";
import { Genre } from "../entities/Genre";
const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery(["genres"], () => apiClient.getAll({}), {
    staleTime: ms("24h"), // 24-HR
    initialData: genres,
  });

export default useGenres;
