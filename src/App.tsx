import React, { useState } from "react";

import Footer from "./components/genericComponents/Footer";
import NavBar from "./components/genericComponents/Navbar";
import HomeLayout from "./components/Home/HomeLayout";
import { Route, Routes, useLocation } from "react-router-dom";

import PrductsPage from "./components/products/PrductsPage";
import ProtectedPage from "./components/auth/ProtectedPage";
import Games from "./components/games/Games";
import Console from "./components/console/Console";

import Profile from "./components/profile/Profile";
import GameDetailpage from "./components/games/GameDetailpage";
import ConsoleDetailPage from "./components/console/ConsoleDetailPage";
import Buy from "./components/Buy/Buy";
import CartPage from "./components/Buy/Cartpage";
import Histoy from "./components/profile/Histoy";

const App: React.FC = () => {
  const location = useLocation();
  const shouldHideFooter = location.pathname === "/products";
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />

      <Routes>
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/" element={<HomeLayout />} />
        <Route path="/products" element={<PrductsPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/consoles" element={<Console />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<Histoy />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/games/:id" element={<GameDetailpage />} />
        <Route path="/consoles/:id" element={<ConsoleDetailPage />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </main>
  );
};

export default App;
