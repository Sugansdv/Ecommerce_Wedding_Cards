import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/images/download__23_-removebg-preview.png";
import logo from "../assets/images/logohd.jpg";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";
import { useLocation } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const { totalItems, setIsCartModalOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSpecialDropdownOpen, setIsSpecialDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isScrollDropdownOpen, setIsScrollDropdownOpen] = useState(false);
  const [isDigitalDropdownOpen, setIsDigitalDropdownOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const handleSearchClick = () => {
        navigate("/search");
    };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setUserDropdownOpen(false);
  };

  return (
    <header className="bg-[#E6E6FA] w-full">
      {/* === Top Row === */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between pt-3 pb-3 gap-y-6 md:gap-y-0">
        {/* === Logo Section === */}
        {/* <div className="relative w-[150px] md:w-[200px] h-[150px] md:h-[200px] flex justify-center md:justify-start ml-4 md:ml-20">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          <span className="text-style absolute top-[50px] left-[75px] -translate-x-1/2 text-black italic text-[16px] md:top-[60px] md:left-[98px] md:text-[20px] lg:left-[100px] lg:top-[70px] lg:text-[20px]">Cherish</span>
          <span className="text-style absolute top-[80px] left-[75px] -translate-x-1/2 text-black italic text-[12px] md:top-[90px] md:left-[98px] md:text-[20px] lg:left-[100px] lg:top-[95px] lg:text-[20px]">By</span>
          <span className="text-style absolute hidden lg:inline top-[50px] left-[200px] text-black italic text-[20px]">Wed</span>
          <span className="text-style absolute hidden lg:inline top-[80px] left-[250px] text-black italic text-[20px]">Knot</span>
          <span className="text-style absolute hidden lg:inline top-[100px] left-[290px] text-black italic text-[20px]">Craft</span>
          <span className="text-style absolute hidden lg:inline top-[150px] left-[70px] text-black italic text-[12px]">Wedding</span>
          <span className="text-style absolute hidden lg:inline top-[150px] left-[113px] text-black italic text-[12px]">Cards</span>
        </div> */}
<img
  src={logo}
  alt="Logo"
  className="w-[80%] max-w-[320px] h-[200px] object-contain mx-auto md:ml-20 md:mx-0"
/>

        {/* === Search + Icons + Toggle === */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-16 flex-grow justify-center md:justify-end mr-4 md:mr-20 w-full md:w-auto px-4 md:px-0">
          {/* Search */}
          <div className="relative w-full sm:w-[400px] md:w-[300px]">
            <input
              type="text"
              placeholder="Search..."
              onFocus={handleSearchClick}
              className="w-full h-[50px] md:h-[60px] py-2 pl-4 pr-12 rounded-lg border border-black outline-none text-base md:text-lg bg-[#E6E6FA]"
            />
            <i className="bi bi-search absolute right-4 top-4 text-black text-[16px]"></i>
          </div>

          {/* Icons + Toggle */}
          <div className="flex items-center gap-6 md:gap-10 mt-2 md:mt-0">
            {/* === Login/Username === */}
            {loggedInUser ? (
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => setUserDropdownOpen((prev) => !prev)}
                >
                  <i className="bi bi-person text-[24px]"></i>
                  <span className="text-sm font-medium">
                    Hello, {loggedInUser.email.split("@")[0]}
                  </span>
                  <i className="bi bi-caret-down-fill text-xs"></i>
                </div>
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded shadow z-50 text-sm">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-blue-600">
                <i className="bi bi-person text-[24px] cursor-pointer"></i>
              </Link>
            )}

            {/* Wishlist */}
            <div className="flex items-center space-x-4">
              <Link to="/wishlist">
                <i className="bi bi-heart text-[24px] cursor-pointer"></i>
              </Link>
            </div>

            {/* Cart */}
            <div className="relative">
              <i
                className="bi bi-cart text-[24px] cursor-pointer"
                onClick={() => setIsCartModalOpen(true)}
              ></i>
              <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white rounded-full px-[6px]">
                {totalItems}
              </span>
            </div>
            <CartModal />

            {/* Toggle Button (visible on mobile + tablet only) */}
            <button
              className="lg:hidden text-[28px] focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* === Bottom Navbar === */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[70px] py-2 text-black text-[1em] md:text-[1.2em] lg:text-[1.5em] font-bold transition-all duration-300 flex-wrap`}
      >
        <Link to="/" className="hover:underline transition">Home</Link>
        <Link to="/wedding-cards" className="hover:underline transition">Wedding Invitation</Link>

        {/* === Special Occasions Dropdown === */}
        <div className="relative cursor-pointer">
  <span
    onClick={() => setIsSpecialDropdownOpen(prev => !prev)}
    className="hover:underline transition inline-block"
  >
    Special Occasions
  </span>

  {isSpecialDropdownOpen && (
    <div
      className="absolute top-full left-0 bg-[#FFE4B5] mt-2 p-4 rounded shadow-lg w-[250px] z-50"
      onMouseLeave={() => setIsSpecialDropdownOpen(false)}
    >
      <ul className="text-black text-[1rem] space-y-2 font-medium">
        <li><Link to="/birthday-invitations" className="block hover:text-[#FFAB0D]">Birthday Invitations</Link></li>
        <li><Link to="/puberty-cards" className="block hover:text-[#FFAB0D]">Puberty Cards</Link></li>
        <li><Link to="/luxury-invitations" className="block hover:text-[#FFAB0D]">Luxury Invitations</Link></li>
        <li><Link to="/ear-piercing-cards" className="block hover:text-[#FFAB0D]">Ear Boring Cards</Link></li>
        <li><Link to="/engagement-cards" className="block hover:text-[#FFAB0D]">Engagement Cards</Link></li>
        <li><Link to="/house-warming" className="block hover:text-[#FFAB0D]">House Warming</Link></li>
        <li><Link to="/anniversary-cards" className="block hover:text-[#FFAB0D]">Anniversary Cards</Link></li>
      </ul>
    </div>
  )}
</div>


        {/* === Theme Cards Dropdown === */}
       <div className="relative cursor-pointer">
  <span
    onClick={() => setIsThemeDropdownOpen(prev => !prev)}
    className="hover:underline transition inline-block"
  >
    Theme Cards
  </span>

  {isThemeDropdownOpen && (
    <div
      className="absolute top-full left-0 bg-[#FFE4B5] mt-2 p-4 rounded shadow-lg w-[250px] z-50"
      onMouseLeave={() => setIsThemeDropdownOpen(false)}
    >
      <ul className="text-black text-[1rem] space-y-2 font-medium">
        <li><Link to="/beach-cards" className="block hover:text-[#FFAB0D]">Beach Theme Cards</Link></li>
        <li><Link to="/birdie-cards" className="block hover:text-[#FFAB0D]">Birdie Theme Cards</Link></li>
        <li><Link to="/Box-cards" className="block hover:text-[#FFAB0D]">Box Cards</Link></li>
        <li><Link to="/Single-sheet-cards" className="block hover:text-[#FFAB0D]">Single Sheet Cards</Link></li>
      </ul>
    </div>
  )}
</div>


        {/* <Link to="/scroll-invitation" className="hover:underline transition">Scroll Invitation</Link> */}
        {/* === Scroll Cards Dropdown === */}
       <div className="relative cursor-pointer">
  <span
    onClick={() => setIsScrollDropdownOpen(prev => !prev)}
    className="hover:underline transition inline-block"
  >
    Scroll Invitation
  </span>

  {isScrollDropdownOpen && (
    <div
      className="absolute top-full left-0 bg-[#FFE4B5] mt-2 p-4 rounded shadow-lg w-[250px] z-50"
      onMouseLeave={() => setIsScrollDropdownOpen(false)}
    >
      <ul className="text-black text-[1rem] space-y-2 font-medium">
        <li><Link to="/small-scroll" className="block hover:text-[#FFAB0D]">Small Size Scroll</Link></li>
        <li><Link to="/box-scroll" className="block hover:text-[#FFAB0D]">Box Scroll</Link></li>
        <li><Link to="/only-scroll" className="block hover:text-[#FFAB0D]">Only Scroll</Link></li>
        <li><Link to="/high-end-scroll" className="block hover:text-[#FFAB0D]">High End Scroll</Link></li>
      </ul>
    </div>
  )}
</div>

        {/* <Link to="/digital-invitation" className="hover:underline transition">Digital Invitation</Link> */}
        <div className="relative cursor-pointer" onClick={() => setIsDigitalDropdownOpen(prev => !prev)}>
  <span className="hover:underline transition inline-block">
    Digital Invitation
  </span>

  {isDigitalDropdownOpen && (
    <div
      className="absolute top-full left-0 bg-[#FFE4B5] mt-2 p-4 rounded shadow-lg w-[250px] z-50"
      onMouseLeave={() => setIsDigitalDropdownOpen(false)}
    >
      <ul className="text-black text-[1rem] space-y-2 font-medium">
        <li>
          <Link to="/small-scroll" className="block hover:text-[#FFAB0D]">
            Whatsapp Cards
          </Link>
        </li>
        <li>
          <Link to="/box-scroll" className="block hover:text-[#FFAB0D]">
            Save the Date Cards
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>


      </nav>
    </header>
  );
};

export default Navbar;
