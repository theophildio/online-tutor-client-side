import React from 'react';
import './Ratings.css';
import Stars from '../../../images/icons/stars-white.png';

const Ratings = () => {
  return (
    <section className='ratings'>
      <div className="ratings-container">
        <h2>Over 12,000 5 Star Ratings</h2>
        <hr />
        <img src={Stars} alt="5 Stars Ratings" />
        <p><small>Rated 5/5 by 12,000 Students</small></p>
      </div>
    </section>
  );
};

export default Ratings;