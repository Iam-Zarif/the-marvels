/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyToysItems from "./MyToysItems";
import Title from "../../../Title/Title";

const MyToys = () => {
  Title("My Toys")
  const [myToys, setMyToys] = useState([]);
  const { user, loader } = useContext(AuthContext);

  useEffect(() => {
    // if (loader) {
    //   return;
    // }
      if (user && user.email) {
      fetch(`http://localhost:2000/myToys?email=${user.email}`)
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
    <div className="grid grid-cols-3 gap-10 mt-20">
      {myToys.map((data => <MyToysItems key={data._id}
      data ={data}
      ></MyToysItems>) )}
    </div>
  );
};

export default MyToys;
