import React, { useEffect } from "react";
import mainImage from "../assets/images/orderImage.jpg";
import { useLocation } from "react-router-dom";
import AnimatedTick from "../components/AnimatedTick";
import { FaUser, FaEnvelope, FaPhone, FaHome, FaShoppingBag } from "react-icons/fa";

const OrderConfirmed = () => {
  useEffect(() => {
    document.title = "Order Confirmation | WedKnotCraft";
  }, []);

  const location = useLocation();
  const { product, orderItems, phone, address } = location.state || {};

  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {
    email: "guest@gmail.com",
  };

  const products = orderItems || (product ? [product] : []);

  const getNameFromEmail = (email) => email.split("@")[0];

  const subtotal = products.reduce(
    (sum, p) => sum + (p.price || 0) * (p.quantity || 1),
    0
  );
  const taxRate = 0.18;
  const tax = subtotal * taxRate;
  const discount = 5;
  const total = subtotal + tax - discount;

  return (
    <div className="bg-[#eeebf9] min-h-screen flex flex-col items-center justify-center px-4 py-6">
      {/* TOP IMAGE + TICK */}
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src={mainImage}
          alt="Success"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain mb-4"
        />
        <AnimatedTick />
      </div>

      {/* ORDER DETAILS */}
      <div className="w-full max-w-8xl bg-[#eeebf9] px-4 sm:px-6 md:px-10 py-6 rounded font-sans text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          {/* LEFT COLUMN - ORDER SUMMARY */}
          <div className="p-4 rounded-lg shadow ">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Your Order</h2>
            <p className="mb-1 font-bold text-sm sm:text-base">
              Order ID:{" "}
              <strong>{Math.floor(Math.random() * 1000000000)}</strong>
            </p>
            <p className="mb-6 font-bold text-sm sm:text-base">
              Thank You! Your Order has been confirmed.
            </p>

            {/* Product List */}
            {products.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4 mb-4"
              >
                <img
                  src={item.image || mainImage}
                  alt={item.title}
                  className="w-full sm:w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="bg-orange-500 text-white px-3 py-1 rounded font-semibold mb-1 inline-block text-sm sm:text-base">
                    SKU: {item?.sku || "N/A"}
                  </p>
                  <p className="font-medium text-sm sm:text-base">
                    SN ({item?.serial || "SN 54"})
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity || 1}
                  </p>
                </div>
                <p className="sm:ml-auto font-bold text-base sm:text-lg">
                  Rs. {(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
              </div>
            ))}

            {/* Summary */}
            <h3 className="font-bold mb-2 text-lg sm:text-xl">Order Summary</h3>
            <ul className="text-sm sm:text-base space-y-1 mb-2">
              <li className="flex justify-between font-semibold">
                Subtotal <span>Rs. {subtotal.toFixed(2)}</span>
              </li>
              <li className="flex justify-between font-semibold">
                Shipping Charge <span>Rs. 0.00</span>
              </li>
              <li className="flex justify-between font-semibold">
                Taxes <span>18%</span>
              </li>
              <li className="flex justify-between font-semibold">
                Discount <span>Rs. {discount.toFixed(2)}</span>
              </li>
            </ul>
            <hr />
            <p className="flex justify-between mt-2 font-bold text-base sm:text-lg">
              Total <span>Rs. {total.toFixed(2)}</span>
            </p>
          </div>

          {/* RIGHT COLUMN - CUSTOMER DETAILS */}
          <div className="p-4 rounded-lg shadow space-y-4">
            {/* Customer */}
            <div>
              <h4 className="font-semibold mb-1 text-lg sm:text-xl">Customer</h4>
              <p className="flex items-center gap-2 text-sm sm:text-lg break-all">
                <FaUser /> {getNameFromEmail(user.email)}
              </p>
              <p className="flex items-center gap-2 text-sm sm:text-lg">
                <FaShoppingBag />
                {products.length} order{products.length > 1 ? "s" : ""}
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-1 text-lg sm:text-xl">
                Customer Information
              </h4>
              <p className="flex items-center gap-2 text-sm sm:text-lg break-all">
                <FaEnvelope /> {user.email}
              </p>
              <p className="flex items-center gap-2 text-sm sm:text-lg">
                <FaPhone /> {phone || "+91-XXXXXXXXXX"}
              </p>
            </div>

            {/* Shipping Address */}
            <div>
              <h4 className="font-semibold mb-1 text-lg sm:text-xl">Shipping Address</h4>
              <p className="flex items-center gap-2 text-sm sm:text-lg">
                <FaUser /> {getNameFromEmail(user.email)}
              </p>
              <p className="flex items-center gap-2 text-sm sm:text-lg break-words">
                <FaHome /> {address || "123 Elm Street, Anytown, ABC 12345"}
              </p>
            </div>

            {/* Billing */}
            <div>
              <h4 className="font-bold mb-1 text-lg sm:text-xl">Billing Address</h4>
              <p className="mb-1 text-sm sm:text-lg">Same as Shipping address</p>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-6 text-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg text-sm sm:text-base"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
