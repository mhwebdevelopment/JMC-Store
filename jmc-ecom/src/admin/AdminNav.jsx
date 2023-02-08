import React from 'react';
import { Container, Row } from 'reactstrap';
import '../global.css';
import { NavLink } from 'react-router-dom';
const admin__nav = [
  {
    display: 'Dashboard',
    path: '/dashboard',
  },
  {
    display: 'All Paintings',
    path: '/dashboard/all-products',
  },
  {
    display: 'Users',
    path: '/dashboard/users',
  },
  {
    display: 'Artists',
    path: '/dashboard/artists',
  },
  {
    display: 'Add Painting',
    path: '/dashboard/add-product',
  },
  {
    display: 'Add Artist',
    path: '/dashboard/add-artist',
  },
];
const AdminNav = () => {
  return (
    <>
      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'admin__menu-active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default AdminNav;
