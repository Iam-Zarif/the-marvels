/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AllToysItems from "./AllToysItems";
import Title from "../../../Title/Title";


const AllToys = () => {
  Title("All Toys");
    const [allItem, setAllItem] = useState([])
    useEffect(() =>{
fetch("http://localhost:2000/allToys").then(res => res.json()).then(data =>{
    
console.log(data)
setAllItem(data)})
    },[])
    return (
      <div>
        <div className="grid grid-cols-6 mt-10 mx-auto w-2/3">
          <h1 className="text-3xl font-semibold text-yellow-500 ">
            Seller name
          </h1>
          <h1 className="text-3xl font-semibold text-yellow-500 ">
            Product name
          </h1>
          <h1 className="text-3xl font-semibold text-yellow-500 ">Category</h1>
          <h1 className="text-3xl font-semibold text-yellow-500 ">Price</h1>
          <h1 className="text-3xl font-semibold text-yellow-500 ">Quantity</h1>
        </div>
        <div className="mt-10">
          {allItem.slice(0, 20).map((data) => (
            <AllToysItems key={data._id} data={data}></AllToysItems>
          ))}
        </div>
      </div>
    );
};

export default AllToys;