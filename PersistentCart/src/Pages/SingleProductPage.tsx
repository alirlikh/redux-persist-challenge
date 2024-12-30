import { useParams } from "react-router-dom";
import { SingleProduct } from "../Componenet";
import { useSingleProduct } from "../services/Products/product.api";
import { Product } from "../utils";

const SingleProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSingleProduct(id as string);

  const product = data ?? ({} as Product);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.toString()}</div>;

  return (
    <>
      <SingleProduct product={product} />{" "}
    </>
  );
};
export default SingleProductPage;
