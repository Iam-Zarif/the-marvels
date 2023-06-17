
import { Link, useNavigate } from 'react-router-dom';
import toy from '../../assets/toys (1).png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Title from '../../Title/Title';
const Register = () => {
  Title('Register')
  const navigate =useNavigate()
  const { createUser } = useContext(AuthContext);
    const handleRegister =(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const userData = { name, email, password, photo };
        console.log(userData)
createUser(email,password)
.then(res =>{
  const newUser = res.newUser;
  console.log(newUser)
  updateProfile(res.user, { displayName: name, photoURL: photo });
  navigate('/login')
  form.reset()
})
.catch(error => console.log(error))
    }
    return (
      <div>
        <div className="hero pt-10 lg:pt-20 pb-20 bg-base-200 mt-20">
          <div className="hero-content flex-col lg:flex-row  lg:gap-24">
            <div className="text-center lg:text-left">
              <img src={toy} className="w-56 lg:w-full" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div>
                  <p className="text-center text-3xl ">Register</p>
                </div>
                <form onSubmit={handleRegister}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input required
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input required
                      name="email"
                      type="email"
                      placeholder="your email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input required
                      name="password"
                      type="password"
                      placeholder="type your password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo Link</span>
                    </label>
                    <input required
                      name="photo"
                      type="url"
                      placeholder="Give your Photo url"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-yellow-600 text-black font-bold hover:bg-yellow-700 mt-5">
                      Register
                    </button>
                  </div>
                </form>

                <div className="mt-8 flex items-center justify-center gap-5">
                  <div className="">
                    <hr className="w-28" />
                  </div>
                  <div>or</div>
                  <div>
                    <hr className="w-28" />
                  </div>
                </div>
                <Link to="/login" className="mt-8">
                  <button className="w-full btn bg-yellow-600 text-xl text-black font-bold hover:bg-yellow-700">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;