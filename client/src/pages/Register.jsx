import React, { useState } from "react";
import registerBg from "../assets/registerPageBackround.jpg";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real register call
    console.log("register", { name, email, password });
    // simulate success
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-roboto-mono">
      {/* Left intro panel (hidden on small screens) - shiny green gradient */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-0 relative overflow-hidden min-h-screen">
        {/* image placed as an <img> so it can use object-contain and show the whole image */}
        <img
          src={registerBg}
          alt="register"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* glossy decorative circles (above image) */}
        <div className="absolute -left-24 -top-24 w-72 h-72 bg-white opacity-10 rounded-full filter blur-3xl transform rotate-12 z-10" />
        <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-white opacity-8 rounded-full filter blur-2xl z-10" />

        <div className="relative z-20 max-w-xs text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-4">Welcome to StockMaster</h3>
            <p className="text-sm leading-relaxed">
              Manage your portfolio, track market movers and make informed
              decisions. Create an account to get started and explore curated
              insights and tools built for traders.
            </p>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 min-h-screen">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create an account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
