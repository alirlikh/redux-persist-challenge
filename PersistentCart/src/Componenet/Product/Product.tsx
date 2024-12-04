import { Button } from "../index"
import "./Product.css"

type ProductProps = {
  title: string
  price: number
}

const Product = ({ title, price }: ProductProps) => {
  const addToCart = () => {
    console.log(`foo =`, "add")
  }

  const src = "https://cdn.soft98.ir/Glary-Utilities.jpg"
  return (
    <div className="product">
      <img src={src} alt="product image" className="product-image" />
      <div className="product-title">
        <h2>{title}</h2>
        <span>{price}</span>
      </div>
      <Button onClick={addToCart} type="button">
        add cart
      </Button>
    </div>
  )
}
export default Product
