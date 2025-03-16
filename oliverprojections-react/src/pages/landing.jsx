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
              <tr><td>Noah Chapman</td><td>5.72</td><td>4</td><td>22</td><td>10</td><td>.241</td><td>1.45</td><td>16</td></tr>
              <tr><td>Brad Pruett</td><td>1.42</td><td>3</td><td>8</td><td>2</td><td>.205</td><td>0.98</td><td>14</td></tr>
              <tr><td>Jace LaViolette</td><td>0.75</td><td>2</td><td>12</td><td>4</td><td>.178</td><td>1.12</td><td>10</td></tr>
              <tr><td>Cam Cannarella</td><td>5.72</td><td>3</td><td>20</td><td>8</td><td>.241</td><td>1.38</td><td>14</td></tr>
              <tr><td>Ethan Petry</td><td>1.42</td><td>3</td><td>10</td><td>3</td><td>.215</td><td>1.05</td><td>12</td></tr>
              <tr><td>Jamie Arnold</td><td>0.75</td><td>2</td><td>14</td><td>5</td><td>.183</td><td>1.10</td><td>11</td></tr>
              <tr><td>Luke Stevenson</td><td>5.72</td><td>3</td><td>18</td><td>7</td><td>.241</td><td>1.40</td><td>13</td></tr>
              <tr><td>Wehiwa Aloy</td><td>1.42</td><td>3</td><td>9</td><td>2</td><td>.198</td><td>1.00</td><td>13</td></tr>
              <tr><td>Max Bristow</td><td>3.25</td><td>4</td><td>11</td><td>6</td><td>.220</td><td>1.20</td><td>17</td></tr>
              <tr><td>Jordan McKenzie</td><td>2.89</td><td>5</td><td>16</td><td>4</td><td>.195</td><td>1.08</td><td>15</td></tr>
              <tr><td>Tyler Riggins</td><td>4.12</td><td>3</td><td>9</td><td>5</td><td>.230</td><td>1.30</td><td>14</td></tr>
              <tr><td>Chris Delgado</td><td>1.95</td><td>2</td><td>13</td><td>2</td><td>.175</td><td>0.95</td><td>10</td></tr>
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
                <tr>
                  <td>2</td>
                  <td>Samsung Lions Futures</td>
                  <td>38</td>
                  <td>12</td>
                  <td>.760</td>
                  <td>2.0</td>
                  <td>W3</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>SSG Landers Futures</td>
                    <td>35</td>
                    <td>15</td>
                    <td>.700</td>
                    <td>5.0</td>
                    <td>L1</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>KIA Tigers Futures</td>
                    <td>32</td>
                    <td>18</td>
                    <td>.640</td>
                    <td>8.0</td>
                    <td>W2</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>LG Twins Futures</td>
                    <td>30</td>
                    <td>20</td>
                    <td>.600</td>
                    <td>10.0</td>
                    <td>L2</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Goyang Heroes</td>
                    <td>28</td>
                    <td>22</td>
                    <td>.560</td>
                    <td>12.0</td>
                    <td>W1</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Hanwha Eagles Futures</td>
                    <td>25</td>
                    <td>25</td>
                    <td>.500</td>
                    <td>15.0</td>
                    <td>W4</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>KT Wiz Futures</td>
                    <td>22</td>
                    <td>28</td>
                    <td>.440</td>
                    <td>18.0</td>
                    <td>L3</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Lotte Giants Futures</td>
                    <td>20</td>
                    <td>30</td>
                    <td>.400</td>
                    <td>20.0</td>
                    <td>W2</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>NC Dinos Futures</td>
                    <td>18</td>
                    <td>32</td>
                    <td>.360</td>
                    <td>22.0</td>
                    <td>L4</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Police Baseball Team</td>
                    <td>15</td>
                    <td>35</td>
                    <td>.300</td>
                    <td>25.0</td>
                    <td>L5</td>
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
