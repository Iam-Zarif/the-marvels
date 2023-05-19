/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";


const AllToys = () => {
    const [allItem, setAllItem] = useState([])
    useEffect(() =>{
fetch("http://localhost:2000/allToys").then(res => res.json()).then(data =>{
    
console.log(data)
setAllItem(data)})
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllToys;