import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Mail, Lock, X } from "lucide-react";

const Login = ({ onClose , onSwitchToSignup }) => {
  // 1. State for form inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [identifier, setIdentifier] = useState("");

  // 2. Google Auth Handler
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  // 3. Manual Login Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: identifier,
          username: identifier,
          password,
        },
      );

      if (response.data.success) {
        // Save the token
        localStorage.setItem("token", response.data.token);
        // Success Toast!
        toast.success(`Welcome back, ${response.data.user.username}!`, {
          duration: 2000,
          style: {
            border: "1px solid #E8B931",
            padding: "16px",
            color: "#001F3F",
          },
        });
        setTimeout(() => {
          onClose();
          window.location.href = "/";
        }, 1500);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed", {});
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-10 font-outfit">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-5xl h-400px bg-white rounded-2xl shadow-2xl flex overflow-hidden group z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full text-primary hover:bg-secondary/20 transition-all active:scale-95"
        >
          <X size={24} />
        </button>

        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:flex md:w-1/2 relative">
          <img
            src="/login.jpg"
            alt="Discover India"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
            <h1 className="font-balthazar text-5xl mb-4 leading-tight">
              A New Era in <br /> Travel{" "}
              <span className="text-secondary italic">Intelligence</span>
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-4xl font-semibold text-primary mb-3">
            Welcome Back
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Login to continue planning your unique journey.
          </p>

          {/* Error Message Display */}
          {error && (
            <p className="text-red-500 text-sm mb-4 font-medium">{error}</p>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* EMAIL FIELD */}
            <div className="relative">
              <label className="text-xs font-medium uppercase tracking-widest text-primary/70 block mb-2">
                Email / Username
              </label>
              <div className="relative flex items-center border border-primary/20 rounded-xl bg-bgWhite focus-within:ring-2 focus-within:ring-secondary/50 focus-within:border-secondary transition-all">
                <Mail className="absolute left-4 text-primary/50" size={20} />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Enter your email or username"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-transparent rounded-xl text-primary font-medium placeholder:text-primary/30 outline-none"
                />
              </div>
            </div>

            {/* PASSWORD FIELD */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-medium uppercase tracking-widest text-primary/70">
                  Password
                </label>
                <a
                  href="#"
                  className=" font-semibold text-secondary hover:underline text-xs uppercase tracking-tighter"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative flex items-center border border-primary/20 rounded-xl bg-bgWhite focus-within:ring-2 focus-within:ring-secondary/50 focus-within:border-secondary transition-all">
                <Lock className="absolute left-4 text-primary/50" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-transparent rounded-xl text-primary font-medium placeholder:text-primary/30 outline-none"
                />
              </div>
            </div>

            <button
              disabled={loading}
              className={`w-full bg-primary text-white py-4 rounded-full font-semibold text-sm uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95 ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-black"}`}
            >
              {loading ? "Authenticating..." : "Continue"}
            </button>
          </form>

          {/* <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 tracking-widest font-medium">
                Or
              </span>
            </div>
          </div> */}

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 mt-4 border border-gray-200 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-primary hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <button 
            className="font-bold text-secondary hover:underline"
            onClick={onSwitchToSignup}>
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
