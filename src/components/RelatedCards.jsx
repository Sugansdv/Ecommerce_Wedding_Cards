import React, { useContext } from "react";
import { cards } from "./RelatedCardData";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../context/WishlistContext"; // ✅ Import context

const RelatedCards = () => {
  const { wishlist, toggleWishlistItem } = useContext(WishlistContext); // ✅ Use context

  const isCardWishlisted = (card) =>
    wishlist.some((item) => item.id === card.id); // ✅ Check by ID

  return (
    <div className="bg-[#F1EFFF] px-6 sm:px-10 lg:px-20 py-10 mt-10">
      <h2 className="text-2xl font-bold text-black mb-6">Related Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {cards.slice(0, 8).map((card) => {
          const wishlisted = isCardWishlisted(card);

          return (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-[240px] object-cover"
                />
                <button
                  onClick={() => toggleWishlistItem(card)}
                  className={`absolute top-3 right-3 rounded-full cursor-pointer p-2 shadow-md transition-colors duration-300 ${
                    wishlisted ? "bg-red-100" : "bg-white"
                  }`}
                >
                  <FaHeart
                    className={`text-lg transition-colors duration-300 ${
                      wishlisted ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-black">
                  {card.title}
                </h3>
                <p className="text-[#D62828] text-lg font-bold mt-2">
                  Rs. {card.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedCards;
