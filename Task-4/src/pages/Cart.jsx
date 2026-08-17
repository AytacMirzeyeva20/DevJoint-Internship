import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold text-pink-600">
          Shopping Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <p className="mb-5 text-xl text-gray-500">
              Your cart is empty.
            </p>

            <Link
              to="/"
              className="inline-block rounded-lg bg-pink-500 px-6 py-3 text-white"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl bg-white p-5 shadow"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 w-24 rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="text-xl font-bold">
                        {item.title}
                      </h2>

                      <p className="text-pink-500">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow">
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">
                  Total:
                </span>

                <span className="text-2xl font-bold text-pink-600">
                  ${totalPrice}
                </span>
              </div>

              <button
                onClick={clearCart}
                className="mt-5 rounded-lg bg-gray-800 px-6 py-3 text-white"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;