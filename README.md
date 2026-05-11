# SafarAI 🌍✈️
**Your Smart Travel Companion**

SafarAI is a full-stack web application designed to revolutionize the way travelers plan their journeys. By combining the power of the **MERN Stack** with **Generative AI**, SafarAI provides personalized travel itineraries, real-time location insights, and an intuitive user experience.

---

## 🚀 Features
*   **AI-Driven Itineraries:** Generates custom travel plans based on user preferences using the Gemini API.
*   **Smart Location Discovery:** Integrated with Foursquare API to find the best local spots, restaurants, and attractions.
*   **Modern UI/UX:** A clean, minimal interface featuring a professional toast notification system for a seamless experience.
*   **Responsive Design:** Optimized for both desktop and mobile travelers.

---

## 🛠️ Tech Stack
*   **Frontend:** React.js, Tailwind CSS (or your chosen CSS framework)
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **AI Engine:** Google Gemini API
*   **APIs:** Foursquare Places API

---

## 📦 Installation & Setup

Follow these steps to get a local copy up and running:

### 1. Clone the Repository
```bash
git clone [https://github.com/YourUsername/Major-project.git](https://github.com/YourUsername/Major-project.git)
cd Major Project
2. Backend Setup
Navigate to the backend folder:

Bash
cd backend
Install dependencies:
For a full list of dependencies, please refer to the package.json files in the backend

Bash
npm install

3. Create a `.env` file and add your credentials:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   GEMINI_API_KEY=your_google_ai_key
   FSQ_API_KEY=your_foursquare_key
   
Start the server:

Bash
npm start

3. Frontend Setup
Open a new terminal and navigate to the frontend folder:

Bash
cd frontend
Install dependencies:
For a full list of dependencies, please refer to the package.json files in the frontend

Bash
npm install

3. Start the application:
   ```bash
   npm start

🗺️ Project Structure
Plaintext
Major-project /
├── frontend/        # React.js client
├── backend/         # Node.js & Express server
└── README.md        # Project documentation
🛡️ Environment Variables
To run this project, you will need to add the following environment variables to your .env file in the backend directory:

GEMINI_API_KEY

FSQ_API_KEY

MONGO_URI