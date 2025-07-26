import React, { useContext } from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../context/WishlistContext";

const WishlistPage = () => {
  useEffect(() => {
    document.title = ' Wishlist | WedKnotCraft';
  }, []);
  const { wishlist, toggleWishlistItem } = useContext(WishlistContext);
  const navigate = useNavigate();
  
  const handleImageClick = (card) => {
    if (card.type === "affordable") {
      navigate(`/affordable/${card.id}`);
    } else {
      navigate(`/product/${card.id}`);
    }
  };

  return (
    <div className="bg-[#E6E6FA] py-12 px-4 sm:px-6 lg:px-16 min-h-screen">
      <h2 className="text-center text-2xl font-bold text-black mb-10">
        My Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {wishlist.map((card, index) => (
            <div
              key={index}
              className="relative p-3 rounded-xl shadow bg-white hover:shadow-lg transition duration-300"
            >
              <button
                onClick={() => toggleWishlistItem(card)}
                className="absolute top-2 right-2 rounded-full cursor-pointer p-2 shadow-md bg-red-100"
              >
                <FaHeart className="text-lg text-red-500" />
              </button>

              <button
                onClick={() => handleImageClick(card)}
                className="w-full h-[240px] overflow-hidden cursor-pointer rounded-lg"
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </button>

              <h3 className="mt-4 text-sm font-semibold text-center text-black">
                {card.title}
              </h3>
              <p className="text-center text-red-600 font-semibold mt-1 text-sm">
                Rs. {card.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
