import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import card7 from "../assets/images/card7.png";
import card8 from "../assets/images/card8.png";
import card9 from "../assets/images/card9.png";
import card10 from "../assets/images/card10.png";
import card11 from "../assets/images/card.png";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const initialFilters = [
  "Wedding Cards",
  "Scroll Cards",
  "Theme Cards",
  "Birthday Cards",
  "Engagement Cards"
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState(initialFilters);
  const navigate = useNavigate();

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter((f) => f !== filterToRemove));
  };

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (query === "wedding cards" || query === "wedding card") {
      navigate("/wedding-cards");
    } else {
      console.log("Search for:", searchQuery);
    }
  };

  const handleCardClick = (img) => {
    if (img === card1) {
      navigate("/hindu-wedding-cards");
    }
  };

  const handleFilterClick = (filter) => {
    if (filter === "Wedding Cards") {
      setSearchQuery("Wedding Cards");
    }
  };

  const ideas = [card1, card2, card3, card4, card5];
  const popular = [card6, card7, card8, card9, card10, card11];

  return (
    <section className="bg-[#e7e2f9] py-12 px-4 md:px-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 hidden md:block">
        Everything You Need, to Plan your Dream Wedding
      </h2>
      <p className="text-base sm:text-lg mb-6 text-black-700 font-medium hidden md:block">
        Search for vendors, cards, ideas and real wedding stories and more!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-2 mb-6">
        <button className="bg-pink-400 text-white cursor-pointer font-semibold py-2 px-6 rounded-full hover:bg-pink-500 transition-all">
          All
        </button>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-4 pr-10 rounded-full border border-black-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <FaSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10 hidden md:flex">
        {filters.map((filter) => (
          <span
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className="flex items-center bg-white border border-gray-300 text-sm px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-gray-100"
          >
            {filter}
            <IoClose
              className="ml-2 cursor-pointer text-gray-600 hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                removeFilter(filter);
              }}
            />
          </span>
        ))}
      </div>

      <div className="text-left max-w-6xl mx-auto mb-10">
        <h3 className="text-xl font-bold mb-4 hidden md:block">Ideas for You</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ideas.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Idea ${index + 1}`}
              onClick={() => handleCardClick(img)}
              className="w-full h-[150px] object-cover rounded-lg mb-5 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <div className="text-left max-w-6xl mx-auto">
        <h3 className="text-xl font-bold mb-4 hidden md:block">Popular on This</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popular.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Popular ${index + 1}`}
              className="w-full h-[150px] object-cover rounded-lg mb-5 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
