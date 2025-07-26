// import React, { createContext, useState } from "react";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null); // ✅ new

//   const toggleWishlistItem = (item) => {
//     setWishlist((prev) => {
//       const exists = prev.find((card) => card.id === item.id);
//       return exists
//         ? prev.filter((card) => card.id !== item.id)
//         : [...prev, item];
//     });
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, toggleWishlistItem, selectedProduct, setSelectedProduct }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };






import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Sync to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlistItem = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((card) => card.id === item.id);
      return exists
        ? prev.filter((card) => card.id !== item.id)
        : [...prev, item];
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlistItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

