import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
const Users = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: usersData, loading } = useGetData('users');

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    toast.success('user deleted!');
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table ">
              <thead>
                <tr className="mobile__dash">
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h5 className="pt-5 fw-bold">You dont have access...</h5>
                ) : (
                  usersData?.map((user) => (
                    <tr key={user.uid}>
                      <td className="mobile__dash">{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteUser(user.uid);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Users;
