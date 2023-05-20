/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loader} =useContext(AuthContext);
    if(loader){
       return (
         <div
           className="radial-progress"
           style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}
         >
           70%
         </div>
       );

    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace ={true}></Navigate>
};

export default PrivateRoutes;