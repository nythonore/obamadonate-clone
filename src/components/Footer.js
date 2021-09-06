import React from 'react';
import { Image } from 'react-bootstrap';

import Footer1 from '../assets/images/footer-1.webp';
import Footer2 from '../assets/images/footer-2.webp';
import Footer3 from '../assets/images/footer-3.webp';
import Footer4 from '../assets/images/footer-4.webp';
import Footer5 from '../assets/images/footer-5.webp';
import Footer6 from '../assets/images/footer-6.webp';

const Footer = () => {
  return (
    <div className='footer__home d-flex pt-5'>
      <Image src={Footer1} alt='Footer-Image-1' width='16.5%' className='img-fluid' />
      <Image src={Footer2} alt='Footer-Image-2' width='16.5%' className='img-fluid' />
      <Image src={Footer3} alt='Footer-Image-3' width='16.5%' className='img-fluid' />
      <Image src={Footer4} alt='Footer-Image-4' width='16.5%' className='img-fluid' />
      <Image src={Footer5} alt='Footer-Image-5' width='16.5%' className='img-fluid' />
      <Image src={Footer6} alt='Footer-Image-6' width='17.5%' className='img-fluid' />
    </div>
  );
}

export default Footer;
