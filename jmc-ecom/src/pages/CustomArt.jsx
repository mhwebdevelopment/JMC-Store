import React from 'react';
import { useState, useEffect } from 'react';
import '../global.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/cityline.jpeg';
import Services from '../components/Servcies';
import ProductList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/jmclogoblk.png';
import useGetData from '../custom-hooks/useGetData';

const CustomArt = () => {
  const { data: products } = useGetData('products');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [bestSalesProducts, setBestSalesProducts] = useState([products]);
  useEffect(() => {
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'Custom Painting'
    );
    setBestSalesProducts(filteredBestSalesProducts);
  }, [products]);
  return (
    <Helmet title={'Custom Artwork'}>
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
                <h1>Original Custom Artwork</h1>
                <p>
                  A custom painting created by one of the best local artists in
                  New York is sure to help you realize your vision. In addition
                  to a large selection of original artwork for sale, JMC Art NY
                  also gives you the option to order unique pieces made to suit
                  your individual requirements.
                </p>
                <p>
                  Our mission is to give aspiring and professional artists a
                  platform to share and market their creations while helping you
                  find the ideal painting for your taste. Making ordering
                  personalized art simple and pleasurable by offering free art
                  consultations and having a team of art aficionados. A unique
                  custom piece will celebrate your uniqueness and give your home
                  a special touch.
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
              <h2 className="section__title">
                Our Best Selling Custom Paintings
              </h2>
            </Col>
            <ProductList data={bestSalesProducts} />
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

export default CustomArt;
