import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from 'framer-motion';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';
import '../global.css';

const ArtistDetails = () => {
  const [product, setProduct] = useState({});
  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();

  const { data: products } = useGetData('products');

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('no product!');
      }
    };

    getProduct();
  }, [id]);

  const {
    imgUrl,
    productName,
    price,
    artist,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
      avgRating,
    };

    console.log(reviewObj);
    toast.success('Review submitted');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success('Product added successfully');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={productName}>
      <CommonSection title={artist} />
      <section className="pt-20">
        <Container>
          <Row>
            <Col lg="6">
              <div className="product__details">
                <h1>About The Artist</h1>
                <h2>- {productName}</h2>
                <p className="mt-3">{description}</p>
                <div className="d-flex align-items-center gap-5 mt-2">
                  <span className="product__price">${price}</span>
                  <span>
                    Category: <b className="product__category">{category}</b>
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn mt-5"
                  onClick={addToCart}
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
            <Col lg="6">
              <img src={imgUrl} alt="Selected Painting ID"></img>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active__tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Reviews
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className="tab__content mt-5">
                  <p>{shortDesc}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    {
                      <ul>
                        {reviews?.map((item, index) => (
                          <li kew={index} className="mb-4">
                            <h6>{item.avgRating}</h6>
                            <span>{item.rating} ( rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>
                    }

                    <div className="about__form text-center">
                      <h4 className="text-center text-white mb-5">
                        Leave us your experience
                      </h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn about__btn"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">You may also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ArtistDetails;
