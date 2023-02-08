import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet';
import { Container, Row, Col, Form } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUserAuth } from '../custom-hooks/useAuth';
import { toast } from 'react-toastify';
import '../global.css';

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { googleSignIn } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      setLoading(false);
      toast.success('logged in');
      navigate('/checkout');
    } catch (error) {
      setLoading(false);
      toast.error('something went wrong');
    }
  };
  return (
    <Helmet title="Login">
      <section className="login__section">
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading.....</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h1 className="mb-4">Login</h1>

                <Form className="auth__form" onSubmit={handleGoogleSignIn}>
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    type="submit"
                    className="buy__btn auth__btn goog__btn mt-4"
                  >
                    <i class="ri-google-fill"></i>
                    <br></br>
                    Login With Google
                  </motion.button>
                  <p>
                    No account yet? <Link to="/signup">Signup</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
