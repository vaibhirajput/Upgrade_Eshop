
const Products = require("../Modules/Products");




// Post t-shirt product api
const AddProductFun = async(req, res)=>{
   const { name,category,price,discripation,manufacturer,  contactNumber, availableItems,imageUrl} = req.body;

   try {
      if(name && category && price && discripation && manufacturer && availableItems && imageUrl && contactNumber ){

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
   const { name,category,price,discripation,manufacturer,availableItems,imageUrl,  contactNumber , productid} = req.body;
   try {
      if(name && category && price && discripation && manufacturer && availableItems && imageUrl && contactNumber ){
         let ts = Date.now();
        const newproduct = {
            name:name,
            contactNumber:contactNumber,
            category:category,
            price:price,
            discripation:discripation,
            manufacturer:manufacturer,
            availableItems:availableItems,
            imageUrl:imageUrl,
            createdAt:ts,
            updatedAt:ts,
        }

        await Products.findByIdAndUpdate({_id:id}, {newproduct}, {new:true});
   
        res.json({massge:"ok update"})
   
   
      }else{
         res.json({massge:"not update"})

      }


      
   } catch (error) {
      
  console.log(error);

   }
    
   
}


// delete the product api
const DeleteProductFun = async(req, res)=>{
   
   const id = res.productid;

   try {
      if(id){
         await Products.findByIdAndRemove({_id:id});
         res.json({massage:"products is delete"})
      }
      else{
         res.json({massage:"products is not delete"})
      }


   } catch (error) {
      console.log(error);

   }
}





// get all the product api
const AllProductFun = async(req, res)=>{

   try {
      
    const allproducts = await Products.find();
    res.json({data:allproducts})


   } catch (error) {
      console.log(error);

   }
   
}




// get categerio ways products api
const ProductFunByCategories = async(req, res)=>{
   const {category} = res.body;

   try {
      if(category){
         const productcategory = await Products.find({category});
         res.json({data:productcategory})


      }else{
          res.json({massage:"product not found"})
      }
     
     } catch (error) {
        console.log(error);
  
     }
     

   
 }

 // get products by id api
const productFunById = async(req, res)=>{
   const {productid} = res.body;

   try {
      if(category){
         const databyproductid = await Products.findById({_id:productid});
         res.json({data:databyproductid})


      }else{
          res.json({massage:"product not found"})
      }
     
     } catch (error) {
        console.log(error);
  
     }
}





 module.exports ={AllProductFun, DeleteProductFun, AddProductFun, EditedProductFun, ProductFunByCategories,productFunById};