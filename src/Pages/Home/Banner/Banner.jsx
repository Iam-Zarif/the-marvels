/* eslint-disable no-unused-vars */

import cover from '../../../assets/cover.webp'
import cover1 from '../../../assets/cover.png'
import Gallery from '../Gallery/Gallery';
import ironMan from '../../../assets/1136897-statue-Iron-Man-Toy-machine-comics-armour-action-figure.png'
import Title from '../../../Title/Title';
const Banner = () => {
  Title('Marvel Toys')
    return (
      <div>
        <div className="">
          <img
            className="w-full lg:h-[800px] mx-auto relative  shadow-md shadow-slate-400 border-y-2"
            src={ironMan}
            alt=""
          />
        </div>
        <div className="">
          <Gallery></Gallery>
        </div>
      </div>
    );
};

export default Banner;