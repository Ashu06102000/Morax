import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import AuthButton from "../auth/Authbutton";
import { Link } from "react-router-dom";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const menuItems = [
    { name: "Profile", link: "/profile" },
    { name: "Histroy", link: "/history" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      {isAuthenticated && user ? (
        <div className="relative">
          <img
            className="h-8 w-8 rounded-full menu-button"
            onClick={toggleMenu}
            src={user?.picture}
            // alt="User Avatar"
          />

          <div className={`menu ${isOpen ? "menu-open" : ""}`}>
            <ul>
              {menuItems.map((items) => {
                return (
                  <li key={items.name}>
                    <Link
                      className="font-general text-xs uppercase"
                      to={items.link}
                    >
                      {items.name}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-4">
                {
                  <AuthButton containerStyle="bg-yellow-300 border-[0.5px] border-black" />
                }
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <AuthButton />
      )}
    </div>
  );
};

export default ToggleMenu;
