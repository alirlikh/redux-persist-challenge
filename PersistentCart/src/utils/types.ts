export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
  description?: string;
};

export type ProductResponse = {
  total: number;
  skip: number;
  limit: number;
  products: Product[];
};

export type PaginationInfo = {
  total: number;
  skip: number;
  limit: number;
};

export type CartItem = Product & { quantity: number };
