const axios = require('axios');

const apiKey = 'Bearer ADP4DUH2ZL42YTF4WPPRCM1FCNL0IMX2AEVB5LMDDLZ3JXLN'; 

const test = async () => {
  try {
    const res = await axios.get('https://places-api.foursquare.com/places/search', {
      params: { ll: '28.6139,77.2090', limit: 1 },
      headers: {
        'Accept': 'application/json',
        'Authorization': apiKey, // NO Bearer prefix
        'X-Places-Api-Version': '2025-06-17',
        
      },
      timeout:10000
    });
    console.log("🚀 Sending request to Foursquare...");
    const response = await axios(config);
    
    console.log("✅ SUCCESS!");
    console.log("Place Name:", response.data.results[0]?.name);
  } catch (error) {
    if (error.response) {
      // The server responded with a status code (401, 400, etc.)
      console.log("❌ SERVER ERROR:", error.response.status);
      console.log("MESSAGE:", error.response.data.message || error.response.data);
    } else if (error.request) {
      // The request was made but no response was received (This is your "Aborted" error)
      console.log("❌ NETWORK ERROR: The stream was aborted or blocked by your internet/firewall.");
      console.log("Tip: Try switching to a mobile hotspot or disabling VPN.");
    } else {
      console.log("❌ SCRIPT ERROR:", error.message);
    }  
  }
};

test();