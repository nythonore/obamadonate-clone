import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Gift = ({ redirectPayment }) => {
  const amount = [10, 25, 50, 100, 250, 500];

  return (
    <div className='gift__home py-5'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={7}>
            <h2 class="text-center">Make a one-time gift today</h2>

            <Form className='mt-4'>
              <Row className='plans-btn'>
                {
                  amount.map((data, key) => (
                    <Col key={key} sm={4} className='mb-3' onClick={redirectPayment}>
                      <Button className='w-100 btn-block'>${data}</Button>
                    </Col>
                  ))
                }
              </Row>

              <Row className='my-3'>
                <Col md={8}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Name your own amount, may be $44?" className='amount' />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <div className='d-flex justify-content-end mt-2'>
                    <Form.Group>
                      <Form.Check type="checkbox" label="I'll cover my transation fees." />
                    </Form.Group>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Button className='w-100 btn-block donate' onClick={redirectPayment}>Donate</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gift;
