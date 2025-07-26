import React from 'react';
import frame from '../assets/images/download__8_-removebg-preview.png';
import frame1 from '../assets/images/Free_Digital_Images_Vintage__Gif_And_Clip_Art_-_Artsy_Bee_Digital__294-removebg-preview.png';
import frame2 from '../assets/images/Three_Dimensional_Border_PNG_Transparent__Continental_Exquisite_Three_Dimensional_Pattern_White_Border__Continental__Fine__Three_Dimensional_PNG_Image_For_Free_Download-removebg-preview.png';

const PromoCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 p-6 bg-purple-100">
      
      {/* Card 1 */}
      <div className="flex w-full max-w-[700px] min-h-[300px] md:min-h-[320px] bg-gradient-to-r from-[#c8f1e7] to-[#3a2a2a] rounded-xl overflow-hidden shadow-lg">
        
        {/* Left 70% - Text */}
        <div className="w-[70%] p-6 relative">
          {/* Show frame1 only on desktop */}
          <img src={frame1} alt="20% Off Frame" className="hidden lg:block w-full h-auto object-contain" />
          
          <div className="absolute inset-0 flex flex-col items-start justify-center px-4 ml-16 text-left">
            <h2 className="font-bold text-base md:text-lg lg:text-xl text-black leading-snug">
              Join our love–letters list and enjoy 20% off your first set of wedding invitations.
            </h2>
            <p className="mt-2 text-sm md:text-base lg:text-lg text-black">
              Simple, beautiful, and easy on your budget.
            </p>
          </div>
        </div>

        {/* Right 30% - Image + Centered Text */}
        <div className="w-[30%] flex items-center justify-center bg-[#3a2a2a] text-white text-center">
          <div className="relative">
            <img src={frame} alt="20% Off Frame" className="w-30 md:w-36" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-semibold text-black">
              Get 20% Off <br /> Your First Order
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex w-full max-w-[700px] min-h-[300px] md:min-h-[320px] bg-gradient-to-r from-[#3a2a2a] to-[#c8f1e7] rounded-xl overflow-hidden shadow-lg">
        
        {/* Left 30% - Image + Text */}
        <div className="w-[30%] flex items-center justify-center bg-[#3a2a2a] text-white text-center">
          <div className="relative">
            <img src={frame} alt="Bonus Frame" className="w-28 md:w-36" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-semibold text-black">
              Early Bird Bonus
            </div>
          </div>
        </div>

        {/* Right 70% - Text */}
        <div className="w-[70%] p-6 relative">
          {/* Show frame2 only on desktop */}
          <img
            src={frame2}
            alt="Extra Invites Frame"
            className="hidden lg:block w-[200px] lg:w-[292px] object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center px-4 ml-10 text-left mb-12">
            <h2 className="font-bold text-sm md:text-base lg:text-lg text-black leading-snug">
              Planning ahead pays off! Book your order 60+ days in advance and get a
              free set of 20 extra invites for last-minute guests.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
