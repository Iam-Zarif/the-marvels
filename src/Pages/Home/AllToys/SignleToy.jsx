/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Title from "../../../Title/Title";

const SignleToy = () => {
    Title('Details')
    const data =useLoaderData();
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
      <div className="py-10 my-20 card glass card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" className="w-96 h-96" />
        </figure>
        <div className="flex flex-col justify-center gap-5 ml-5">
          <h2 className="card-title text-4xl text-yellow-500">{name}</h2>
          <p className="text-lg font-semibold"><span className="text-yellow-500">Category of the toy</span> : {Category}</p>
          <p className="text-lg font-semibold"><span className="text-yellow-500">price</span> : {price} $</p>
          <p className="text-lg font-semibold"><span className="text-yellow-500">quantity of the toy</span> : {quantity}</p>
          <p className="text-lg font-semibold"><span className="text-yellow-500">Ratings</span> : {rating}</p>
          <p className="mr-10 text-lg font-semibold"><span className="text-yellow-500">About the toy</span> : {description}</p>
          <p className="text-lg font-semibold"><span className="text-yellow-500">Seller name</span> : {seller}</p>
          
        </div>
      </div>
        <button className="btn btn-outline btn-accent w-full  py-8">Buy Now</button>
    </div>
  );
};

export default SignleToy;
