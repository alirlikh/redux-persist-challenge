import { useQuery } from "@tanstack/react-query";
import { Product } from "../../utils";
import http from "../api";

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await http.get(`/products/${id}`);
  return response.data;
};

export const useSingleProduct = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id),
  });
};
