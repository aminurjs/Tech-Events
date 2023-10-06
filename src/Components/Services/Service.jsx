import PropTypes from "prop-types";
import "./Service.css";

const Service = ({ service }) => {
  const { name, image, price, shortDescription } = service;
  return (
    <div className="service p-5 flex flex-col">
      <img className="rounded-lg flex-grow" src={image} alt="" />
      <div className="flex justify-between my-5">
        <h2 className="text-white text-xl font-medium">{name}</h2>
        <h3 className="text-[#FFFFFFB2]">Price: {price}</h3>
      </div>
      <p className="text-[#FFFFFFB2] font-semibold flex-grow mb-5">
        {shortDescription}
      </p>
      <button className="btn border-none btn1 w-40">View Details</button>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};
export default Service;
