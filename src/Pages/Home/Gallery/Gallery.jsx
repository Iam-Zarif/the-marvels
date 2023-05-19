import Testimonials from "../Testimonials/Testimonials";


const Gallery = () => {
    return (
      <>
        <h1 className="text-center mt-20 text-4xl">
          Our achievements of{" "}
          <span className="logoName text-yellow-500">Gallery</span>
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 w-2/3 lg:w-1/2 mx-auto mt-10">
          <img
            data-aos="fade-down"
            data-aos-duration="3000"
            className="border-4 rounded-2xl shadow-lg shadow-yellow-500 w-64 mx-auto"
            src="https://www.hasbro.com/common/productimages/en_US/0417E68DCCC74D3A81D0485284CAA9A1/7ffada1a15fa7f57c764c7930ecd91b9ab52de40.jpg"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            className="border-4 rounded-2xl shadow-lg shadow-yellow-500 w-64 mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZkqssg1kODe2zgfCD9pQ3UwK0wj0bQCO5erwsaDL46gxjfm4mHBJiwIAfrmyTYZliKQ&usqp=CAU"
            alt=""
          />
          <img
            data-aos="fade-down"
            data-aos-duration="3000"
            className="border-4 rounded-2xl shadow-lg shadow-yellow-500 w-64 mx-auto"
            src="https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwf7fc5031/images/34BFB8BC_7.jpg?sw=767&sh=767&sm=fit"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            className="border-4 rounded-2xl shadow-lg shadow-yellow-500 w-64 mx-auto"
            src="https://m.media-amazon.com/images/I/71Vll5Ifv7L._AC_SL1500_.jpg"
            alt=""
          />
          <img
            data-aos="fade-down"
            data-aos-duration="3000"
            className="border-4 rounded-2xl shadow-lg shadow-yellow-500 w-64 mx-auto"
            src="https://m.media-amazon.com/images/I/71Tg37j5zoL._AC_SL1500_.jpg"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            className="border-4 rounded-2xl shadow-lg shadow-yellow-500 w-64 mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5liXncdwubYbX8OQ_HjQIMJpa34UfWNOCzg&usqp=CAU"
            alt=""
          />
        </div>
        <Testimonials></Testimonials>
      </>
    );
};

export default Gallery;