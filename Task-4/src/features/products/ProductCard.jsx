import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">
          {product.title}
        </h3>

        <p className="my-3 text-lg font-semibold text-pink-500">
          ${product.price}
        </p>

        <button
          onClick={addToCart}
          className="w-full rounded-lg bg-pink-500 py-3 text-white hover:bg-pink-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;