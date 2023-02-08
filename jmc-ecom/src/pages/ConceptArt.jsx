import React from 'react';
import { useState, useEffect } from 'react';
import '../global.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/bluetree.jpeg';
import Services from '../components/Servcies';
import ProductList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/jmclogoblk.png';
import useGetData from '../custom-hooks/useGetData';

const ConceptArt = () => {
  const { data: products } = useGetData('products');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [conceptualProducts, setConceptualProducts] = useState([products]);
  useEffect(() => {
    const filteredConceptualProducts = products.filter(
      (item) => item.category === 'Conceptual'
    );
    setConceptualProducts(filteredConceptualProducts);
  }, [products]);
  return (
    <Helmet title={'New Paintings'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col>
              <div className="hero__img">
                <img src={heroImg} alt="Featured painting" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h1>The Conceptual Collection</h1>
                <p>
                  Browse our collection of conceptual paintings from the
                  talented artists of New York. Our knowledgeable team provides
                  free art consultations and is always available to answer any
                  questions or help you choose the right piece for your taste.
                </p>
                <p>
                  Whether you're searching for conceptual artwork, conceptual
                  paintings, or conceptual art in New York, you'll find it all
                  here. Join us on our mission to support artists, bring people
                  together through the power of art
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
              <h2 className="section__title">Conceptual Art</h2>
            </Col>
            <ProductList data={conceptualProducts} />
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

export default ConceptArt;
