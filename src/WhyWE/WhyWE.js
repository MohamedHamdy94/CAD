import React from 'react';
import './MaskGroup.css';

import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import img1 from '../assets/images/confidentAttractiveCaucasianGu.jpg';
import img2 from '../assets/images/beautifulYoungSexyWomanInALigh.jpg';

const WhyWE = () => {
  return (
    <Container className="contant mt-5 mb-3">
      <p className="whywy">WHY WE</p>
      <div className="bord"></div>
      <h5 className="textBlock">
        We are a experienced team of professionals for whom website development
        is not just a job, but a favorite thing. Each project is a separate
        story that we live with our client. We delve into the roots of the
        company, study its pros and cons. And only after that we begin to create
        what is really necessary for a successful existence.
      </h5>
      <Row className="mt-5">
        <Col className="d-flex align-items-center">
          <div className=" me-3">
            <img alt="" className="groupTwo" src={img1} />
          </div>
          <h3 className="textBlock3">
            We are a experienced team of professionals for whom website
            development is not just a job, but a favorite thing.{' '}
          </h3>
        </Col>
        <Col className="d-flex align-items-center">
          <div className=" me-3">
            <img alt="" className="groupTwo" src={img2} />
          </div>
          <p className="textBlock3">
            We are a experienced team of professionals for whom website
            development is not just a job, but a favorite thing.{' '}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyWE;
