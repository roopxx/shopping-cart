import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "../App";
import About from "./About";
import Contact from "./Contact";
import Store from "./Store";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { fetchPoster } from "../utils/fetch";

export default function Router() {
  const [posters, setPosters] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPoster().then((data) => {
      setPosters(data.images);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
  }, []);

  function addToCart(id) {
    const posterIndex = cart.findIndex((product) => product.id === id);

    if (posterIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[posterIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const posterToAdd = posters.find((product) => product.id === id);

      const updatedCart = [
        ...cart,
        {
          ...posterToAdd,
          quantity: 1,
        },
      ];
      setCart(updatedCart);
    }
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App isLoading={loading} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/store",
      element: (
        <Store
          posters={posters}
          addToCart={addToCart}
          cart={cart}
          isLoading={loading}
        />
      ),
    },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    {
      path: "/cart",
      element: (
        <Cart
          addToCart={addToCart}
          cartItems={cart}
          removeFromCart={removeFromCart}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
