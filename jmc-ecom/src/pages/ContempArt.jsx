import React from 'react';
import { useState, useEffect } from 'react';
import '../global.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/trees.jpg';
import Services from '../components/Servcies';
import ProductList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/jmclogoblk.png';
import useGetData from '../custom-hooks/useGetData';

const ContempArt = () => {
  const { data: products } = useGetData('products');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [contemporaryProducts, setContemporaryProducts] = useState([products]);
  useEffect(() => {
    const filteredContemporaryProducts = products.filter(
      (item) => item.category === 'Contemporary'
    );
    setContemporaryProducts(filteredContemporaryProducts);
  }, [products]);
  return (
    <Helmet title={'Contemporary'}>
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
                <h1>See Contemporary Artwork</h1>
                <p>
                  Our gallery provides a substantial selection of unique
                  contemporary paintings, as well as choices for custom art for
                  individuals seeking something particular. We offer a venue for
                  aspiring and established artists to share their artwork with
                  the world.
                </p>
                <p>
                  We make it simple for you to locate the ideal contemporary
                  painting to match your taste and space thanks to our helpful
                  staff, free art consultations, and contemporary painting
                  experts. We are your go-to source for everything contemporary,
                  whether you're looking for contemporary art, contemporary
                  paintings, or contemporary art in New York.
                </p>
                <Link to="/store">
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
              <h2 className="section__title">Contemporary Art</h2>
            </Col>
            <ProductList data={contemporaryProducts} />
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

export default ContempArt;
