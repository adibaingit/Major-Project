import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Calendar as CalendarIcon,
  ChevronRight,
  ChevronDown,
  Mountain,
  Landmark,
  Home,
  Theater,
  GlassWater,
  Gem,
  Telescope,
  Soup,
  X,
  ArrowRight,
  User,
  Heart,
  Users as UsersIcon,
  Home as FamilyIcon,
  Briefcase,
  Coffee,
  Crown,
  MapPin,
} from "lucide-react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import toast from "react-hot-toast";

const PreferencesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    startCity: "",
    destinationCityId: "",
    dateRange: [
      { startDate: new Date(), endDate: new Date(), key: "selection" },
    ],
    budget: "avg",
    groupType: "Solo",
    groupSize: 1,
    interests: [],
    dietary: "Veg",
    healthConsiderations: "none",
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [activeSearch, setActiveSearch] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [startSearch, setStartSearch] = useState("");
  const [destSearch, setDestSearch] = useState(location.state?.destName || "");
  const [showSearchList, setShowSearchList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const availableInterests = [
    { id: "Adventure", icon: <Mountain size={14} /> },
    { id: "Historical", icon: <Landmark size={14} /> },
    { id: "Village", icon: <Home size={14} /> },
    { id: "Culture", icon: <Theater size={14} /> },
    { id: "NightLife & Clubs", icon: <GlassWater size={14} /> },
    { id: "Hidden Gems", icon: <Gem size={14} /> },
    { id: "Stargazing", icon: <Telescope size={14} /> },
    { id: "Food & Craft", icon: <Soup size={14} /> },
  ];

  useEffect(() => {
    const query = activeSearch === "start" ? startSearch : destSearch;
    if (query.length < 2) return setSearchResults([]);
    const timer = setTimeout(async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/city?q=${query}`,
        );
        setSearchResults(res.data);
        setShowSearchList(true);
      } catch (err) {
        console.error(err);
        setSearchResults([]);
        setShowSearchList(false);
      }
    }, 700);
    return () => clearTimeout(timer);
  }, [startSearch, destSearch, activeSearch]);

  const toggleInterest = (id) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  };

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh
    if (isLoading) return; // Prevent multiple clicks

    setIsLoading(true); // Start loading

    // 1. Calculate trip duration in days
    const start = formData.dateRange[0].startDate;
    const end = formData.dateRange[0].endDate;

    // 2. Prepare the Payload
    const payload = {
      startCity: formData.startCity,
      destinationCityId: formData.destinationCityId, // This is the MongoDB _id
      startDate: start,
      endDate: end,
      budget: formData.budget,
      groupType: formData.groupType,
      groupSize:
        formData.groupType === "Solo" || formData.groupType === "Couple"
          ? formData.groupType === "Solo"
            ? 1
            : 2
          : parseInt(formData.groupSize),
      interests: formData.interests,
      dietary: formData.dietary,
      healthConsiderations: formData.healthConsiderations,
    };

    try {
      const token = localStorage.getItem("token");
      // 3. Call your Backend API
      const response = await axios.post(
        "http://localhost:3000/api/trips/generate",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Manually attaching the token
          },
        },
      );

      if (response.data.success) {
        // Redirect to the newly created itinerary page
        navigate(`/itinerary/${response.data.tripId}`);
      }
    } catch (error) {
      console.error("Error generating trip:", error);
      toast.error(
        error.response?.data?.message ||
          "An error occurred while generating your trip. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] pt-24 pb-16 px-6 font-outfit text-primary">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* RE-ADDED HEADER */}
        <div className="mb-10">
          <h1 className="font-balthazar text-4xl md:text-5xl text-primary mb-2">
            Customize Your Journey
          </h1>
          <p className="text-gray-500 text-lg">
            Tell SafarAI what you love, and we'll handle the rest.
          </p>
        </div>

        {/* 01. DEPARTURE & DESTINATION */}
        <section className="space-y-3">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
            Departure & Destination
          </h3>
          {/* REMOVED overflow-hidden from here so dropdowns can be seen */}
          <div className="flex items-center w-full rounded-xl shadow-sm border border-gray-100 h-14 relative bg-primary">
            {/* START CITY */}
            <div className="relative flex-1 h-full">
              <input
                type="text"
                placeholder="From — city"
                value={startSearch}
                onFocus={() => setActiveSearch("start")}
                onChange={(e) => setStartSearch(e.target.value)}
                className="w-full h-full bg-transparent px-6 text-white placeholder:text-white outline-none font-balthazar text-lg"
              />
              {activeSearch === "start" && searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl z-[60] rounded-b-xl border border-gray-100 overflow-hidden mt-1">
                  {searchResults.map((city) => (
                    <button
                      key={city._id}
                      onClick={() => {
                        setFormData({ ...formData, startCity: city.name });
                        setStartSearch(city.name);
                        setSearchResults([]);
                        setActiveSearch(null); // Close dropdown
                        setShowSearchList(false);
                      }}
                      className="w-full p-4 text-left hover:bg-secondary/10 text-[11px] font-bold text-primary uppercase transition-colors border-b border-gray-50 last:border-0"
                    >
                      {/* THE ICON CONTAINER - Fixed size, not vertical stretch */}
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-secondary" />
                      </div>

                      {/* THE TEXT CONTAINER */}
                      <div className="flex flex-col text-left px-0.5">
                        <span className="text-sm font-bold lowercasetext-primary tracking-tight ">
                          {city.name}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium uppercase mt-1">
                          {city.state}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* SEPARATOR ARROW */}
            <div className="px-3 flex items-center justify-center border-x bg-white border-white/10 h-full">
              <ArrowRight className="text-secondary" size={18} />
            </div>

            {/* DESTINATION CITY */}
            <div className="relative flex-1 h-full">
              <input
                type="text"
                placeholder="To — destination"
                value={destSearch}
                onFocus={() => setActiveSearch("dest")}
                onChange={(e) => setDestSearch(e.target.value)}
                className="w-full h-full bg-transparent px-6 text-white placeholder:text-white outline-none font-balthazar text-lg"
              />
              {activeSearch === "dest" && searchResults.length > 0 && (
                <div className="absolute top-full w-full bg-white shadow-2xl z-[60] rounded2xl border border-gray-100 overflow-hidden mt-2">
                  {searchResults.map((city) => (
                    <button
                      key={city._id}
                      onClick={() => {
                        setFormData({
                          ...formData,
                          destinationCityId: city._id,
                        });
                        setDestSearch(city.name);
                        setSearchResults([]);
                        setActiveSearch(null); // Close dropdown
                        setShowSearchList(false);
                      }}
                      className="w-full p-4 text-left hover:bg-secondary/10 text-[11px] font-bold text-primary uppercase transition-colors border-b border-gray-50 last:border-0"
                    >
                      {/* THE ICON CONTAINER - Fixed size, not vertical stretch */}
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-secondary" />
                      </div>

                      {/* THE TEXT CONTAINER */}
                      <div className="flex flex-col text-left px-0.5">
                        <span className="text-sm font-bold lowercasetext-primary tracking-tight ">
                          {city.name}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium uppercase mt-1">
                          {city.state}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 02. TRAVEL DATES */}
        <section className="space-y-3">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
            Travel Dates
          </h3>
          <button
            onClick={() => setShowCalendar(true)}
            className="w-full bg-white border border-gray-100 rounded-xl px-6 h-14 flex items-center justify-between shadow-sm hover:border-secondary/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <CalendarIcon size={18} className="text-secondary" />
              <span className="text-primary font-medium text-sm">
                {format(formData.dateRange[0].startDate, "yyyy MM dd")} —{" "}
                {format(formData.dateRange[0].endDate, "yyyy MM dd")}
              </span>
            </div>
            <ChevronRight size={16} className="rotate-90 text-gray-300" />
          </button>
        </section>

        {/* 03. BUDGET (Compact Row) */}
        <section className="space-y-3">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
            Budget
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                id: "low",
                label: "Low",
                desc: "Budget-friendly",
                icon: <Briefcase size={20} />,
              },
              {
                id: "avg",
                label: "Average",
                desc: "Comfortable",
                icon: <Coffee size={20} />,
              },
              {
                id: "luxury",
                label: "Luxury",
                desc: "Premium",
                icon: <Crown size={20} />,
              },
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setFormData({ ...formData, budget: b.id })}
                className={`flex flex-col items-center justify-center py-4 rounded-xl border transition-all ${formData.budget === b.id ? "border-secondary bg-secondary/5" : "border-gray-50 bg-white shadow-sm"}`}
              >
                <p className="text-sm font-balthazar">{b.label}</p>
                <p className="text-[9px] text-gray-400 font-medium uppercase tracking-tighter">
                  {b.desc}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* 04. GROUP SIZE & CONDITIONAL INPUT */}
        <section className="space-y-4">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
            Group Type
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { id: "Solo", icon: <User size={20} /> },
              { id: "Couple", icon: <Heart size={20} /> },
              { id: "Family", icon: <FamilyIcon size={20} /> },
              { id: "Friends", icon: <UsersIcon size={20} /> },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setFormData({ ...formData, groupType: type.id })}
                className={`flex flex-col items-center justify-center py-4 rounded-xl border transition-all ${formData.groupType === type.id ? "border-secondary bg-secondary/5" : "border-gray-50 bg-white shadow-sm"}`}
              >
                <div className="text-gray-300 mb-1">{type.icon}</div>
                <p className="text-sm font-balthazar">{type.id}</p>
              </button>
            ))}
          </div>

          {/* RE-ADDED NO. OF PEOPLE LOGIC */}
          {(formData.groupType === "Family" ||
            formData.groupType === "Friends") && (
            <div className="flex items-center gap-4 animate-in slide-in-from-top-2 duration-300">
              <label className="text-[12px] font-bold text-primary uppercase">
                Number of People:
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={formData.groupSize}
                onChange={(e) =>
                  setFormData({ ...formData, groupSize: e.target.value })
                }
                className="w-16 bg-white border border-gray-100 rounded-lg px-2 py-1 text-center font-bold text-sm outline-none focus:border-secondary shadow-sm"
              />
            </div>
          )}
        </section>

        {/* 05. DIETARY */}
        <section className="space-y-3">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
            Dietary Preference
          </h3>
          <div className="relative bg-primary rounded-xl overflow-hidden h-14">
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/90" />
            <select
              className="w-full h-full bg-transparent px-8 text-white/90 outline-none font-balthazar text-lg appearance-none cursor-pointer"
              onChange={(e) =>
                setFormData({ ...formData, dietary: e.target.value })
              }
            >
              <option className="text-[#2D2D2A]" value="veg">
                Vegetarian
              </option>
              <option className="text-[#2D2D2A]" value="non-veg">
                Non-Vegetarian
              </option>
              <option className="text-[#2D2D2A]" value="both">
                Both
              </option>
            </select>
          </div>
        </section>

        {/* 06. EXPERIENCE TYPE (Compact Chips) */}
        <section className="space-y-3">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
            Experiences
          </h3>
          <div className="flex flex-wrap gap-2">
            {availableInterests.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleInterest(item.id)}
                className={`flex items-center gap-4 px-10 py-3 rounded-full border transition-all text-[12px] font-bold uppercase shadow-sm tracking-tight ${
                  formData.interests.includes(item.id)
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-400 border-gray-100"
                }`}
              >
                {item.icon} {item.id}
              </button>
            ))}
          </div>
        </section>

        {/* 07. HEALTH CONSIDERATIONS (New Section) */}
        <section className="space-y-3">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
            Health Considerations
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { id: "skin-sensitive", label: "Skin" },
              { id: "respiratory", label: "Breath" },
              { id: "mobility-limited", label: "Mobility" },
              { id: "heart-condition", label: "Heart" },
              { id: "diabetic", label: "Diabetic" },
              { id: "none", label: "None" },
            ].map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setFormData({ ...formData, healthConsiderations: h.id })}
                className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all ${
                  formData.healthConsiderations === h.id
                    ? "border-secondary bg-secondary/5"
                    : "border-gray-50 bg-white shadow-sm"
                }`}
              >
                <p className="text-[13px] font-balthazar leading-tight text-center">
                  {h.label}
                </p>
                <p className="text-[8px] text-gray-400 font-medium uppercase tracking-tighter mt-0.5">
                  {h.id === "none" ? "All Clear" : "Concern"}
                </p>
              </button>
            ))}
          </div>
        </section>

        <div className="flex justify-end pt-4">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`bg-secondary text-primary py-4 px-10 rounded-xl font-bold uppercase tracking-[0.2em] text-[12px] shadow-xl transition-all border-2 border-transparent flex items-center gap-2 ${
              isLoading
                ? "opacity-80 cursor-not-allowed"
                : "hover:scale-[1.01] hover:bg-white hover:border-secondary active:scale-95"
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                Creating Plan...
              </>
            ) : (
              <>
                Generate My Plan
                <ChevronRight size={14} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* CALENDAR MODAL */}
      {showCalendar && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-primary/20 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 shadow-2xl relative">
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-primary"
            >
              <X size={20} />
            </button>
            <DateRange
              onChange={(item) =>
                setFormData({ ...formData, dateRange: [item.selection] })
              }
              ranges={formData.dateRange}
              months={2}
              direction="horizontal"
              rangeColors={["#B58D3D"]}
              minDate={new Date()}
            />
            <button
              onClick={() => setShowCalendar(false)}
              className="w-full mt-4 bg-primary text-white py-3 rounded-lg font-bold uppercase tracking-widest text-[10px]"
            >
              Apply Dates
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreferencesPage;
