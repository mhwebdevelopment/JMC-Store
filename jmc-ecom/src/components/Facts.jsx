import React from 'react';
import '../global.css';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import factsData from '../assets/data/factsData';
const Facts = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {factsData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                className="fact__item"
                whileHover={{ scale: 1.1 }}
                style={{ background: `${item.bg}` }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Facts;
