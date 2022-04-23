import React from 'react';
import './Feature.css';

const Feature = ({feature}) => {
  const {icon, title, details} = feature;
  return (
    <div className='feature'>
      <img src={icon} alt="" />
      <h4>{title}</h4>
      <p>{details}</p>
    </div>
  );
};

export default Feature;