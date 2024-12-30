import { useDispatch } from "react-redux";

import { Button } from "../index";
import "./Product.css";
import { AppDispatch } from "../../store";
import { CartItem } from "../../utils";
import { addItem } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  images: string[];
  description?: string;
};

const Product = ({ title, price, id, description, images }: ProductProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const cartProduct: CartItem = {
    id,
    title,
    price,
    images,
    quantity: 1,
  };

  const handleCart = () => {
    dispatch(addItem(cartProduct));
    console.log("add");
  };

  const src = "https://cdn.soft98.ir/Glary-Utilities.jpg";
  return (
    <div className="product">
      <img
        src={images ? images[0] : src}
        alt="product image"
        className="product-image"
        loading="lazy"
      />

      <Link to={`/${id}`}>
        <div className="product-title">
          <h2>{title}</h2>
          {/* <p>{description}</p> */}
          <span className="price">{price}</span>
        </div>
      </Link>
      <Button onClick={handleCart} type="button">
        Add to Cart
      </Button>
    </div>
  );
};
export default Product;
