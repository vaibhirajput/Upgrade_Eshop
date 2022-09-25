import React from 'react'
import PreNav from '../../Common/PreNav/PreNav';
import "../ProductDetails/ProductDetails.css";
import kk from '../../Assets/Images/Karama.jpg'
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"




function ProductDetails() {
  const [quantity, setquantity] = useState(1);
  const [productDetails, setproductDetails] = useState([]);
  let { id } = useParams();



   localStorage.getItem("quantity", quantity);
  function squantityfun() {

    if (quantity > 1) {
      setquantity(quantity - 1)
    }
  }


  useEffect(() => {

    let databyid = {
      productid: id,
    }
    function productdetailDatafun() {
      const uri = "http://localhost:4000/id"
      fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(databyid)
      }).then((res) => setproductDetails(res))
        .catch((err) => console.log(err))

    }

    productdetailDatafun();

  }, [])



  return (
    <>
      <PreNav />

      <div id="productdetailsdiv">
        {
          productDetails.map((data) => {
            return (
              <>

                <div className="productdetail">

                  <div className="productdetailImg">
                    <img src={data.image} alt="" />

                  </div>

                  <div className="details">
                    <h2>{data.name}</h2>
                    <br />
                    <p>Category :{data.categroy}</p>
                    <br />
                    <h4>{data.discription}</h4>
                    <br />
                    <h3>RS {data.price}/-</h3>

                    <div id="quantity">

                      <h4>Quantity</h4> 	&nbsp; 	&nbsp;  <span className='point' onClick={squantityfun}><b>-</b></span>
                      &nbsp; <span className='quant'><b> {quantity} </b></span> 	&nbsp; <span className='point' onClick={() => setquantity(quantity + 1)}><b>+</b></span>
                    </div>
                    <br />
                    <Link to={`/address/${data._id}`}> <button className='deatailbuy'> BUY </button></Link>

                  </div>

                </div>








              </>
            )
          })


        }

      </div>


    </>
  )
}

export default ProductDetails