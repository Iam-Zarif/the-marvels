/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { TabPanel } from "react-tabs";


const TabItems = ({data}) => {
    const {photo} = data;
    console.log(data);
    return (
        <div>
           
                <img src={photo} alt="" />
            
        </div>
    );
};

export default TabItems;