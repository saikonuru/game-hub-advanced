import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshot = (gameId: number) => {
  const apiclient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useScreenshot;
