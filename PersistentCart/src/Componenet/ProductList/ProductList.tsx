import { Product as ProductComp } from "../index"
import { Product } from "../../utils"
import "./ProductList.css"
import { useEffect, useState } from "react"
import { fetchProducts } from "../../services/index"

const ProductList = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchProducts()
        const { products: apiProducts } = data
        setProducts(apiProducts)
      } catch (error) {
        console.log(error)
      }
    }

    fetch()
  }, [])

  const [products, setProducts] = useState<[] | Product[]>()

  // const tempProduct = {
  //   id: 1,
  //   title: "Book",
  //   price: 26
  // }
  //@ts-ignore
  // const products: Product[] = Array.from({ length: 2 }, (_, index) => {
  //   return {
  //     id: index + 1,
  //     title: tempProduct.title,
  //     price: tempProduct.price
  //   }
  // })

  return (
    <>
      <section>
        <div className="product-container">
          {products &&
            products.map((product) => {
              const { id, title, price, description } = product
              return (
                <ProductComp
                  key={id}
                  title={title}
                  price={price}
                  id={id}
                  description={description}
                />
              )
            })}
        </div>
      </section>
    </>
  )
}
export default ProductList
