import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';
import '../global.css';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [tab, setTab] = useState('desc');
  const dispatch = useDispatch();
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
    artist,
    price,
    description,
    shortDesc,
    category,
  } = product;
  const relatedProducts = products.filter((item) => item.category === category);
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl,
        productName,
        price,
      })
    );
    toast.success('Product Added Successfully');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-20">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="Selected Painting ID"></img>
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <p>
                  By: <Link to={`/artistdetails/${id}`}>{artist}</Link>
                </p>

                <div className="d-flex align-items-center gap-5 mt-2">
                  <span className="product__price">${price}</span>
                  <span>
                    Category: <b className="product__category">{category}</b>
                  </span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn mt-5"
                  onClick={addToCart}
                >
                  Add To Cart
                </motion.button>
              </div>
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
                  className={`${tab === 'artist' ? 'active__tab' : ''}`}
                  onClick={() => setTab('artist')}
                >
                  The Artist
                </h6>
              </div>
              {tab === 'desc' ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      <li className="mb-4">
                        <span>Painting By: {artist}</span>
                        <p>{description}</p>
                      </li>
                    </ul>
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

export default ProductDetails;
