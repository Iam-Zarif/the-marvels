import Title from "../../Title/Title";
import './AddToy.css'
const AddToy = () => {
    
  Title("Add Toys");
  return (
    <div>
      <h1>Add a toy</h1>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0   shadow-2xl bg-base-100">
              <div className="card-body w-fit 2">
                <form className="">
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
                        <option className="input">Premium</option>
                        <option className="input">Medium</option>
                        <option className="input">Low</option>
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
                        placeholder="Give seller's email"
                        className="w-60 lg:w-96 input input-bordered"
                      />
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <button className=" text-lg text-yellow-500 ToyBtn border rounded-xl py-2 mt-4 hover:border-yellow-500">
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
