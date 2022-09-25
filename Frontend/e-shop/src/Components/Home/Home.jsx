import React, { useLayoutEffect, useRef, useEffect, useState } from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom'
import delet from '../../Assets/Images/delete.png'
import edit from '../../Assets/Images/pencil.png'
import PreNav from '../../Common/PreNav/PreNav'
import swal from 'sweetalert';

function Home() {
  const editanddelete = useRef();
  const [allProductData, setallProductData] = useState([]);


  // For Admin Header button cotrolls
  useLayoutEffect(() => {
    let admin = localStorage.getItem("admin");

    if (admin) {
      editanddelete.current.style.display = "block";
    } else {
      editanddelete.current.style.display = "none";

    }
  })

  async function deletefun(id) {
    swal({
      title: "Are you sure? Delete this Product",
      text: "Once deleted, you will not be able to recover this Product Again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let idonj = {
            id: id
          }
          const admin = localStorage.getItem("admin");
          const uriadmin = "http://localhost:4000/deleteproducts";
          console.log("delete")
          fetch(uriadmin, {
            method: "POST",
            body: JSON.stringify(idonj),
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

          swal("Poof! Your Product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Product is safe!");
        }
      });

  }


  // get all Product data!!!
  useEffect(() => {
    function allProductfun() {
      fetch("http://localhost:4000/products")
        .then((res) => res.json())
        .then((data) => {
          setallProductData(data);
          console.log(data)
        }).catch((err) => console.log(err))
    }

    allProductfun();

  }, [])


  return (
    <>
      <PreNav />

      <div id="homeproductdiv">

        <div id="productshome">
      {
         allProductData.map((data)=>{

         return( <>
         
          <div className="productcartdiv">

            <div className="productimg">
              <Link to="/productdetail/productid"> <img src={data.image} alt="" /></Link>

            </div>

            <div className="productdetails">
              <h3>{data.name}</h3>

              <h4>{data.discription}</h4>

              <h3>RS {data.price}</h3>

              <div className="editdiv">
                <Link to={`/productdetail/${data._id}`}> <button className='btnbuyhome'>BUY</button></Link>
                <div ref={editanddelete} >
                  <Link to={`/editproduct/${data._id}`}> <img src={edit} alt="" /> </Link>
                  <img src={delet} alt="" onClick={() => deletefun(data._id)} />
                </div>
              </div>

            </div>


          </div>
          </>) }) }
        </div>

      </div>





    </>
  )
}

export default Home