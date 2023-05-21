/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const MyToysUpdate = () => {
    const navigate =useNavigate()
  const data = useLoaderData();
  const { _id, price, quantity, description } = data;
  console.log(data);

  const update = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedPrice = form.price.value;
    const updatedQuantity = form.quantity.value;
    const updatedDescription = form.description.value;
    console.log(updatedPrice, updatedDescription, updatedQuantity);

    const user = {
      price: updatedPrice,
      description: updatedDescription,
      quantity: updatedQuantity,
    };

    fetch(`https://toy-marketplace-server-pied-psi.vercel.app/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Your work has been saved",
           showConfirmButton: false,
           timer: 1500,
         });

        }
        navigate('/mytoys')
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Do you wanna update?</h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={update}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    defaultValue={price}
                    name="price"
                    type="number"
                    placeholder="email"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    defaultValue={quantity}
                    name="quantity"
                    type="number"
                    placeholder="password"
                    className="input input-bordered w-full "
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text mt-5">description</span>
                  </label>
                  <textarea
                    defaultValue={description}
                    name="description"
                    placeholder="description"
                    className="h-80 w-full textarea textarea-bordered textarea-lg  mt-10"
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-outline btn-accent">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToysUpdate;
