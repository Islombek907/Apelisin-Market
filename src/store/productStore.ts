import { create } from 'zustand';
import axios, { AxiosResponse } from 'axios';
import { IProduct, IProductState } from '../types/types.ts';

const API_URL = 'https://dummyjson.com/';

const productStore = create<IProductState>((set) => ({
  products: [],
  totalPages: 0,
  fetchProducts: async (page = 1, category?: string) => {
    try {
      const limit = 100;
      const skip = (page - 1) * limit;
      const url = category
        ? `${API_URL}products/category/${category}?limit=${limit}&skip=${skip}`
        : `${API_URL}products?limit=${limit}&skip=${skip}`;
      console.log('Запрос к API:', url);
      const response: AxiosResponse<{ products: IProduct[]; total: number }> = await axios.get(url);
      console.log('Ответ API:', response.data);
      set({
        products: response.data.products || [],
        totalPages: Math.ceil(response.data.total / limit),
      });
    } catch (error) {
      console.error('Произошла ошибка при получении products:', error);
      set({ products: [], totalPages: 0 });
    }
  },
}));

export const selectFetchProducts = (state: IProductState) => state.fetchProducts;
export const selectProducts = (state: IProductState) => state.products;
export const selectTotalPages = (state: IProductState) => state.totalPages;
export default productStore;