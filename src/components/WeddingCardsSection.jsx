import React, { useContext } from "react";
import { affordableCards } from "./AffordableCardsData";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const WeddingCardsSection = () => {
  const { addToCart } = useCart();
  const { toggleWishlistItem, wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div className="bg-[#EAE6FA] py-12 px-2 sm:px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Simple and Affordable Wedding Cards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-20 max-w-[1200px] mx-auto">
        {affordableCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md p-6 transition-all duration-500 group hover:rotate-[1deg] hover:scale-[1.03] hover:shadow-xl relative"
          >
            {/* Image with hover zoom effect */}
            <div className="overflow-hidden rounded-md">
              <img
                src={card.src}
                alt={card.title}
                onClick={() => navigate(`/affordable/${card.id}`)}
                className="cursor-pointer w-full h-[250px] object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-4 text-center">
              {card.title}
            </h3>

            <div className="flex items-center justify-between px-2">
              <span className="text-[18px] font-medium">
                Rs. {card.price.toFixed(2)}
              </span>

              {/* Icons with hover bounce/scale */}
              <div className="flex space-x-4 text-[22px]">
                <FaHeart
                  onClick={() =>
                    toggleWishlistItem({ ...card, type: "affordable" })
                  }
                  className={`cursor-pointer transform transition-all duration-300 hover:scale-125 ${
                    isInWishlist(card.id)
                      ? "text-red-500"
                      : "text-gray-600 hover:text-red-400"
                  }`}
                />

                <FaShoppingBag
                  onClick={() => addToCart(card, 1)}
                  className="cursor-pointer text-gray-600 hover:text-green-600 transform transition-all duration-300 hover:scale-125"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCardsSection;
