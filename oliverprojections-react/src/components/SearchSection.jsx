import React from 'react';
import './../styles/style.css';

const SearchSection = () => {
  return (
    <div className="search_body">
      <div className="search_box">
        <form action="">
          <div className="form-group">
            <input type="text" className="form-control search_control" placeholder="Search here" />
          </div>
          <div className="search">
            <button>Search</button>
          </div>
        </form>
      </div>
      <div className="close_search">
        <img src="images/x-button.svg" alt="" />
      </div>
    </div>
  );
};

export default SearchSection;