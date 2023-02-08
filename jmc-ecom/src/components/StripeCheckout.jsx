import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { fetchFromAPI } from '../helper';
import { motion } from 'framer-motion';
const StripeCheckout = () => {
  const [email, setEmail] = useState();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const stripe = useStripe();
  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price * 100,
          product_data: {
            name: item.productName,
            description: item.description,
          },
        },
      };
    });
    const response = await fetchFromAPI('create-checkout-session', {
      body: { line_items, customer_email: email },
    });

    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleGuestCheckout}>
      <div className="form__group mt-4">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          value={email}
        />
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="buy__btn auth__btn w-100"
          type="submit"
        >
          Place an order
        </motion.button>
      </div>
    </form>
  );
};
export default StripeCheckout;
