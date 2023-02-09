import React, { useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import logo from '../assets/images/jmclogo.png';
import userIcon from '../assets/images/user-icon.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserAuth } from '../custom-hooks/useAuth';
const nav__links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'store',
    display: 'Store',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
  {
    path: 'about',
    display: 'About',
  },
  {
    path: 'custom',
    display: 'Custom',
  },
  {
    path: 'login',
    display: 'Login/Signup',
  },
];
const Header = () => {
  const { logOut, currentUser } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      toast.error('something went wrong');
    }
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });
  const headerRef = useRef(null);
  const profileActionRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };
  const menuToggle = () => menuRef.current.classList.toggle('active__menu');
  const navigateToCart = () => {
    navigate('cart');
  };
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle('show__profileActions');
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <motion.ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <a href="tel:+15187960046">
                  <i class="ri-phone-line"></i>
                </a>
              </span>
              <span className="fav__icon">
                <a href="mailto:jmcompaniesny@gmail.com">
                  <i class="ri-mail-send-line"></i>
                </a>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={
                    currentUser && currentUser.photoURL
                      ? currentUser.photoURL
                      : userIcon
                  }
                  alt="profile-icon"
                  onClick={toggleProfileActions}
                />
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <div className="d-flex flex-column ">
                      <span onClick={handleLogout}>Logout</span>
                      <span>
                        <Link to="/dashboard">Dashboard</Link>
                      </span>
                    </div>
                  ) : (
                    <div className=" d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
