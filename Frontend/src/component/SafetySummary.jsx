import { ShieldCheck, Info, Phone } from "lucide-react";

export default function SafetySummary({ city }) {
  const s = city.safetyInfo;
  return (
    <div className="bg-gray-100/50 rounded-3xl p-8 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <div className="flex items-center gap-3"><ShieldCheck className="text-primary"/><h3 className="font-balthazar text-2xl">{city.name} Safety</h3></div>
        <div className="space-y-4">
          <p className="text-sm"><strong>General:</strong> {s.generalSafety}</p>
          <p className="text-sm"><strong>Women:</strong> {s.womenSafety}</p>
          <p className="text-sm italic text-gray-500"><strong>Behavior:</strong> {s.localBehaviour}</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <p className="font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-4"><Phone size={14}/> Emergency</p>
        <div className="grid grid-cols-2 gap-4">
          <ContactBox label="Police" num={city.emergencyNumbers.police} />
          <ContactBox label="Ambulance" num={city.emergencyNumbers.ambulance} />
          <ContactBox label="Tourist" num={city.emergencyNumbers.touristHelpline} />
          <ContactBox label="Women" num={city.emergencyNumbers.womenHelpline} />
        </div>
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