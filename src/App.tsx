import React from "react";

import Footer from "./components/genericComponents/Footer";
import NavBar from "./components/genericComponents/Navbar";
import HomeLayout from "./components/Home/HomeLayout";
import { Route, Routes, useLocation } from "react-router-dom";

import PrductsPage from "./components/products/PrductsPage";
import ProtectedPage from "./components/auth/ProtectedPage";
import Games from "./components/games/Games";
import { Console } from "./components/console/Console";
import { GamingCards } from "./components/cards/GamingCards";
import { Nft } from "./components/nft/Nft";
import PageTransition from "./components/genericComponents/PageTransition";
import Profile from "./components/profile/Profile";
import GameDetailpage from "./components/games/GameDetailpage";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <PageTransition>
        <Routes location={location}>
          <Route path="/protected" element={<ProtectedPage />} />;
          <Route path="/" element={<HomeLayout />} />
          <Route path="/products" element={<PrductsPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/consoles" element={<Console />} />
          <Route path="/cards" element={<GamingCards />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games/:id" element={<GameDetailpage />} />
        </Routes>
      </PageTransition>
      <Footer />
    </main>
  );
};

export default App;
