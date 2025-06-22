import { useQuery } from "@tanstack/react-query";
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
    staleTime: 24 * 60 * 60 * 1000, // 24-HR
    initialData: { count: genres.length, next: null, results: genres },
  });

export default useGenres;
