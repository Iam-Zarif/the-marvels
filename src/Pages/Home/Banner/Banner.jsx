
import cover from '../../../assets/cover.png'
const Banner = () => {
    return (
      <div className="mt-8 ">
        <img className="h-2/3 mx-auto relative" src={cover} alt="" />
        <p className="absolute text-black top-40 lg:top-44 text-xl font-bold italic lg:text-4xl">Best prizes in the world!!!</p>
        
      </div>
    );
};

export default Banner;