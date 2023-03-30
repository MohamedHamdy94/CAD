import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { Logo1Icon } from '../assets/images/Logo1Icon';
const Footer = () => {
  return (
    <footer className="gradent mt-5">
      <div className="w-100 d-flex  justify-content-center ">
        <Row className="footerGrid w-75 pt-5">
          <Col className="footerGrid1">
            <div className="Logo1Icon">
              <Logo1Icon className="Logo1Icon" />
            </div>
            <h3 className="textBlock22 pt-5">© 2023 CAD. All rights reserved</h3>
          </Col>
          <Col className="footerGrid2">
            <ul>
              <li>
                <h4>OUR CONTACTS</h4>
              </li>

              <li>Framework</li>
              <li>Online store</li>
              <li>Business card site</li>
              <li>Corporate website</li>
              <li>Landing Page</li>
            </ul>
          </Col>
          <Col className="footerGrid3">
            <ul>
              <li>
                <h4>MARKETING</h4>
              </li>

              <li>Framework</li>
              <li>Online store</li>
              <li>Business card site</li>
              <li>Corporate website</li>
              <li>Landing Page</li>
            </ul>
          </Col>
          <Col className="footerGrid4">
            <ul>
              <h4>SERVICES</h4>
              <li>Framework</li>
              <li>Online store</li>
              <li>Business card site</li>
              <li>Corporate website</li>
              <li>Landing Page</li>
            </ul>
          </Col>
          <Col className="footerGrid5">
            <ul>
              <h4>OUR CONTACTS</h4>
              <li>Schedule:</li>
              <li>Online storeMon-Fri: 09:00 - 21:00</li>
              <li>Sat-Sun: 10:00 - 18:00</li>
              <li>Landing Page</li>
              <li>
              <img alt="" className='footerImage'src='/assets/_725397.jpg' />
              <img alt="" className='footerImage'src='/assets/_508225.jpg' />
              <img alt="" className='footerImage'src='/assets/instagram_logo_thin_icon_17170.jpg' />
              </li>

            </ul>
          </Col>
        </Row>
      </div>

    
    </footer>
  );
};

export default Footer;
