import './App.css';

import Navbar from './components/Navbar';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/Home';
// import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import AdminOrders from './pages/Admin/AdminOrders';




const App = () => {

  return (
    <div>

      <BrowserRouter >
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="buyer" element={<Dashboard />} />
            <Route path="buyer/orders" element={<Orders />} />
            <Route path="buyer/profile" element={<Profile />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="seller" element={<AdminDashboard />} />
            <Route path="seller/create-category" element={<CreateCategory/>} />
            <Route path="seller/create-product" element={<CreateProduct />} />
            <Route path="seller/products" element={<Products/>} />
            <Route path="seller/product/:slug" element={<UpdateProduct />} />
            <Route path="seller/users" element={<Users />} />
            <Route path="seller/orders" element={<AdminOrders />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword  />} />
          <Route path="/signup" element={<Signup  />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer /> */}

      </BrowserRouter>
    </div>
  )
}
export default App;
