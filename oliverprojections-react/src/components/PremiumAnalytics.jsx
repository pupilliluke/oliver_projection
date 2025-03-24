import React from 'react';

const PremiumAnalytics = () => {
  return (
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
  );
};

export default PremiumAnalytics;
