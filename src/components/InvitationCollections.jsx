import React from 'react';
import { Link } from 'react-router-dom';
import hinduImage from '../assets/images/Hindu_Invitation_collections.jpg';
import christianImage from '../assets/images/Christian_Invitation_collections.jpg';
import muslimImage from '../assets/images/Muslim_Invitation_collections.jpg';
import interfaithImage from '../assets/images/Interfaith_Invitation_collections.jpg';

const collections = [
  {
    title: 'Hindu Invitation Collections',
    image: hinduImage,
    path: '/hindu-wedding-cards',
  },
  {
    title: 'Christian Invitation Collections',
    image: christianImage,
  },
  {
    title: 'Muslim Invitation Collections',
    image: muslimImage,
  },
  {
    title: 'Interfaith Invitation Collections',
    image: interfaithImage,
  },
];

const InvitationCollections = () => {
  return (
    <div className="bg-[#ebe9fd] py-10 px-6 sm:px-10 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col group transform transition duration-500 hover:scale-[1.03] hover:shadow-xl"
          >
            {/* Image Zoom on Hover */}
            <div className="overflow-hidden">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4 flex flex-col items-center">
              <h3 className="text-center text-lg font-semibold mb-4">
                {collection.title}
              </h3>

              {collection.path ? (
                <Link to={collection.path}>
                  <button className="bg-amber-500 text-black font-bold px-5 py-2 rounded hover:bg-amber-600 transition">
                    Buy Now
                  </button>
                </Link>
              ) : (
                <button className="bg-amber-500 text-black font-bold px-5 py-2 rounded hover:bg-amber-600 transition">
                  Buy Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitationCollections;
