"use client"
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../components/Hero';
import Scanned from '../components/Scanned';
import Works from '../components/Works';
import Sales from '../components/Sales';
import Footer from '../../components/footer/footer';

const Home = () => {
  return (
    <div className='dark:bg-[#011A3B] bg-white dark:text-white overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Scanned/>
      <Works />
      <Sales />
      <Footer />
    </div>
  );
};

export default Home;
