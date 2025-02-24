import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaBaseballBall } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center p-10">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Ultimate Baseball Analytics Platform
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">
          AI-driven MLB predictions, live stats, and expert insights.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-lg rounded-xl">
          Get Started Now
        </button>
      </section>
      
      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-10">
        {["Real-Time Stats", "AI Predictions", "Fantasy Insights"].map((feature, index) => (
          <div key={index} className="card bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="card-body text-center">
              <FaBaseballBall size={40} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold">{feature}</h3>
              <p className="text-gray-400 mt-2">
                Get cutting-edge insights and analytics to stay ahead in the game.
              </p>
            </div>
          </div>
        ))}
      </section>
      
      {/* Signup Section */}
      <section className="mt-16 text-center p-10 bg-blue-500 rounded-xl mx-10">
        <h2 className="text-3xl font-bold">Sign Up for Exclusive MLB Analytics</h2>
        <p className="text-lg text-gray-100 mt-2">Join thousands of baseball analysts using Flash Stats.</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control w-80 p-3 rounded-l-lg"
          />
          <button className="px-6 py-3 bg-gray-900 hover:bg-gray-700 rounded-r-lg">
            Join Now
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center text-gray-400 mt-10 pb-5">
        <p>&copy; 2025 Flash Stats. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
