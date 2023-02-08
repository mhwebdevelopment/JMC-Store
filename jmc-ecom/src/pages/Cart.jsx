import React, { useEffect } from 'react';
import '../global.css';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title={'Cart'}>
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9" className="cart__empty">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">
                  Nothing here yet...{' '}
                  <Link to="/store" className="cart_empty_link">
                    go shopping
                  </Link>
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                </h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
                <p className="fs-6 mt-2">
                  taxes and shipping will be calculated at checkout
                </p>
              </div>
              <div>
                <Link to="/store">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="buy__btn w-100 mt-3"
                  >
                    Continue Shopping
                  </motion.button>
                </Link>
                <Link to="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="buy__btn w-100 mt-2"
                  >
                    Checkout
                  </motion.button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <motion.td onClick={deleteProduct} whileTap={{ scale: 1.5 }}>
        <i className="ri-delete-bin-line"></i>
      </motion.td>
    </tr>
  );
};

export default Cart;
