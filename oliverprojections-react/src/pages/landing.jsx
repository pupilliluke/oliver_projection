import React from 'react';
import './../styles/Landing.css';
import './../styles/style.css';
import './../styles/responsive.css';
import TopPlayers from './../components/TopPlayers'; 
import LeagueStandings from './../components/LeagueStandings'; 
import PremiumAnalytics from './../components/PremiumAnalytics';
import MLBScores from './../components/MLBScores'; 
import FantasyBaseball from './../components/FantasyBaseball'; 
import NewsAroundLeague from './../components/NewsAroundLeague'; 


// combine ball hit towards 3 different slices of field, what quality of the ball hit, color coded
//need kanban for oliver projections
//player cards - text jake about features
//recruiting optimizer - data points for optimal times to watch players based on location,performance,schedule, opponent, pitcher success
//how much a player walks, strikes out, steals bases, etc
//player focus - colleges- recruiting (playing stats, prep scouting metrics)  || advanced scouting (giving coach report on opponents, batter/pitcher matchup, how fast, how hard they throw, etc)




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
        <TopPlayers /> 

        {/* Interactive Standings */}
        <LeagueStandings />

        {/* Premium Analytics CTA */}
        <PremiumAnalytics />
      </div>

      <div className="container">
        <MLBScores /> 

        <FantasyBaseball />

        <NewsAroundLeague />
      </div>

      <div id="test">
      <h1> Exit Velocity vs Sweet Spot</h1>
      <iframe
        src="../graph.html"
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="Graph"
      ></iframe>
      </div>


      <footer className="footer">
        <p>&copy; 2025 Flash Stats. All rights reserved.</p>
      </footer>
    </>

    
  );
};

export default Landing;
