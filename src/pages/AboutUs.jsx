import React from "react";
import { useEffect } from 'react';
import wed1 from "../assets/images/aboutus1.png";
import wed2 from "../assets/images/aboutus2.png";
import wed3 from "../assets/images/aboutus3.png";

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us | WedKnotCraft';
  }, []);
  return (
    <div className="bg-[#e6e6fa] text-black px-6 sm:px-20 py-12 space-y-16">
      <h2 className="text-center text-3xl font-bold underline mb-10">ABOUT US</h2>

      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-12">
        <div className="md:w-3/5 text-left">
          <h3 className="text-3xl font-bold mb-10">Celebrating Love, One Invitation at a Time</h3>
          <p className="text-2xl font-medium leading-relaxed">
            At Wed Knot Craft, we believe that every love story is unique and deserves to be celebrated in a way that reflects its individuality.
          </p>
        </div>
        <img src={wed1} alt="Section 1" className="w-60 h-80 object-cover rounded-md shadow-md" />
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-6 md:gap-12">
        <div className="md:w-3/5 text-left">
          <h3 className="text-3xl font-bold mb-10">OUR STORY</h3>
          <p className="text-2xl font-medium leading-relaxed">
            What started as a passion for design has blossomed into a full-fledged business dedicated to bringing couples' visions to life.
            Our founder envisioned a platform where couples could find invitations that resonate with their personal style and cultural heritage.
          </p>
        </div>
        <img src={wed2} alt="Section 2" className="w-60 h-80 object-cover rounded-md shadow-md" />
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-12">
        <div className="md:w-3/5 text-left">
          <h3 className="text-3xl font-bold mb-10">OUR PROMISE</h3>
          <ul className="list-disc pl-4 text-2xl font-medium space-y-1">
            <li>Custom Designs: Tailored invitations that reflect your unique love story.</li>
            <li>Quality Craftsmanship: Crafted with high-quality materials and attention to detail.</li>
            <li>Customer Satisfaction: A seamless experience from selection to delivery.</li>
          </ul>
        </div>
        <img src={wed3} alt="Section 3" className="w-60 h-80 object-cover rounded-md shadow-md" />
      </div>

      <div className="text-center mt-10">
        <h3 className="text-3xl font-bold mb-10">JOIN Us in Celebrating Your Special Day</h3>
        <p className="text-2xl font-medium">
          Explore our diverse range of designs and let us help you set the tone for your wedding celebration. 
          At Wed Knot Craft, your love story is our inspiration.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
