import React from "react";
import { motion } from "framer-motion";

import sampleIcon from "../assets/images/sample.jpg";
import orderIcon from "../assets/images/order.jpg";
import approveIcon from "../assets/images/approve.jpg";
import bulkIcon from "../assets/images/bulk.jpg";
import deliveryIcon from "../assets/images/delivery.jpg";

const steps = [
  { icon: sampleIcon, text: "Order Sample" },
  { icon: orderIcon, text: "Get Sample Order In 5 days" },
  { icon: approveIcon, text: "Approve Digital Draft" },
  { icon: bulkIcon, text: "Place Your Bulk Order" },
  { icon: deliveryIcon, text: "Print & Delivery" },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#eaeafc] py-12 px-1 sm:px-2">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">
        How It Works
      </h2>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-10 text-center">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center p-4 rounded-xl hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <img
              src={step.icon}
              alt={step.text}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 object-contain"
            />
            <p className="text-base sm:text-lg lg:text-xl font-medium">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
