import React, { useEffect } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../global.css';
import useGetData from '../custom-hooks/useGetData';
import ProductsList from '../components/UI/ProductsList';
const Store = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: products } = useGetData('products');

  return (
    <Helmet title="Store">
      <CommonSection title="Our Original Art" />
      <section>
        <Container>
          <Row>
            <Col>
              <div>
                <ul>
                  <li>
                    <h1 className="mb-3">Shop by Category</h1>
                  </li>
                  <li>
                    <Link to="/custom-art">Custom Best Sellers</Link>
                  </li>
                  <li>
                    <Link to="/new-art">New</Link>
                  </li>
                  <li>
                    <Link to="/contemporary-art">Contemporary</Link>
                  </li>
                  <li>
                    <Link to="/abstract-art">Abstract</Link>
                  </li>
                  <li>
                    <Link to="/conceptual-art">Conceptual</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {products.length === 0 ? (
              <h2 className="fs-4 text-center">
                No paintings found?...
                <Link to="/contact" className="cart_empty_link">
                  Request a custom piece
                </Link>
                !
              </h2>
            ) : (
              <ProductsList data={products} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Store;
