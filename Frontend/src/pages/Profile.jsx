import React, { useState, useEffect } from "react";
import axios from "axios";
import { User, MapPin, Compass, ShieldCheck, Mail } from "lucide-react";
import toast from "react-hot-toast";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/";
          return;
        }

        const res = await axios.get("http://localhost:3000/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(res.data.user);
        toast.success("Profile loaded successfully");
        console.log("Profile data:", userData);
      } catch (err) {
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-primary font-outfit">
        Loading your world...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-outfit">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-32 bg-primary relative">
            {/* Design element: Navy background with a subtle gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-primary to-blue-900 opacity-50"></div>
          </div>

          <div className="px-8 pb-8 flex flex-col items-center -mt-16 relative z-10">
            {/* Profile Image / Avatar */}
            <div className="w-32 h-32 rounded-full border-4 border-white bg-secondary flex items-center justify-center shadow-lg overflow-hidden mb-4">
              {userData?.profile ? (
                <img
                  src={userData.profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={60} className="text-primary opacity-80" />
              )}
            </div>

            <h1 className="text-3xl font-bold text-primary">
              {userData?.username || "Traveler"}
            </h1>
            <p className="text-gray-500 flex items-center gap-2 mt-1">
              <Mail size={16} /> {userData?.email}
            </p>

            <div className="flex gap-3 mt-6">
              <span className="px-4 py-1.5 bg-secondary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-secondary/30 flex items-center gap-2">
                <Compass size={14} /> {userData?.touristType || "Explorer"}
              </span>
              <span className="px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full border border-green-100 flex items-center gap-2">
                <ShieldCheck size={14} /> Verified Member
              </span>
            </div>
          </div>
        </div>

        {/* Stats / Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-50 text-center">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
              Total Trips
            </h3>
            <p className="text-2xl font-bold text-primary">0</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-50 text-center">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
              Planned Days
            </h3>
            <p className="text-2xl font-bold text-primary">0</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-50 text-center">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
              Destinations
            </h3>
            <p className="text-2xl font-bold text-primary">0</p>
          </div>
        </div>

        {/* Placeholder for My Trips */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-primary font-balthazar">
              Your Saved Itineraries
            </h2>
            <button className="text-secondary font-bold text-sm hover:underline">
              View All
            </button>
          </div>

          <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">
              No trips generated yet. Let's start exploring!
            </p>
            <button
              onClick={() => (window.location.href = "/plan")}
              className="mt-4 bg-primary text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg"
            >
              Plan a New Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
