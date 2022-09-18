
const Products = require("../Modules/Products");




// Post t-shirt product api
const AddProductFun = async(req, res)=>{
   const { name,category,price,discripation,manufacturer,availableItems,imageUrl} = req.body;

   try {
      if(name && category && price && discripation && manufacturer && availableItems && imageUrl ){

         await Address.create({
            name,
            contactNumber,
            category,
            price,
            discripation,
            manufacturer,
            availableItems,
            imageUrl
           
        })
   
        res.json({massge:"ok vaild"})
   
   
      }else{
         res.json({massge:"not vaild"})

      }


      
   } catch (error) {
      
  console.log(error);

   }
    

  
}



// edited the product api
const EditedProductFun = async(req, res)=>{
   
}


// delete the product api
const DeleteProductFun = async(req, res)=>{
   
}





// get all the product api
const AllProductFun = async(req, res)=>{
   
}




// get categerio ways products api
const ProductFunByCategories = async(req, res)=>{
   
 }

 // get products by id api
const productFunById = async(req, res)=>{
   
}





 module.exports ={AllProductFun, DeleteProductFun, AddProductFun, EditedProductFun, ProductFunByCategories,productFunById};