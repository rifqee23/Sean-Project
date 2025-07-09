import { create } from "zustand";
import { fetchNews } from "../api/homeApi";

const useHomeStore = create((set, get) => ({
  latestNews: [],
  labelLatest: "",

  paginatedNews: [],
  labelPaginated: "",
  currentPage: 1,
  itemsPerPage: 8,
  totalPages: 0,
  loading: false,
  totalNews: 0,

  getAllNews: async (endpoint, label) => {
    const state = get();

    if (state.labelLatest === label && state.latestNews.length > 0) return;

    set({ loading: true });
    try {
      const news = await fetchNews(endpoint);
      const allPosts = news.data.posts;
      set({
        latestNews: allPosts,
        labelLatest: label,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      set({ loading: false });
    }
  },

  getNewsPagination: async (endpoint, label, force = false) => {
    const state = get();
    if (
      !force &&
      state.labelPaginated === label &&
      state.paginatedNews.length > 0
    )
      return;

    set({ loading: true });
    try {
      const news = await fetchNews(endpoint);
      const allPosts = news.data.posts;
      const totalPages = Math.ceil(allPosts.length / get().itemsPerPage);

      set({
        labelPaginated: label,
        currentPage: 1,
        totalPages,
        paginatedNews: allPosts.slice(0, get().itemsPerPage),
        totalNews: allPosts.length,
        latestNews: allPosts,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      set({ loading: false });
    }
  },

  setPage: (page) => {
    const { latestNews, itemsPerPage } = get();
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    set({
      currentPage: page,
      paginatedNews: latestNews.slice(start, end),
    });
  },
}));

export default useHomeStore;
