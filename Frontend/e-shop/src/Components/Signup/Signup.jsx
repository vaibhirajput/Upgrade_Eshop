import React from 'react'
import "../Signup/Signup.css"
import lock from "../../Assets/Images/private.png"
import { Link,useNavigate } from "react-router-dom";
import { useEffect } from 'react';


function Signup() {

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      navigate('/');
    }
  })


 function registerfun(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const rdata = Object.fromEntries(data.entries());
  if(rdata.phone_no.length!==10){
      return alert("Please Enter Vaild Number")
  }

  if( rdata.password !== rdata.comfirmpassword){
    return alert("Password and Comfirm Password is not Match");
  }
  if(rdata.password.trim().length === 0 && rdata.comfirmpassword.trim().length === 0 ){
    return alert("Please Enter Password");
  }
  if(rdata.password.trim().length <7  && rdata.comfirmpassword.trim().length <7 ){
    return alert("Password Should be More than Seven Charactures");
  }


 const registerdata = {
  first_name:rdata.first_name.trim(),
  last_name:rdata.last_name.trim(),
  email:rdata.email.trim(),
  phone_no:rdata.phone_no.trim(),
  password:rdata.password.trim(),

 }
 const uri = "http://localhost:4000/users"
  fetch(uri,{
   method:"POST",
   headers:{
     "Content-Type":"application/json"
   },
   body:JSON.stringify(registerdata)
  }).then((res)=>console.log(res))
  .catch((err)=>console.log(err))
 

 }

  return (
   <>
   <div id="registerationdiv">

     <div id="registerationformdiv">
        <img src={lock} alt="" />
        <h3>Register Now</h3>
     <form  id="registerationfrom" onSubmit={registerfun} >
       
       <div className="forminputfelids"><input type="text" name='first_name' placeholder='First Name*' required  /></div>
       <div className="forminputfelids"><input type="text" name='last_name' placeholder='Last Name*' required  /></div>
       <div className="forminputfelids"><input type="email" name='email' placeholder='Email Address*' required  /></div>
       <div className="forminputfelids"><input type="Number" name='phone_no' placeholder='Contact No*' required  /></div>
       <div className="forminputfelids"><input type="password" name='password' placeholder='Password*' required  /></div>
       <div className="forminputfelids"><input type="password" name='comfirmpassword' placeholder='Comfirm Password*' required  /></div>
       <div className="formbtn"> <button>Sign Up</button></div>

     </form>

     <div className='bold' ><Link to="/Login"> Already have an acount ? Sign in</Link></div>

     </div>










   </div>
   
   
   
   
   </>
  )
}

export default Signup;