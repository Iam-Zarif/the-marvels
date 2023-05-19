/* eslint-disable no-unused-vars */
import img1 from "../../../assets/paddle.png";
import img2 from "../../../assets/pets.png";
import img3 from "../../../assets/rc-car.png";
import img4 from "../../../assets/scooter.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Stats = () => {
  return (
    <>
      <div className="mt-20">
        <p className="text-center text-4xl">We produce variety of toys</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-36 px-10  mt-20">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col items-center justify-center gap-5 border p-5 rounded-xl hover:border-yellow-500 "
        >
          <img className="w-4/12 mx-auto " src={img1} alt="" />
          <p className="text-3xl text-yellow-500 font-semibold">Indoor games</p>
          <p>
            Indoor games toys refer to a wide range of playthings designed to be
            enjoyed indoors, providing entertainment and engagement for
            individuals or groups. These toys are specifically designed to be
            used inside the house, making them suitable for various indoor
            spaces such as living rooms, bedrooms, or play areas.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="flex flex-col items-center justify-center gap-5 border p-5 rounded-xl hover:border-yellow-500 "
        >
          <img className="w-4/12 mx-auto " src={img2} alt="" />
          <p className="text-3xl text-yellow-500 font-semibold">Animal toys </p>
          <p>
            Animal toys are playthings specifically designed to provide
            entertainment, mental stimulation, and physical exercise for various
            types of pets. These toys cater to the natural instincts and
            behaviors of animals, promoting their overall well-being and
            offering a fun and engaging experience.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col items-center justify-center gap-5 border p-5 rounded-xl hover:border-yellow-500 "
        >
          <img className="w-4/12 mx-auto " src={img3} alt="" />
          <p className="text-3xl text-yellow-500 font-semibold">Car Toys</p>
          <p>
            Car toys are playthings designed to provide entertainment and
            engagement for children while traveling in a car. These toys are
            specifically crafted to be used during car rides, helping to keep
            children occupied, alleviate boredom, and make the journey more
            enjoyable.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="flex flex-col items-center justify-center gap-5 border p-5 rounded-xl hover:border-yellow-500 "
        >
          <img className="w-4/12 mx-auto " src={img4} alt="" />
          <p className="text-3xl text-yellow-500 font-semibold">Vehicle Toys</p>
          <p>
            Vehicle toys are playthings designed to mimic and represent various
            types of vehicles, providing children with the opportunity to engage
            in imaginative and pretend play. These toys allow children to
            explore and interact with different modes of transportation,
            fostering their creativity, fine motor skills, and cognitive
            development.
          </p>
        </div>
      </div>
    </>
  );
};

export default Stats;
