import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from 'framer-motion';
import '../global.css';

const Artistsigned = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Success">
      <CommonSection title="Account Request Sent!" />
      <section className="pt-20">
        <Container>
          <Row>
            <Col lg="8">
              <div className="about__details">
                <h1>
                  Your request for an account was sent! We will be responding as
                  soon as we can...
                </h1>
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="buy__btn mt-5"
                  >
                    Signup for a User Account
                  </motion.button>
                </Link>
                <p className="content__paragraph">
                  Make sure you create a user account with the email you
                  supplied, if not you will be asked to do so upon approval, you
                  can do that now with the signup button above...
                </p>
                <p className="content__paragraph">
                  You&apos;ll recieve a response email in the next 1-5 business
                  days, we look forward to speaking with you and thank you for
                  taking the time out of your day to reach out
                </p>
                <p className="content__paragraph">
                  Thank you for making us your trusted platform to sell your
                  art!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Artistsigned;
