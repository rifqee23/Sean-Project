import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-berita-indonesia.vercel.app/cnn/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
