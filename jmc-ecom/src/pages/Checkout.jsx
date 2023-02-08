import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import StripeCheckout from '../components/StripeCheckout';

import '../global.css';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row className="checkout__step">
            <Col lg="4">
              <div>
                <div className="checkout__cart">
                  <h6>
                    Total Qty: <span>{totalQty} items</span>
                  </h6>
                  <h6>
                    Subtotal: <span>${totalAmount}</span>
                  </h6>
                  <h6>
                    <span>Shipping: </span>
                    <span>Calculated in next step</span>
                  </h6>

                  <h4>
                    Total Cost: <span>${totalAmount}</span>
                  </h4>
                  <StripeCheckout />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
