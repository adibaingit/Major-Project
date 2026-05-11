import React from 'react';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  // Inlined Animations
  const animations = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 1s ease-out forwards;
      opacity: 0;
    }
    .animation-delay-200 { animation-delay: 0.2s; }
    .animation-delay-400 { animation-delay: 0.4s; }
  `;

  return (
    <div className="w-full bg-red-200">
      <style>{animations}</style>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image - Positioned to fill screen behind Navbar */}
        <div className="absolute top-15">
          <img 
            src="/collage 1.png" 
            alt="Discover India Collage"
            className="w-full h-full inset-0 z-0" 
          />
        
        </div>

        {/* Center Content */}
        <div className="relative z-10 px-6 max-w-5xl flex flex-col items-center">
          
          {/* Main Title */}
          <h1 className="font-balthazar text-white text-center text-5xl md:text-6xl mb-6 animate-fadeInUp tracking-tight">
            Discover the heart of India<br />
            <span className="text-primary text-center">with the mind of AI</span>
          </h1>

          {/* Subheadline */}
          <p className="font-balthazar text-white/80 text-lg md:text-xl tracking-widest uppercase mb-12 animate-fadeInUp animation-delay-200">
            Bespoke itineraries for the modern explorer
          </p>

          {/* Action Button - Removed hover scale as requested */}
          <button 
          onClick={() => navigate('/plan')}
          className="font-outfit text-sm tracking-[0.2em] uppercase font-bold bg-secondary text-primary px-12 py-5 rounded-full shadow-2xl flex items-center gap-3 animate-fadeInUp animation-delay-400 transition-colors duration-300 active:scale-95">
            <Sparkles size={18} />
            <span>Plan Your Escape</span>
          </button>
        </div>

        {/* Subtle Map Outline */}
        <div className="absolute inset-0 z-0 opacity-5 flex items-center justify-center pointer-events-none">
          <img 
            src="/map-outline.svg" 
            alt=""
            className="w-250 h-auto invert"
          />
        </div>
      </section>

      {/* Feature Section (Matches LitLens layout) */}
      <section className="bg-white py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-balthazar text-primary text-4xl mb-8 tracking-wide">
            Intelligence Meets Exploration
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-outfit text-primary/70 text-lg leading-relaxed font-light">
            We combine real-time local data with advanced logical reasoning to build a cohesive, 
            actionable travel blueprint. Experience a journey designed specifically around your 
            unique interests and budget.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;