import React from 'react';
import '../global.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import paymentImg from '../assets/images/payment.png';
import logoImg from '../assets/images/jmclogoblk.png';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h4 className="quick__links-title text-white">
                  Jonathan Martin Companies
                </h4>
              </div>
            </div>
            <p className="footer__text">
              With a simple call or message we can match you with a beautiful
              piece of art or with the perfect artist to handle any custom
              project you could think of.
              <img src={paymentImg} alt="payment-types" />
            </p>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/custom-art">Custom Paintings</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/new-art">New Arrivals</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/contemporary-art">Contemporary Art</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/abstract-art">Abstract Paintings</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/conceptual-art">Conceptual Art</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/store">Store</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login/Signup</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/artsignup">Become an artist</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/custom">Custom Requests</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/about">About</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <a href="https://www.google.com/maps/place/85+Elm+St,+Hudson+Falls,+NY+12839/@43.2986283,-73.576584,17z/data=!3m1!4b1!4m5!3m4!1s0x89dfd14701e9a1b7:0x2a221c28069ad18c!8m2!3d43.2986244!4d-73.5743953">
                    <p>85 Elm St, Hudson Falls, NY 12839</p>
                  </a>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <a href="tel:+15187960046">
                    <p>+1 (518) 796-0046</p>
                  </a>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <a href="mailto:jmcompaniesny@gmail.com">
                    <p>jmcompaniesny@gmail.com</p>
                  </a>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-facebook-circle-fill"></i>
                  </span>
                  <a href="https://www.facebook.com/JonathanMartinCompanies/">
                    <p>Facebook</p>
                  </a>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-instagram-fill"></i>
                  </span>
                  <a href="https://www.instagram.com/jmcartny/">
                    <p>Instagram</p>
                  </a>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-linkedin-box-fill"></i>
                  </span>
                  <a href="https://www.linkedin.com/in/jmcartny">
                    <p>LinkedIn</p>
                  </a>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2.5" className="mb-2" md="2">
            <div className="footer__logo">
              <a href="/">
                <img src={logoImg} alt="large footer logo" />
              </a>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__line"></div>
            <p className="footer__copyright">
              &copy; {year} Jonathan Martin Companies All Rights Reserved.
              Website by |{' '}
              <a href="https://www.mhwebdevelopment.com">MH Web Development</a>{' '}
              | <a href="/privacy">Privacy Policy & Terms</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
