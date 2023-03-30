import React from 'react';
import './Screen.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';
import { Logo1Icon } from '../assets/images/Logo1Icon';

function NavScrollExample() {
  return (
    <div className="num1Screen ">
      <div className="gradient  ">
        <Navbar className="header" expand="xxl w-100 m-2">
          <Container>
            <Logo1Icon />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll ">
              <div className="me-auto"></div>
              <Nav className=" my-2 my-lg-0 d-flex" navbarScroll>
                <Nav.Link href="#action1" className="text-light ">
                  About us
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  Order site
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  Design
                </Nav.Link>

                <NavDropdown
                  title="SERVICES"
                  id="navbarScrollingDropdown"
                  className="text-light"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2" className="text-light">
                  Contacts
                </Nav.Link>
                <NavDropdown
                  title="RU"
                  id="navbarScrollingDropdown"
                  className="text-light transparent"
                >
                  <NavDropdown.Item href="#action4">UK </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">EN </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">PL </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='mt-4'>
          <Row >
            <Col className="d-flex flex-column mb-3 justify-content-start">
              <div className="webDevelopmentStudio align-items-strat">
                <p>web development studio</p>
              </div>
              <div className="colors d-flex butS justify-content-between p-4 w-100" >
                <div
                  className="but"
                  style={{ backgroundColor: 'rgb(250, 8, 129)' }}
                >
                  <p className="price">question</p>
                </div>
                <div
                  className="but"
                  style={{ backgroundColor: 'rgb(250, 8, 129)' }}
                >
                  <p className="price">price</p>
                </div>
                <div
                  className="but"
                  style={{ backgroundColor: 'rgba(210, 90, 117, 1)' }}
                >
                  <p className="price">Discounts</p>
                </div>
                <div className="but" style={{ backgroundColor: 'salmon' }}>
                  <p className="price">guarantees</p>
                </div>
                <div
                  className="butborder but"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <p className="price ">guarantees</p>
                </div>
              </div>
              <div></div>

              <p className="weAreAExperiencedTeamOfProfessio py-3">
                “ We are a experienced team of professionals for <br /> whom
                website development is not just a job, but a <br />
                favorite thing. Each project is a separate story that we <br />
                live with our client. We delve into the roots of the
                <br />
                company, study its pros and cons.”
              </p>
              <div className='w-100 ps-3'style={{  borderLeft: '2px dashed rgb(240, 224, 245)'}}>

              <p className="websiteDevelopment">
                <strong className="website DevelopmentEmphasis0  text-light me-4">
                  WEBSITE
                </strong>
                DEVELOPMENT
              </p>
              </div>
            </Col>
            <Col style={{  borderLeft: '2px dashed rgb(240, 224, 245)'}}>
              <div className="computer">
                <img
                  alt=""
                  className="computer1"
                  src="https://static.overlay-tech.com/assets/db0af686-1d44-49da-92e1-05ad8fc1897a.png"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-start" >
              <div style={{  borderLeft: '2px dashed rgb(240, 224, 245)'}}>

              <butoon
                className="tOGETTHECONSULTATION btn p-2 ms-2"
                style={{ color: '#fff', backgroundColor: 'salmon' }}
              >
                TO GET THE CONSULTATION
              </butoon>
              </div>
            </Col>
            <Col className="d-flex justify-content-start botnBorder pt-3" >
              <div>
                <p className="websiteDesign me-3">
                  WEBSITE{' '}
                  <strong className="websiteDesignEmphasis1 ms-4">
                    DESIGN
                  </strong>
                </p>
              </div>

              <butoon
                className="tOGETTHECONSULTATION btn p-2 mt-2"
                style={{ color: '#fff', backgroundColor: 'salmon' }}
              >
                TO GET THE CONSULTATION
              </butoon>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default NavScrollExample;
