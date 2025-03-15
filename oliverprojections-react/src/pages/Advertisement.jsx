import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBaseballBall } from "react-icons/fa";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

export default function Advertisement() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <ReactPlayer
          url="https://www.youtube.com/embed/B9QNARxOimE?si=OFEpy_lD3EiY5hkS"
          playing
          loop
          muted
          width="110vw"
          height="90vh"
          title="Background video"
          frameBorder="0"
          config={{
            youtube: {
              playerVars: { 
                controls: 0, 
                showinfo: 0, 
                modestbranding: 1, 
                rel: 0, 
                fs: 0 
              }
            }
          }}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1.8)", // Centered & zoomed in
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
        {/* Optional overlay to hide the YouTube 'i' button */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-black"></div>
      </div>

      {/* Hero Section */}
<section className="relative flex flex-col items-center justify-center pt-32 pb-20 text-center">
  <motion.h1
    className="text-8xl font-extrabold mb-6 text-white"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Flash Stats
  </motion.h1>
  <p className="text-2xl text-gray-300 mb-8">
    The Ultimate Baseball Analytics Platform
  </p>
  <motion.button
    className="mt-8 btn px-6 py-4 text-lg font-semibold rounded-pill shadow-lg transition transform hover:scale-105"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      background: "linear-gradient(to right, #f59e0b, #d97706)", // Orange gradient
      border: "none", 
      color: "#fff",
    }}
  >
    Get Started Now
  </motion.button>
</section>


      {/* Features Section */}
      <section className="relative grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-10 my-10 bg-gray-800 bg-opacity-80 rounded-xl mx-4 md:mx-10 py-8">
        {["Real-Time Stats", "Player Predictions", "Fantasy Insights"].map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <FaBaseballBall size={40} className="mb-4 text-blue-400" />
            <h3 className="text-2xl font-semibold mb-2">{feature}</h3>
            <p className="text-gray-300">
              Get cutting-edge insights and analytics to stay ahead in the game.
            </p>
          </div>
        ))}
      </section>

 {/* Signup Section */}
<section className="relative flex justify-center my-10">
  <div className="bg-blue-500 bg-opacity-80 p-8 rounded-xl w-full max-w-lg text-center shadow-xl">
    <h2 className="text-3xl font-bold mb-2">Sign Up for Exclusive MLB Analytics</h2>
    <p className="text-lg text-gray-100 mb-4">
      Join thousands of baseball analysts using Flash Stats.
    </p>
    <div className="flex justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-64 p-3 rounded-l-lg outline-none text-gray-900"
      />
      <button className="px-6 py-3 bg-gray-900 hover:bg-gray-700 rounded-r-lg transition duration-300 text-white">
        Join Now
      </button>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="relative text-center text-gray-400 py-4">
        <p>&copy; 2025 Flash Stats. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
