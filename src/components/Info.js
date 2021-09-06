import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const Info = () => {
  return (
    <div className='info__welcome'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={8}>
            <p>
              Whether you’ve been a part of this community from the start, or you’re just getting started, you belong here. With your
              support, we can build a Presidential Center that will revitalize the South Side of Chicago, unite a new generation of
              leaders to move us forward, and work together to change history once more.
            </p>

            <p>Help empower emerging leaders around the world. Make a one-time gift today:</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Info;
