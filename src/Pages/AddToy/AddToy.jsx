import { useContext } from "react";
import Title from "../../Title/Title";
import './AddToy.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
const AddToy = () => {
  const success =()=>{
Swal.fire({
  title: "success!",
  text: "Do you want to continue",
  icon: "success",
  confirmButtonText: "ok",
});

  }
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
fetch("http://localhost:2000/toys", {
  method: "POST",
  headers: {

    "content-type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    form.reset()
  });
    }
    
  Title("Add Toys");
  return (
    <div>
        
      <div>
      
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            
            <div className="card flex-shrink-0   shadow-2xl bg-base-100">
              <div className="card-body w-fit 2">
                <form className="" onSubmit={addToys}>
                  <div className="grid grid-cols-1 gap-x-20 gap-y-3 lg:grid-cols-3">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Picture URL of Toy</span>
                      </label>
                      <input required
                        name="photo"
                        type="url"
                        placeholder="Provide the link"
                        className="w-60 lg:w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Toy Name</span>
                      </label>
                      <input required
                        name="name"
                        type="text"
                        placeholder="Give the Toy name"
                        className="w-60 lg:w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Seller Name</span>
                      </label>
                      <input required
                        name="seller"
                        value={user?.displayName}
                        type="text"
                        placeholder="Seller Name"
                        className="w-60 lg:w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Category</span>
                      </label>
                      <select
                        className="select select-info w-96 block input-group"
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
                      <input required
                        name="price"
                        type="number"
                        placeholder="Price $"
                        className="w-60 lg:w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <input required
                        name="rating"
                        type="text"
                        placeholder="share your Rating"
                        className="w-60 lg:w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Available Quantity</span>
                      </label>
                      <input required
                        name="quantity"
                        type="number"
                        placeholder="How much you want it"
                        className="w-60 lg:w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Details description (optional)</span>
                      </label>
                      <textarea 
                        name="description"
                        placeholder="description"
                        className="textarea textarea-bordered textarea-lg w-full "
                      ></textarea>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Seller email</span>
                      </label>
                      <input required
                        name="email"
                        type="email"
                        value={user?.email}
                        placeholder="Give seller's email"
                        className="w-60 lg:w-96 input input-bordered"
                      />
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <button 
                    onClick={success}
                    className=" text-lg text-yellow-500 ToyBtn border rounded-xl py-2 mt-4 hover:border-yellow-500">
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
