import { BsFillMicFill } from "react-icons/bs";
import { BiSolidStoreAlt } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Speaker = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[url(https://i.ibb.co/s593kHd/the-audience.jpg)] bg-cover">
      <div className="bg-[#00040F] bg-opacity-80 py-20 px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex gap-10 px-5 lg:px-0 flex-col lg:flex-row">
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="500"
            className="lg:w-1/2"
          >
            <h3 className="text-[#5CE1E6] mb-4">The Event</h3>
            <h2 className="text-3xl text-white font-semibold mb-4">
              Our Professionals Speaker
            </h2>
            <p className="text-[#FFFFFFB2] mb-8">
              Our Professional Speaker series showcases experts from diverse
              fields, offering audiences deep insights and inspiration with
              their vast knowledge and engaging delivery.
            </p>
            <div className="flex gap-5 items-center mb-5">
              <div className="flex gap-4 items-center">
                <div className="text-[#5CE1E6] text-5xl">
                  <BsFillMicFill></BsFillMicFill>
                </div>
                <div>
                  <h4 className=" text-white font-medium mb-1 text-3xl">
                    25 +
                  </h4>
                  <p className="text-[#FFFFFFB2] text-sm">Expert Speaker</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="text-[#5CE1E6] text-5xl">
                  <BiSolidStoreAlt></BiSolidStoreAlt>
                </div>
                <div>
                  <h4 className=" text-white font-medium mb-1 text-3xl">
                    50 +
                  </h4>
                  <p className="text-[#FFFFFFB2] text-sm">Event Booths</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="500"
            className="lg:w-1/2"
          >
            <div className="flex gap-5">
              <img
                className="w-1/2"
                src="https://i.ibb.co/1dc0zym/PCXJHSB-2-e1632728549629.jpg"
                alt=""
              />
              <img
                className="w-1/2"
                src="https://i.ibb.co/KzdcYtr/YELDXEV-2.jpg"
                alt=""
              />
            </div>
            <button className="flex items-center font-medium text-[#33BBCF] rounded-md mt-3 ml-auto">
              <span>More speaker</span>{" "}
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
