import React from 'react'
import "../Order/Order.css"
import { Link,useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();


  function historyfun(){
    navigate(-1)
  }
  return (
   <>
   <div className="orderdiv">
    <div className="orderbox">
      <div className="orderdetails">
        <h1>Shose</h1>
        <br />
        <p> <b>Quantity:</b>1 </p>
       
        <p><b>Categroy:</b> Footware</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, dicta.</p>
        <br />
        <h3><span className='red'>Total Price:</span> 10000 </h3>

      </div>

      <div className="useraddress">
        <h1>Address Details :</h1>
        <br />
        <p>New Delhi State</p>
        <p>Contact Number: 98989889</p>
        <p>Area Sant Nagar Burari</p>
        <p>Landmark: Near Apex School</p>
        <p>Zip Code : 110084</p>
      </div>

    </div>
  
    <div className="nextbtndiv">
        <button className='backbtn' onClick={historyfun} >BACK</button>
       <button className='nextbtn'>PLACE ORDER</button>
       </div>
     


   </div>
   
   
   
   </>
  )
}

export default Order