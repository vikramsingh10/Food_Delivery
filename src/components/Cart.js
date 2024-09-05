import { useDispatch, useSelector } from "react-redux";
import { addItem, decrementItem, removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decrementItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-3xl mb-5">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          <h2 className="font-bold text-2xl mb-4">Cart Items:</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-start">
                  <strong className="text-lg">{item.name}</strong>
                  <span className="text-gray-500">₹{item.price}</span>
                  <span className="text-gray-500">Quantity: {item.quantity}</span>
                
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecreaseQuantity(item)}
                    className="bg-red-500 text-white font-bold py-1 px-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="bg-gray-300 text-black font-bold py-1 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {/* Clear Cart Button */}
          <button
            onClick={handleClearCart}
            className="mt-5 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
