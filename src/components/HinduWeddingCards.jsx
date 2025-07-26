import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../context/WishlistContext";
import { cards } from "./HinduWeddingCardsData";

export default function HinduWeddingCards() {
  useEffect(() => {
    document.title = 'Hindu Wedding Cards | WedKnotCraft';
  }, []);

  const { wishlist, toggleWishlistItem } = useContext(WishlistContext);
  const navigate = useNavigate();

  const isCardWishlisted = (card) =>
    wishlist.some((item) => item.id === card.id);

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-[#E6E6FA] py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-center text-2xl font-bold text-black mb-10">
        HINDU WEDDING CARDS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {cards.map((card) => {
          const wishlisted = isCardWishlisted(card);

          return (
            <div
              key={card.id}
              className="relative p-3 rounded-xl shadow bg-white transition duration-300 border border-transparent hover:border-[#FFAB0D] hover:shadow-lg transform hover:scale-105"
            >
              {/* Wishlist Toggle Button */}
              <button
                onClick={() => toggleWishlistItem({ ...card, type: "product" })}
                className={`absolute top-2 right-2 rounded-full cursor-pointer p-2 shadow-md transition-colors duration-300 ${
                  wishlisted ? "bg-red-100" : "bg-white"
                }`}
              >
                <FaHeart
                  className={`text-lg transition-colors duration-300 ${
                    wishlisted ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Image Click for Navigation */}
              <button
                onClick={() => handleImageClick(card.id)}
                className="w-full"
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-[240px] object-contain cursor-pointer rounded-lg transition-transform duration-300"
                />
              </button>

              <h3 className="mt-4 text-sm font-semibold text-center text-black">
                {card.title}
              </h3>
              <p className="text-center text-red-600 font-semibold mt-1 text-sm">
                Rs. {card.price.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
