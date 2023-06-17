import { useContext } from "react";
import Title from "../../Title/Title";
import './AddToy.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
const AddToy = () => {
  
    const {user}= useContext(AuthContext)
    const addToys =(e)=>{
        e.preventDefault();
        const form =e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const seller = form.seller.value;
        const Category = form.Category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const email = form.email.value;
        const data ={name,
          
photo,
seller,
Category,
price,
rating,
quantity,
description,
email}
console.log(data);
fetch("https://toy-marketplace-server-pied-psi.vercel.app/toys", {
  method: "POST",
  headers: {

    "content-type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    
    form.reset();
  });
    }
    const success = () => {
      Swal.fire({
        title: "success!",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "ok",
      });
    };
    
  Title("Add Toys");
  return (
    <div className="mt-44">
      <div>
        <h1 className="text-center font-bold text-4xl mb-10">Add Your Toy</h1>
        <div className="hero py-10  bg-base-200">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="">
              <img className="mx-10"
                src="https://i.ibb.co/y51LZrM/65c6ea9e407bc11243290d70fc0598f3.gif"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0  col-span-2 shadow-2xl bg-base-100 mx-auto">
              <div className="card-body w-fit ">
                <form className="" onSubmit={addToys}>
                  <div className="grid grid-cols-1 gap-x-20 gap-y-3 lg:grid-cols-3">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Picture URL of Toy</span>
                      </label>
                      <input
                        required
                        name="photo"
                        type="url"
                        placeholder="Provide the link"
                        className="w-60 lg:w-64 input input-bordered input-warning"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Toy Name</span>
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Give the Toy name"
                        className="w-60 lg:w-64 input input-bordered input-warning"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Seller Name</span>
                      </label>
                      <input
                        required
                        name="seller"
                        value={user?.displayName}
                        type="text"
                        placeholder="Seller Name"
                        className="w-60 lg:w-64 input input-bordered input-warning"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Category</span>
                      </label>
                      <select
                        className="select input-bordered input-warning input-warning w-64 block input-group"
                        name="Category"
                      >
                        <option className="input">Iron-man</option>
                        <option className="input">Thor</option>
                        <option className="input">Thanos</option>
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        required
                        name="price"
                        type="number"
                        placeholder="Price $"
                        className="w-60 lg:w-64 input input-bordered input-warning"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <input
                        required
                        name="rating"
                        type="text"
                        placeholder="share your Rating"
                        className="w-60 lg:w-64 input input-bordered input-warning"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Available Quantity</span>
                      </label>
                      <input
                        required
                        name="quantity"
                        type="number"
                        placeholder="How much you want it"
                        className="w-60 lg:w-64 input input-bordered input-warning"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Details description (optional)
                        </span>
                      </label>
                      <textarea
                        name="description"
                        placeholder="description"
                        className="textarea border-warning textarea-bordered textarea-lg w-full "
                      ></textarea>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Seller email</span>
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        value={user?.email}
                        placeholder="Give seller's email"
                        className="w-60 lg:w-64 input input-bordered input-warning"
                      />
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      onClick={success}
                      className=" text-lg text-yellow-500 ToyBtn border rounded-xl py-2 mt-4 hover:border-yellow-500"
                    >
                      Add Toy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
