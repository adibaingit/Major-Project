import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MapPin, ArrowRight } from "lucide-react";

const MyTrips = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/trips/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        if (res.data.success) {
          setTrips(res.data.trips);
        }
      } catch (err) {
        console.error("Error loading user journeys:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserTrips();
  }, []);

  // Limit display array based on 'View All' state filter criteria
  const displayedTrips = showAll ? trips : trips.slice(0, 4);

  if (loading) {
    return <div className="p-20 text-center font-balthazar text-lg">Loading your collection...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto pt-20 px-6 py-12 font-outfit">
      
      {/* 1. Conditional Empty State vs. Populated Grid Grid Container */}
      {trips.length === 0 ? (
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-primary font-balthazar">
              Your Saved Plans
            </h2>
          </div>

          <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">
              No trips generated yet. Let's start exploring!
            </p>
            <button
              onClick={() => navigate("/plan")}
              className="mt-4 bg-primary text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg"
            >
              Plan a New Trip
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Header Row Container */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="text-3xl font-semibold text-primary font-balthazar tracking-wide">
              My Trips
            </h2>
            {trips.length > 4 && (
              <button 
                onClick={() => setShowAll(!showAll)}
                className="text-secondary font-bold text-sm hover:underline transition-all flex items-center gap-1"
              >
                {showAll ? "Show Less" : "View All"}
                <ArrowRight size={14} className={`transform transition-transform ${showAll ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>

          {/* Response Responsive Grid Layout Wrapper matching reference styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedTrips.map((trip) => (
              <div 
                key={trip._id}
                onClick={() => navigate(`/itinerary/${trip._id}`)}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                {/* Hero Card Image Display Slot */}
                <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                  <img 
                    src={trip.destinationCity?.heroImage || "https://images.unsplash.com/photo-1488646953014-85cb44e25828"} 
                    alt={trip.destinationCity?.name || "Destination Image"} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Meta Properties Content Container Block */}
                <div className="p-5 space-y-2">
                  <h3 className="font-balthazar text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {trip.destinationCity?.name || "Unknown City"}, {trip.destinationCity?.state || "India"}
                  </h3>
                  
                  <p className="text-xs text-gray-500 font-medium capitalize flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {trip.days} Days trip with {trip.budget === "avg" ? "Moderate" : trip.budget} Budget
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default MyTrips;