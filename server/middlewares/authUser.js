import jwt from "jsonwebtoken"

//user authentication middleware
const authUser =async(req,res,next) => {
    try{

        const {token} =req.headers;
        if (!token) {
            return res.status(500).json({ message: 'Not Authorized login Again' });
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET )       
         req.user = token_decode.id
        next()
        
    } catch (error){
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}  
export default authUser