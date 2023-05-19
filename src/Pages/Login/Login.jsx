/* eslint-disable no-unused-vars */

import toy from "../../assets/toys.png";
import google from "../../assets/social.png";
import { Link, useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import Title from "../../Title/Title";
const Login = () => {
  Title("Log in");
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const googleUser = result.googleUser;
        console.log(googleUser);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const { logInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    logInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero pt-10 lg:pt-20 pb-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row  lg:gap-24">
          <div className="text-center lg:text-left">
            <img src={toy} className="w-56 lg:w-full" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div>
                <p className="text-center text-3xl ">Log in</p>
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="your password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-yellow-600 text-black font-bold hover:bg-yellow-700">
                    Login
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
              <div className="mx-auto mt-8">
                <p className="mb-5">Login with</p>
                <Link onClick={googleSignIn}>
                  <img
                    src={google}
                    alt=""
                    className="bg-yellow-500 p-5 w-20 rounded-full"
                  />
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center gap-5">
                <div className="">
                  <hr className="w-28" />
                </div>
                <div>or</div>
                <div>
                  <hr className="w-28" />
                </div>
              </div>
              <Link to="/register">
                <button className="w-full btn bg-yellow-600 text-xl text-black font-bold hover:bg-yellow-700">
                  register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
