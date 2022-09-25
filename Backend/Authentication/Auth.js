const jwt = require('jsonwebtoken')
const KEY = "myfirstfullstackproject##truemusclescience@gmail.com";
const ADMINKEY ="";

const Auth = async(req, res, next)=>{
 
    try {

        const token = await req.headers.authorization;
        token = token.split(" ")[1];
        let vailduser = jwt.verify(token , KEY)
        if(vailduser){
            req.id = vailduser.id
        }
        else{
            return  res.status(401).json({massage:"Not Vaild User"})
           }
           next();
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = Auth;