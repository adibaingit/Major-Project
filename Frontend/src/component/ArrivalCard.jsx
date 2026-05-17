import { Plane, Train,RouteIcon, MapPin } from "lucide-react";

export default function ArrivalCard({ journey ,city}) {
  return (
    <div className="bg-primary text-white p-6 rounded-2xl shadow-lg space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
           <RouteIcon className="text-secondary" />
          <h3 className="font-bold">Arrival journey</h3>
        </div>
        <span className="bg-white/10 px-3 py-1 rounded-lg text-sm font-bold">₹{journey.estimatedCost} est.</span>
      </div>
      <div className="flex items-center justify-between px-10">
        <div className="text-center"><p className="text-white/40 text-[10px] uppercase font-bold">From</p><p className="font-balthazar text-2xl">{journey.from}</p></div>
        <div className="flex-1 border-t border-dashed border-white/20 mx-6 relative">
          {journey.mode === "flight" ? (
            <Plane size={16} className="absolute left-1/2 -top-2 text-secondary" />
          ) : (
            <Train size={16} className="absolute left-1/2 -top-2 text-secondary" />
          )}
        </div>
        <div className="text-center"><p className="text-white/40 text-[10px] uppercase font-bold">To</p><p className="font-balthazar text-2xl">{journey.to}</p></div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="px-4 py-2 bg-gray-100 text-gray-600 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-tight">
          <MapPin size={16} className="inline mr-2" />
          {journey.mode ==="flight"?city.transport.airport:city.transport.railwayStation}
        </span>
        </div>
    </div>
  );
}