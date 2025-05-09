export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
    category: string;
    discountPercentage: number;
    rating: number;
    stock: number;
  }
  
  export interface ICategoryState {
    categories: string[];
    fetchCategories: () => Promise<void>;
  }
  
  export interface IProductState {
    products: IProduct[];
    totalPages: number;
    fetchProducts: (page: number, category?: string) => Promise<void>;
  }
  
  export interface ICurrentState {
    current: IProduct | null;
    fetchCurrent: (id: string) => Promise<void>;
  }
  
  export interface IBannerState {
    bannerProducts: IProduct[];
    fetchBannerProducts: () => Promise<void>;
  }