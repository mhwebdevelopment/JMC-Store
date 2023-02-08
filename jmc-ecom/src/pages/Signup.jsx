import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet';
import { Container, Row, Col, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../custom-hooks/useAuth';
import { motion } from 'framer-motion';
import { sendEmailVerification, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../global.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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
      toast.success('signed up');
      const auth = getAuth();
      sendEmailVerification(auth.currentUser).then(() => {
        toast.success('email verification sent');
      });
      navigate('/home');
    } catch (error) {
      setLoading(false);
      toast.error('something went wrong');
    }
  };
  return (
    <Helmet title="signup">
      <section className="login__section">
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading.....</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h1 className="mb-4">Signup</h1>

                <Form className="auth__form" onSubmit={handleGoogleSignIn}>
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    type="submit"
                    className="buy__btn auth__btn goog__btn mt-4"
                  >
                    <i class="ri-google-fill"></i>
                    <br></br>
                    Signup With Google
                  </motion.button>
                  <p>
                    Already signed up? <Link to="/login">Login</Link>
                  </p>
                  <p>
                    From New York? See how to{' '}
                    <Link to="/artsignup">Become an artist</Link>
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

export default Signup;
