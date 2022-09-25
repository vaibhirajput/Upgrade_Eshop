import React from 'react'
import {useNavigate} from "react-router-dom";

function ProtectedRoutes(props) {
   const {Component} = props;
   const navigate = useNavigate();

  
    let token = localStorage.getItem("token");
    if(!token){
     return  navigate('/');
    }

   


  return  <Component/>
    
   
  
  
}

export default ProtectedRoutes;