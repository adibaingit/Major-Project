import React, { useState, useEffect, useRef } from 'react';
import { Search, User, LogOut, Map, UserCircle, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ onLoginClick, onSignupClick, userData }) => {
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();
  
  // States for Profile Dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // States for Search
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchList, setShowSearchList] = useState(false);
  const searchRef = useRef(null);

  // 1. Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };

  // 2. DEBOUNCING LOGIC: Search API Call
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length > 1) {
        try {
          const res = await axios.get(`http://localhost:3000/api/city?q=${searchQuery}`);
          setSearchResults(res.data);
          setShowSearchList(true);
        } catch (err) {
          console.error("Search failed", err);
        }
      } else {
        setSearchResults([]);
        setShowSearchList(false);
      }
    }, 600); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // 3. Click Outside Listeners (Combined)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Profile Dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      // Search Results
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary shadow-lg px-4 py-1 flex items-center justify-between border-b border-secondary/10">
      
      {/* LEFT: LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="/logo1.png" 
          alt="SafarAI Logo" 
          className="h-16 w-16 object-contain transform -translate-y-1 transition-transform hover:scale-110 cursor-pointer"
        />
      </Link>

      {/* CENTRE: SEARCH BAR WITH RESULTS */}
      <div className="relative hidden md:block w-1/3" ref={searchRef}>
        <div className="flex items-center bg-white border border-white/20 rounded-full px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-secondary/50">
          <input 
            type="text" 
            placeholder="Search your next destination..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 1 && setShowSearchList(true)}
            className="bg-transparent border-none outline-none w-full text-black font-outfit text-sm placeholder:text-gray-400"
          />
          <button className="text-secondary hover:scale-110 transition-transform">
            <Search size={18} />
          </button>
        </div>

        {/* SEARCH RESULTS DROPDOWN */}
        {showSearchList && searchResults.length > 0 && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
            {searchResults.map((city) => (
              <button
                key={city._id}
                onClick={() => {
                  navigate(`/city/${city.name.toLowerCase()}`);
                  setShowSearchList(false);
                  setSearchQuery("");
                }}
                className="w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-secondary/10 transition-colors border-b border-gray-50 last:border-0"
              >
                <div className="bg-secondary/20 p-2 rounded-full">
                  <MapPin size={16} className="text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">{city.name}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">{city.state}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT: PROFILE DROPDOWN */}
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
             <span className="hidden lg:block text-[10px] font-bold text-white uppercase tracking-widest">
              {/* {userData?.username || "Explorer"} */}
            </span>

            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary hover:bg-white transition-all duration-300 border-2 border-transparent active:scale-95"
              >
                {userData?.profileImage ? (
                   <img src={userData.profileImage} className="w-full h-full object-cover rounded-full" alt="profile" />
                ) : (
                  <User size={22} />
                )}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
                  <div className="p-2 flex flex-col">
                    <Link to="/profile" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/10 rounded-xl">
                      <UserCircle size={18} className="text-secondary" /> Profile
                    </Link>
                    <Link to="/my-trips" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/10 rounded-xl">
                      <Map size={18} className="text-secondary" /> My Trips
                    </Link>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl text-left">
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button onClick={onLoginClick} className="hidden sm:block font-outfit text-xs uppercase tracking-widest font-medium text-white border border-secondary/50 px-5 py-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300">
              Login
            </button>
            <button onClick={onSignupClick} className="font-outfit text-xs uppercase tracking-widest font-semibold bg-secondary text-primary px-6 py-2 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-md">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;