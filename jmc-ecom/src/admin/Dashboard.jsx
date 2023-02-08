import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../global.css';
import useGetData from '../custom-hooks/useGetData';
const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: products } = useGetData('products');
  const { data: users } = useGetData('users');
  const { data: artists } = useGetData('artists');
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Total Sales</h5>
                <span>$1.7M</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products__box">
                <h5>Total Products</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users__box">
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="artists__box">
                <h5>Total Artists</h5>
                <span>{artists.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Dashboard;
