import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import hinduWedCard from "../assets/images/Hindu_Wedding_Card.png";
import christianWedCard from "../assets/images/Elegant_Floral_Dusty_Blue_Christian_Wedding_Invitation___Zazzle-removebg-preview.png";
import muslimWedCard from "../assets/images/Muslim_Wedding_Card.png";
import sikhWedCard from "../assets/images/Sikh_Wedding_Card.png";
import interfaithWedCard from "../assets/images/Interfaith_Wedding_Card.png";
import exclusiveWedCard from "../assets/images/download__10_-removebg-preview.png";
import traditionalWedCard from "../assets/images/Indian_Hindu_Wedding_Royal_Golden_Peacock_Maroon____Rahul_-removebg-preview.png";
import allWeddingCard from "../assets/images/All_Wedding_cards.png";
import newStyleWedCard from "../assets/images/New_style_Wedding_Card.png";
import envelopeWedCard from "../assets/images/Envelope__Wedding_Card.png";
import elegantFaithWedCard from "../assets/images/Elegant_Faith__Wedding_Card.png";
import nepaliWedCard from "../assets/images/Nepali_Wedding_Invitation_Digital_Template__Editable_Nepali_Wedding_Invitation-removebg-preview.png";
import '../App.css';
const cards = [
  { title: "Hindu Wedding Cards", src: hinduWedCard, path: "/hindu-wedding-cards" },
  { title: "Christian Wedding Cards", src: christianWedCard, path: "/wedding/christian" },
  { title: "Muslim Wedding Cards", src: muslimWedCard, path: "/wedding/muslim" },
  { title: "Sikh Wedding Cards", src: sikhWedCard, path: "/wedding/sikh" },
  { title: "Interfaith Wedding Cards", src: interfaithWedCard, path: "/wedding/interfaith" },
  { title: "Exclusive Wedding Cards", src: exclusiveWedCard, path: "/wedding/exclusive" },
  { title: "Traditional Wedding Cards", src: traditionalWedCard, path: "/wedding/traditional" },
  { title: "All Wedding Cards", src: allWeddingCard, path: "/wedding/all" },
  { title: "New Style Wedding Cards", src: newStyleWedCard, path: "/wedding/new-style" },
  { title: "Envelope Wedding Cards", src: envelopeWedCard, path: "/wedding/envelope" },
  { title: "Elegant Faith Wedding Cards", src: elegantFaithWedCard, path: "/wedding/elegant-faith" },
  { title: "Nepali Wedding Cards", src: nepaliWedCard, path: "/wedding/nepali" },
];

export default function WeddingCards() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Wedding Cards | WedKnotCraft';
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[#E6E6FA] py-12 px-4 sm:px-6 lg:px-16 w-full overflow-x-hidden">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-10 tracking-wide">
        WEDDING CARDS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(card.path)}
            className="bg-[#FFF8EB] rounded-md cursor-pointer px-3 py-4 flex flex-col items-center justify-between shadow-md hover:shadow-xl border border-transparent hover:border-[#FFAB0D] transition-all duration-300 transform hover:scale-105 animate-fade-up box-border"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <img
              src={card.src}
              alt={card.title}
              className="h-48 max-w-full object-contain mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-sm font-semibold text-center text-black">
              {card.title}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
}
