import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:500/api", // backend base URL
});

export default api;
