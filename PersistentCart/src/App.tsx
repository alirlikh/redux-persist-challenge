import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing";
import Cart from "./Pages/Cart";
import SingleProductPage from "./Pages/SingleProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/:id",
      element: <SingleProductPage />,
    },
    {
      path: "*",
      element: <>NOT FOUND!</>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
