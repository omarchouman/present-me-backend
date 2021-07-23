import jwt from 'jsonwebtoken';
export const generateToken=(id)=>{
    return jwt.sign({id},'piyush1234',{
        expiresIn:"30d"
    })
}
