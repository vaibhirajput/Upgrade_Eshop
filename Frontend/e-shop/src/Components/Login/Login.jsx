import React from 'react';
import "../Login/Login.css";
import lock from "../../Assets/Images/private.png"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';




function Login() {
  const navigate = useNavigate();
 
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      navigate('/home');
    }
  })




function loginfun(e){
 e.preventDefault();
  const data = new FormData(e.target);
  const ldata = Object.fromEntries(data.entries());

  const logindata ={
    loginemail:ldata.loginemail,
    loginpassword:ldata.loginpassword,
  }
  console.log(logindata);
   const uri2 = "http://localhost:4000/login";
  fetch(uri2,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(logindata)
  }).then((res)=>res.json())
    .then((res)=>{
      localStorage.setItem("token",res);})
    .catch((err)=>console.log(err))



}



  return (
<>
<div id="logindiv">

<div id="loginfromdiv">
<img src={lock} alt="" />
  <h3>Login Now</h3>

<form  id="loginform" onSubmit={loginfun}>

<div className="logininput"><input type="email" name='loginemail' placeholder=' Enter Your Email' required  /></div>
<div className="logininput"><input type="password" name='loginpassword' placeholder='Enter Your Password' required  /></div>
<div className="loginbtn"> <button> Login Now</button> </div>
</form>

<div className='bold' ><Link to="/signup">I don't have an acount ? Sign up </Link></div>

</div>

</div>





</>
  )
}

export default Login