import React from 'react';
import Cources from '../Cources/Cources';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Features from './Features/Features';
import './Home.css';
import Ratings from './Ratings/Ratings';

const Home = () => {
  return (
    <main className='home'>
      <Banner></Banner>
      <Features></Features>
      <Cources></Cources>
      <Contact></Contact>
    </main>
  );
};

export default Home;