import React from 'react';
import { Mail, Lock, User, Compass, X } from 'lucide-react';

const Signup = ({ onClose }) => {
  
  const handleGoogleSignup = () => {
    window.location.href = "http://localhost:5000/api/auth/google"; 
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 font-outfit">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Modal Container */}
      <div className="relative w-full max-w-6xl h-[700px] bg-white rounded-3xl shadow-2xl flex overflow-hidden group z-10">
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full text-primary hover:bg-secondary/20 transition-all active:scale-95"
        >
          <X size={24} />
        </button>

        {/* ======================= LEFT SIDE: CINEMATIC IMAGE ======================= */}
        <div className="hidden md:flex md:w-1/2 relative bg-primary">
          <img 
            src="/yamuna.jpg" // You can use a different 'adventure' themed image here
            alt="SafarAI Signup"
            className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 z-20 text-white">
            <h1 className="font-balthazar text-5xl mb-4 leading-tight">
              Begin Your <br /> Bespoke <span className="text-secondary italic">Adventure</span>
            </h1>
            
          </div>
        </div>

        {/* ======================= RIGHT SIDE: THE FORM ======================= */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-16 overflow-y-auto">
          
          <h2 className="text-3xl font-semibold text-primary mb-2">Create Account</h2>
          

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* USERNAME */}
            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block mb-1">Full Name</label>
              <div className="relative flex items-center border border-primary/10 rounded-xl bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-secondary/30 transition-all">
                <User className="absolute left-4 text-primary/40" size={18} />
                <input type="text" placeholder="Adiba Fatma" className="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl text-primary outline-none text-sm" />
              </div>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block mb-1">Email Address</label>
              <div className="relative flex items-center border border-primary/10 rounded-xl bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-secondary/30 transition-all">
                <Mail className="absolute left-4 text-primary/40" size={18} />
                <input type="email" placeholder="hello@safarai.com" className="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl text-primary outline-none text-sm" />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block mb-1">Create Password</label>
              <div className="relative flex items-center border border-primary/10 rounded-xl bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-secondary/30 transition-all">
                <Lock className="absolute left-4 text-primary/40" size={18} />
                <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl text-primary outline-none text-sm" />
              </div>
            </div>

            {/* TOURIST TYPE - Custom Select */}
            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block mb-1">Tourist Profile</label>
              <div className="relative flex items-center border border-primary/10 rounded-xl bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-secondary/30 transition-all">
                <Compass className="absolute left-4 text-primary/40" size={18} />
                <select className="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl text-primary outline-none text-sm appearance-none cursor-pointer">
                  <option value="" disabled selected>Select your style</option>
                  <option value="solo">Solo Explorer</option>
                  <option value="couple">Couple / Duo</option>
                  <option value="family">Family Group</option>
                  <option value="luxury">Luxury Seeker</option>
                  <option value="budget">Budget Backpacker</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-3.5 mt-4 rounded-3xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-black active:scale-95 shadow-lg">
              Create Account
            </button>
          </form>


          {/* GOOGLE SIGNUP */}
          <button 
            onClick={handleGoogleSignup}
            className="w-full flex items-center mt-3 justify-center gap-3 border border-gray-200 py-3 rounded-3xl font-bold text-[10px] uppercase tracking-widest text-primary hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-4 h-4" />
            Continue with Google
          </button>

          <p className="mt-6 text-center text-xs text-gray-400">
            Already a member? <button className="font-bold text-secondary hover:underline">Login here</button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;