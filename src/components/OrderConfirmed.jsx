import React from "react";
import { useEffect } from 'react';
import mainImage from "../assets/images/orderImage.jpg";
import { useLocation } from "react-router-dom";
import AnimatedTick from "../components/AnimatedTick";
import { FaUser, FaEnvelope, FaPhone, FaHome, FaShoppingBag } from "react-icons/fa";

const OrderConfirmed = () => {
  useEffect(() => {
    document.title = ' Order Confirmation | WedKnotCraft';
  }, []);
  const location = useLocation();
  const { product, orderItems } = location.state || {};
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
          className="w-[500px] h-[400px] object-contain mb-4"
        />
        <AnimatedTick />
      </div>

      {/* ORDER DETAILS */}
      <div className="w-full max-w-7xl bg-[#eeebf9] px-4 md:px-10 py-6 rounded shadow-md font-sans text-gray-800">
        <div className="grid md:grid-cols-2 gap-20">
          {/* LEFT COLUMN - ORDER SUMMARY */}
          <div className="p-4 rounded-lg shadow">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Your Order</h2>
            <p className="mb-1 font-bold">
              Order ID:{" "}
              <strong>{Math.floor(Math.random() * 1000000000)}</strong>
            </p>
            <p className="mb-6 font-bold">
              Thank You! Your Order has been confirmed.
            </p>

            {/* All products listed */}
            {products.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b pb-4 mb-4"
              >
                <img
                  src={item.image || mainImage}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <p className="bg-orange-500 text-white px-3 py-1 rounded font-semibold mb-1 inline-block">
                    SKU: {item?.sku || "N/A"}
                  </p>
                  <p className="font-medium">
                    SN ({item?.serial || "SN 54"})
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity || 1}
                  </p>
                </div>
                <p className="ml-auto font-bold text-lg">
                  Rs. {(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
              </div>
            ))}

            <h3 className="font-bold mb-2 text-xl">Order Summary</h3>
            <ul className="text-sm space-y-1 mb-2">
              <li className="flex justify-between font-semibold text-lg">
                Subtotal <span>Rs. {subtotal.toFixed(2)}</span>
              </li>
              <li className="flex justify-between font-semibold text-lg">
                Shipping Charge <span>Rs. 0.00</span>
              </li>
              <li className="flex justify-between font-semibold text-lg">
                Taxes <span>18%</span>
              </li>
              <li className="flex justify-between font-semibold text-lg">
                Discount <span>Rs. {discount.toFixed(2)}</span>
              </li>
            </ul>
            <hr />
            <p className="flex justify-between mt-2 font-bold text-lg">
              Total <span>Rs. {total.toFixed(2)}</span>
            </p>
          </div>

          {/* RIGHT COLUMN - CUSTOMER DETAILS */}
          <div className="p-4 rounded-lg shadow space-y-4">
            <div>
              <h4 className="font-semibold mb-1 text-xl">Customer</h4>
              <p className="flex items-center gap-2 text-lg">
                <FaUser /> {getNameFromEmail(user.email)}
              </p>
              <p className="flex items-center gap-2 text-lg">
                <FaShoppingBag />
                {products.length} order{products.length > 1 ? "s" : ""}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-xl">
                Customer Information
              </h4>
              <p className="flex items-center gap-2 text-lg">
                <FaEnvelope /> {user.email}
              </p>
              <p className="flex items-center gap-2 text-lg">
                <FaPhone /> +91-XXXXXXXXXX
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-xl">Shipping Address</h4>
              <p className="flex items-center gap-2 text-lg">
                <FaUser /> {getNameFromEmail(user.email)}
              </p>
              <p className="flex items-center gap-2 text-lg">
                123 Elm Street
              </p>
              <p>Anytown, ABC 12345</p>
              <p>Anywhere.</p>
            </div>

            <div>
              <h4 className="font-bold mb-1 text-xl">Billing Address</h4>
              <p className="mb-1 text-lg">Same as Shipping address</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => (window.location.href = "/products")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
