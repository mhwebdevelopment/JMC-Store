import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Store from '../pages/Store';
import Signup from '../pages/Signup';
import Artsignup from '../pages/Artsignup';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import ArtistDetails from '../pages/ArtistDetails';
import Custom from '../pages/Custom';
import Checkout from '../pages/Checkout';
import Cart from '../pages/Cart';
import Artists from '../admin/Artists';
import CustomArt from '../pages/CustomArt';
import NewArt from '../pages/NewArt';
import ContempArt from '../pages/ContempArt';
import AbstractArt from '../pages/AbstractArt';
import ConceptArt from '../pages/ConceptArt';
import About from '../pages/About';
import Message from '../pages/Message';
import Artistsigned from '../pages/Artistsigned';
import Privacy from '../pages/Privacy';
import Success from '../pages/Success';
import Cancelled from '../pages/Cancelled';
import ProtectedRoute from './ProtectedRoute';
import AddArtist from '../admin/AddArtist';
import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="store" element={<Store />} />
      <Route path="store/:id" element={<ProductDetails />} />
      <Route path="artistdetails/:id" element={<ArtistDetails />} />
      <Route path="custom" element={<Custom />} />
      <Route path="about" element={<About />} />
      <Route path="message-sent" element={<Message />} />
      <Route path="account-requested" element={<Artistsigned />} />
      <Route path="custom-art" element={<CustomArt />} />
      <Route path="new-art" element={<NewArt />} />
      <Route path="contemporary-art" element={<ContempArt />} />
      <Route path="abstract-art" element={<AbstractArt />} />
      <Route path="conceptual-art" element={<ConceptArt />} />
      <Route path="success" element={<Success />} />
      <Route path="cancelled" element={<Cancelled />} />
      <Route path="cart" element={<Cart />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/add-product" element={<AddProducts />} />
        <Route path="dashboard/add-artist" element={<AddArtist />} />
        <Route path="dashboard/users" element={<Users />} />
        <Route path="dashboard/artists" element={<Artists />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="artsignup" element={<Artsignup />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};
export default Routers;
