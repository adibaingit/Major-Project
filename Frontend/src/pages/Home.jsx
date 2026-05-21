import React from 'react';
import { Sparkles, Heart, Banknote, ShieldCheck } from 'lucide-react';
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
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden shadow-lg">
        
        {/* Background Image - Positioned to fill screen behind Navbar */}
        <div className="absolute top-15">
          <img 
            src="/collage 1.png" 
            alt="Discover India Collage"
            className="w-full h-full inset-0 z-0" 
          />
        
        </div>

        {/* Center Content */}
        <div className="relative z-10 px-6 max-w-5xl flex flex-col items-center justify-center">
          
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
      {/* Header Context */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-balthazar text-primary text-4xl mb-6 tracking-wide">
          Because Great Journeys Should Feel Easy
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
        <p className="font-outfit text-primary/40 text-sm tracking-widest uppercase font-semibold">
          No Chaos. No Guesswork. Just Good Journeys.
        </p>
      </div>

      {/* Feature Cards Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch px-4">
        
        {/* Card 1: Dream It, Tell Us. */}
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-transparent border border-transparent transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6 text-amber-500 shrink-0">
            <Sparkles size={24} className="fill-current" />
          </div>
          <h3 className="font-balthazar text-primary text-xl font-bold mb-4">
            Dream It, Tell Us.
          </h3>
          <p className="font-outfit text-primary/70 text-sm leading-relaxed font-light">
            Tell us your vibe — romantic, offbeat, solo, or group. SafarAI turns it into a real plan instantly.
          </p>
        </div>

        {/* Card 2: Smart + Soulful Itineraries (The Highlighted/Lifted Card) */}
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/50 transition-all duration-300 transform -translate-y-2">
          <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-6 text-rose-500 shrink-0">
            <Heart size={24} />
          </div>
          <h3 className="font-balthazar text-primary text-xl font-bold mb-4">
            Smart + Soulful Itineraries.
          </h3>
          <p className="font-outfit text-primary/70 text-sm leading-relaxed font-light">
            Built by AI + local experts, you get a plan that's logical, realistic, and love-filled.
          </p>
        </div>

        {/* Card 3: Transparent Pricing, Always. */}
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-transparent border border-transparent transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6 text-emerald-500 shrink-0">
            <Banknote size={24} />
          </div>
          <h3 className="font-balthazar text-primary text-xl font-bold mb-4">
            Transparent Pricing, Always.
          </h3>
          <p className="font-outfit text-primary/70 text-sm leading-relaxed font-light">
            No hidden charges, commissions, or shady operators. You pay for exactly what you choose.
          </p>
        </div>

        {/* Card 4: SafarAI All-Cover Shield */}
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-transparent border border-transparent transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-6 text-purple-600 shrink-0">
            <ShieldCheck size={24} />
          </div>
          <h3 className="font-balthazar text-primary text-xl font-bold mb-4">
            SafarAI All-Cover Shield.
          </h3>
          <p className="font-outfit text-primary/70 text-sm leading-relaxed font-light">
            Travel safely with reliable help networks, verified local on-ground contacts, and safety advice.
          </p>
        </div>

      </div>
    </section>
      {/* Bottom Showcase Image Section */}
      <section className="w-full bg-white pb-24 px-18 md:px-12 relative z-10">
        <h2 className="font-balthazar text-primary text-4xl mb-8 tracking-wide">
          Your Journey, Our Expertise
        </h2>
        <div className="max-w-6xl mx-24 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <img 
            src="/trip.png" 
            alt="SafarAI Exploration Showcase" 
            className="w-full h-auto object-cover max-h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;