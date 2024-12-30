import { Product as ProductComp } from "../index";
import "./ProductList.css";
import { useProductQueries } from "../../services/index";

const ProductList = () => {
  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const data = await fetchProducts()
  //       const { products: apiProducts } = data
  //       setProducts(apiProducts)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetch()
  // }, [])

  // const [products, setProducts] = useState<[] | Product[]>();

  const { data, isError, isLoading, error } = useProductQueries();

  const products = data?.products || [];

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

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>{error.toString()}</div>;

  return (
    <>
      <section>
        <div className="product-container">
          {products &&
            products?.map((product) => {
              const { id, title, price, description, images } = product;
              return (
                <ProductComp
                  key={id}
                  title={title}
                  price={price}
                  id={id}
                  images={images}
                  description={description}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};
export default ProductList;
