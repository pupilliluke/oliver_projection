import React from 'react';

const Header = () => {
  return (
    <header className="cutom_nav" id="navbar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg menu_nav">
          <a className="navbar-brand" href="index.html">
            <img src="./images/oliver/Flash Stats- Oliver-03.jpg" alt="" className="img-responsive" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="scoreboard.html">Scoreboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="schedule.html">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="player.html">Player Profile</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Minor Gamelogs
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="gamelog.html">2019</a>
                  <a className="dropdown-item" href="gamelog.html">2020</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="gamelog.html">2021</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="team.html">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="standing.html">Team Standing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link srch_btn" href="javscript:void(0)">Search</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;