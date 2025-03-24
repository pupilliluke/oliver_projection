import React from 'react';

const LeagueStandings = () => {
  return (
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
              <th></th>
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>Pct</th>
              <th>GB</th>
              <th>STR</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Doosan Bears (F)</td><td>40</td><td>10</td><td>.800</td><td>--</td><td>W6</td></tr>
            <tr><td>2</td><td>Samsung Lions (F)</td><td>38</td><td>12</td><td>.760</td><td>2.0</td><td>W3</td></tr>
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
                
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <button className="toggle-btn">Full Standings</button>
      </div>
    </div>
  );
};

export default LeagueStandings;
