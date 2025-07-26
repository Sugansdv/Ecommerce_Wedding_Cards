import React, { useEffect } from "react";
import supportIcon from "../assets/images/support-24h.png"; // Rename to match actual
import proofingIcon from "../assets/images/proofing-check.png"; // Rename to match actual

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | WedKnotCraft";
  }, []);

  return (
    <div className="bg-[#E6E6FA] text-black px-4 sm:px-10 md:px-20 py-10 font-sans">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact Us</h2>

      <p className="text-center mx-auto mb-10 text-2xl sm:text-3xl font-semibold leading-relaxed">
        We’d love to hear from you! Whether you have a question, need help customizing your invites, or just want to chat about your dream wedding stationery — we’re here for you.
      </p>

      <div className="space-y-10 text-lg sm:text-xl font-medium text-gray-800">
        {/* Support Section */}
        <div>
          <p className="flex items-center gap-3 text-xl sm:text-2xl font-bold">
            <img src={supportIcon} alt="24h Support" className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="underline cursor-pointer">Support</span>
          </p>
          <p className="mt-2">India (toll free):<br /><strong>999-264-9444</strong></p>
          <p>Only Call - No WhatsApp Number</p>
          <p className="underline">sales@wedknotcraftinvitationcards.com</p>
        </div>

        {/* Proofing Department Section */}
        <div>
          <p className="flex items-center gap-3 text-xl sm:text-2xl font-bold">
            <img src={proofingIcon} alt="Proofing Icon" className="w-10 h-10 sm:w-7 sm:h-7" />
            <span className="underline cursor-pointer">Proofing Department</span>
          </p>
          <p className="mt-2">
            Indian Standard Time (IST)<br />
            Mobile (9.00am to 9.00pm IST) Monday to Saturday
          </p>

          <div className="mt-1">
            <p className="font-semibold underline text-black">HR Team</p>
            <p>+91 9876543210</p>
            <p className="">hrteam@wedknotcraftinvitationcards.com</p>
          </div>

          <div className="mt-1">
            <p className="font-semibold underline text-black">Customer Support Team</p>
            <p>+91 9876543210</p>
            <p className="">customersupport@wedknotcraftinvitationcards.com</p>
          </div>
        </div>
      </div>

       <div className="bg-[#e6e6fa] text-[#111] px-2 py-16 font-sans">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <p className="text-xl sm:text-xl mb-10 max-w-4xl">
        Whether you’re looking for inquires, would like to ask before ordering, or just want to let us know how we did.
      </p>

      <div className="space-y-6 text-base sm:text-lg text-[#1a1a1a] leading-relaxed">
        <h3 className="text-center font-bold text-2xl sm:text-2xl">
          An online Invitation Store with Worldwide Delivery
        </h3>

        <p className="text-xl sm:text-xl mb-10 max-w-10xl">
          Weddings are always special but the fact about Wedknotcraft wedding Cards is that they are bespoke and exquisite in design that wins the hearts of millions across the world.
        </p>

        <p className="text-xl sm:text-xl mb-10 max-w-10xl">
          The team behind us is extremely talented and has more than 50 years of experience with them to translate your dream wedding card into reality.
        </p>

        <p className="text-xl sm:text-xl mb-10 max-w-10xl">
          If you want your wedding card to be truly rare and exceptional then look no further. The team here is fully able to weave dreams into reality.
        </p>

        <p className="text-xl sm:text-xl mb-10 max-w-10xl">
          No matter what kind of wedding you have planned,{" "}
          <a
            href="https://wedknotcraft.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            wedknotcraft.in
          </a>{" "}
          is well known to design various wedding invitations like Hindu Wedding Cards, Muslim Wedding Cards, Sikh Wedding Cards, Interface Wedding Cards and so on.
        </p>

        <p className="text-xl sm:text-xl mb-10 max-w-10xl font-medium text-center">
          If you have any query related to invitation designs or our cards, please feel free to contact us!!!
        </p>
      </div>
    </div>

      
    </div>
  );
};

export default ContactUs;
