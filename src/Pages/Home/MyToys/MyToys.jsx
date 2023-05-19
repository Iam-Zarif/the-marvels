/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const MyToys = () => {
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
    <div>
      {myToys.map((data) => (
        <>
          <p>{data.email}</p>
          <p>{data.name}</p>
          <img src={data.photo} alt="" />
        </>
      ))}
    </div>
  );
};

export default MyToys;
