import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plane, Train, Bus, Info, Phone, Calendar, AlertTriangle, ChevronRight,Sparkles } from 'lucide-react';
import axios from 'axios';
import AttractionCard from '../component/AttractionCard';

const CityDetails = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/city/${cityName}`);
        setCity(res.data.city);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching city", err);
      }
    };
    fetchCityData();
  }, [cityName]);

  if (loading) return <div className="h-screen flex items-center justify-center font-balthazar text-3xl">Loading {cityName}...</div>;

  return (
    <div className="pt-18 bg-[#FDFCF8] min-h-screen font-outfit">
      
      {/* ================= HERO SECTION (Ref: image_90383b.jpg) ================= */}
      <section className="relative h-[95vh] w-full overflow-hidden">
        <img 
          src={city.heroImage || "/default-hero.jpg"} 
          className="w-full h-full object-cover brightness-90"
          alt={city.name}
        />
        <div className="absolute inset-0 linear-to-b from-black/40 via-transparent to-primary/60"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-white px-4 pt-12">
          <h1 className="font-balthazar text-4xl md:text-6xl drop-shadow-2xl mb-4">
            Your <span className="italic text-primary">{city.name}</span> Trip, <br /> Designed Around You
          </h1>
          <p className="max-w-2xl text-lg md:text-xl font-light opacity-90 mb-8 tracking-wide">
            {city.tagline || "No generic plans. Just AI + Experts crafting journeys around your vibe."}
          </p>
          <button 
            onClick={() => navigate('/plan', { state: { destination: city.name } })}
            className="flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl"
          >
            <Sparkles size={18} /> Create My Trip
          </button>
        </div>
      </section>

      {/* ================= ABOUT SECTION (Ref: image_9028f6.png) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT: Description & Famous For */}
        <div className="lg:col-span-2">
          <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">About the City</span>
          <h2 className="text-5xl font-balthazar text-primary mb-8 leading-tight">
             {city.name}: Where History <br/> Meets the Future
          </h2>
          <div className="space-y-6 text-primary/80 leading-relaxed text-lg">
             {city.description}
          </div>

          <div className="mt-12">
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4">Famous For</h4>
             <div className="flex flex-wrap gap-3">
                {city.famousFor.map(item => (
                  <span key={item} className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-xl text-primary font-medium text-sm">
                    {item}
                  </span>
                ))}
             </div>
          </div>
        </div>

        {/* RIGHT: Utility Sidebar Cards */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-secondary text-xs font-bold uppercase tracking-widest mb-6">Best Time to Visit</h4>
            <div className="space-y-4">
               <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Ideal Months</p>
                  <div className="flex flex-wrap gap-2">
                    {city.bestMonths.map(m => <span key={m} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-md border border-green-100">{m}</span>)}
                  </div>
               </div>
               <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Avoid if possible</p>
                  <div className="flex flex-wrap gap-2">
                    {city.avoidMonths.map(m => <span key={m} className="px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-md border border-red-100">{m}</span>)}
                  </div>
               </div>
            </div>
          </div>

          {/* Getting Around */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-secondary text-xs font-bold uppercase tracking-widest mb-6">Getting Around</h4>
            <div className="space-y-4">
               <div className="flex items-center gap-4 py-2 border-b border-gray-50">
                  <Plane size={20} className="text-secondary" />
                  <div><p className="text-xs font-bold text-primary">Airport</p><p className="text-[11px] text-gray-500">{city.transport.airport}</p></div>
               </div>
               <div className="flex items-center gap-4 py-2 border-b border-gray-50">
                  <Train size={20} className="text-secondary" />
                  <div><p className="text-xs font-bold text-primary">Railway</p><p className="text-[11px] text-gray-500">{city.transport.railwayStation}</p></div>
               </div>
               <div className="flex items-center gap-4 py-2">
                  <Bus size={20} className="text-secondary" />
                  <div><p className="text-xs font-bold text-primary">Local</p><p className="text-[11px] text-gray-500">{city.transport.localTransport}</p></div>
               </div>
            </div>
          </div>

          {/* Emergency Numbers */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-secondary text-xs font-bold uppercase tracking-widest mb-6">Emergency Details</h4>
            <div className="space-y-3">
               <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-400">Police</span>
                  <span className="text-primary">{city.emergencyNumbers.police}</span>
               </div>
               <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-400">Ambulance</span>
                  <span className="text-primary">{city.emergencyNumbers.ambulance}</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACES TO VISIT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">Places to Visit</span>
            <h2 className="text-5xl font-balthazar text-primary">Top Attractions</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {city.placesToVisit.map((place, index) => (
             <AttractionCard key={index} place={place} />
           ))}
        </div>
      </section>
    </div>
  );
};

export default CityDetails;