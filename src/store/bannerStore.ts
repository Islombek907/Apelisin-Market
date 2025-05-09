import { create } from 'zustand';
import axios, { AxiosResponse } from 'axios';
import { IProduct, IBannerState } from '../types/types';

const API_URL = 'https://dummyjson.com/';

const bannerStore = create<IBannerState>((set) => ({
  bannerProducts: [],
  fetchBannerProducts: async () => {
    try {
      const url = `${API_URL}products/category/smartphones?limit=100`;
      const response: AxiosResponse<{ products: IProduct[] }> = await axios.get(url);
      set({ bannerProducts: response.data.products });
    } catch (error) {
      console.error(error, 'Произошла ошибка при получении banner products');
    }
  },
}));

export default bannerStore;