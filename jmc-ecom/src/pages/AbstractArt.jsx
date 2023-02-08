import React from 'react';
import { useState, useEffect } from 'react';
import '../global.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/abstract3.jpg';
import Services from '../components/Servcies';
import ProductList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/jmclogoblk.png';
import useGetData from '../custom-hooks/useGetData';

const AbstractArt = () => {
  const { data: products } = useGetData('products');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [abstractProducts, setAbstractProducts] = useState([products]);
  useEffect(() => {
    const filteredAbstractProducts = products.filter(
      (item) => item.category === 'Abstract'
    );
    setAbstractProducts(filteredAbstractProducts);
  }, [products]);
  return (
    <Helmet title={'Abstract Paintings'}>
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
                <h1>Amazing Abstract Artwork</h1>
                <p>
                  Our online gallery of fine abstract art and abstract paintings
                  is committed to providing a wide selection of these works. We
                  have something to fit every taste, whether you're looking for
                  beautiful monochromatic artworks or vivid, innovative pieces.
                </p>
                <p>
                  This collection features the best abstract art from emerging
                  New York talent. So there's no need to search any further if
                  you're looking for the ideal piece of abstract artwork to
                  complement your area.
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
              <h2 className="section__title">Abstract Paintings</h2>
            </Col>
            <ProductList data={abstractProducts} />
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

export default AbstractArt;
