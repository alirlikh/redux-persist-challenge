import { Product } from "../../utils";

const SingleProduct = ({ product }: { product: Product }) => {
  return (
    <>
      <div>
        <img
          src={product.images[0]}
          alt="product image"
          style={{
            objectFit: "contain",
          }}
          width={"200px"}
          height={"200px"}
        />
        <p
          style={{
            fontWeight: "500",
          }}
        >
          {product.title}
        </p>
      </div>
    </>
  );
};
export default SingleProduct;
