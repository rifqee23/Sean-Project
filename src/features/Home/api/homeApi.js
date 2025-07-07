import axios from "../../../utils/axios";

export const fetchNewNews = async () => {
  const response = await axios.get("/terbaru");
  return response.data;
};
