import React from 'react';
import './../styles/Landing.css';

const Landing = () => {
  return (
    <>
      <header>
        <h1 className="logo">Flash Stats</h1>
        <nav>
          <a href="#players">Players</a>
          <a href="#teams">Teams</a>
          <a href="#stats">Stats</a>
          <a href="#predictions">Predictions</a>
          <a href="#contact">Contact</a>
          <a href="#signup">Sign Up</a>
        </nav>
      </header>

      <div className="hero">
        <h1>Next-Level Baseball Analytics & Predictions</h1>
        <p>Unlock the power of data with insights from 400K+ players worldwide.</p>
        <button id="edge" onClick={() => window.location.href = '#signup'}>
          Get Your Edge Now
        </button>
      </div>

      <div className="container">
        {/* Player Highlights */}
        <div className="column">
          <h2>Top Players</h2>
          <p>Stay updated on this season's top performers.</p>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>ERA</th>
                <th>G</th>
                <th>K</th>
                <th>BB</th>
                <th>BAVG</th>
                <th>WHIP</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              {/* List player data dynamically if possible */}
              <tr><td>Ethan Calder</td><td>0.75</td><td>2</td><td>15</td><td>3</td><td>.190</td><td>1.05</td><td>12</td></tr>
              {/* Repeat similar rows as needed */}
            </tbody>
          </table>
          <button className="toggle-btn">View More</button>
        </div>

        {/* Interactive Standings */}
        <div className="column">
          <h2>League Standings</h2>
          <select id="League">
            <option>MLB</option>
            <option>Minors</option>
            <option>KBO</option>
            <option>KBO Futures</option>
          </select>
          <select id="seasonSelect">
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>

          <div className="league-standings" id="center-col">
            <table className="league-standings-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>W</th>
                  <th>L</th>
                  <th>Pct</th>
                  <th>GB</th>
                  <th>STR</th>
                </tr>
              </thead>
              <tbody>
                {/* List standings data dynamically */}
                <tr>
                  <td>1</td>
                  <td>Doosan Bears Futures</td>
                  <td>40</td>
                  <td>10</td>
                  <td>.800</td>
                  <td>--</td>
                  <td>W6</td>
                </tr>
                {/* Repeat similar rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Premium Analytics CTA */}
        <div className="column" id="CTA">
          <h2>Unlock Advanced Stats</h2>
          <p>Access AI-driven insights & exclusive data to stay ahead of the game.</p>
          <ul>
            <li><span className="icon">&#x1F4C8;</span> Predictive performance models</li>
            <li><span className="icon">&#x1F4C9;</span> Historical trend analysis</li>
            <li><span className="icon">&#x1F4CB;</span> Custom player comparisons</li>
          </ul>
          <button className="toggle-btn" onClick={() => window.location.href = '#signup'}>
            Start Your Free Trial
          </button>
        </div>
      </div>

      <div className="container">
        <div className="column">
          <h2>MLB Scores, Standings, News & Analytics</h2>
          <p>Stay updated with the latest MLB scores, team standings, breaking news, and in-depth analytics.</p>
        </div>

        <div className="column">
          <h2>Join Fantasy Baseball</h2>
          <p>Sign up to participate in our fantasy baseball league and test your skills against others.</p>
          <button>Sign Up Now</button>
        </div>

        <div className="column">
          <h2>News Around the League</h2>
          <div className="news-article">
            <img src="images/news1.jpg" alt="Baseball news" className="news-image" />
            <div className="news-content">
              <h3><a href="#">This Week's Top Stories</a></h3>
              <p>Catch up on the biggest headlines, player trades, and playoff predictions.</p>
            </div>
          </div>

          <div className="news-article">
            <img src="images/news2.jpg" alt="Pirates Future" className="news-image" />
            <div className="news-content">
              <h3><a href="#">Future for the Pirates?</a></h3>
              <p>Can Pittsburgh turn their season around? Expert insights and analysis.</p>
            </div>
          </div>

          <button className="news-btn">More News</button>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Flash Stats. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Landing;
