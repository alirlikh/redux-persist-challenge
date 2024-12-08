import { useDispatch, UseDispatch, useSelector } from "react-redux"

import { Button } from "../index"
import "./Product.css"
import { AppDispatch } from "../../store"
import { CartItem } from "../../utils"
import { addItem } from "../../features/cart/cartSlice"

type ProductProps = {
  id: number
  title: string
  price: number
  description?: string
}

const Product = ({ title, price, id, description }: ProductProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const cartProduct: CartItem = {
    id,
    title,
    price,
    quantity: 1
  }

  const handleCart = () => {
    dispatch(addItem(cartProduct))
    console.log("add")
  }

  const src = "https://cdn.soft98.ir/Glary-Utilities.jpg"
  return (
    <div className="product">
      <img src={src} alt="product image" className="product-image" />
      <div className="product-title">
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleCart} type="button">
        add cart
      </Button>
    </div>
  )
}
export default Product
