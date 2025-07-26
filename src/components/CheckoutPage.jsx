import React, { useEffect, useState } from "react";
import mastercard from "../assets/images/mastercard.jpg";
import visa from "../assets/images/visa.jpg";
import paypal from "../assets/images/paypal.jpg";
import upi from "../assets/images/upi.jpg";
import paytm from "../assets/images/paytm.jpg";
import gpay from "../assets/images/gpay.jpg";
import phonepe from "../assets/images/phonepe.jpg";
import cred from "../assets/images/cred.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { FaMoneyCheckAlt, FaInfoCircle } from "react-icons/fa";

const CheckoutPage = () => {
  useEffect(() => {
    document.title = "Payment | WedKnotCraft";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [selectedUPI, setSelectedUPI] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (location.state?.fromCart) {
      const cartData = JSON.parse(localStorage.getItem("checkoutCart"));
      if (Array.isArray(cartData)) {
        setProducts(cartData);
      }
    } else {
      const product = JSON.parse(localStorage.getItem("checkoutProduct"));
      if (product) {
        setProducts([product]);
      }
    }
  }, [location]);

  const subtotal = products
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).toLowerCase();

  const handlePayment = () => {
    if (!selectedUPI) {
      alert("Please select a UPI method.");
      return;
    }
    setShowModal(true);
  };

  const confirmOrder = () => {
    if (!phone || !address) {
      alert("Please enter both phone number and address.");
      return;
    }

    navigate("/order", {
      state: {
        orderItems: products,
        phone,
        address,
      },
    });

    localStorage.removeItem("checkoutProduct");
    localStorage.removeItem("checkoutCart");
  };

  return (
    <div className="min-h-screen bg-[#e6e6fa] p-10 flex flex-col md:flex-row gap-8 justify-center items-start">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1100px]">
        {/* LEFT PAYMENT BOX */}
        <div className="flex-1 bg-[#ece8f8] rounded-xl border border-gray-400 shadow-md p-6 flex flex-col justify-between">
          {/* Logos */}
          <div>
            <div className="flex justify-between mb-6">
              {[mastercard, visa, paypal, upi].map((img, i) => (
                <img key={i} src={img} alt="payment" className="h-10 w-20 object-contain" />
              ))}
            </div>

            {/* UPI Section */}
            <div className="border border-gray-300 rounded p-4">
              <p className="text-xl font-semibold mb-4">Pay by UPI</p>
              {[
                { label: "Paytm", icon: paytm },
                { label: "Gpay", icon: gpay },
                { label: "Phonepe", icon: phonepe },
                { label: "Cred", icon: cred },
              ].map((method, index, arr) => (
                <div key={method.label}>
                  <label className="flex justify-between items-center px-2 py-2 cursor-pointer">
                    <div className="flex items-center gap-2 text-lg">
                      <input
                        type="radio"
                        name="upi"
                        className="accent-black"
                        checked={selectedUPI === method.label}
                        onChange={() => setSelectedUPI(method.label)}
                      />
                      <span className="font-semibold">{method.label}</span>
                    </div>
                    <img src={method.icon} alt={method.label} className="w-15 h-10" />
                  </label>
                  {index < arr.length - 1 && <hr className="border-gray-500" />}
                </div>
              ))}
            </div>

            {/* COD Button */}
            <button className="w-full bg-[#5a5a5a] text-white font-semibold py-3 mt-6 rounded-lg flex items-center px-4 gap-2 text-lg shadow">
              <FaMoneyCheckAlt />
              Cash on Delivery
            </button>

            {/* Info */}
            <div className="mt-5 text-sm text-gray-600">
              <p className="flex items-start gap-1">
                <FaInfoCircle className="mt-[2px]" />
                Credit card payments may take up to 24 hours to be processed!
              </p>
              <label className="flex items-center mt-3 text-black">
                <input type="checkbox" className="mr-2 accent-blue-600" />
                Save my payment details for future purchase
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="flex-1 bg-[#ece8f8] rounded-xl border border-gray-400 shadow-md p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-center underline mb-4">Order Summary</h2>

            <div className="flex justify-between text-lg mb-2">
              <p className="font-medium">Date:</p>
              <p className="font-medium">{formattedDate}</p>
            </div>
            <div className="flex justify-between text-lg mb-4">
              <p className="font-medium">Time:</p>
              <p className="font-medium">{formattedTime}</p>
            </div>

            <hr className="mb-4 border border-gray-300" />

            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-xl">Products</p>
                  <div className="flex justify-between text-lg mt-4">
                    <span>{product.name || product.title || "Unnamed Product"}</span>
                    <span className="font-semibold text-[15px]">{product.quantity}</span>
                  </div>
                  <div className="flex justify-between text-lg text-gray-600 my-2">
                    <span>Added Compliment</span>
                    <span>Hold Bag</span>
                  </div>
                  <hr className="my-4 border border-gray-500" />
                  <div className="bg-gray-300 text-lg rounded-lg px-4 py-2 flex justify-between items-center font-semibold mb-2 mt-2">
                    <span>{product?.sku || "MAR0057"}</span>
                    <span className="text-green-700 font-bold">Coupon Applied</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No product selected.</p>
            )}

            <div className="flex justify-between text-lg mb-3">
              <span className="text-orange-500 font-bold">Subtotal</span>
              <span className="text-orange-500 font-semibold">Rs. {subtotal}</span>
            </div>
            <div className="flex justify-between text-lg mb-6">
              <span className="text-orange-500 font-bold">Shipping</span>
              <span className="text-orange-500 font-bold">
                0.00 <span className="text-xs text-gray-400 ml-1">(Free)</span>
              </span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-[#f5a623] font-bold py-3 rounded-lg hover:bg-[#e59417] transition shadow"
          >
            Pay Rs. {subtotal}
          </button>
        </div>
      </div>

      {/* PHONE + ADDRESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Enter Delivery Info</h2>

            <label className="block mb-3">
              <span className="block font-semibold mb-1">Phone Number</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91-XXXXXXXXXX"
                className="w-full border border-gray-400 rounded px-3 py-2"
              />
            </label>

            <label className="block mb-4">
              <span className="block font-semibold mb-1">Address</span>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full shipping address"
                className="w-full border border-gray-400 rounded px-3 py-2"
              />
            </label>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmOrder}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
