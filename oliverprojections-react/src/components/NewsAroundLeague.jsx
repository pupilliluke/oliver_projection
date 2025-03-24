import React from 'react';

const NewsAroundLeague = () => {
  return (
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
  );
};

export default NewsAroundLeague;
