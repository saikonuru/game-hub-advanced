import axios from "axios";

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "6df06e2c9a6c45d1bdf94f255fbaf130",
//   },
// });

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = async () => {
    return axiosInstance.get<T[]>(this.endPoint).then((res) => res.data);
  };

  post = async (data: T) => {
    const res = await axiosInstance.post<T>(this.endPoint, data);
    return res.data;
  };
}

export default APIClient;
