import axios from "../../../utils/axios";

export const fetchNews = async (endpoint = "/terbaru") => {
  const response = await axios.get(endpoint);
  return response.data;
};
