import { LOGIN_USER_REQUEST } from "../constants/UserConstants"

export const UserLogin=(email,password)=>async(dispatch)=>{
   try {
       dispatch({type:LOGIN_USER_REQUEST});

       const user = users.find()
   } catch (error) {
    
   }
}