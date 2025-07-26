// components/InvitationCardSection.jsx
import React from "react";
import beachCard from "../assets/images/Beach_Wedding_Invitation_Set__Wedding_Invitation_Template_2_Set__Editable_Wedding_Invitation__Editable_on_Canva___Digital_Download__Seashell-removebg-preview.png";
import birdsCard from "../assets/images/Evite_Paperless_Wedding_Invitation_Aqua_Love_Birds-removebg-preview.png";
import palaceCard from "../assets/images/Watercolor_Arabian_Lattice_Arch_Muslim_Wedding_Invitation-removebg-preview.png";

const ThemeBasedInvitation = () => {
  const cards = [
    {
      title: "Beach Theme Cards",
      image: beachCard,
    },
    {
      title: "Birds Theme Cards",
      image: birdsCard,
    },
    {
      title: "Palace Theme Cards",
      image: palaceCard,
    },
  ];

  return (
    <section className="bg-[#EAEAFF] py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Theme Based Invitation
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mt-2">
           Theme Based Invitation
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

export default ThemeBasedInvitation;
