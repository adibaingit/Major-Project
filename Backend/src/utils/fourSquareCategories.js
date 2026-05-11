// src/utils/foursquareCategories.js
const interestToCategoryId = {
  "Adventure": "19000", // Land Marks & Outdoors
  "Historical Landmarks": "16026", // Monuments / Landmarks
  "Village Life": "16000", // Landmarks / Outdoors (General)
  "Culture": "10000", // Arts and Entertainment
  "NightLife & Clubs": "10032", // Night Clubs / Bars
  "Hidden Gems": "16000", // We use Outdoors but Gemini will filter for "Hidden"
  "Stargazing": "16037", // Planetariums / Observatories
  "Food & Craft": "13000"  // Dining and Drinking
};

const getCategoryString = (interests) => {
  if (!interests || interests.length === 0) return "16000"; // Default to Sights
  return interests.map(interest => interestToCategoryId[interest] || "16000").join(",");
};

module.exports = { getCategoryString };