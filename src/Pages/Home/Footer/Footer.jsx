import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <>
        <footer className="flex lg:flex-row lg:justify-around flex-col items-center gap-16 content-center footer p-10 bg-base-200 text-base-content pb-20 mt-10">
          <div>
            <img
              src="https://w0.peakpx.com/wallpaper/366/367/HD-wallpaper-avengers-logo-marvel.jpg"
              alt=""
              className="w-14 border rounded-full"
            />
            <p>
              <span className="text-yellow-600 font-extrabold logoName">
                MARVEL
              </span>{" "}
              Toys
              <br />
              Providing reliable toys since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </div>
          <div>
            <span className="footer-title">About</span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </div>
        </footer>
      </>
    );
};

export default Footer;