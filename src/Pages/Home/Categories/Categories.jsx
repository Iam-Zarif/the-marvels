/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabItems from "../TabItems/TabItems";

const Categories = () => {
  const [toy, setToy] = useState([]);
  const [category, setCategory] = useState("Iron-man");
  useEffect(() => {
    fetch(`https://toy-marketplace-server-pied-psi.vercel.app/data/${category}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        
          setToy(data);
        
      });
  }, [category]);
  return (
    <div className="mt-32">
      <h1 className="text-center text-4xl font-bold">
        You also Can search by Categories
      </h1>
      <div className="mt-20">
        <Tabs>
          <TabList className="mx-auto w-1/2">
            <Tab>
              <span className="text-xl" onClick={() => setCategory("Iron-man")}>
                Iron-man
              </span>
            </Tab>
            <Tab>
              <span className="text-xl" onClick={() => setCategory("Thor")}>
                Thor
              </span>
            </Tab>
            <Tab>
              <span className="text-xl" onClick={() => setCategory("Thanos")}>
                Thanos
              </span>
            </Tab>
          </TabList>

          <div className="flex flex-col justify-center items-center lg:flex-row gap-24">
            {toy.slice(0,2).map(data => {
                return <>
                <TabItems
                key={data._id}
                data={data}
                ></TabItems>
                </>
            })}
          </div>
          {console.log(toy)}
        </Tabs>
        
      </div>
    </div>
  );
};

export default Categories;
