import { create } from 'zustand';
import axios, { AxiosResponse } from 'axios';
import { ICategoryState } from '../types/types.ts';

const API_URL = 'https://dummyjson.com/';

const categoryStore = create<ICategoryState>((set) => ({
  categories: [],
  fetchCategories: async () => {
    try {
      const response: AxiosResponse<string[]> = await axios.get(`${API_URL}products/categories`);
      if (Array.isArray(response.data)) {
        const validCategories = response.data.filter((category): category is string => typeof category === 'string');
        set({ categories: validCategories });
      } else {
        console.error('Unexpected data format from /products/categories:', response.data);
        set({ categories: [] });
      }
    } catch (error) {
      console.error('Произошла ошибка при получении categories:', error);
      set({ categories: [] });
    }
  },
}));

export default categoryStore;