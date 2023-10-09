import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <section className="bg-[url(https://i.ibb.co/yVtpFMF/group-people-working-out-business-plan-office.jpg)] bg-cover bg-center">
        <div className="bg-[#00040F] bg-opacity-90 pt-32 pb-16">
          <div className="max-w-7xl mx-auto p-5">
            <h1 className="text-3xl text-center md:text-4xl lg:text-[42px] text-white font-semibold leading-normal mb-3">
              Contact Us
            </h1>
            <p className="text-[#FFFFFFB2] text-lg text-center mb-10">
              Contact Information Below
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto p-5 my-20">
          <div className="flex justify-evenly mb-20 flex-col gap-10 md:gap-0 md:flex-row">
            <div
              data-aos="fade-up-right"
              className="bg-[#f6f6f6] rounded-lg p-10 pt-7 text-center"
            >
              <div className="p-5 bg-[#044BCC] text-white text-2xl rounded-md inline-block -mt-20">
                <BiMap></BiMap>
              </div>
              <h3 className="text-[#044BCC] font-medium text-lg text-center mb-2">
                TechEvent Location
              </h3>
              <p className="text-[#767676] text-center text-sm">
                Los Angeles City in California
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#f6f6f6] rounded-lg p-10 pt-7 text-center"
            >
              <div className="p-5 bg-[#044BCC] text-white text-2xl rounded-md inline-block -mt-20">
                <FiPhoneCall></FiPhoneCall>
              </div>
              <h3 className="text-[#044BCC] font-medium text-lg text-center mb-2">
                Give Us A Call
              </h3>
              <p className="text-[#767676] text-center text-sm">
                (021) 231 - 2826
              </p>
            </div>
            <div
              data-aos="fade-up-left"
              className="bg-[#f6f6f6] rounded-lg p-10 pt-7 text-center"
            >
              <div className="p-5 bg-[#044BCC] text-white text-2xl rounded-md inline-block -mt-20">
                <FiMail></FiMail>
              </div>
              <h3 className="text-[#044BCC] font-medium text-lg text-center mb-2">
                Send Us A Message
              </h3>
              <p className="text-[#767676] text-center text-sm">
                dev.tech@event.com
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center flex-col lg:flex-row">
            <div
              data-aos="flip-left"
              data-aos-offset="300"
              data-aos-duration="500"
              className="lg:w-1/2"
            >
              <h3 className="text-[#044BCC] font-medium text-lg mb-2">
                Contact Us
              </h3>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Get In Touch
              </h2>
              <img
                className="pb-4 border-b border-gray-200"
                src="https://i.ibb.co/Tr6bH0s/beautiful-city.jpg"
                alt=""
              />
              <div>
                <h4 className="mb-2 font-medium text-xl">Social Media:</h4>
                <div className="text-[#3378F8] text-2xl flex gap-4">
                  <Link>
                    <AiOutlineInstagram></AiOutlineInstagram>
                  </Link>
                  <Link>
                    <AiFillFacebook></AiFillFacebook>
                  </Link>
                  <Link>
                    <AiOutlineTwitter></AiOutlineTwitter>
                  </Link>
                  <Link>
                    <AiFillLinkedin></AiFillLinkedin>
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-offset="400"
              data-aos-duration="500"
              className="p-8 rounded-lg border border-gray-200 shadow lg:w-1/2"
            >
              <form className="space-y-4">
                <input
                  className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Full Name"
                />
                <input
                  className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full"
                  type="email"
                  name=""
                  id=""
                  placeholder="Your Email"
                />
                <input
                  className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Subject"
                />
                <textarea
                  className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full"
                  name=""
                  rows="5"
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#4f77ff] rounded px-10 py-3 text-white uppercase font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-5">
        <Subscribe />
      </section>
    </div>
  );
};

export default Contact;
