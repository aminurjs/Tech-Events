import { LiaHandsHelpingSolid, LiaQuoteLeftSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <div className="bg-[#00040F] py-20">
      <div className="max-w-7xl mx-auto">
        <div>
          <h3 className="text-[#5CE1E6] text-lg text-center mb-4">
            TechEvent Management
          </h3>
          <h2 className="text-4xl text-white font-semibold text-center mb-4">
            Talking All About Our Events
          </h2>
          <p className="text-[#FFFFFFB2] text-center mb-16">
            Empowering Digital Gatherings. Orchestrating Tech Excellence.
          </p>
          <div className="flex gap-12 px-20">
            <div className="bg-[url(https://i.ibb.co/s593kHd/the-audience.jpg)] bg-cover rounded-md w-5/12">
              <div className="min-h-[450px] rounded-md flex flex-col justify-between bg-black bg-opacity-50 p-5">
                <div className="text-[#FFFFFFB2] text-5xl">
                  <BsGraphUpArrow></BsGraphUpArrow>
                </div>
                <div>
                  <div className="text-[#5CE1E6] text-5xl">
                    <LiaQuoteLeftSolid></LiaQuoteLeftSolid>
                  </div>
                  <h2 className="text-xl text-[#FFFFFFB2] font-medium">
                    Learn The Advanced Strategy Of Growing The Tech Industry
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-7/12 mt-6">
              <h3 className="text-[#5CE1E6] mb-4">About the TechEvent</h3>{" "}
              <h2 className="text-3xl text-white font-semibold mb-4">
                Learn The Advanced Strategy Of Growing The Tech Industry
              </h2>
              <p className="text-[#FFFFFFB2] mb-8">
                Achieved the future of tech with an advanced growth strategy.
                This guide offers cutting-edge insights and methodologies,
                positioning industry leaders for transformative success. Harness
                the momentum of innovation and drive the tech {"industry's"}{" "}
                next evolutionary leap.
              </p>
              <div className="flex gap-2 justify-between items-center mb-5">
                <div className="flex gap-4 items-center">
                  <div className="text-[#5CE1E6] text-4xl">
                    <BsGraphUpArrow></BsGraphUpArrow>
                  </div>
                  <div>
                    <h4 className=" text-white font-medium mb-1">
                      Growing The Industry
                    </h4>
                    <p className="text-[#FFFFFFB2] text-sm">
                      Elevating Standards, Igniting Innovation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-[#5CE1E6] text-5xl">
                    <LiaHandsHelpingSolid></LiaHandsHelpingSolid>
                  </div>
                  <div>
                    <h4 className=" text-white font-medium mb-1">
                      Connecting People
                    </h4>
                    <p className="text-[#FFFFFFB2] text-sm">
                      Elevating Standards, Igniting Innovation.
                    </p>
                  </div>
                </div>
              </div>
              <button className="py-2.5 border-none btn1 px-8 mr-5">
                Explore
              </button>
              <button className=" font-medium text-[#33BBCF] border border-[#33BBCF] py-2.5 px-4 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
