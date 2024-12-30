import http from "../api";
import { PaginationInfo, Product, ProductResponse } from "../../utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

//method 1
export const fetchProducts = async (): Promise<{
  products: Product[];
  paginationInfo: PaginationInfo;
}> => {
  const response = await http.get<ProductResponse>("/products");
  const { products, ...reset } = response.data;
  return {
    products,
    paginationInfo: {
      ...reset,
      total: 0,
      skip: 0,
      limit: 0,
    },
  };
};

//method 2

// export const fetchProducts = (): Promise<AxiosResponse<ProductResponse>> => {
//   return http.get<ProductResponse>("/products")
// }

export const useProductQueries = () => {
  return useQuery({
    queryKey: ["products"],
    staleTime: 300000,
    queryFn: fetchProducts,
    placeholderData: keepPreviousData,
  });
};
