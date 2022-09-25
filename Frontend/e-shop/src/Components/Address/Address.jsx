import React from 'react'
import "../Signup/Signup.css"
import lock from "../../Assets/Images/home.png"
import { Link,useNavigate, useParams } from "react-router-dom";
// import { useEffect } from 'react';



function Address() {
  const navigate = useNavigate();
  let { id } = useParams();

  function historyfun(){
    navigate(-1)
  }

  


 function registerfun(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const rdata = Object.fromEntries(data.entries());
  if(rdata.cNo.length!==10){
      return alert("Please Enter Vaild Number")
  }

  

 const addressdata = {
  name:rdata.name,
  contactNumber:rdata.cNo,
  street:rdata.street,
  city:rdata.city,
  state:rdata.state,
  landmark:rdata.landmark,
  zipcode:rdata.zipcode,

 }
  localStorage.setItem("useraddress" ,addressdata );
 const mytoken = localStorage.getItem("token");
 const urii = "http://localhost:4000/address";
 fetch(urii, {
  method: "POST",
  body: JSON.stringify(addressdata),
  headers: {
    Authorization: "Bearer " + mytoken,
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((res1) => console.log(res1))
  .catch((err) => {
    console.log(err);
  });


 
 }



  return (
   <>
   <div id="registerationdiv">

     <div id="registerationformdiv">
        <img src={lock} alt="" />
        <h3>Add Address</h3>
     <form  id="registerationfrom" onSubmit={registerfun} >
       <div className="forminputfelids"><input type="text" name='name' placeholder='Name*' required  /></div>
       <div className="forminputfelids"><input type="Number" name='cNo' placeholder='Contact Number*' required  /></div>
       <div className="forminputfelids"><input type="text" name='street' placeholder='Street*' required  /></div>
       <div className="forminputfelids"><input type="text" name='city' placeholder='City*' required  /></div>
       <div className="forminputfelids"><input type="text" name='state' placeholder='State*' required  /></div>
       <div className="forminputfelids"><input type="text" name='landmark' placeholder='Landmark*' required  /></div>
       <div className="forminputfelids"><input type="Number" name='zipcode' placeholder='Zip Code*' required  /></div>
       <div className="formbtn"> <button>SAVE ADDRESS</button></div>
     </form>

       <div className="nextbtndiv">
        <button className='backbtn' onClick={historyfun} >Back</button>
       <Link to={"/order/"+id}><button className='nextbtn'>Next</button></Link> 
       </div>
     

     </div>




   </div>
   
   
   
   
   </>
  )
}

export default Address;