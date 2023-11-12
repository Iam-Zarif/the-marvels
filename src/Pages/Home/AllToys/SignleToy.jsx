/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Title from "../../../Title/Title";
import {BiArrowFromLeft} from  "react-icons/bi"
import SingleToysContainer from "./SingleToysContainer";
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
    <SingleToysContainer>
      <div className="pt-20">
      <div className="mt-10">
<p className="flex gap-2 items-center"><span className="text-xl">Toy ID</span> <BiArrowFromLeft size={28}/><span>{_id}</span> </p>
      </div>
      <div className="py-10 my-20 card glass card-side bg-base-100 shadow-xl mt-10 grid grid-cols-2">
        
          <img src={photo} alt="Movie" className="h-full" />
       
        <div className="flex flex-col justify-center gap-5 ml-5">
          <h2 className="card-title text-4xl text-yellow-500">{name}</h2>
          <p className="text-lg font-semibold">
            <span className="text-yellow-500">Category of the toy</span> :{" "}
            {Category}
          </p>
          <p className="text-lg font-semibold">
            <span className="text-yellow-500">price</span> : {price} $
          </p>
          <p className="text-lg font-semibold">
            <span className="text-yellow-500">quantity of the toy</span> :{" "}
            {quantity}
          </p>
          <p className="text-lg font-semibold">
            <span className="text-yellow-500">Ratings</span> : {rating}
          </p>
          <p className="mr-10 text-lg font-semibold">
            <span className="text-yellow-500">About the toy</span> :{" "}
            {description}
          </p>
          <p className="text-lg font-semibold">
            <span className="text-yellow-500">Seller name</span> : {seller}
          </p>
        </div>
      </div>
      <section className="text-center">
        <button className="btn btn-outline btn-accent w-1/2  ">
          Buy Now
        </button>
      </section>
    </div>
    </SingleToysContainer>
  );
};

export default SignleToy;
