/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location =useLocation();
    console.log(location)
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
    return <Navigate to='/login' state={{from :location}} replace ></Navigate>
};

export default PrivateRoutes;