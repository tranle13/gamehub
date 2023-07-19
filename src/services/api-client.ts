import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "20d40b85e2924a0e93c19f6b38f64a11",
  },
});
