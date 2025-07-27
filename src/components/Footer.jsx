import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
// import logo from "../assets/images/download__23_-removebg-preview.png";
import logo from "../assets/images/logofooter.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#FFE5B4] text-black px-4 sm:px-6 md:px-12 lg:px-20 pt-8 pb-4 text-sm sm:text-base md:text-[16px] lg:text-[18px]">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* <img src={logo} alt="Logo" className="w-[120px] h-auto mb-4" /> */}
          <div className="relative ">
                    <img src={logo} alt="Logo" className="w-[200px] h-[160px] mb-4" />
                    {/* <span className="text-style absolute top-[50px] left-[75px] -translate-x-1/2 text-black  text-[16px] md:top-[60px] md:left-[98px] md:text-[20px] lg:left-[80px] lg:top-[50px] lg:text-[18px]">Cherish</span>
                    <span className="text-style absolute top-[80px] left-[75px] -translate-x-1/2 text-black text-[12px] md:top-[90px] md:left-[98px] md:text-[20px] lg:left-[80px] lg:top-[70px] lg:text-[18px]">By</span>
                    <span className="text-style absolute hidden lg:inline top-[107px] left-[52px] text-black  text-[10px]">Wedding</span>
          <span className="text-style absolute hidden lg:inline top-[107px] left-[88px] text-[10px]">Cards</span> */}
          </div>
          <p className="font-bold mb-4 text-base sm:text-[17px] md:text-[18px] text-center ">
            Largest Wedding <br />Cards Collections in <br />Chennai
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <p className="font-bold mb-0 text-sm sm:text-base">
              Follow us with
            </p>
            <div className="flex space-x-3 text-[20px] sm:text-[22px] md:text-[24px]">
              <i className="bi bi-instagram text-pink-600"></i>
              <i className="bi bi-facebook text-blue-600"></i>
              <i className="bi bi-youtube text-red-600"></i>
              <i className="bi bi-whatsapp text-green-600"></i>
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-4">Information</h3>
          <ul className="space-y-2">
            <li><Link to="/about-us" className="hover:underline font-semibold">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:underline font-semibold">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:underline font-semibold">FAQ</Link></li>
            <li><Link to="/how-to-order" className="hover:underline font-semibold">How to order wedding invitation online?</Link></li>
          </ul>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-4">Quick Access</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline font-semibold">Home</Link></li>
            <li><Link to="/wedding-cards" className="hover:underline font-semibold">Wedding Cards</Link></li>
            <li><Link to="/hindu-wedding-cards" className="hover:underline font-semibold">Hindu Wedding Cards</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-4">Contact Us</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <i className="bi bi-telephone font-semibold"></i>
              <span className="font-semibold">+91 9876543210</span>
            </div>
            <div className="flex items-start gap-2">
              <i className="bi bi-envelope"></i>
              <span className="font-semibold">wedtype@weddingcards.com</span>
            </div>
            <p className="font-semibold">Operating hours: 10.00Am to 10.00Pm</p>
            <p className="font-semibold">Monday - Sunday</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-xs sm:text-sm md:text-base">
        <p className="flex items-center justify-center gap-2 font-semibold">
          <i className="bi bi-c-circle"></i>
          Wed knot craft India Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
