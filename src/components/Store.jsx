import Card from "./Card";
import Footer from "./Footer";
import Loader from "./Loader";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function Store({ posters, addToCart, cart, isLoading }) {
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    const productName = posters.find(
      (product) => product.id === productId,
    ).title;
    setNotification(`${productName} has been added to your cart.`);
    setTimeout(() => {
      setNotification(null);
    }, 2250);
  };

  return (
    <>
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-4 md:mx-10">
          <div className="mb-5 flex items-center justify-between">
            <h1 className="mt-2 text-xl font-bold tracking-wide underline underline-offset-8 md:mt-1 md:text-5xl">
              PICK YOUR STYLE
            </h1>
            <div>
              {cart && (
                <Link
                  to="/cart"
                  className="group relative mt-4 inline-block text-xs md:text-lg"
                >
                  <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-2 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white md:px-5">
                    <span className="absolute inset-0 size-full rounded-lg bg-gray-50 px-5 py-3"></span>
                    <span className="ease absolute left-0 -ml-2 size-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
                    <span className="relative">
                      VIEW CART
                      <span>
                        {"  "}(
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                        )
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </Link>
              )}
            </div>
          </div>
          {notification && (
            <div className="fixed bottom-10 right-4 z-50 animate-float rounded-md border-2 border-black bg-red-800 p-1 text-sm font-bold text-white shadow-lg md:bottom-28 md:border-b-8 md:px-4 md:py-2 md:text-xl">
              <span className="mr-2">{notification}</span>
            </div>
          )}
          <div className="masonry-store md:masonry">
            {posters.map((product) => (
              <Card
                key={product.id}
                productID={product.id}
                productName={product.title}
                productDescription={product.description}
                productImage={product.path}
                productPrice={product.price}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      )}{" "}
      <Footer />
    </>
  );
}

Store.propTypes = {
  posters: PropTypes.array,
  addToCart: PropTypes.func,
  cart: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Store;
