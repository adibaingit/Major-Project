import React, { useState } from 'react';
import { Calendar, MapPin, Users, Wallet, Utensils, Sparkles, ChevronRight, Mountain, Landmark, Home, Theater, GlassWater, Gem, Telescope, Soup } from 'lucide-react';

const PreferencesPage = () => {
  const [formData, setFormData] = useState({
    startCity: '',
    destinationCity: '',
    startDate: '',
    endDate: '',
    budget: '',
    groupSize: '1',
    interests: [],
    dietary: 'veg'
  });

  const availableInterests = [
    { id: 'Adventure', icon: <Mountain size={16} /> },
    { id: 'Historical Landmarks', icon: <Landmark size={16} /> },
    { id: 'Village Life', icon: <Home size={16} /> },
    { id: 'Culture', icon: <Theater size={16} /> },
    { id: 'NightLife & Clubs', icon: <GlassWater size={16} /> },
    { id: 'Hidden Gems', icon: <Gem size={16} /> },
    { id: 'Stargazing', icon: <Telescope size={16} /> },
    { id: 'Food & Craft', icon: <Soup size={16} /> },
  ];

  const toggleInterest = (id) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id) 
        ? prev.interests.filter(i => i !== id) 
        : [...prev.interests, id]
    }));
  };

  return (
    <div className="min-h-screen bg-bgWhite pt-24 pb-12 px-6 font-outfit">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-balthazar text-4xl md:text-5xl text-primary mb-2">Customize Your Journey</h1>
          <p className="text-gray-500 text-lg">Tell SafarAI what you love, and we'll handle the rest.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Form Section */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* 1. Destination & Dates */}
            <section className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">01. Logistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <label className="text-[10px] font-bold text-primary/40 uppercase mb-2 block">Route</label>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    <input type="text" placeholder="From Jaipur" className="w-full bg-transparent outline-none text-sm" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <label className="text-[10px] font-bold text-primary/40 uppercase mb-2 block">To</label>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    <input type="text" placeholder="To Delhi" className="w-full bg-transparent outline-none text-sm" />
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Interests (The Grid from your image) */}
            <section className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">02. Experiences</h3>
              <p className="text-sm text-gray-600">What kind of vibes are you looking for?</p>
              <div className="flex flex-wrap gap-3">
                {availableInterests.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleInterest(item.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 text-sm ${
                      formData.interests.includes(item.id)
                        ? 'bg-primary text-white border-primary shadow-lg scale-105'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-secondary'
                    }`}
                  >
                    {item.icon}
                    {item.id}
                  </button>
                ))}
              </div>
            </section>

            {/* 3. Budget & Diet */}
            <section className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">03. Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <label className="text-[10px] font-bold text-primary/40 uppercase mb-2 block">Max Budget (INR)</label>
                  <input type="number" placeholder="e.g. 25000" className="w-full bg-transparent outline-none text-sm font-medium" />
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <label className="text-[10px] font-bold text-primary/40 uppercase mb-2 block">Dietary Choice</label>
                  <select className="w-full bg-transparent outline-none text-sm font-medium">
                    <option>Vegetarian</option>
                    <option>Non-Vegetarian</option>
                  </select>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-primary p-8 rounded-3xl text-white sticky top-32 shadow-2xl border border-secondary/20">
              <Sparkles className="text-secondary mb-4" size={32} />
              <h4 className="font-balthazar text-2xl mb-4">SafarAI Summary</h4>
              <ul className="text-sm text-white/60 space-y-4 mb-8">
                <li className="flex justify-between"><span>Route:</span> <span className="text-white">Jaipur → Delhi</span></li>
                <li className="flex justify-between"><span>Interests:</span> <span className="text-white">{formData.interests.length} selected</span></li>
                <li className="flex justify-between"><span>Budget:</span> <span className="text-white">Analyzing...</span></li>
              </ul>
              
              <button className="w-full bg-secondary text-primary py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg active:scale-95">
                Generate My Plan
                <ChevronRight size={16} />
              </button>
              <p className="mt-4 text-[10px] text-center text-white/40 uppercase tracking-tighter">
                Processing with Gemini 1.5 Flash
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;