/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const MyToysItems = ({data}) => {
    const  {
      name,
      photo,
      seller,
      Category,
      price,
      rating,
      quantity,
      description,
      email,
    } =data;
    console.log(data);
    return (
      <div>
        <div className="card w-96 glass mx-auto">
          <figure>
            <img className="w-96 h-96"
              src={photo}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price : {price} $</p>
            <p>Rating : {rating} </p>
            <p>Items : {quantity} left</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyToysItems;