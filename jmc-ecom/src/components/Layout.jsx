import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Routers from '../routers/Routers';
import { useLocation } from 'react-router-dom';
import AdminNav from '../admin/AdminNav';
const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith('/dashboard') ? (
        <>
          <Header />
          <AdminNav />
        </>
      ) : (
        <Header />
      )}
      <>
        <Routers />
      </>
      <Footer />
    </>
  );
};
export default Layout;
