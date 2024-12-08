import http from "../api"
import { ProductResponse } from "../../utils"

//method 1
export const fetchProducts = async (): Promise<ProductResponse> => {
  const response = await http.get<ProductResponse>("/products")
  return response.data
}

//method 2

// export const fetchProducts = (): Promise<AxiosResponse<ProductResponse>> => {
//   return http.get<ProductResponse>("/products")
// }
