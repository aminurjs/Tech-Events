import PropTypes from "prop-types";
import "./Service.css";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { id, name, image, time, description, ticket_price } = service;

  const handleNavigate = () => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="250"
      className="p-5 flex flex-col border border-gray-800 rounded-lg"
    >
      <img className="rounded-lg flex-grow" src={image} alt="" />
      <div className="my-5 pb-3 border-b border-gray-800">
        <h2 className="text-white text-xl font-medium">{name}</h2>
        <p className="text-[#FFFFFFB2] text-xs">Date: {time}</p>
      </div>
      <p className="text-[#FFFFFFB2] mb-5">{description.slice(0, 100)} ...</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#5ce1e6]">Ticket Price: {ticket_price}</p>
          <div className="flex items-center">
            <p className="text-[#FFFFFFB2]">Rating:</p>
            <div className="rating rating-xs ml-1">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <button
          className="py-2.5 border-none btn1 w-40"
          onClick={handleNavigate}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};
export default Service;
