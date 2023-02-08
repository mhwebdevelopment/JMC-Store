import React from 'react';
import { motion } from 'framer-motion';
import '../../global.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success('Added To Cart');
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <Link to={`/store/${item.id}`}>
          <div className="product__image">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="Painting For Sale"
            />
          </div>
          <div className="p-2 product__info">
            <h3 className="product__name">{item.productName}</h3>
          </div>
        </Link>
        <span className="text-center d-block">
          <p4>{item.category}</p4>
        </span>
        <span className="text-center d-block">{item.artist}</span>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileHover={{ scale: 1.5 }} onClick={addToCart}>
            <i class="ri-add-circle-fill"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};
export default ProductCard;
