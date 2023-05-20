/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



const AllToysItems = ({ data }) => {
    
    const {
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
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
         
          <tbody>
            {/* row 1 */}
            <tr className="border mt-8 rounded-xl hover hover:border-yellow-500 grid grid-cols-1 mx-auto w-2/3 lg:grid-cols-6" >
              
              <td className="text-lg">{seller}</td>
              <td className="text-lg">{name}</td>
              <td className="text-lg">{Category}</td>
              <td className="text-lg">{price} $</td>
              <td className="text-lg">{quantity} items left</td>
              <td className="text-lg"><button className="btn">View details</button></td>
            </tr>
            {/* row 2 */}
           
            {/* row 3 */}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToysItems;