import React from 'react';
import { Search, User } from 'lucide-react';

const Navbar = ({onLoginClick, onSignupClick}) => {
  const isLoggedIn = !!localStorage.getItem('token');

  //handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Refresh to show Login button again
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary shadow-lg px-6 py-3 flex items-center justify-between border-b border-secondary/10">
      
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2">
        <img 
          src="/logo1.png" 
          alt="SafarAI Logo" 
          className="h-16 w-16 object-contain absolute transform -translate-y-1 transition-transform hover:scale-110"/>
        
        {/* Added a text logo in Balthazar to match your LitLens style */}
        {/* <span className="hidden sm:block font-balthazar text-white text-1xl tracking-wide pl-20">
          SafarAI
        </span> */}
      </div>

      {/* CENTRE: SEARCH BAR (Minimalist) */}
      <div className="hidden md:flex items-center bg-white backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-1/3 transition-all focus-within:bg-white/20">
        <input 
          type="text" 
          placeholder="Search your next destination..." 
          className="bg-transparent border-none outline-none w-full text-black font-outfit text-sm placeholder:text-black"
        />
        <button className="text-secondary hover:scale-110 transition-transform">
          <Search size={18} />
        </button>
      </div>

      {/* RIGHT: LOGIN / SIGNUP */}
      <div className="flex items-center gap-3">
       {isLoggedIn ? (
          // Show this if logged in
          <button 
            onClick={handleLogout}
            className="font-outfit text-xs uppercase tracking-widest font-medium text-white border border-red-500/50 px-5 py-2 rounded-full hover:bg-red-500 transition-all"
          >
            Logout
          </button>
        ) : (
          
          <>
        <button
        onClick={onLoginClick}
        className="hidden sm:block font-outfit text-xs uppercase tracking-widest font-medium text-white border border-secondary/50 px-5 py-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300">
          Login
        </button>

        {/* Sign Up Button (Solid Gold) */}
        <button 
        onClick={onSignupClick}
        className="font-outfit text-xs uppercase tracking-widest font-semibold bg-secondary text-primary px-6 py-2 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-md">
          Sign Up
        </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;