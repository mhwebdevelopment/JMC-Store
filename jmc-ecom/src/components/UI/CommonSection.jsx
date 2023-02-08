import React from 'react';
import { Container } from 'reactstrap';
import '../../global.css';
const CommonSection = ({ title }) => {
  return (
    <section className="title__section">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};
export default CommonSection;
