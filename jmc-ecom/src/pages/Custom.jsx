import React, { useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from 'framer-motion';
import customImg from '../assets/images/woman.jpg';
import customImg2 from '../assets/images/faces.jpg';
import '../global.css';

const Custom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Custom">
      <CommonSection title="Custom" />
      <section className="pt-20">
        <Container>
          <Row>
            <Col lg="8">
              <div className="about__details">
                <h1>New York Custom Art</h1>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn mt-5"
                >
                  Call Us Today
                </motion.button>
                <p className="content__paragraph">
                  Looking for a unique piece of art for your home? Our artists
                  have you taken care of, we work closely with our clients to
                  ensure that every aspect of the piece, from the composition to
                  the colors, accurately reflects their desires.
                </p>
                <p className="content__paragraph">
                  If you're looking for a one-of-a-kind piece of art that
                  perfectly reflects your personality and style, you've come to
                  the right place. Our team of talented artists are here to
                  bring your vision to life, whether you are looking for a
                  unique piece of tailored custom art, or just an artist choice
                  to fit your description, we can surely find the best fit for
                  your style!
                </p>
                <p className="content__paragraph">
                  With a wide range of skills and styles at our disposal, we are
                  able to accommodate a variety of requests and tastes.
                  Delivered to you directly from New York hand-crafted by local
                  Artists. We pride ourselves on delivering high-quality,
                  professional results that are sure to impress.
                </p>
                <p className="content__paragraph">
                  Thank you for taking a peek into our custom art studio. We
                  look forward to bringing your creative ideas to life. Call or
                  Message us today to start your custom art project!
                </p>
              </div>
            </Col>
            <Col lg="2" className="about__image">
              <img src={customImg} alt="custom painting of a woman" />
              <img src={customImg2} alt="custom painting of faces" />
            </Col>
            <Col>
              <h1 className="mb-4 text-center">Request a Custom Piece</h1>
              <Form
                action="https://formsubmit.co/35831dfdc3a4e335058e7d45f2db182c"
                method="POST"
                enctype="multipart/form-data"
                className="about__form text-center"
              >
                <FormGroup className="form__group">
                  <input
                    className="form__group"
                    type="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form__group"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form__group"
                    type="number"
                    name="number"
                    placeholder="Enter your phone number"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form__group"
                    type="text"
                    name="Custom Req. Notes"
                    placeholder="Enter your idea..."
                  />
                </FormGroup>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  className="buy__btn about__btn"
                >
                  Send Message
                </motion.button>
                <input
                  type="hidden"
                  name="_next"
                  value="https://jmcartny.com/message-sent"
                ></input>
                <input
                  type="hidden"
                  name="_subject"
                  value="Custom Inquiry!"
                ></input>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Custom;
