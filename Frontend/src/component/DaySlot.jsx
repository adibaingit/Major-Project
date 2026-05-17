import { Clock, Star, MapPin, Utensils, Hotel } from "lucide-react";

export default function DaySlot({ day }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
      <div className="flex justify-between items-end mb-10 border-b border-gray-50 pb-4">
        <h2 className="text-3xl font-balthazar text-primary">{day.title}</h2>
        <span className="text-gray-400 font-bold">
          Est. ₹{day.dailyCostEstimate}
        </span>
      </div>

      
      {day.slots.map((slot, i) => (
        <div className="mt-10 flex-col gap-6">
        <div key={i} className="flex gap-6 last:mb-0 group">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
              {slot.time}
            </span>
            <div className="w-px h-full bg-gray-100 mt-2"></div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={slot.image}
                className="w-full md:w-48 h-40 object-cover rounded-2xl"
                alt={slot.placeName}
              />
              <div className="flex-1 space-y-3">
                <div className="flex justify-between">
                  <h4 className="font-bold text-xl">{slot.placeName}</h4>
                  <span className="flex items-center gap-1 text-secondary font-bold text-sm">
                    <Star size={14} fill="currentColor" />
                    {slot.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-500 italic">
                  {slot.culturalNote}
                </p>
                <div className="flex flex-wrap gap-2">
                  {slot.warnings.map((w, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-50 text-orange-700 text-[10px] px-3 py-1 rounded-full border border-orange-100"
                    >
                      ⚠️ {w}
                    </span>
                  ))}
                </div>
                {/* Food Nearby */}
                <div className="mt-4 space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    Food Nearby
                  </p>
                  {slot.foodNearby.map((food, fidx) => (
                    <div
                      key={fidx}
                      className="bg-gray-50 p-3 rounded-xl flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        <Utensils size={14} className="text-gray-400" />{" "}
                        <span className="text-sm font-bold">{food.name}</span>
                      </div>
                      <span className="text-xs text-secondary font-bold">
                        {food.priceRange}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-50">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-4">
              Now move to..
            </p>
            <div className="bg-primary/5 p-5 rounded-2xl flex justify-between items-center border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-xl text-white">
                  <Hotel size={20} />
                </div>
                <div>
                  <p className="font-bold text-primary">{slot.transport.mode}</p>
                  <p className="text-xs text-gray-400">
                    {slot.transport.detail}
                  </p>
                </div>
              </div>
              <p className="font-bold text-primary">
                {slot.transport.estimatedCost}
              </p>
            </div>
          </div>
        </div>
     
      ))}
      

      {/* Hotel Section at bottom of day */}
      <div className="mt-10 pt-10 border-t border-gray-50">
        <p className="text-[10px] font-bold text-gray-400 uppercase mb-4">
          Tonight's Stay
        </p>
        <div className="bg-primary/5 p-5 rounded-2xl flex justify-between items-center border border-primary/10">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-xl text-white">
              <Hotel size={20} />
            </div>
            <div>
              <p className="font-bold text-primary">
                {day.hotelSuggestion.name}
              </p>
              <p className="text-xs text-gray-400">
                {day.hotelSuggestion.address}
              </p>
            </div>
          </div>
          <p className="font-bold text-primary">
            {day.hotelSuggestion.priceRange}
          </p>
        </div>
      </div>
    </div>
  );
}
