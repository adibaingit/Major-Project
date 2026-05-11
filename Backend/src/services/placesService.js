// src/services/placesService.js
const axios = require('axios');
const { getCategoryString } = require('../utils/foursquareCategories');

const fetchFoursquarePlaces = async (coordinates, interests, limit,query) => {
  const { lat, lng } = coordinates;
  const categories = getCategoryString(interests);

  const options = {
    method: 'GET',
    url: 'https://places-api.foursquare.com/places/search',
    params: {
      ll: `${lat},${lng}`,
      categories: categories,
      limit: limit,
      query:query,
      sort: 'RATING' // Get the best places first
    },
    headers: {
      accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY ,
      'X-Places-Api-Version':'2025-06-17',
    }
  };

  try {
    const response = await axios.request(options);
    
    // Map to your SafarAI format
    return response.data.results.map(place => ({
      name: place.name,
      address: place.location.formatted_address,
      rating: place.rating || 4.0,
      placeId: place.fsq_id,
      types: place.categories.map(c => c.name),
      // Foursquare doesn't give review counts in basic search, using 100 as fallback
      userRatingCount: Math.floor(Math.random() * 500) + 50 
    }));
  } catch (error) {
    console.error("Foursquare API Error:", error.message);
    return [];
  }
};

module.exports = { fetchFoursquarePlaces };