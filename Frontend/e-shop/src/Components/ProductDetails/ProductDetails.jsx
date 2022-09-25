import React from 'react'
import PreNav from '../../Common/PreNav/PreNav';
import "../ProductDetails/ProductDetails.css";
import kk from '../../Assets/Images/Karama.jpg'
import { useState , useEffect } from 'react';
import {Link, useParams} from "react-router-dom"




function ProductDetails() {
  const [quantity, setquantity] = useState(1);
  const [productDetails , setproductDetails] = useState([]);
  let { id } = useParams();




  function squantityfun(){

    if(quantity>1){
     setquantity(quantity-1)
    }
     }


     useEffect(()=>{

      let databyid={
        productid:id,
      }
      function productdetailDatafun(){
        const uri = "http://localhost:4000/id"
        fetch(uri,{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify(databyid)
        }).then((res)=>setproductDetails(res))
        .catch((err)=>console.log(err))
       
      }
      
      productdetailDatafun();
    
    },[])



  return (
   <>
   <PreNav/>

   <div id="productdetailsdiv">

    <div className="productdetail">

     <div className="productdetailImg">
      <img src={kk} alt="" />

     </div>
     
     <div className="details">
      <h2>Reebook</h2>
      <br />
      <p>Category : APPREAL</p> 
      <br />
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus at voluptatem odit distinctio iusto deserunt iste
         commodi voluptate accusamus repellat repudiandae illo, 
         quam exercitationem libero incidunt vero magni aliquid est.</h4>
         <br />
      <h3>RS 999/-</h3>

      <div id="quantity">
   
      <h4>Quantity</h4> 	&nbsp; 	&nbsp;  <span className='point' onClick={squantityfun}><b>-</b></span>   
      &nbsp; <span className='quant'><b> {quantity} </b></span> 	&nbsp; <span className='point' onClick={()=>setquantity(quantity+1)}><b>+</b></span> 
      </div>
      <br />
     <Link to="/address/id"> <button className='deatailbuy'> BUY </button></Link>
       
     </div>

    </div>




   </div>
   
   
   </>
  )
}

export default ProductDetails