import React from 'react';
import '../global.css';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import serviceData from '../assets/data/serviceData';
const Servcies = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                className="service__item"
                whileHover={{ scale: 1.1 }}
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
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
export default Servcies;
