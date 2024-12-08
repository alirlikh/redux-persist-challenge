import { ProductList } from "../Componenet"

const Landing = () => {
  const addToChart = () => {
    console.log("add to cart")
  }
  return (
    <>
      <header style={{ margin: "10px 0" }}>
        <nav style={{ backgroundColor: "grey", height: "30px", padding: "10px" }}>
          <button onClick={addToChart}>cart</button>
        </nav>
      </header>
      <main>
        <ProductList />
      </main>
    </>
  )
}
export default Landing
