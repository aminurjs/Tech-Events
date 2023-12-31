import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[url(https://i.ibb.co/s593kHd/the-audience.jpg)] bg-center bg-cover">
      <div className="bg-[#00040F] bg-opacity-90">
        <div className="max-w-7xl mx-auto pt-48 pb-16 flex gap-6 border-b border-gray-800 flex-col-reverse lg:flex-row px-5 lg:px-0">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            className="lg:ml-10 lg:w-3/5"
          >
            <h3 className="text-white text-lg font-medium mb-5">
              Biggest Tech Event
            </h3>
            <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold max-w-3xl leading-snug mb-5">
              Growing The Global Technology Industry
            </h3>
            <p className="text-[#FFFFFFB2] text-lg max-w-xl leading-snug mb-5">
              Connect with innovation. Join events that bridge the gap between
              tech enthusiasts and gamers.
            </p>
            <button className=" font-medium text-[#33BBCF] border border-[#33BBCF] py-2 px-4 rounded-md">
              Get Started
            </button>
          </div>
          <img
            data-aos="fade-up"
            data-aos-offset="300"
            className="md:w-4/5 mx-auto lg:w-2/5 img"
            src="https://i.ibb.co/QDQGf3V/pngwing-com-6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
