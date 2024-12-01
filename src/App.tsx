import React from "react";

import Footer from "./components/genericComponents/Footer";
import NavBar from "./components/genericComponents/Navbar";
import HomeLayout from "./components/Home/HomeLayout";
import { Route, Routes } from "react-router-dom";

import PrductsPage from "./components/products/PrductsPage";

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/products" element={<PrductsPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
