import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Import Sub-Components (See Step 2)
import HeaderSection from "../component/HeaderSection";
import ArrivalCard from "../component/ArrivalCard";
import DaySlot from "../component/DaySlot";
import SafetySummary from "../component/SafetySummary";

const ItineraryPage = () => {
  const { tripId } = useParams();
  const [data, setData] = useState(null);
  const [activeDay, setActiveDay] = useState(0);
  const pdfRef = useRef();

  useEffect(() => {
    const getTrip = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:3000/api/trips/${tripId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Assumes backend populated 'destinationCity'
        setData(res.data.trip);
      } catch (err) {
        console.error("Fetch error", err);
      }
    };
    getTrip();
  }, [tripId]);

  const exportPDF = async () => {
    const element = pdfRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`SafarAI_${data.destinationCity.name}.pdf`);
  };

  if (!data) return <div className="p-20 text-center font-balthazar">Loading Journey...</div>;

  return (
    <div className="min-h-screen bg-[#FDFCF8] pt-18 pb-20">
      {/* 1. Header & Export Button */}
      <HeaderSection trip={data} city={data.destinationCity} onExport={exportPDF} />

      <div ref={pdfRef} className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* 2. Arrival Journey (Conditional) */}
        {data.arrivalJourney && <ArrivalCard journey={data.arrivalJourney} city={data.destinationCity} />}

        {/* 3. Day Tabs */}
        <div className="flex gap-2 sticky top-20 bg-[#FDFCF8]/90 py-4 z-10 backdrop-blur-sm">
          {data.itinerary.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-6 py-2 rounded-xl font-bold text-xs transition-all border-2 ${
                activeDay === idx ? "bg-primary text-white border-primary" : "bg-white text-gray-400 border-gray-100"
              }`}
            >
              Day {day.dayNumber} • {day.date}
            </button>
          ))}
        </div>

        {/* 4. Active Day Slot */}
        <DaySlot day={data.itinerary[activeDay]} />

        {/* 5. Safety Summary (From City Model) */}
        <SafetySummary city={data.destinationCity} />
      </div>
    </div>
  );
};

export default ItineraryPage;