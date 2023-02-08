import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from 'framer-motion';
import '../global.css';

const Message = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Success">
      <CommonSection title="Message Sent!" />
      <section className="pt-20">
        <Container>
          <Row>
            <Col lg="8">
              <div className="about__details">
                <h1>Your message was sent! We will be responding shortly...</h1>
                <Link to="/store">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="buy__btn mt-5"
                  >
                    Keep Browsing
                  </motion.button>
                </Link>
                <p className="content__paragraph">
                  You&apos;ll recieve a response email in the next 1-5 business
                  days, we look forward to speaking with you and thank you for
                  taking the time out of your day to reach out
                </p>
                <p className="content__paragraph">
                  We greatly appreciate your business and are looking forward to
                  continuing to meet your needs as a fine art connoisseur. Feel
                  free to reach out with any other custom ideas or inquiries,
                  our ears are always open...
                </p>
                <p className="content__paragraph">
                  Thank you for considering us as your source for New York fine
                  art
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Message;
