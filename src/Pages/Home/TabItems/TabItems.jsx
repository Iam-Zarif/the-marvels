/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { TabPanel } from "react-tabs";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const TabItems = ({data}) => {
  const loginToViewDetails =() =>{
    if(!user){
      Swal.fire({
        title: "Error!",
        text: "You have to log in first to view details",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  }
  const {user} = useContext(AuthContext)
    const { photo, name, price,rating } = data;
    console.log(data);
    return (
      <div className="mt-10 ">
        <div
          className="card w-96 glass shadow-md shadow-yellow-400 border-4 border-white"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <figure>
            <img src={photo} alt="car!" className="h-96 w-96" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price : {price} $ </p>
            <p>Rating : {rating} </p>
            <div className="card-actions justify-end">
              {user ? (
                <>
                  <button className="btn btn-outline btn-accent ">
                    View details
                  </button>
                </>
              ) : (
                <>
                  <Link to='/login'>
                    <button className="btn btn-outline btn-accent " onClick={loginToViewDetails}>
                     View details
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default TabItems;