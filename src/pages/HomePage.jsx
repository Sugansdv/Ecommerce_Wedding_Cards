import React, { useState } from "react";
import { useEffect } from 'react';
import WeddingCardsSection from "../components/WeddingCardsSection";
import InvitationCardSection from "../components/InvitationCardSection";
import TestimonialSection from "../components/TestimonialSection";
import HowItWorks from "../components/HowItWorks";
import ThemeBasedInvitation from "../components/ThemeBasedInvitation";
import homeBg from '../assets/images/home_bg1.jpg';
import InvitationCollections from '../components/InvitationCollections';
import Promocard1 from '../assets/images/Promocard1.jpg'
import Promocard2 from '../assets/images/Promocard2.jpg'
import sale from '../assets/images/stock-clearance.jpg'
import cardframe from '../assets/images/Card_frame.jpg'
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import card1 from "../assets/images/Card_frame.jpg";
import card2 from "../assets/images/Promocard1.jpg";
import card3 from "../assets/images/stock-clearance.jpg";

function HomePage() {
   useEffect(() => {
    document.title = 'Home | WedKnotCraft';
  }, []);
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/wedding-cards");
  };


  const cards = [card1, card2, card3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>

        <div className="relative w-full h-screen">
      <img
        src={homeBg}
        alt="Home Background"
        className="w-full h-full block"
      />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-3xl backdrop-blur-sm p-8 rounded-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-14">
            Your Love Story Begins Here
          </h1>
          <p className="text-base sm:text-2xl text-gray-900 mb-6 font-medium">
            Create stunning wedding invitations that capture the essence of your
            special day. Elegant designs, heartfelt words, and everything you
            need to make your first impression unforgettable.
          </p>
          <div className=' flex justify-center '>
            <button
            onClick={handleClick}
            className="bg-[#FFAB0D] text-black px-6 py-2 text-base sm:text-2xl rounded-md font-semibold hover:bg-[#e99c00] transition"
          >
            Get your style
          </button>
          </div>
        </div>
      </div>
    </div>
  {/* <img
    src={homeBg}
    alt="Home Background"
    className="w-full h-auto block"
  /> */}
  {/* <div className="flex justify-center bg-[#EAE6FA]">
 <img
  src={cardframe}
  alt="Home Background"
  className="w-[1100px] h-[500px] mx-auto block object-contain"
/>


</div> */}
<div className="flex justify-center bg-[#EAE6FA] py-0 py-6 relative">

  {/* Image */}
  <img
    src={cards[currentIndex]}
    alt={`Card ${currentIndex + 1}`}
    className="w-[1100px] h-[500px] object-contain"
  />

  {/* Left Arrow */}
  <button
    onClick={handlePrev}
    className="absolute top-1/2 transform -translate-y-1/2 
               left-[10px] sm:left-[120px] md:left-[40px] lg:left-[269px]
               p-1 sm:p-3 md:p-4 lg:p-6
               bg-white bg-opacity-70 hover:bg-opacity-100 text-black 
               rounded-full shadow-md transition"
  >
    <FaChevronLeft size={20} />
  </button>

  {/* Right Arrow */}
  <button
    onClick={handleNext}
    className="absolute top-1/2 transform -translate-y-1/2 
               right-[10px] sm:right-[120px] md:right-[30px] lg:right-[250px]
               p-1 sm:p-3 md:p-4 lg:p-6
               bg-white bg-opacity-70 hover:bg-opacity-100 text-black 
               rounded-full shadow-md transition"
  >
    <FaChevronRight size={20} />
  </button>
</div>


  <InvitationCardSection />
  <ThemeBasedInvitation />
  {/* <PromoCards /> */}
  <div className="px-2 sm:px-4 md:px-6 py-8 bg-[#EAE6FA]">
  <div className="flex flex-col md:flex-row gap-4 justify-between">
    
    {/* Promo Card 1 */}
    <div className="flex-1 min-h-[200px] bg-gray-100 rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:rotate-[1deg] hover:shadow-lg group">
      <img
        src={Promocard1}
        alt="Promo 1"
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Promo Card 2 */}
    <div className="flex-1 min-h-[200px] bg-gray-100 rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:rotate-[1deg] hover:shadow-lg group">
      <img
        src={Promocard2}
        alt="Promo 2"
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>

  </div>
</div>

  <WeddingCardsSection />
  <img
    src={sale}
    alt="Home Background"
    className="w-full h-auto block"
  />
  <InvitationCollections />
  <TestimonialSection />
  <HowItWorks />
</div>
  )
}

export default HomePage
