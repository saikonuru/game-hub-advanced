import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6df06e2c9a6c45d1bdf94f255fbaf130",
  },
});
