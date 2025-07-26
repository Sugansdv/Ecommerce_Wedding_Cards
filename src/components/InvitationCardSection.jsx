// components/InvitationCardSection.jsx
import React from "react";
import hinduCard from "../assets/images/Editable_Indian_Wedding_Invitations___Hindu_Wedding_Invite___Flower_Frame_Wedding_Card___Printable___Instant_Download___Corjl_IWIM_-_Etsy_UK-removebg-preview.png";
import luxuryCard from "../assets/images/Invitation_Luxury_PSD__High_Quality_Free_PSD_Templates_for_Download___Freepik-removebg-preview.png";
import floralCard from "../assets/images/Floral_Indian_wedding_invitation_card_design_in_frabic-removebg-preview.png";

const InvitationCardSection = () => {
  const cards = [
    {
      title: "Hindu Wedding Cards",
      image: hinduCard,
    },
    {
      title: "Luxury Cards",
      image: luxuryCard,
    },
    {
      title: "Floral Wedding Cards",
      image: floralCard,
    },
  ];

  return (
    <section className="bg-[#EAEAFF] py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Unique & Exclusive Invitation Cards
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mt-2">
          Because Each Wedding is Truly Unique and Memorable
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-[10px]">


        {cards.map((card, idx) => (
  <div
    key={idx}
    className="flex flex-col items-center mx-auto lg:mx-0 w-full sm:w-[80%] lg:w-auto"
  >
    <div className="bg-[#FFF] p-4 shadow-md rounded-md hover:scale-105 transition-transform duration-300 flex items-center justify-center h-[300px] w-full sm:w-[300px] md:w-[350px]">
      <img
        src={card.image}
        alt={card.title}
        className="max-h-full max-w-full object-contain"
      />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-center mt-4">
      {card.title}
    </h3>
  </div>
))}

      </div>
    </section>
  );
};

export default InvitationCardSection;
