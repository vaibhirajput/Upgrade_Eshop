import React from 'react'
import "../Signup/Signup.css"
import edit from '../../Assets/Images/pencil.png'





function EditProduct() {
 
 

 function registerfun(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const rdata = Object.fromEntries(data.entries());
  if(rdata.cNo.length!==10){
      return alert("Please Enter Vaild Number")
  }

  

 const editproduct = {
  name:rdata.name,
  categroy:rdata.categroy,
  manufacturer:rdata.manufacturer,
  availableItems:rdata.availableItems,
  price:rdata.price,
  imageURL:rdata.imageURL,
  productDiscription:rdata.productDiscription,

 }

 const admin = localStorage.getItem("admin");
 const uriadmin = "http://localhost:4000/editproduct";
 fetch(uriadmin, {
  method: "POST",
  body: JSON.stringify(editproduct),
  headers: {
    Authorization: "Bearer " + admin,
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((res1) => {
     alert(res1.massge)
    
  })
  .catch((err) => {
    console.log(err);
  });


 
 }



  return (
   <>
   <div id="registerationdiv">

     <div id="registerationformdiv">
        <img src={edit} alt="" />
        <h3>Modify Product</h3>
     <form  id="registerationfrom" onSubmit={registerfun} >
       <div className="forminputfelids"><input type="text" name='name' placeholder='Name*' required  /></div>
       <div className="forminputfelids"><input type="text" name='categroy' placeholder='Categroy*' required  /></div>
       <div className="forminputfelids"><input type="text" name='manufacturer' placeholder='Manufacturer*' required  /></div>
       <div className="forminputfelids"><input type="Number" name='availableItems' placeholder='Available Items' required  /></div>
       <div className="forminputfelids"><input type="Number" name='price' placeholder='Price*' required  /></div>
       <div className="forminputfelids"><input type="text" name='imageURL' placeholder='Image URL*' required  /></div>
       <div className="forminputfelids"><input type="text" name='productDiscription' placeholder='Product Discription*' required  /></div>
       <div className="formbtn"> <button>MODIFY PRODUCT</button></div>
     </form>

       

     </div>




   </div>
   
   
   
   
   </>
  )
}

export default EditProduct;