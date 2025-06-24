import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery(["platforms"], () => apiClient.getAll({}), {
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
