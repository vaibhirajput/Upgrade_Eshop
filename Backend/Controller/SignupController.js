const users = require("../Modules/Registeration");
const  bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const KEY = "myfirstfullstackproject##truemusclescience@gmail.com";

// sign up api
const registerfun = async(req,res)=>{
    const {firstName, lastName, email, contactNumber, password} = req.body;
    try {
       
      console.log(firstName);

      const vailduser = await users.findOne({email}) 
     
      if(vailduser){
        return res.json({massage:"User is already Exists"})
      }
     
     if(firstName && lastName && email && contactNumber && password){

        const bcryptjspassword = await bcryptjs.hash(password, 10);

        await users.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password:bcryptjspassword,
     })

     res.json({massage:"user is save sucessfully"});

     }
     else{
        console.log("user not fill the all details")
        res.json({massage:"user not fill the all details"});
     }


    } catch (error) {
        console.log("Something is wrong "+ error);
        
    }
}

const loginfun = async(req,res)=>{
    try {
        const {loginemail, loginpassword} = req.body;

     
       const vailduser = await users.findOne({email:loginemail}) 

       if(vailduser){
        const rightpassword = await bcryptjs.compare(loginpassword, vailduser.password)
        if(rightpassword){

            const Token = jwt.sign({email:vailduser.email , id:vailduser._id}, KEY);
            const user ={ email:vailduser.email,
                id: vailduser._id,
                first_name:vailduser.firstName,
                last_name:vailduser.lastName,
                phone_no:vailduser.contactNumber,
                token:Token}

            res.json(user);
        }
        else{
            res.json({massage:"Not Vaild User"})
        }
       }
 

    } catch (error) {
        
    }
}

module.exports = {registerfun, loginfun};