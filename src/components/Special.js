import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Plan1 from '../assets/images/plan-1.webp';
import Payment1 from '../assets/images/payment-1.webp';

import Plan2 from '../assets/images/plan-2.webp';
import Payment2 from '../assets/images/payment-2.webp';

import Plan3 from '../assets/images/plan-3.webp';
import Payment3 from '../assets/images/payment-3.webp';

import Plan4 from '../assets/images/plan-4.webp';
import Payment4 from '../assets/images/payment-4.webp';

const Special = ({ redirectPayment }) => {
  return (
    <div className='special__home py-5'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={10}>
            <Row>
              <Col className='col-lg-3 col-md-3 col-sm-6 col-12' onClick={redirectPayment}>
                <div class="plan-box text-center p-3 mb-3">
                  <span>$100 Monthly</span>
                  <Image src={Plan1} alt="$100 Monthly" width='100%' class="img-fluid amount" />
                  <span class="mt-1 mb-3">Carry the Obama <br /> center with you</span>
                  <Image src={Payment1} alt="Carry the Obama center with you" width='100%' class="img-fluid image" />
                </div>
              </Col>

              <Col className='col-lg-3 col-md-3 col-sm-6 col-12' onClick={redirectPayment}>
                <div class="plan-box text-center p-3 mb-3">
                  <span>$44 Monthly</span>
                  <Image src={Plan2} alt="$44 Monthly" width='100%' class="img-fluid amount" />
                  <span class="mt-1 mb-3">A colorful take on the <br /> original</span>
                  <Image src={Payment2} alt="A colorful take on the original" width='100%' class="img-fluid image" />
                </div>
              </Col>

              <Col className='col-lg-3 col-md-3 col-sm-6 col-12' onClick={redirectPayment}>
                <div class="plan-box text-center p-3 mb-3">
                  <span>$25 Monthly</span>
                  <Image src={Plan3} alt="$25 Monthly" width='100%' class="img-fluid amount" />
                  <span class="mt-1 mb-3">A Chicago original: <br /> Custom Field Notes</span>
                  <Image src={Payment3} alt="A Chicago original: Custom Field Notes" width='100%' class="img-fluid image" />
                </div>
              </Col>

              <Col className='col-lg-3 col-md-3 col-sm-6 col-12' onClick={redirectPayment}>
                <div class="plan-box text-center p-3">
                  <span>$10 Monthly</span>
                  <Image src={Plan4} alt="$10 Monthly" width='100%' class="img-fluid amount" />
                  <span class="mt-1 mb-3">A limited-edition <br /> sticker set</span>
                  <Image src={Payment4} alt="A limited-edition sticker set" width='100%' class="img-fluid image" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Special;
