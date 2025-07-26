import React from "react";

import { useEffect } from 'react';

export default function HowToOrder() {
    useEffect(() => {
    document.title = ' How To Order| WedKnotCraft';
  }, []);
  return (
    <div className="bg-[#E6E6FA] px-4 sm:px-8 md:px-24 py-12 text-black">
      <h2 className="text-4xl font-bold mb-6">
        How do I order wedding cards from Wed Knot Craft online?
      </h2>
      <div className="space-y-4 text-justify leading-relaxed">
        <p className="text-2xl font-medium leading-relaxed">
          <strong className="text-3xl">Browse the Collection:</strong> Take your time to explore our collection and
          discover various designs that suit your style and preferences. You can use the search
          filters to narrow down your options based on themes, colors, or card types.
        </p>
        <p className="text-2xl font-medium leading-relaxed">
          <strong className="text-3xl">Select a Design:</strong> Once you have found a design that catches your eye,
          click on it to view more details. You can zoom in to see the intricate details and read
          the card description to ensure it meets your requirements.
        </p>
        <p className="text-2xl font-medium leading-relaxed">
          <strong className="text-3xl">Add to Cart:</strong> Once you are happy with your design, select the quantity
          and click on the "Add to Cart" button to proceed to the next step.
        </p>
        <p className="text-2xl font-medium leading-relaxed">
          <strong className="text-3xl">Review Your Order:</strong> In the shopping cart, you will be able to review your
          order summary, including the quantity, price, and any additional services you have
          selected.
        </p>
        <p className="text-2xl font-medium leading-relaxed">
          <strong className="text-3xl">Secure Payment:</strong> King of Cards offers a secure online payment system.
          Choose your preferred payment method and enter the necessary details to complete your
          transaction.
        </p>
        <p className="text-2xl font-medium leading-relaxed">
          <strong className="text-3xl">Place Your Order:</strong> After confirming your payment, you will receive an
          order confirmation via email, along with an estimated delivery date.
        </p>
      </div>
    </div>
  );
}
