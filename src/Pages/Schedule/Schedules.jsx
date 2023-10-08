import PropTypes from "prop-types";
import { BiSolidTime } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Schedules = ({ schedule }) => {
  const navigate = useNavigate();
  const { id, time, title, speaker_name, place } = schedule;

  const handleNavigate = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="mb-10 pb-5 border-b border-gray-300">
      <div className=" flex gap-6 flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-[#767676]">{speaker_name}</p>
        </div>
        <div className="text-[#767676] md:w-1/2">
          <div className="flex gap-4 items-center mb-2">
            <span className="text-[#044BCC]  ">
              <BiSolidTime></BiSolidTime>
            </span>
            <p className="">{time}</p>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#044BCC]">
              <FaLocationDot></FaLocationDot>
            </span>
            <p className="text-sm">{place}</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleNavigate}
          className="mt-6 bg-[#4f77ff] rounded-sm px-10 py-2.5 text-white uppercase font-medium duration-300"
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
};
Schedules.propTypes -
  {
    schedule: PropTypes.object,
  };
export default Schedules;
