import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const Intro = () => {
  return (
    <div className='intro__welcome mt-5'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={10} className='text-center'>
            <h2>Let's build this Foundation together.</h2>

            <p className='mt-3'>
              Become a monthly contributor and keep an eye on your mailbox <br />
              for a token of appreciation sent straight from the Obama <br />
              Foundation’s Chicago HQ. Choose your contribution below.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
