import React from 'react'
import {useNavigate} from "react-router-dom";

function AdminProtectedRoute(props) {
   const {Adminprotect} = props;
   const navigate = useNavigate();

  
    let ava = localStorage.getItem("admin");
    if(!ava){
     return  navigate('/');
    }

   


  return  <Adminprotect/>
    
   
  
  
}

export default AdminProtectedRoute;