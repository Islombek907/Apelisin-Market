import { create } from 'zustand';
import axios, { AxiosResponse } from 'axios';
import { IProduct, ICurrentState } from '../types/types';

const API_URL = 'https://dummyjson.com/';

const currentStore = create<ICurrentState>((set) => ({
  current: null,
  fetchCurrent: async (id: string) => {
    try {
      set({ current: null });
      const url = `${API_URL}products/${id}`;
      const response: AxiosResponse<IProduct> = await axios.get(url);
      set({ current: response.data });
    } catch (error) {
      console.error(error, 'Произошла ошибка в запросе fetchCurrent');
    }
  },
}));

export default currentStore;