import { create } from "zustand";
import { fetchNewNews } from "../api/homeApi";

const useHomeStore = create((set) => ({
  latestNews: [],
  loading: false,

  getHomeData: async () => {
    set({ loading: true });
    try {
      const news = await fetchNewNews();
      set({ latestNews: news.data.posts });
      return news.data.posts;
    } catch (error) {
      console.error("Error fetching news:", error);
      set({ loading: false });
      return null;
    } finally {
      set({ loading: false });
    }
  },
}));

export default useHomeStore;
