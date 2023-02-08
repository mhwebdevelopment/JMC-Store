import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../global.css';

const Artsignup = () => {
  const [loading] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Artist Signup">
      <section className="login__section">
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading.....</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h1 className="mb-4">Artist Signup</h1>
                <Form
                  action="https://formsubmit.co/35831dfdc3a4e335058e7d45f2db182c"
                  method="POST"
                  enctype="multipart/form-data"
                  className="auth__form"
                >
                  <FormGroup className="form__group">
                    <input
                      className="form__group"
                      type="email"
                      name="email"
                      placeholder="Enter the email on your user account"
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      className="form__group"
                      type="text"
                      name="username"
                      placeholder="Enter a username"
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      className="form__group"
                      type="text"
                      name="artist name"
                      placeholder="Enter a pen name"
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      className="form__group"
                      type="text"
                      name="full name"
                      placeholder="Enter your full name"
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      className="form__group"
                      type="text"
                      name="bio"
                      placeholder="Enter a bio"
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      className="form__group"
                      type="number"
                      name="phone number"
                      placeholder="Enter your phone number"
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Work Sample</span>
                    <input
                      type="file"
                      name="sample"
                      accept="image/png, image/jpg, image/jpeg"
                    />
                  </FormGroup>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    className="buy__btn auth__btn w-80"
                  >
                    Request an Account
                  </motion.button>
                  <p className="m-4">
                    *you will get a response via email within 1-5 business days*
                  </p>
                  <p>
                    Already signed up? <Link to="/login">Login</Link>
                  </p>
                  <p>
                    Want an account first? <Link to="/signup">Signup</Link>
                  </p>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://jmcartny.com/account-requested"
                  ></input>
                  <input
                    type="hidden"
                    name="_subject"
                    value="Artist Request!"
                  ></input>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Artsignup;
