import {Toaster} from "react-hot-toast";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PreferencesForm from "./pages/PreferencesForm"
import LoginSuccess from "./pages/LoginSuccess";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {
  const [showLogin,setShowLogin]=useState(false)
  const [showSignup, setShowSignup]=useState(false)
  return (
    <BrowserRouter>
    <Navbar 
    onLoginClick={()=>setShowLogin(true)}
    onSignupClick={()=>setShowSignup(true)} />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/plan" element={<PreferencesForm />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      {showLogin && (
        <Login onClose={() => setShowLogin(false)}
        onSwitchToSignup={() => { setShowSignup(true); setShowLogin(false); }} />
      )}
      {showSignup && (
        <Signup 
          onClose={() => setShowSignup(false)} 
          onSwitchToLogin={() => { setShowSignup(false); setShowLogin(true); }}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
