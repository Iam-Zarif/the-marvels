/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyToysItems from "./MyToysItems";
import Title from "../../../Title/Title";
import Swal from "sweetalert2";

const MyToys = () => {
Title("My Toys");
const [myToys, setMyToys] = useState([]);
const { user, loader } = useContext(AuthContext);

const deleteMe = (id) => {
  console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://toy-marketplace-server-pied-psi.vercel.app/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your Toy data has been deleted.", "success");
            const remain = myToys.filter(m=> m._id !== id)
            setMyToys(remain);
            console.log(myToys)
          }
        });
    }
  });
};





  

  useEffect(() => {
    // if (loader) {
    //   return;
    // }
      if (user && user.email) {
      fetch(`https://toy-marketplace-server-pied-psi.vercel.app/myToys?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyToys(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user, loader]);

 

  return (
    <>
      <div className="grid grid-cols-7 mt-48 mx-auto w-5/6">
        <h1 className="lg:text-2xl font-semibold text-yellow-500 ">Photo</h1>
        <h1 className="lg:text-2xl font-semibold text-yellow-500 ">Product name</h1>
        <h1 className="lg:text-2xl font-semibold text-yellow-500 ">Category</h1>
        <h1 className="lg:text-2xl font-semibold text-yellow-500 ">Price</h1>
        <h1 className="lg:text-2xl font-semibold text-yellow-500 ">Ratings</h1>
        <h1 className="lg:text-2xl font-semibold text-yellow-500 ">Action</h1>
        <h1 className="lg:text-2xl font-semibold text-yellow-500 ">Action</h1>
      </div>
      <hr className="mt-5"/>
      <div className="mt-5 mx-auto w-5/6">
        {myToys.map((data) => (
          <MyToysItems key={data._id} data={data}
          deleteMe ={deleteMe}
          ></MyToysItems>
        ))}
      </div>
    </>
  );
};

export default MyToys;
