import axios from "axios";

const api = axios.create({
  baseURL: "https://toy-topia-server-ten.vercel.app",
  timeout: 10000,
});

export default api;
