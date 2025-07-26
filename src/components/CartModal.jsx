import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartModal = () => {
  const {
    cartItems,
    isCartModalOpen,
    setIsCartModalOpen,
    removeFromCart,
  } = useCart();

  if (!isCartModalOpen) return null;

  const navigate = useNavigate();
  // subtotal calculation
  const subtotal = cartItems.reduce((sum, item) => {
    const quantity = item.quantity || 0;
    const price = item.price || 0;
    return sum + price * quantity;
  }, 0);

  const totalTax = +(subtotal * 0.18).toFixed(2);
  const total = +(subtotal + totalTax).toFixed(2);

  const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const canCheckout = totalQuantity >= 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-7xl p-6 rounded-xl overflow-y-auto max-h-[80vh] relative">
        
        {/* Close Button */}
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-black text-xl lg:text-2xl"
          onClick={() => setIsCartModalOpen(false)}
        >
          &times;
        </button>

        {/* Cart Table */}
        <table className="w-full text-left border-collapse text-sm lg:text-base">
          <thead>
            <tr className="border-b border-black">
              <th>Product</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Tax</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              const quantity = item.quantity || 0;
              const price = item.price || 0;
              const itemTotal = +(price * quantity).toFixed(2);

              return (
                <tr key={item.id} className="border-b">
                  <td>
                    <div className="bg-orange-400 px-4 py-4 rounded-md mt-2 w-[150px]">
                      <p className="text-sm lg:text-base font-bold">SKU: {item.sku}</p>
                      <p className="text-xs lg:text-sm">SN ({item.sn || item.id})</p>
                    </div>
                  </td>
                  <td>{quantity}</td>
                  <td>Rs.{price.toFixed(2)}</td>
                  <td>18%</td>
                  <td>Rs.{itemTotal.toFixed(2)}</td>
                  <td>
                    <button
                      className="text-red-600 font-bold text-sm hover:underline"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          {/* Totals */}
          <tfoot className="text-sm lg:text-base">
            <tr>
              <td colSpan="5" className="text-right font-semibold py-4">Sub Total:</td>
              <td className="font-semibold">Rs.{subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="5" className="text-right font-semibold">Total Tax (18%):</td>
              <td className="font-semibold">Rs.{totalTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="5" className="text-right font-bold py-4">Total:</td>
              <td className="font-bold">Rs.{total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        {/* Warning */}
        {!canCheckout && (
          <p className="text-center text-red-600 font-bold mt-4 text-sm lg:text-base">
            TO CHECKOUT PLEASE ADD MINIMUM 100 ITEMS TO THE CART
          </p>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-6">
          <button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-semibold text-sm lg:text-base"
            onClick={() => setIsCartModalOpen(false)}
          >
            Continue Shopping
          </button>
           <button
  disabled={!canCheckout}
  onClick={() => {
    if (canCheckout) {
      localStorage.setItem("checkoutCart", JSON.stringify(cartItems)); //  Save to localStorage
      navigate("/checkout", { state: { fromCart: true } }); // No need to pass state
    }
  }}
  className={`${
    canCheckout ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-400"
  } px-6 py-2 rounded-lg text-white font-semibold text-sm lg:text-base`}
>
  Checkout
</button>



        </div>
      </div>
    </div>
  );
};

export default CartModal;
