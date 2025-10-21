import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react"; // lightweight icons for hamburger

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f7f6f3] shadow-md font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
          FlexiRésumé
        </h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 text-lg font-semibold text-gray-900">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition hover:text-[#8e7f6d] ${
                isActive ? "text-[#5a524c]" : "text-gray-800"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              `transition hover:text-[#8e7f6d] ${
                isActive ? "text-[#5a524c]" : "text-gray-800"
              }`
            }
          >
            Templates
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition hover:text-[#8e7f6d] ${
                isActive ? "text-[#5a524c]" : "text-gray-800"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="block md:hidden p-2 text-gray-800 hover:text-[#5626a6]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-6 text-lg font-semibold text-gray-800 bg-[#f7f6f3] border-t border-gray-300 shadow-inner animate-fadeIn">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition hover:text-[#8e7f6d] ${
                isActive ? "text-[#5a524c]" : "text-gray-800"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/templates"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition hover:text-[#8e7f6d] ${
                isActive ? "text-[#5a524c]" : "text-gray-800"
              }`
            }
          >
            Templates
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition hover:text-[#8e7f6d] ${
                isActive ? "text-[#5a524c]" : "text-gray-800"
              }`
            }
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

