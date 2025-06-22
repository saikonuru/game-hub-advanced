import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class ToDoAPIClient<T> {
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

export default ToDoAPIClient;
