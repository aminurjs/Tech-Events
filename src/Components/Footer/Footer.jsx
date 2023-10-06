import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00040F] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6">
        <div className="col-span-2">
          <Link to={"/"}>
            <img src="https://i.ibb.co/w4B90KD/Group-481775.png" alt="" />
          </Link>
          <p className=" text-[#FFFFFFB2] mt-4">
            Discover the latest in technology and gaming.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-8">Useful Links</h3>
          <p className="text-[#FFFFFFB2] mb-2 text-sm">Content</p>
          <p className="text-[#FFFFFFB2] mb-2 text-sm">Services</p>
          <p className="text-[#FFFFFFB2] mb-2 text-sm">Explore</p>
          <p className="text-[#FFFFFFB2] mb-2 text-sm">Terms & Services</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-8">Our Address</h3>
          <p className="text-[#FFFFFFB2] mb-2 text-sm">
            49 West 32nd Street, New York, <br /> 4.9 mi / 7.9 km from Downtown
            <br /> United States
          </p>
          <p className="text-[#FFFFFFB2] mb-2 text-sm">
            Monday — Friday: 8AM — 5PM <br /> Saturday: 10AM — 3PM
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-8">Our Contact</h3>
          <p className="text-[#FFFFFFB2] text-sm">
            Any question please contact us
          </p>

          <a href="" className="text-[#FFFFFFB2] mb-6 text-sm block">
            noreply@aminur.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
