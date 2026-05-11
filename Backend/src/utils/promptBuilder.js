// ─────────────────────────────────────────────
// Builds the structured prompt fed to Gemini
// ─────────────────────────────────────────────
const buildPrompt = ({
  city,
  startCity,
  festivals,
  attractions,
  restaurants,
  days,
  groupSize,
  budget,
  touristType,
  interests,
  dietary,
  startDate,
  travelMonth,
}) => {
  //variable defination
  const festivalText =
    festivals.length > 0
      ? festivals
          .map(
            (f) =>
              `• ${f.name} (${f.type}) — ${f.description || ""} | Tips: ${f.tips || "N/A"}`
          )
          .join("\n")
      : "No major festivals this month.";
      //console.log(festivalText)

  const attractionText = attractions
    .map(
      (p, i) =>
        `${i + 1}. ${p.name} | Rating: ${p.rating ?? "N/A"} | Reviews: ${p.userRatingCount} | PlaceId: ${p.placeId ?? ""}`
    )
    .join("\n");
    // console.log(attractionText)

  const restaurantText = restaurants
    .map(
      (r, i) =>
        `${i + 1}. ${r.name} | Rating: ${r.rating ?? "N/A"} | Reviews: ${r.userRatingCount}`
    )
    .join("\n");
    //console.log(restaurantText)

  // ── Interest-specific scheduling rules ──
  const interestRules = [];
  if (interests?.includes("Adventure"))
    interestRules.push("- ADVENTURE: Place outdoor/physical activities in the Morning (09:00) slot.");
  if (interests?.includes("NightLife"))
    interestRules.push("- NIGHTLIFE: Place a club, lounge or bar in the Evening (18:00) slot. Pick venues with late hours.");
  if (interests?.includes("HiddenGems"))
    interestRules.push("- HIDDEN GEMS: Prefer places with fewer reviews but rating >= 4.0.");
  if (interests?.includes("Stargazing"))
    interestRules.push("- STARGAZING: Place a viewpoint or open-sky location in the Evening (18:00) slot.");
  if (interests?.includes("Food"))
    interestRules.push("- FOOD FOCUS: Dedicate the Afternoon (13:00) slot to a food market or iconic local restaurant.");
  if (interestRules.length === 0)
    interestRules.push("- No special interest rules. Distribute places evenly across Morning, Afternoon, Evening.");

  return `
You are an expert Indian travel planner AI. Generate a REAL, detailed ${days}-day itinerary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESTINATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
City        : ${city.name}, ${city.state}
Description : ${city.description || "A wonderful travel destination."}
Metro       : ${city.transportTips?.metroAvailable ? "Available" : "Not Available"}
Airport     : ${city.transportTips?.airport || "N/A"}
Railway     : ${city.transportTips?.railwayStation || "N/A"}
Auto Fares  : ${city.transportTips?.autoFareGuide || "N/A"}
Prepaid Taxi: ${city.transportTips?.prepaidTaxiBooth || "N/A"}
Discounts   : ${city.govtDiscounts?.description || "None"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FESTIVALS IN ${travelMonth.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${festivalText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REAL PLACES FROM FOURSQUARE PLACE — USE ONLY THESE, DO NOT INVENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ATTRACTIONS:(FOR SLOTS)
${attractionText}

RESTAURANTS (use for foodNearby):
${restaurantText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER CONSTRAINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Start Date   : ${startDate}
Duration     : ${days} days
Group Size   : ${groupSize} people
Total Budget : ₹${budget}
Tourist Type : ${touristType || "domestic"}
Interests    : ${interests?.join(", ") || "general"}
Dietary      : ${dietary || "No preference"}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTEREST-BASED SCHEDULING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${interestRules.join("\n")}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Organize REAL FourSquare places into ${days} days — 3 slots each: Morning (9 AM), Afternoon (1 PM), Evening (6 PM).
2.Group places geographically per day (use Lat/Lng from ${attractionText} to pick nearby places) to minimize travel.
3. Fill every slot: time, placeName, PlaceId, rating, duration, transport (mode + detail + estimatedCost), foodNearby (exactly 2 options), culturalNote.
4.Each slot must use a DIFFERENT place from the list. Do NOT repeat a place across days.
5. Add a hotelSuggestion per day (name, priceRange, address, rating).
6. If a festival is happening, include it as a special slot on the most relevant day.
7. Set each day's date sequentially starting from ${startDate}.
8. Respect dietary preference (${dietary}) in all food suggestions.
9. The vacation starts upon arrival in ${city.name}. Do not include travel from ${startCity} in these ${days} days.

COST RULES:
1.dailyCostEstimate = transport costs + entry fees + food estimate for ${groupSize} people for that day.
2.totalEstimatedCost = sum of ALL dailyCostEstimates. Must NOT exceed ₹${budget}.
3.Transport estimatedCost is per person in INR.
4.Hotel pricePerNight is for one room per night in INR.
5. Set dailyCostEstimate per day and totalEstimatedCost overall.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRICT OUTPUT FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Return this EXACT JSON shape. Every field is REQUIRED. No field may be null, undefined, or empty.

{
  "totalEstimatedCost": <number>,
  "itinerary": [
    /* EXACTLY ${days} objects below, dayNumber 1 to ${days} */
    {
      "dayNumber": <1 to ${days}>,
      "date": "<YYYY-MM-DD>",
      "title": "<Creative day title, max 6 words, NO trip details in title>",
      "theme": "<e.g. Heritage & History | Food & Markets | Nature & Parks>",
      "dailyCostEstimate": <number in INR for all ${groupSize} people>,
      "slots": [
        /* EXACTLY 3 slot objects */
        {
          "time": "<09:00 | 13:00 | 18:00>",
          "placeName": "<Name from Section 3>",
          "placeId": "<FourSquare PlaceId from Section 3>",
          "rating": <number>,
          "duration": "<e.g. 1.5 hours>",
          "activity": "<One sentence: what the group does here>",
          "transport": {
            "mode": "<e.g. Metro | Auto | Walk | Cab>",
            "detail": "<e.g. Take Yellow Line to Rajiv Chowk>",
            "estimatedCost": "<number per person in INR>"
          },
          "foodNearby": [
            /* EXACTLY 2 restaurants from Section 3 */
            {
              "name": "<Restaurant name>",
              "cuisine": "<Cuisine type>",
              "priceRange": "<e.g. ₹200–₹400 per person>",
              "rating": <number>,
              "dietFriendly": "<${dietary}>"
            }
          ],
          "culturalNote": "<One sentence tip or cultural fact about this place>"
        }
      ],
      "hotelSuggestion": {
        "name": "<Hotel name>",
        "area": "<Locality or area>",
        "rating": <number>,
      }
    }
  ]
}
`.trim();
};

// ─────────────────────────────────────────────
// JSON Schema sent to Gemini (enforces structure)
// ─────────────────────────────────────────────
const buildGeminiSchema = (days) => ({
  type: "object",
  properties: {
    itinerary: {
      type: "array",
      minItems: days,
      maxItems: days,
      items: {
        type: "object",
        properties: {
          dayNumber: { type: "number" },
          date: { type: "string" },
          title: { type: "string" },
          theme:  {type:"string"},
          dailyCostEstimate: { type: "number" },
          
          slots: {
            type: "array",
            minItems:3,
            maxItems:3,
            items: {
              type: "object",
              properties: {
                time: { type: "string" },
                placeName: { type: "string" },
                PlaceId: { type: "string" },
                rating: { type: "number" },
                image: { type: "string" },
                duration: { type: "string" },
                transport: {
                  type: "object",
                  properties: {
                    mode: { type: "string" },
                    detail: { type: "string" },
                    estimatedCost: { type: "number" },
                  },
                },
                foodNearby: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      priceRange: { type: "string" },
                      rating: { type: "number" },
                    },
                  },
                },
                culturalNote: { type: "string" },
              },
            },
          },
          hotelSuggestion: {
            type: "object",
            properties: {
              name: { type: "string" },
              priceRange: { type: "string" },
              address: { type: "string" },
              rating: { type: "number" },
            },
          },
        },
      },
    },
    totalEstimatedCost: { type: "number" },
  },
});

module.exports = { buildPrompt, buildGeminiSchema };