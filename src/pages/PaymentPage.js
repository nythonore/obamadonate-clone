import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroBanner from '../components/HeroBanner';
import PaymentForm from '../components/PaymentForm';
import PaymentInfo from '../components/PaymentInfo';

const PaymentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroBanner />

      <Container>
        <Row className='justify-content-center'>
          <Col md={10}>
            <Row>
              <Col md={7}>
                <div className='mobile-view'>
                  <Col md={12}>
                    <PaymentInfo />
                  </Col>
                </div>

                <PaymentForm />
              </Col>

              <Col md={5}>
                <div className='web-view'>
                  <PaymentInfo />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PaymentPage;
