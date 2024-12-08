export type Product = {
  id: number
  title: string
  price: number
}

export type ProductResponse = {
  total: number
  skip: number
  limit: number
  products: Product[]
}
