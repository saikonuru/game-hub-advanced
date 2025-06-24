import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import ApiClient from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery(["genres"], () => apiClient.getAll({}), {
    staleTime: ms("24h"), // 24-HR
    initialData: genres,
  });

export default useGenres;
