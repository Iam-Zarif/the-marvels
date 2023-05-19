/* eslint-disable react/no-unescaped-entities */

import Stats from "../Stats/Stats";


const Testimonials = () => {
    return (
      <>
        <div className="py-10 mt-24 border-y bg-gradient-to-r from-stone-700 via-slate-600 to-stone-700">
          <div>
            <h1 className="text-center text-4xl">Testimonials</h1>
            <p className="text-center text-xl mt-5">What they say</p>
          </div>
          <div className="lg:w-1/2 mx-auto grid grid-cols-3  mt-20">
            <img
              className="w-32 h-28 rounded-full mx-auto border-4 shadow-md shadow-yellow-700"
              src="https://www.kidinc.org/wp-content/uploads/2020/11/KID_Homepage_Squares_Family.jpg"
              alt=""
            />
            <img
              className="w-44 h-40 rounded-full mx-auto border-4 shadow-md shadow-yellow-700"
              src="https://images.unsplash.com/photo-1627639679638-8485316a4b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
            <img
              className="w-32 h-28 rounded-full mx-auto border-4 shadow-md shadow-yellow-700"
              src="https://img.freepik.com/premium-photo/happy-kid-showing-like-sign_23-2148244750.jpg"
              alt=""
            />
          </div>
          <div className="px-14 mx-auto grid grid-cols-1 lg:grid-cols-3 mt-20 gap-16 ">
            <p className="mx-5">
              <span className="block text-2xl text-yellow-500">
                Iron Man Electronic Helmet :
              </span>{" "}
              <span className="block mt-2 text-lg  font-bold">
                Age Group: 8+
              </span>{" "}
              <span className="block font-bold">Rating: ★★★★★</span>{" "}
              <span className="font-bold ">Review :</span> This Iron Man
              Electronic Helmet is seriously cool! It looks just like the one
              Tony Stark wears in the movies. The helmet has light-up eyes and
              authentic sound effects, making us feel like we're actually
              suiting up as Iron Man. It's adjustable and fits comfortably on
              our heads. We love pretending to be the genius, billionaire,
              playboy, philanthropist himself!
            </p>
            <p className="mx-5">
              <span className="block text-2xl text-yellow-500">
                Spider-Man Web Shots:
              </span>{" "}
              <span className="block mt-2 text-lg  font-bold">
                Age Group: 5-10
              </span>{" "}
              <span className="block font-bold">Rating: ★★★★☆</span>{" "}
              <span className="font-bold ">Review:</span> With Spider-Man Web
              Shots, we can shoot webs just like Spidey! These wrist gadgets
              come with refillable web fluid and shoot out webs with the press
              of a button. It's so much fun to swing and shoot pretend webs
              around the house, just like our friendly neighborhood Spider-Man.
              The only downside is that the web fluid can run out quickly, but
              the refills are easy to find.
            </p>
            <p className="mx-5">
              <span className="block text-2xl text-yellow-500">
                Black Panther Vibranium Power FX Mask:
              </span>{" "}
              <span className="block mt-2 text-lg  font-bold">
                Age Group: 6-12
              </span>{" "}
              <span className="block font-bold">Rating: ★★★★★</span>{" "}
              <span className="font-bold ">Review:</span>
              Wakanda forever! The Black Panther Vibranium Power FX Mask is
              incredible. It looks exactly like the mask T'Challa wears, and
              when we put it on, it lights up and plays Wakanda-inspired sound
              effects. The mask is comfortable to wear and fits perfectly. We
              enjoy pretending to be the king of Wakanda and imagining all the
              awesome adventures we'd have.
            </p>
          </div>
        </div>
        <Stats></Stats>
      </>
    );
};

export default Testimonials;