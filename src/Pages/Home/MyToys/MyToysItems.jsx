/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysItems = ({ data, deleteMe }) => {
 

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
  console.log(data);
  return (
    <div>
      <div className=" mx-auto">
        <table className="table table-zebra w-full ">
          {/* head */}

          <tbody className="">
            {/* row 1 */}
            <tr className=" hover items-center text-lg grid grid-cols-7">
              <td>
                <img src={photo} className="w-[60px] h-[60px] rounded-full" alt="" />
              </td>
              <td>{name}</td>
              <td>{Category}</td>
              <td>{price} $</td>
              <td>{rating}</td>
              <td>
                <Link to={`/update/${_id}`}>
                  <button className="btn btn-outline btn-accent">Update</button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => deleteMe(_id)}
                  className="btn btn-outline btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
};

export default MyToysItems;
