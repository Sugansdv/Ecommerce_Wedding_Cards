import React from "react";
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
          <div key={idx} className="flex flex-col items-center">
            <img
              src={step.icon}
              alt={step.text}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4"
            />
            <p className="text-base sm:text-lg lg:text-xl font-medium">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
