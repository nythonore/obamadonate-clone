import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './index.css';

const Hero = ({ redirectPayment }) => {
  return (
    <div className='hero__welcome py-5 d-flex align-items-center justify-content-center'>
      <Container>
        <Row>
          <Col md={12}>
            <center>
              <Col md={5}><h2 className='text-center'>Empower Leaders and Changemakers</h2></Col>

              <div className='mt-5'>
                <Button className='px-4' onClick={redirectPayment}>Become a Monthly <br /> Contributor</Button> &nbsp;
                <Button className='px-4' onClick={redirectPayment}>Become a Monthly <br /> Contributor</Button>
              </div>
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero;
