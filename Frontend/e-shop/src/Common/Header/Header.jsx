import React, { useLayoutEffect } from 'react';
import "../Header/Header.css";
import cart from "../../Assets/Images/cart.png";
import serach from "../../Assets/Images/search.png";
import {Link} from "react-router-dom"
import {useRef} from "react"






function Header() {
 const userlogin = useRef();
 const login = useRef();
 const adminlogin =  useRef();

// For User Header button cotrolls
 useLayoutEffect(()=>{
   let token = localStorage.getItem("token")

    if(token){
        userlogin.current.style.display="flex";
        login.current.style.display="none";
    }else{
        userlogin.current.style.display="none"
        login.current.style.display="flex";
    }
 })

// For Admin Header button cotrolls
 useLayoutEffect(()=>{
    let admin = localStorage.getItem("admin");

    if(admin){
        adminlogin.current.style.display="block";
        userlogin.current.style.display="flex"; 
        login.current.style.display="none";
    }else{
        adminlogin.current.style.display="none"; 
        
    }
 })



  return (
   <>
   <div className="headerdiv">

    <div className="headerlog">
     <img src={cart} alt="" />
     <p>upGrad E-Shop</p> 
    </div>

    <div className="serachbar">
      <img src={serach} alt="" />
      <input type="text" placeholder='Search..'/>

    </div>

    <div className="headerLoginbtns" ref={login}>
   <Link to="/login"> <p>Login</p></Link>
   <Link to="/signup"> <p>Signup</p></Link>
     
    </div>
    
   <div className="headerloginuser" ref={userlogin}>
   <Link to="/home"><p>Home</p></Link> 
   <Link to="/addproduct"> <p id="admin" ref={adminlogin}>Add Product</p></Link>
    <button id='logoutbtn'>LOGOUT</button>


   </div>
   


   </div>
   
   
   </>
  )
}

export default Header