import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6df06e2c9a6c45d1bdf94f255fbaf130",
  },
});

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endPoint,
      config
    );
    return res.data;
  };
}

export default APIClient;
