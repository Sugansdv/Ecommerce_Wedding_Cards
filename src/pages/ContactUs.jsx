import React from "react";
import { useEffect } from 'react';

const ContactUs = () => {
   useEffect(() => {
    document.title = 'Contact Us | WedKnotCraft';
  }, []);
  return (
    <div className="bg-[#E6E6FA] text-black px-4 sm:px-10 md:px-20 py-10 font-sans">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact Us</h2>

      <p className="text-center mx-auto mb-10 text-2xl font-semibold">
        We’d love to hear from you! Whether you have a question, need help customizing your invites, or just want to chat about your dream wedding stationery — we’re here for you.
      </p>

      <div className="space-y-8 text-base sm:text-lg font-medium text-gray-800">
        <div>
          <p className="flex items-center gap-2">
            <span role="img" aria-label="support">🕘</span>
            <span className="text-black-700 font-semibold underline mb-5 cursor-pointer">Support</span>
          </p>
          <p>India (toll free):<br />999-264-9444</p>
          <p>Only Call - No WhatsApp Number</p>
          <p className="text-black-600 underline">sales@wedknotcraftinvitationcards.com</p>
        </div>

        <div>
          <p className="flex items-center gap-2">
            <span role="img" aria-label="proofing">🔍</span>
            <span className="text-black-700 font-semibold mb-5 underline cursor-pointer">Proofing Department</span> 
          </p>
          <p>Indian Standard Time (IST)<br />Mobile (9.00am to 9.00pm IST) Monday to Saturday</p>
          <p>
            <span className="font-semibold underline text-black-700">HR Team</span><br />
            +91 9876543210<br />
            hrteam@wedknotcraftinvitationcards.com
          </p>
          <p>
            <span className="font-semibold text-black-700 underline">Customer Support Team</span><br />
            +91 9876543210<br />
            customersupport@wedknotcraftinvitationcards.com
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-6 text-base sm:text-lg   text-gray-900">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-center  mx-auto mb-10 text-2xl font-semibold">
          Whether you’re looking for inquiries, would like to ask before ordering, or just want to let us know how we did.
        </p>

        <p className="font-bold text-center text-black text-lg sm:text-xl">
          An online Invitation Store with Worldwide Delivery
        </p>

        <p className="text-center  mx-auto mb-10 text-2xl font-semibold">
          Weddings are always special but the fact about Wedknotcraft wedding Cards is that they are bespoke and exquisite in design that wins the hearts of millions across the world.
        </p>

        <p className="text-center  mx-auto mb-10 text-2xl font-semibold">
          The team behind us is extremely talented and has more than 50 years of experience with them to translate your dream wedding card into reality.
        </p>

        <p className="text-center  mx-auto mb-10 text-2xl font-semibold">
          If you want your wedding card to be truly rare and exceptional then look no further. The team here is fully able to weave dreams into reality.
        </p>

        <p className="text-center  mx-auto mb-10 text-2xl font-semibold">
          No matter what kind of wedding you have planned,{" "}
          <a href="https://wedknotcraft.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            wedknotcraft.in
          </a>{" "}
          is well known to design various wedding invitations like Hindu Wedding Cards, Muslim Wedding Cards, Sikh Wedding Cards, Interface Wedding Cards and so on.
        </p>

        <p className="text-center text-2xl mb-20 mt-6 font-semibold">
          If you have any query related to invitation designs or our cards, please feel free to contact us!!!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
