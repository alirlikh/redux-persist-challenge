import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { removeItem } from "../features/cart/cartSlice"
import { CartItem } from "../utils"

const src = "https://cdn.soft98.ir/Glary-Utilities.jpg"

function Cart() {
  const dispatch = useDispatch<AppDispatch>()

  const handleRemoveItem = (item: CartItem) => {
    dispatch(removeItem(item))
    console.log("item removed")
  }

  const { cartItem, numItemInCart, total } = useSelector((state: RootState) => state.cartSlice)

  return (
    <>
      <section style={{ padding: "25px" }}>
        <div>
          <h4>Shopping Cart</h4>
          <span>{`You have ${numItemInCart} item in your cart`}</span>
        </div>
        <div style={{ marginTop: "50px" }}>
          {numItemInCart > 0 ? (
            cartItem?.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "20px 40px",
                    padding: "10px",
                    width: "60%",
                    borderRadius: "15px",
                    boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <img
                    style={{ width: "100px", objectFit: "cover", height: "auto" }}
                    src={item.images ? item.images[0] : src}
                    alt="product image"
                    loading="lazy"
                  />
                  <div style={{ marginLeft: "10px", flex: 1 }}>
                    <span style={{ fontWeight: "500" }}>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      gap: "30px"
                    }}
                  >
                    <div style={{ fontWeight: "300" }}>
                      <span>{item.quantity}</span>
                    </div>
                    <div style={{ fontWeight: "300" }}>
                      <span>{item.price}$</span>
                    </div>
                    <button onClick={() => handleRemoveItem(item)}>remove</button>
                  </div>
                </div>
              )
            })
          ) : (
            <div>Your cart is Empty!</div>
          )}
        </div>
      </section>
    </>
  )
}
export default Cart
