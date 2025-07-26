import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import jamesImg from "../assets/images/user1.jpg";
import harshithaImg from "../assets/images/user2.jpg";
import santhoshImg from "../assets/images/user3.jpg";

const testimonials = [
  {
    name: "James",
    title: "Absolutely beautiful invites!",
    text: "We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless. Everyone keeps asking where we got them from!",
    image: jamesImg,
  },
  {
    name: "Harshitha",
    title: "Customized to perfection",
    text: "We wanted something simple but unique, and they absolutely nailed it. Colors, fonts, wording — everything was exactly how we imagined. Fast turnaround too!",
    image: harshithaImg,
  },
  {
    name: "Santhosh",
    title: "Great quality at a great price.",
    text: "We were on a tight budget, but didn’t want to compromise on style. These invites were not only affordable but looked premium. Arrived quickly and packaged beautifully",
    image: santhoshImg,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#EAEAFF] py-12 px-0">
      <h2 className="text-center font-bold mb-10 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        WHAT CLIENT SAY ABOUT US
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10 px-4">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            }}
            className="bg-white rounded-md shadow-[5px_5px_0px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center text-center h-[500px] max-w-[380px] w-full mx-auto transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl">{item.name}</h3>
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-2">{item.title}</h3>
            <p className="text-lg sm:text-xl md:text-2xl my-2">{item.text}</p>
            <div className="flex mt-4 text-orange-400 text-3xl gap-x-3">
              {[...Array(5)].map((_, starIdx) => (
                <FaStar key={starIdx} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
