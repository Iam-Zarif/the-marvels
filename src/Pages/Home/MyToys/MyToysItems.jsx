/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysItems = ({ data, deleteMe }) => {
  //   const deleteMe = (_id) => {
  //     console.log(_id);
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(`https://toy-marketplace-server-pied-psi.vercel.app/myToys/${_id}`,{
  //             method :"DELETE"
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log(data);
  //             if (data.deleteCount > 0) {
  //               Swal.fire("Deleted!", "Your Toy data has been deleted.", "success");

  //             }
  //           });
  //       }
  //     });
  //   };

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
                <img src={photo} className="w-20 rounded-full" alt="" />
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
