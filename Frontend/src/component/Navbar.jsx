import React, { useState, useEffect, useRef } from 'react';
import { Search, User, LogOut, Map, UserCircle,Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const isLoggedIn = !!localStorage.getItem('token');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // 1. Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/"; // Redirect and refresh
  };

  // 2. Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary shadow-lg px-6 py-3 flex items-center justify-between border-b border-secondary/10">
      
      {/* LEFT: LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="/logo1.png" 
          alt="SafarAI Logo" 
          className="h-16 w-16 object-contain absolute transform -translate-y-1 transition-transform hover:scale-110 cursor-pointer"
        />
      </Link>

      {/* CENTRE: SEARCH BAR */}
      <div className="hidden md:flex items-center bg-white border border-white/20 rounded-full px-4 py-2 w-1/3 transition-all focus-within:ring-2 focus-within:ring-secondary/50">
        <input 
          type="text" 
          placeholder="Search your next destination..." 
          className="bg-transparent border-none outline-none w-full text-black font-outfit text-sm placeholder:text-gray-400"
        />
        <button className="text-secondary hover:scale-110 transition-transform">
          <Search size={18} />
        </button>
      </div>

      {/* RIGHT: LOGIN / SIGNUP or PROFILE DROPDOWN */}
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            {/* The Profile Icon Button */}
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary hover:bg-white transition-all duration-300 border-2 border-transparent active:scale-95"
            >
              <User size={22} />
              {/* {userData?.username?.toUpperCase() ||"User"} */}
            </button>

            {/* THE DROPDOWN MENU */}
            {showDropdown && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-2 flex flex-col">
                  
                  <Link 
                    to="/profile" 
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/10 rounded-xl transition-colors"
                  >
                    <UserCircle size={18} className="text-secondary" />
                    Profile
                  </Link>

                  <Link 
                    to="/my-trips" 
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/10 rounded-xl transition-colors"
                  >
                    <Map size={18} className="text-secondary" />
                    My Trips
                  </Link>

                  <div className="h-px bg-gray-100 my-1"></div>

                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors text-left"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>

                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              onClick={onLoginClick}
              className="hidden sm:block font-outfit text-xs uppercase tracking-widest font-medium text-white border border-secondary/50 px-5 py-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
            >
              Login
            </button>

            <button 
              onClick={onSignupClick}
              className="font-outfit text-xs uppercase tracking-widest font-semibold bg-secondary text-primary px-6 py-2 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-md"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;