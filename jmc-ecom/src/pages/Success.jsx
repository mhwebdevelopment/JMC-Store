import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from 'framer-motion';
import '../global.css';

const Success = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Success">
      <CommonSection title="Order Completed!" />
      <section className="pt-20">
        <Container>
          <Row>
            <Col lg="8">
              <div className="about__details">
                <h1>Congrats! Your painting is on its way...</h1>
                <Link to="/store">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="buy__btn mt-5"
                  >
                    Keep Browsing
                  </motion.button>
                </Link>
                <p className="content__paragraph">
                  You&apos;ll recieve a confirmation email from stripe
                  immediately and another in the next 1-5 business days with
                  your tracking number and shipping confirmation
                </p>
                <p className="content__paragraph">
                  We greatly appreciate your business and are looking forward to
                  continuing to meet your needs as a fine art connoisseur. Feel
                  free to reach out with any custom ideas, our artists would
                  love to make them come to life
                </p>
                <p className="content__paragraph">
                  Thank you for choosing us as your source for New York fine art
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Success;
