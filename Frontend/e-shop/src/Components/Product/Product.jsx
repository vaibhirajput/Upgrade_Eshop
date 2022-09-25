import React, { useLayoutEffect, useRef, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import kk from '../../Assets/Images/Karama.jpg'
import PreNav from '../../Common/PreNav/PreNav'
import delet from '../../Assets/Images/delete.png'
import edit from '../../Assets/Images/pencil.png'
import swal from 'sweetalert';




function Product() {
  const editanddelete = useRef();
  const [productData, setproductData] = useState([]);
  let { category } = useParams();


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



  useEffect(() => {
    let databycategory = {
      category: category,
    }

    function productDatafun() {
      const uri = "http://localhost:4000/category"
      fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(databycategory)
      }).then((res) => setproductData(res))
        .catch((err) => console.log(err))
    }

    productDatafun();

  }, [])



  return (
    <>
      <PreNav />
      <div id="homeproductdiv">

        <div id="productshome">
          {
            productData.map((data) => {

              if(data.category === category){

             
              return (
                <>
                  <div className="productcartdiv">

                    <div className="productimg">
                      <Link to={`/productdetail/${data._id}`}> <img src={data.image} alt="" /></Link>
                    </div>

                    <div className="productdetails">
                      <h3>{data.name}</h3>

                      <h4>{data.discription}</h4>

                      <h3>RS {data.price}/-</h3>
                      <div className="editdiv">
                        <Link to={`/productdetail/${data._id}`}> <button className='btnbuyhome'>BUY</button></Link>
                        <div ref={editanddelete} >
                          <Link to={`/editproduct/${data._id}`}> <img src={edit} alt="" /> </Link>
                          <img src={delet} alt="" onClick={() => deletefun()} />
                        </div>
                      </div>

                    </div>
                  </div>


                </>
              ) }
            })

          }

        </div>

      </div>

    </>
  )
}

export default Product
