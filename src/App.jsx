import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HinduWeddingCards from "./components/HinduWeddingCards";
import WishlistPage from "./pages/WishlistPage";
import ProductDetailPage from "./pages/ProductDetailPage"; 
import AffordableProductDetailPage from "./components/AffordableProductDetailPage";
import LoginSignup from "./components/LoginSignup";
import CheckoutPage from "./components/CheckoutPage";
import OrderConfirmed from "./components/OrderConfirmed";
import WeddingCards from "./pages/WeddingCards";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import HowToOrder from "./pages/HowToOrder";
import Search from "./components/Search";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <WishlistProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/login" element={<LoginSignup />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order" element={<OrderConfirmed />} />
          <Route path="/hindu-wedding-cards" element={<HinduWeddingCards />} />
          <Route path="/product/:id" element={<ProductDetailPage />} /> 
          <Route path="/affordable/:id" element={<AffordableProductDetailPage />} />
          <Route path="/wedding-cards" element={<WeddingCards />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/search" element={<Search/>} />
        </Routes>
        <Footer />
      </Router>
    </WishlistProvider>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { WishlistProvider } from "./context/WishlistContext"; 
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import HinduWeddingCards from "./components/HinduWeddingCards";
// import WishlistPage from "./pages/WishlistPage";

// function App() {
//   return (
//         <WishlistProvider>
//           <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* <Route path="/wedding-invitation" element={<WeddingInvitation />} />
//         <Route path="/special-occasions" element={<SpecialOccasions />} />
//         <Route path="/theme-cards" element={<ThemeCards />} />
//         <Route path="/scroll-invitation" element={<ScrollInvitation />} />
//         <Route path="/digital-invitation" element={<DigitalInvitation />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/faq" element={<FAQ />} />
//         <Route path="/how-to-order" element={<HowToOrder />} /> */}
//         <Route path="/wishlist" element={<WishlistPage />} />
//          <Route path="/hindu-wedding-cards" element={<HinduWeddingCards />} />
        
//       </Routes>

//       <Footer />
//     </Router>
//     </WishlistProvider>
//   );
// }

// export default App;
