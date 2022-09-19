const Address = require("../Modules/Address");
const users = require("../Modules/Registeration");



// Post address api
const addressfun = async(req, res)=>{
    const { name,street,contactNumber,landmark,city,state,zipcode, id} = req.body;
  
       try {
         if(name && street && contactNumber && strelandmarket && city && state && zipcode ){
            const vailduser = await users.findOne({id}) 


            await Address.create({
                name,
                contactNumber,
                street,
                landmark,
                city,
                state,
                zipcode,
                user:{
                    userid:id ,
                    firstName:vailduser.firstName,
                    lastName:vailduser.lastName,
                    email:vailduser.email,
                    contactNumber:vailduser.contactNumber,
                    
                }

            })
            res.json({massge:"ok vaild"})

         }else{
            res.json({massge:"not vaild"})
         }

        
       } catch (error) {
        console.log(error)
        res.json({massge:"Server Error"})
       }
 }

 module.exports = {addressfun};