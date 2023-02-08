import React from 'react';
import ReactDOM from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.css';
import Lay from './Lay';
import { BrowserRouter } from 'react-router-dom';
import { UserAuthContextProvider } from './custom-hooks/useAuth';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserAuthContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          theme="light"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        <Elements stripe={stripePromise}>
          <Lay />
        </Elements>
      </Provider>
    </BrowserRouter>
  </UserAuthContextProvider>
);
