import { Link } from "react-router-dom";


const Error = () => {
    return (
      <div className="flex flex-col gap-10 items-center mt-20">
        <p className="text-3xl">
          <span className="logoName text-yellow-500">Error</span> occurred
        </p>
        <img
          src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif"
          alt=""
          className="px-10 lg:px-0 rounded-full"
        />
        <p className="text-lg">
          We still trying to fix, or go to{" "}
          <Link to="/" className="btn">
            home
          </Link>
        </p>
      </div>
    );
};

export default Error;