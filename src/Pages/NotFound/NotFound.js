import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='not-found'>
      <h1>Oops!</h1>
      <h3>404 - Page not found</h3>
      <p>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavaiable</p>
      <button onClick={() => navigate('/')} className="tutor-btn">go to homepage</button>
    </div>
  );
};

export default NotFound;