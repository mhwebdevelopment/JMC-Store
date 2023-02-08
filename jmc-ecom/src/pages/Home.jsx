import React from 'react';
import { useState, useEffect } from 'react';
import '../global.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/abstract2.jpeg';
import Services from '../components/Servcies';
import Facts from '../components/Facts';
import ProductList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/jmclogoblk.png';
import useGetData from '../custom-hooks/useGetData';

const Home = () => {
  const { data: products, loading } = useGetData('products');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [bestSalesProducts, setBestSalesProducts] = useState([products]);
  const [abstractProducts, setAbstractProducts] = useState([products]);
  const [contemporaryProducts, setContemporaryProducts] = useState([products]);
  const [conceptualProducts, setConceptualProducts] = useState([products]);
  const [newProducts, setNewProducts] = useState([products]);
  useEffect(() => {
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'Custom Painting'
    );
    const filteredNewProducts = products.filter(
      (item) => item.category === 'New'
    );
    const filteredAbstractProducts = products.filter(
      (item) => item.category === 'Abstract'
    );
    const filteredContemporaryProducts = products.filter(
      (item) => item.category === 'Contemporary'
    );
    const filteredConceptualProducts = products.filter(
      (item) => item.category === 'Conceptual'
    );
    setConceptualProducts(filteredConceptualProducts);
    setContemporaryProducts(filteredContemporaryProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setAbstractProducts(filteredAbstractProducts);
    setNewProducts(filteredNewProducts);
  }, [products]);
  return (
    <Helmet title={'JMC NY'}>
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
                <h1>New York Original Art</h1>
                <p>
                  Hand crafted paintings by local New York artists. Shop our
                  collection of original artwork or request a custom painting!
                  Request an artist account today to sell your artwork,
                  we&apos;re holding open enrollment for New York residents.
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
      <Facts />
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
      <section id="contemporary" className="contemporary trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Contemporary Art</h2>
            </Col>
            <ProductList data={contemporaryProducts} />
          </Row>
        </Container>
      </section>
      <section id="abstract" className="abstract trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Abstract Paintings</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductList data={abstractProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section id="conceptual" className="conceptual trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Conceptual Paintings</h2>
            </Col>
            <ProductList data={conceptualProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
