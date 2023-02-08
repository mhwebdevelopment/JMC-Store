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
  const { data: artistsData, loading } = useGetData('artists');
  const deleteArtist = async (id) => {
    await deleteDoc(doc(db, 'artists', id));
    toast.success('artist deleted!');
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Artists</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table ">
              <thead>
                <tr className="mobile__dash">
                  <th>Artist Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h5 className="pt-5 fw-bold">You dont have access...</h5>
                ) : (
                  artistsData?.map((artist) => (
                    <tr key={artist.uid}>
                      <td className="mobile__dash">{artist.artistName}</td>
                      <td>{artist.email}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteArtist(artist.uid);
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
