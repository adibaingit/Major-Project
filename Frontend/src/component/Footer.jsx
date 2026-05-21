import React from "react";
import { Sparkles, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 font-outfit relative z-10">
      {/* 1. Top Newsletter Banner Block - Theme Teal Accent */}
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <div className="w-full bg-linear-to-r from-teal-600 to-teal-800 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <h3 className="font-balthazar text-white text-2xl md:text-3xl tracking-wide">
              Join the future of exploration
            </h3>
          </div>

          <div className="w-full max-w-md flex items-center bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
            <Mail className="text-teal-200 ml-3 shrink-0" size={18} />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent pl-3 pr-2 py-2 text-white text-sm placeholder-teal-200/60 focus:outline-none"
            />
            <button className="bg-white text-teal-900 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-teal-50 transition-colors shrink-0">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Links Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-100">
        {/* Column 1: Brand Pitch */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="text-teal-600" size={20} />
            <span className="font-balthazar text-2xl tracking-wider font-bold">
              Safar<span className="text-teal-600">AI</span>
            </span>
          </div>
          <p className="text-primary/60 text-sm leading-relaxed font-light">
            helps you discover the true heart of India by creating
            smart, custom travel plans tailored just for you. We combine trusted
            local information to build smooth, stress-free journeys that
            perfectly match your personal interests and budget.
          </p>
        </div>

        {/* Column 2: Core Platform Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/40">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm font-medium text-primary/70">
            <li>
              <Link to="/" className="hover:text-teal-600 transition-colors">
                Home Base
              </Link>
            </li>
            <li>
              <Link
                to="/plan"
                className="hover:text-teal-600 transition-colors"
              >
                AI Itinerary Planner
              </Link>
            </li>
            <li>
              <Link
                to="/cities"
                className="hover:text-teal-600 transition-colors"
              >
                Discover Cities
              </Link>
            </li>
            <li>
              <Link
                to="/my-trips"
                className="hover:text-teal-600 transition-colors"
              >
                My Escapes
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: destinatios */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/40">
            Travel Destination
          </h4>
          <ul className="space-y-2.5 text-sm font-medium text-primary/70">
            <li>
              <Link
                to="/city/delhi"
                className="hover:text-teal-600 transition-colors"
              >
                Delhi
              </Link>
            </li>
            <li>
              <Link
                to="/city/kolkata"
                className="hover:text-teal-600 transition-colors"
              >
                Kolkata
              </Link>
            </li>
            <li>
              <Link
                to="/city/mumbai"
                className="hover:text-teal-600 transition-colors"
              >
                Mumbai
              </Link>
            </li>
            <li>
              <Link
                to="/city/bangalore"
                className="hover:text-teal-600 transition-colors"
              >
                Bangalore
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Project Info Contact */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/40">
            Contact Support
          </h4>
          <ul className="space-y-3 text-sm font-light text-primary/70">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-teal-600" />
              <span>+91 11 2698 1717</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-teal-600" />
              <span>support@safarai.tech</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Bottom Legal Sub-Footer */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-primary/40">
        <p>© {currentYear} SafarAI. Engineered with ❤️ in Jamia.</p>
        <div className="flex items-center gap-2 border border-gray-100 px-3 py-1.5 rounded-xl bg-gray-50/50">
          <Globe size={12} className="text-teal-600" />
          <span>English (IN)</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
