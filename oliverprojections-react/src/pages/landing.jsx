import React from "react";
import "./../styles/Landing.css";

const Landing = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>Flash Stats</h1>
        <img src="/images/logo.png" alt="Flash Stats Logo" className="logo" />
        <nav>
          <a href="#players">Players</a>
          <a href="#teams">Teams</a>
          <a href="#stats">Stats</a>
          <a href="#predictions">Predictions</a>
          <a href="#contact">Contact</a>
          <button className="signup-btn">Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Next-Level Baseball Analytics & Predictions</h1>
        <p>
          Unlock the power of data with insights from 400K+ players worldwide.
          Run by people that get it, built for fans and analysts who demand accuracy.
        </p>
        <button onClick={() => window.location.href = "#signup"}>Get Your Edge Now</button>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="column">
          <h2>Top Players</h2>
          <p>Stay updated on this season's top performers.</p>
          <ul>
            <li><strong>Player A</strong>: .320 AVG, 25 HR, 78 RBI</li>
            <li><strong>Player B</strong>: 2.45 ERA, 150 K</li>
            <li><strong>Player C</strong>: 40 SB, .410 OBP</li>
          </ul>
          <button className="toggle-btn">View More Stats</button>
        </div>

        <div className="column">
          <h2>MLB Standings</h2>
          <p>Check where your team stands. Toggle between seasons.</p>
          <select id="seasonSelect">
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
          <ul>
            <li><strong>Team X</strong>: 65-40 (.620)</li>
            <li><strong>Team Y</strong>: 60-45 (.571)</li>
            <li><strong>Team Z</strong>: 58-48 (.547)</li>
          </ul>
        </div>

        <div className="column">
          <h2>Unlock Advanced Stats</h2>
          <p>Access AI-driven insights & exclusive data to stay ahead of the game.</p>
          <ul>
            <li>Predictive performance models</li>
            <li>Historical trend analysis</li>
            <li>Custom player comparisons</li>
          </ul>
          <button className="toggle-btn" onClick={() => window.location.href = "#signup"}>Start Your Free Trial</button>
        </div>
      </div>

      <div className="full-width-section">
        <h2>MLB Scores, Standings, News & Analytics</h2>
        <p>Stay updated with the latest MLB scores, team standings, breaking news, and in-depth analytics.</p>
      </div>

      <div className="full-width-section">
        <h2>Join Fantasy Baseball</h2>
        <p>Sign up to participate in our fantasy baseball league and test your skills against others.</p>
        <button>Sign Up Now</button>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Flash Stats. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;