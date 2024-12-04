import { Product } from "../index"
import { ProductType } from "../../utils"
import "./ProductList.css"

const ProductList = () => {
  const tempProduct = {
    id: 1,
    title: "Book",
    price: 26
  }
  //@ts-ignore
  const products: ProductType[] = Array.from({ length: 22 }, (_, index) => {
    return {
      id: index + 1,
      title: tempProduct.title,
      price: tempProduct.price
    }
  })

  return (
    <>
      <section>
        <div className="product-container">
          {products.map((product) => {
            const { id, title, price } = product
            return <Product key={id} title={title} price={price} />
          })}
        </div>
      </section>
    </>
  )
}
export default ProductList
