import React from 'react';

const TopPlayers = () => {
  return (
    <div className="column">
      <h2 id="movedDown">Top Players</h2>
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
            {/* <th>WHIP</th> */}
          </tr>
        </thead>
        <tbody>
          <tr><td>Ethan Calder</td><td>0.75</td><td>2</td><td>15</td><td>3</td><td>.190</td></tr>
          <tr><td>Noah Chapman</td><td>5.72</td><td>4</td><td>22</td><td>10</td><td>.241</td></tr>
          <tr><td>Ethan Calder</td><td>0.75</td><td>2</td><td>15</td><td>3</td><td>.190</td></tr>
              <tr><td>Noah Chapman</td><td>5.72</td><td>4</td><td>22</td><td>10</td><td>.241</td></tr>
              <tr><td>Brad Pruett</td><td>1.42</td><td>3</td><td>8</td><td>2</td><td>.205</td></tr>
              <tr><td>Jace LaViolette</td><td>0.75</td><td>2</td><td>12</td><td>4</td><td>.178</td></tr>
              <tr><td>Cam Cannarella</td><td>5.72</td><td>3</td><td>20</td><td>8</td><td>.241</td></tr>
              <tr><td>Ethan Petry</td><td>1.42</td><td>3</td><td>10</td><td>3</td><td>.215</td></tr>
              <tr><td>Jamie Arnold</td><td>0.75</td><td>2</td><td>14</td><td>5</td><td>.183</td></tr>
              <tr><td>Luke Stevenson</td><td>5.72</td><td>3</td><td>18</td><td>7</td><td>.241</td></tr>
              <tr><td>Wehiwa Aloy</td><td>1.42</td><td>3</td><td>9</td><td>2</td><td>.198</td></tr>
              <tr><td>Max Bristow</td><td>3.25</td><td>4</td><td>11</td><td>6</td><td>.220</td></tr>
              <tr><td>Jordan McKenzie</td><td>2.89</td><td>5</td><td>16</td><td>4</td><td>.195</td></tr>
              <tr><td>Tyler Riggins</td><td>4.12</td><td>3</td><td>9</td><td>5</td><td>.230</td></tr>
              <tr><td>Chris Delgado</td><td>1.95</td><td>2</td><td>13</td><td>2</td><td>.175</td></tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <button className="toggle-btn">View More</button>
    </div>
  );
};

export default TopPlayers;
