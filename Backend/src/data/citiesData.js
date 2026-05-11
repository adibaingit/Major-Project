const citiesData = [
  {
    name: "Jaipur",
    state: "Rajasthan",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    description: "The Pink City, known for its magnificent forts and vibrant culture.",
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["May", "June"],
    tags: ["heritage", "culture", "shopping"],
    transportTips: {
      airport: "Jaipur International Airport (JAI)",
      railwayStation: "Jaipur Junction",
      autoFareGuide: "Standard rates; use apps like Ola/Uber for fair pricing.",
      metroAvailable: true,
      prepaidTaxiBooth: "Available at Airport and Railway Station."
    },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true, description: "Heavy discounts on entry fees for Indian citizens with ID." },
    emergencyNumbers: { police: "100", ambulance: "108", touristHelpline: "0141-2374536" }
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    coordinates: { lat: 25.3176, lng: 82.9739 },
    description: "One of the oldest living cities in the world, famous for its river ghats.",
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["May", "June"],
    tags: ["spiritual", "heritage", "river"],
    transportTips: {
      airport: "Lal Bahadur Shastri International Airport",
      railwayStation: "Varanasi Junction",
      autoFareGuide: "Negotiate before boarding; E-rickshaws are common.",
      metroAvailable: false
    },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: false, seniorDiscount: true, description: "Free entry to most Ghats and Ganga Aarti." },
    emergencyNumbers: { police: "112", ambulance: "102", touristHelpline: "1363" }
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    description: "The financial capital and home of Bollywood, situated on the coast.",
    bestMonths: ["November", "December", "January", "February"],
    avoidMonths: ["July", "August"],
    tags: ["urban", "beach", "nightlife"],
    transportTips: {
      airport: "Chhatrapati Shivaji Maharaj International Airport",
      railwayStation: "CSMT / Mumbai Central",
      autoFareGuide: "Strictly by meter in suburbs; no autos in South Mumbai.",
      metroAvailable: true
    },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true, description: "Student discounts on local train passes." },
    emergencyNumbers: { police: "100", ambulance: "102" }
  },
  {
    name: "Goa",
    state: "Goa",
    coordinates: { lat: 15.2993, lng: 74.1240 },
    description: "Famous for its stunning beaches, Portuguese heritage, and seafood.",
    bestMonths: ["November", "December", "January", "February"],
    avoidMonths: ["June", "July", "August"],
    tags: ["beach", "nightlife", "relaxation"],
    transportTips: {
      airport: "Dabolim / Mopa Airport",
      railwayStation: "Madgaon / Thivim",
      autoFareGuide: "Expensive; Renting a scooty is the best option.",
      metroAvailable: false
    },
    govtDiscounts: { aadhaarDiscount: false, studentDiscount: false, seniorDiscount: false, description: "Private entry fees apply to some heritage sites." },
    emergencyNumbers: { police: "100", ambulance: "108" }
  },
  {
    name: "Delhi",
    state: "Delhi",
    coordinates: { lat: 28.6139, lng: 77.2090 },
    description: "The capital city, a blend of historical Mughal architecture and modern life.",
    bestMonths: ["October", "November", "February", "March"],
    avoidMonths: ["May", "June", "January"],
    tags: ["heritage", "urban", "food"],
    transportTips: {
      airport: "Indira Gandhi International Airport",
      railwayStation: "New Delhi Railway Station",
      autoFareGuide: "Use Metro or Uber/Ola; autos often refuse meter.",
      metroAvailable: true
    },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true, description: "Significant discounts for Indians at ASI monuments." },
    emergencyNumbers: { police: "100", womenHelpline: "1091" }
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    coordinates: { lat: 30.0869, lng: 78.2676 },
    description: "Yoga Capital of the World, famous for adventure sports and spirituality.",
    bestMonths: ["March", "April", "September", "October", "November"],
    avoidMonths: ["July", "August"],
    tags: ["spiritual", "adventure", "nature"],
    transportTips: {
      airport: "Jolly Grant Airport (Dehradun)",
      railwayStation: "Yog Nagari Rishikesh",
      autoFareGuide: "Shared autos are very cheap for local travel.",
      metroAvailable: false
    },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: false, seniorDiscount: false, description: "Minimal fees for suspension bridges." },
    emergencyNumbers: { police: "100", touristHelpline: "1363" }
  },
  {
    name: "Agra",
    state: "Uttar Pradesh",
    coordinates: { lat: 27.1767, lng: 78.0081 },
    description: "Home to the Taj Mahal, one of the Seven Wonders of the World.",
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["May", "June"],
    tags: ["heritage", "culture"],
    transportTips: { airport: "Agra Airport", railwayStation: "Agra Cantt.", autoFareGuide: "Negotiate hard; electric buses are available near Taj.", metroAvailable: true },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true, description: "Lower entry fees for SAARC/BIMSTEC citizens." },
    emergencyNumbers: { police: "112", touristHelpline: "1363" }
  },
  {
    name: "Kochi",
    state: "Kerala",
    coordinates: { lat: 9.9312, lng: 76.2673 },
    description: "The Queen of the Arabian Sea, known for its spice trade history and backwaters.",
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["June", "July"],
    tags: ["heritage", "coastal", "culture"],
    transportTips: { airport: "Cochin International Airport", railwayStation: "Ernakulam Junction", autoFareGuide: "Usually follow meter; Water Metro is a great option.", metroAvailable: true },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true, description: "Subsidized rates on government ferries." },
    emergencyNumbers: { police: "100", ambulance: "102" }
  },
  {
    name: "Amritsar",
    state: "Punjab",
    coordinates: { lat: 31.6340, lng: 74.8723 },
    description: "Spiritual center of the Sikhs and home to the Golden Temple.",
    bestMonths: ["October", "November", "February", "March"],
    avoidMonths: ["May", "June"],
    tags: ["spiritual", "heritage", "food"],
    transportTips: { airport: "Sri Guru Ram Dass Jee International Airport", railwayStation: "Amritsar Junction", autoFareGuide: "Free bus service from station to Golden Temple.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: false, seniorDiscount: true, description: "Free meals (Langar) for everyone." },
    emergencyNumbers: { police: "100", touristHelpline: "1363" }
  },
  {
    name: "Udaipur",
    state: "Rajasthan",
    coordinates: { lat: 24.5854, lng: 73.7125 },
    description: "The City of Lakes, known for its romantic settings and royal palaces.",
    bestMonths: ["September", "October", "November", "December", "January", "February"],
    avoidMonths: ["May", "June"],
    tags: ["heritage", "culture", "romantic"],
    transportTips: { airport: "Maharana Pratap Airport", railwayStation: "Udaipur City", autoFareGuide: "Autos inside Old City are narrow; walking is better.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true, description: "Student discounts on museum tickets." },
    emergencyNumbers: { police: "100", ambulance: "108" }
  },
  {
    name: "Bengaluru",
    state: "Karnataka",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    description: "The Silicon Valley of India, famous for its gardens and pub culture.",
    bestMonths: ["September", "October", "November", "December", "January", "February"],
    avoidMonths: ["April", "May"],
    tags: ["urban", "nightlife", "nature"],
    transportTips: { airport: "Kempegowda International Airport", railwayStation: "KSR Bengaluru / Yesvantpur", autoFareGuide: "Meter + 20-50% extra is common; use Namma Yatri app.", metroAvailable: true },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true },
    emergencyNumbers: { police: "112", ambulance: "108" }
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    description: "The City of Pearls, famous for its Biryani and the Charminar.",
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["April", "May"],
    tags: ["heritage", "food", "urban"],
    transportTips: { airport: "Rajiv Gandhi International Airport", railwayStation: "Secunderabad / Hyderabad Deccan", autoFareGuide: "Metros are very reliable; avoid autos during peak rain.", metroAvailable: true },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true },
    emergencyNumbers: { police: "100", womenHelpline: "1091" }
  },
  {
    name: "Puducherry",
    state: "Puducherry",
    coordinates: { lat: 11.9416, lng: 79.8083 },
    description: "A former French colony known for its French Quarter and spiritual ashrams.",
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["May", "June"],
    tags: ["beach", "culture", "spiritual"],
    transportTips: { airport: "Pondicherry Airport", railwayStation: "Puducherry Station", autoFareGuide: "Cycle rentals are the most popular tourist transport.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: false, seniorDiscount: false },
    emergencyNumbers: { police: "100", ambulance: "108" }
  },
  {
    name: "Mysuru",
    state: "Karnataka",
    coordinates: { lat: 12.2958, lng: 76.6394 },
    description: "The Cultural Capital of Karnataka, famous for its Dasara festivities.",
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["April", "May"],
    tags: ["heritage", "culture", "spiritual"],
    transportTips: { airport: "Mysuru Airport", railwayStation: "Mysuru Junction", autoFareGuide: "Cleanest city; use shared autos for short distances.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true, description: "Heavy discount for school trips." },
    emergencyNumbers: { police: "100", ambulance: "108" }
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    description: "The City of Joy, known for its colonial architecture and literary heritage.",
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["May", "June"],
    tags: ["heritage", "culture", "food"],
    transportTips: { airport: "Netaji Subhash Chandra Bose International Airport", railwayStation: "Howrah / Sealdah", autoFareGuide: "Iconic yellow taxis; Trams are still functional in some parts.", metroAvailable: true },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true },
    emergencyNumbers: { police: "100", ambulance: "102" }
  },
  {
    name: "Srinagar",
    state: "Jammu and Kashmir",
    coordinates: { lat: 34.0837, lng: 74.7973 },
    description: "The Summer Capital, famous for Dal Lake and its floating houseboats.",
    bestMonths: ["April", "May", "June", "September", "October"],
    avoidMonths: ["January", "February"],
    tags: ["nature", "romantic", "mountains"],
    transportTips: { airport: "Srinagar International Airport", railwayStation: "Srinagar Station", autoFareGuide: "Shikaras are the main mode of transport in Dal Lake.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: false, seniorDiscount: false },
    emergencyNumbers: { police: "100", touristHelpline: "1363" }
  },
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    coordinates: { lat: 31.1048, lng: 77.1734 },
    description: "The Queen of Hills, a popular hill station with colonial charm.",
    bestMonths: ["March", "April", "May", "June", "November", "December"],
    avoidMonths: ["July", "August"],
    tags: ["mountains", "nature", "heritage"],
    transportTips: { airport: "Jubarhatti Airport", railwayStation: "Shimla Railway Station (Toy Train)", autoFareGuide: "No vehicles allowed on Mall Road; strictly walking.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true },
    emergencyNumbers: { police: "100", ambulance: "108" }
  },
  {
    name: "Manali",
    state: "Himachal Pradesh",
    coordinates: { lat: 32.2432, lng: 77.1892 },
    description: "A high-altitude Himalayan resort town for adventure and snow.",
    bestMonths: ["March", "April", "May", "June", "September", "October"],
    avoidMonths: ["July", "August"],
    tags: ["adventure", "nature", "mountains"],
    transportTips: { airport: "Bhuntar Airport", railwayStation: "Kalka (then 8 hours by road)", autoFareGuide: "Local HRTC buses are the most reliable in mountains.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: false, seniorDiscount: false },
    emergencyNumbers: { police: "100", ambulance: "108" }
  },
  {
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    coordinates: { lat: 12.6269, lng: 80.1927 },
    description: "Famous for its Shore Temple and UNESCO rock-cut monuments.",
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["May", "June"],
    tags: ["heritage", "beach", "spiritual"],
    transportTips: { airport: "Chennai International Airport", railwayStation: "Chengalpattu Junction", autoFareGuide: "Mostly walkable heritage sites.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true },
    emergencyNumbers: { police: "100", ambulance: "108" }
  },
  {
    name: "Hampi",
    state: "Karnataka",
    coordinates: { lat: 15.3350, lng: 76.4600 },
    description: "A UNESCO World Heritage site featuring the ruins of the Vijayanagara Empire.",
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["April", "May"],
    tags: ["heritage", "spiritual", "nature"],
    transportTips: { airport: "Jindal Vidyanagar Airport", railwayStation: "Hosapete Junction", autoFareGuide: "Rent a bicycle or moped to explore the ruins.", metroAvailable: false },
    govtDiscounts: { aadhaarDiscount: true, studentDiscount: true, seniorDiscount: true },
    emergencyNumbers: { police: "100", ambulance: "108" }
  }
];


module.exports=citiesData