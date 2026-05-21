import React from 'react';
import { Clock, Ticket } from 'lucide-react';

const AttractionCard = ({ place }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      {/* IMAGE CONTAINER */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={place.image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828"} 
          alt={place.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category Tag (Top) */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
            {place.category}
          </span>
        </div>
        
        {/* Title & Desc Overlay (Bottom) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-balthazar mb-1">{place.title}</h3>
          <p className="text-white/80 text-xs line-clamp-2 leading-relaxed">
            {place.description}
          </p>
        </div>
      </div>

      {/* INFO SECTION (Ref: image_8fc740.png) */}
      <div className="p-5 flex items-center justify-between border-t border-gray-50 bg-white">
        <div className="flex items-center gap-2 text-primary/70">
          <Clock size={16} className="text-secondary" />
          <span className="text-xs font-medium">{place.timings || "9am - 6pm"}</span>
        </div>
        <div className="flex items-center gap-2 text-primary/70">
          <Ticket size={16} className="text-secondary" />
          <span className="text-xs font-medium">{place.entryFee || "Free Entry"}</span>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;