import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Info from '../components/Info';
import Special from '../components/Special';
import Footer from '../components/Footer';
import Gift from '../components/Gift';

const HomePage = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const redirectPayment = () => {
    history.push('/payment');
  }

  return (
    <>
      <Hero redirectPayment={redirectPayment} />
      <Intro />
      <Special redirectPayment={redirectPayment} />
      <Info />
      <Gift redirectPayment={redirectPayment} />
      <Footer />
    </>
  );
}

export default HomePage;
