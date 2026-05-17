import React from 'react';
import { 
  Calendar, Users, Wallet, CheckCircle, 
  Download, MapPin, AlertCircle 
} from 'lucide-react';
import { format } from 'date-fns';

const HeaderSection = ({ trip, city, onExport }) => {
  // Logic to handle health alerts display
  const hasHealthAlert = trip.healthConsiderations && trip.healthConsiderations[0] !== "none";

  return (
    <div className="max-w-4xl mx-auto px-6 pt-10 pb-6">
      {/* 1. Location & Title Row */}
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <p className="text-gray-400 text-sm font-medium tracking-tight">
            {city.name}, {city.state}
          </p>
          <h1 className="text-4xl font-balthazar text-primary">
            {trip.title || `Dil se ${city.name}`} — {trip.days} days
          </h1>
        </div>
        
        {/* Export Button */}
        <button 
          onClick={onExport}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-secondary hover:text-primary transition-all shadow-md group"
        >
          <Download size={18} className="group-hover:scale-110 transition-transform" />
          Export PDF
        </button>
      </div>

      {/* 2. Quick Stat Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard 
          icon={<Calendar size={18} />} 
          label="Dates" 
          value={`${format(new Date(trip.startDate), 'dd')}-${format(new Date(trip.endDate), 'dd MMM')}`} 
          sub={format(new Date(trip.startDate), 'yyyy')}
        />
        <StatCard 
          icon={<Users size={18} />} 
          label="Group" 
          value={trip.groupSize} 
          sub="people" 
        />
        <StatCard 
          icon={<Wallet size={18} />} 
          label="Estimated" 
          value={`₹${trip.totalEstimatedCost?.toLocaleString()}`} 
          sub={`Budget ₹${trip.budget?.toLocaleString()}`} 
        />
        <StatCard 
          icon={<CheckCircle size={18} />} 
          label="Status" 
          value={trip.status.charAt(0).toUpperCase() + trip.status.slice(1)} 
          sub="Trip upcoming"
          isStatus
        />
      </div>

      {/* 3. Interest & Health Tags Row */}
      <div className="flex flex-wrap gap-3">
        {/* Interest Tags */}
        {trip.interests.map((interest) => (
          <span 
            key={interest} 
            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-xs font-bold uppercase tracking-tight"
          >
            {/* You can map specific icons here based on interest string */}
            <MapPin size={12} /> {interest}
          </span>
        ))}

        {/* Dietary Tag */}
        <span className="px-4 py-2 bg-gray-100 text-gray-600 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-tight">
          {trip.dietary === 'both' ? 'Veg & Non-Veg' : `${trip.dietary} friendly`}
        </span>

        {/* Health Consideration Tag (Conditional) */}
        {hasHealthAlert && (
          <span className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 border border-orange-200 rounded-full text-xs font-bold animate-pulse">
            <AlertCircle size={14} /> 
            {trip.healthConsiderations[0].replace('-', ' ')} — alerts active
          </span>
        )}
      </div>
    </div>
  );
};

// Internal Helper Component for Cards
const StatCard = ({ icon, label, value, sub, isStatus }) => (
  <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 text-gray-400 mb-2">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </div>
    <div className="space-y-0.5">
      <p className={`text-xl font-bold ${isStatus ? 'text-green-600' : 'text-primary'}`}>
        {value}
      </p>
      <p className="text-[10px] text-gray-400 font-medium uppercase">{sub}</p>
    </div>
  </div>
);

export default HeaderSection;