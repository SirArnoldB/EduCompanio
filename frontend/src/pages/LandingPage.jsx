import React from 'react';
import { Button, Typography } from '@mui/material';
import Hero from '../components/landingpage/Hero';
import NavBar from '../components/landingpage/NavBar';
import Testimonials from '../components/landingpage/Testimonials';
import Features from '../components/landingpage/Features';
import Footer from '../components/landingpage/Footer';
import Sponsors from '../components/landingpage/Sponsors';



const LandingPage = () => {


  return (
    <div>
      <NavBar />
      <div style={{padding: '0 10px'}}>
        <Hero />
        <Features />
        <Testimonials />
        <Sponsors />
      </div>
      <Footer />
    </div>
  );     
}

export default LandingPage;
