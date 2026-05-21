import React from "react";
import { ShieldCheck, Phone, AlertTriangle, Lightbulb } from "lucide-react";

export default function SafetySummary({ city }) {
  const s = city.safetyInfo;

  return (
    <div className="bg-gray-100/50 rounded-3xl p-4   border border-gray-100 space-y-8">
      
      {/* Upper Grid: Overview & Emergencies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-primary" />
            <h3 className="font-balthazar text-2xl">{city.name} Safety</h3>
          </div>
          <div className="space-y-4">
            <p className="text-sm"><strong>General:</strong> {s.generalSafety}</p>
            <p className="text-sm"><strong>Women:</strong> {s.womenSafety}</p>
            <p className="text-sm italic text-gray-500"><strong>Behavior:</strong> {s.localBehaviour}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
          <p className="font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-4">
            <Phone size={14} /> Emergency
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ContactBox label="Police" num={city.emergencyNumbers.police} />
            <ContactBox label="Ambulance" num={city.emergencyNumbers.ambulance} />
            <ContactBox label="Tourist" num={city.emergencyNumbers.touristHelpline} />
            <ContactBox label="Women" num={city.emergencyNumbers.womenHelpline} />
          </div>
        </div>
      </div>

      {/* Lower Section: Scam Alerts & Emergency Tips */}
      <div className="border-t border-gray-200/60 pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Scam Alerts Column */}
        {s.scamAlerts && s.scamAlerts.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center gap-2">
              <AlertTriangle size={14} /> Common Scams
            </h4>
            <ul className="space-y-2">
              {s.scamAlerts.map((scam, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2 bg-red-50/40 p-2 rounded-xl border border-red-100/50">
                  <span className="text-red-500 font-bold select-none">•</span>
                  <span>{scam}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Emergency Tips Column */}
        {s.emergencyTips && s.emergencyTips.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
              <Lightbulb size={14} /> Safety Tips
            </h4>
            <ul className="space-y-2">
              {s.emergencyTips.map((tip, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2 bg-amber-50/40 p-2 rounded-xl border border-amber-100/50">
                  <span className="text-amber-500 font-bold select-none">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

const ContactBox = ({ label, num }) => (
  <div className="bg-gray-50 p-3 rounded-xl text-center">
    <p className="text-[9px] text-gray-400 font-bold uppercase">{label}</p>
    <p className="text-primary font-bold">{num}</p>
  </div>
);
