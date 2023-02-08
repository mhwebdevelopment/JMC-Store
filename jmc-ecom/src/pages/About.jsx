import React, { useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from 'framer-motion';
import abtImg from '../assets/images/tall.jpg';
import '../global.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="About">
      <CommonSection title="About" />
      <section className="pt-20">
        <Container>
          <Row>
            <Col lg="8">
              <div className="about__details">
                <h1>About Jonathan Martin Companies</h1>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn mt-5"
                >
                  Call Us Today
                </motion.button>
                <p className="content__paragraph">
                  Our company is dedicated to promoting the work of talented
                  local artists from the New York area. We have a wide selection
                  of original paintings and custom art available for purchase on
                  our website, and we also accept custom art requests for those
                  looking for something specific.
                </p>
                <p className="content__paragraph">
                  In addition to offering a diverse selection of artwork, we
                  also serve as a platform for artists to showcase and sell
                  their work. Our goal is to provide a space for emerging and
                  established artists to share their talent with the world.
                </p>
                <p className="content__paragraph">
                  We have free art consultations to help you choose the right
                  piece for your taste, with a simple call or message we match
                  you with a beautiful piece of art or with the perfect artist
                  to handle any custom project you could think of.
                </p>
                <p className="content__paragraph">
                  The company was founded by a group of art enthusiasts who
                  wanted to make it easier for people to access and appreciate
                  original artwork. We have a passion for supporting artists and
                  helping them reach a wider audience.
                </p>
                <p className="content__paragraph">
                  We believe that art has the power to transform lives and bring
                  people together, and we are committed to providing a
                  high-quality shopping experience for our customers. If you
                  have any questions about our products or services, don't
                  hesitate to contact us. We would be happy to help.
                </p>
                <p className="content__paragraph">
                  Thank you for considering us as your source for New York fine
                  art.
                </p>
              </div>
            </Col>
            <Col lg="2" className="about__image">
              <img src={abtImg} alt="about tall" />
            </Col>
            <Col>
              <div className="google__map">
                <iframe
                  title="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.746590174635!2d-73.57658398432163!3d43.29862828330365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dfd14701e9a1b7%3A0x2a221c28069ad18c!2s85%20Elm%20St%2C%20Hudson%20Falls%2C%20NY%2012839!5e0!3m2!1sen!2sus!4v1675707249006!5m2!1sen!2sus"
                  width="350"
                  height="350"
                  className="mb-5"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
            <Col>
              <h1 className="mb-4 text-center">Get in Touch</h1>
              <Form
                action="https://formsubmit.co/35831dfdc3a4e335058e7d45f2db182c"
                method="POST"
                enctype="multipart/form-data"
                className="about__form text-center"
              >
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
                    type="text"
                    name="message"
                    placeholder="Enter a message"
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
                  value="New Message!"
                ></input>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
