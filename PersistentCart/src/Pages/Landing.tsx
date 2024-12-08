import { Link } from "react-router-dom"
import { ProductList } from "../Componenet"

const Landing = () => {
  return (
    <>
      <header style={{ margin: "10px 0" }}>
        <nav style={{ backgroundColor: "grey", height: "30px", padding: "10px" }}>
          <Link to={"/cart"}>Cart</Link>
        </nav>
      </header>
      <main>
        <ProductList />
      </main>
    </>
  )
}
export default Landing
