import React from 'react';
import { useState, useEffect } from 'react';
import '../global.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/yellowblue.jpeg';
import Services from '../components/Servcies';
import ProductList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/jmclogoblk.png';
import useGetData from '../custom-hooks/useGetData';
const NewArt = () => {
  const { data: products } = useGetData('products');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [newProducts, setNewProducts] = useState([products]);
  useEffect(() => {
    const filteredNewProducts = products.filter(
      (item) => item.category === 'New'
    );
    setNewProducts(filteredNewProducts);
  }, [products]);
  return (
    <Helmet title={'New Paintings'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col>
              <div className="hero__img mt-5">
                <img src={heroImg} alt="Featured painting" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h1>Our Newest Artwork</h1>
                <p>
                  Discover the newest and most vibrant paintings created by
                  talented local artists from the heart of New York. We make
                  purchasing new paintings an easy and satisfying process by
                  providing free art consultations and being dedicated to
                  helping both up-and-coming and established artists.
                </p>
                <p>
                  The newest and most intriguing artwork the city has to offer
                  will elevate your home or place of business. Shop with
                  assurance knowing that your purchases support the neighborhood
                  art scene. Visit our gallery of fresh off the brush artwork!
                </p>
                <Link to="../store">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1.5 }}
                    className="buy__btn hero__btn"
                  >
                    Shop The Gallery
                  </motion.button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Paintings</h2>
            </Col>
            <ProductList data={newProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="clock__top-content">
                <h4 className="text-white fs-5 mb-3">
                  Are you a talented New York artist?
                </h4>
                <h3 className="text-white fs-6 mb-3">
                  Here's your chance to get your work out there, were holding
                  open enrollment for NY Artists for another...
                </h3>
              </div>
              <Clock />
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/artsignup">Become an artist</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="Company-logo-limited-sale" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </Helmet>
  );
};

export default NewArt;
