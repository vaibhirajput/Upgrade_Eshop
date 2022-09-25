import React from 'react';
import './App.css';
import {BrowserRouter, Route , Routes} from "react-router-dom";
import ProtectedRoutes from './ProtectRoutes/ProtectedRoutes';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login"
import Signup from './Components/Signup/Signup';
import Product from './Components/Product/Product'
import Productdetail from "./Components/ProductDetails/ProductDetails"
import Order from "./Components/Order/Order"
import Header from './Common/Header/Header';
import Address from './Components/Address/Address';
import AdminProtectedRoute from './ProtectRoutes/AdminProtectedRoute';
import AddProduct from './Components/AddProduct/AddProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import Footer from './Common/Footer/Footer';







function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route exact path='/'  element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />

      <Route exact path="/home"  element={<ProtectedRoutes Component={Home}/>} />
      <Route exact path="/product/:category"  element={<ProtectedRoutes Component={Product}/>} />
      <Route exact path="/productdetail/:id"  element={<ProtectedRoutes Component={Productdetail}/>} />
      <Route exact path="/order/:id"  element={<ProtectedRoutes Component={Order}/>} />
      <Route exact path="/address/:id"  element={<ProtectedRoutes Component={Address}/>} />
      <Route exact path="/addproduct"  element={<AdminProtectedRoute Adminprotect={AddProduct}/>} />
      <Route exact path="/editproduct/:id"  element={<AdminProtectedRoute Adminprotect={EditProduct}/>} />
      <Route path="*" element={<ProtectedRoutes Component={Home}/>}/>
     </Routes>
       <Footer/>
     </BrowserRouter>


    
    
    </>
  );
}

export default App;
