import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const AddArtist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [artname, setArtname] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const addArtist = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = doc(db, 'artists', uid);
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        () => {
          toast.error('images not uploaded!');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await setDoc(docRef, {
              displayName: username,
              artistName: artname,
              email,
              fullName,
              phoneNumber,
              bio,
              photoURL: downloadURL,
              role: 'artist',
              uid,
            });
          });
        }
      );
      setLoading(false);
      toast.success('artist added!');
      navigate('/dashboard/artists');
    } catch (err) {
      setLoading(false);
      toast.error('product not added! (not authorized)');
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5 ">You don&apos;t have access...</h4>
            ) : (
              <>
                <h4 className="mb-5">Add An Artist</h4>
                <Form className="add__form" onSubmit={addArtist}>
                  <FormGroup className="form__group">
                    <span>Email</span>
                    <input
                      type="text"
                      placeholder="Enter the artist's email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Username</span>
                    <input
                      type="text"
                      placeholder="Enter a username..."
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Artist Name</span>
                    <input
                      type="text"
                      placeholder="Enter the artist's pen name..."
                      value={artname}
                      onChange={(e) => setArtname(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Full Name</span>
                    <input
                      type="text"
                      placeholder="Enter the artist's full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Bio</span>
                    <input
                      type="text"
                      placeholder="Enter a bio..."
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group w-50">
                    <span>Phone Number</span>
                    <input
                      type="number"
                      placeholder="+1(255)4444"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div>
                    <FormGroup className="form__group ">
                      <span>uid</span>
                      <input
                        type="text"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form__group ">
                      <span>Image</span>
                      <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      className="buy__btn about__btn m-5"
                      type="submit"
                    >
                      Add Artist
                    </motion.button>
                  </div>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AddArtist;
