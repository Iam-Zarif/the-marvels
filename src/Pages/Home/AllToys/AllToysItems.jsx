/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link } from "react-router-dom";


const AllToysItems = ({ data }) => {
  const error=() =>{
    Swal.fire({
      title: "Error!",
      text: "Log in first",
      icon: "Ok",
      confirmButtonText: "Cool",
    });
  }
  const {user} = useContext(AuthContext)
    
    const {
      _id,
      name,
      photo,
      seller,
      Category,
      price,
      rating,
      quantity,
      description,
      email,
    } = data;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr className="border mt-8 rounded-xl hover hover:border-yellow-500 grid grid-cols-1 mx-auto w-2/3 lg:grid-cols-6">
              <td className="text-lg">{seller}</td>
              <td className="text-lg">{name}</td>
              <td className="text-lg">{Category}</td>
              <td className="text-lg">{price} $</td>
              <td className="text-lg">{quantity} items left</td>
              {user ? (
                <>
                  <td className="text-lg">
                    <Link to={`/alltoys/${_id}`}>
                      <button className="btn btn-outline btn-accent">
                        View details
                      </button>
                    </Link>
                  </td>
                </>
              ) : (
                <>
                  <td className="text-lg">
                    <Link to="/login">
                      <button
                        className="btn btn-outline btn-accent"
                        onClick={error}
                      >
                        View details
                      </button>
                    </Link>
                  </td>
                </>
              )}
            </tr>
            {/* row 2 */}

            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToysItems;