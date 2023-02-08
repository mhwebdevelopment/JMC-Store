import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const AddProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [enterTitle, setEnterTitle] = useState('');
  const [enterArtist, setEnterArtist] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = collection(db, 'products');
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
      uploadTask.on(
        () => {
          toast.error('images not uploaded!');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              artist: enterArtist,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success('product successfully added!');
      navigate('/dashboard/all-products');
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
              <h4 className="py-5 ">Loading.......</h4>
            ) : (
              <>
                <h4 className="mb-5">List A Painting</h4>
                <Form className="add__form" onSubmit={addProduct}>
                  <FormGroup className="form__group">
                    <span>Title</span>
                    <input
                      type="text"
                      placeholder="Enter a title..."
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Artist</span>
                    <input
                      type="text"
                      placeholder="Enter the artist name..."
                      value={enterArtist}
                      onChange={(e) => setEnterArtist(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Header</span>
                    <input
                      type="text"
                      placeholder="Enter a simple header description..."
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Enter the full description... ending with 'Check out our other (selected category) Paintings below'..."
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form__group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="$100"
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form__group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2"
                        onChange={(e) => setEnterCategory(e.target.value)}
                      >
                        <option>Select category</option>
                        <option value="Custom Painting">Custom Painting</option>
                        <option value="New">New</option>
                        <option value="Abstract">Abstract</option>
                        <option value="Contemporary">Contemporary</option>
                        <option value="Conceptual">Conceptual</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div>
                    <FormGroup className="form__group ">
                      <span>Image</span>
                      <input
                        type="file"
                        onChange={(e) => setEnterProductImg(e.target.files[0])}
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
                      List Painting
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
export default AddProducts;
