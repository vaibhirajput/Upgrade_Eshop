import React from 'react'
import "../Order/Order.css"
import { Link,useNavigate,useParams } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  const dataaddress = localStorage.getItem("useraddress");
  const [orderdata, setorderdata] = useState([]);
  let { id } = useParams();
  const quantity = localStorage.getItem("quantity");


  function historyfun(){
    navigate(-1)
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
      }).then((res) => setorderdata(res))
        .catch((err) => console.log(err))

    }

    productdetailDatafun();

  }, [])








  return (
   <>
   <div className="orderdiv">
    <div className="orderbox">

    {
      orderdata.map((data)=>{
        return(
          <>
          
        <div className="orderdetails">
        <h1>{data.name}</h1>
        <br />
        <p> <b>Quantity:</b>{quantity}</p>
       
        <p><b>Categroy:</b> {data.categroy}</p>
        <br />
        <p>{data.discription}</p>
        <br />
        <h3><span className='red'>Total Price:</span> {data.price} </h3>

      </div>
          
          
          
          </>
        )
      })
    }

     

      <div className="useraddress">
        <h1>Address Details :</h1>
        <br />
        <p>{dataaddress.State}</p>
        <p>{dataaddress.street}</p>
        <p>{dataaddress.city}</p>
        <p>{dataaddress.landmark}</p>
        <p>{dataaddress.contactNumber}</p>
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