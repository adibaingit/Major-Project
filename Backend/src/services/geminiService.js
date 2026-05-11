// const { GoogleGenAI } = require("@google/genai");

// const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// const generateItinerary = async (prompt, schema) => {
//   try {
//     // In the new SDK, we use client.models.generateContent
//     const result = await client.models.generateContent({
//       model: "gemini-1.5-flash", // Use 2.0-flash or 1.5-flash for stability in 2026
//       // THIS IS WHERE YOUR PROMPT GOES
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: prompt }]
//         }
//       ],
//       config: {
//         responseMimeType: "application/json",
//         responseSchema: schema,
//         temperature: 0.4,
//       },
//     });

//     // The new SDK returns a 'value' or 'response' object
//     // Depending on the exact build, use result.response.text() 
//     // or result.value.content.parts[0].text
//     const rawText = result.text; 
//     console.log("rewText Is Here")
//     console.log(rawText)
//     const res=JSON.parse(rawText);
//     console.log(res)
//     return res;
//   } catch (err) {
//     console.error("Gemini Error:", err);
//     throw new Error(`Gemini failed: ${err.message}`);
//   }
// };

// module.exports = { generateItinerary };

const { GoogleGenerativeAI } = require("@google/generative-ai"); // Note the name change

// 1. Initialize the SDK properly
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateItinerary = async (prompt, schema) => {
  try {
    // 2. Access the model correctly
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3-flash-preview",
      // 3. System Instructions are CRITICAL for strict JSON
      systemInstruction: "You are an expert Indian travel planner. Respond ONLY with valid JSON following the provided schema.",
    });
    console.log("System Instruction is send")

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        // Only include responseSchema if your schema is in the valid Google JSON format
        // If it's a plain string description, remove this line
        // responseSchema: schema, 
        temperature: 0.4,
      },
    });

    // 4. Correct way to extract text in the standard SDK
    const response = await result.response;
    const rawText = response.text(); 
    
    console.log("Raw Gemini Output:", rawText);

    // 5. Parse and return
    // const cleanData = JSON.parse(rawText);
    console.log("Clean data"+ cleanData)
    return cleanData;

  } catch (err) {
    console.error("Gemini Service Error:", err);
    // If it's a parsing error, log the raw text to see what went wrong
    throw new Error(`Gemini failed: ${err.message}`);
  }
};

module.exports = { generateItinerary };