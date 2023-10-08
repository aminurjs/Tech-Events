import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsCardChecklist, BsInstagram, BsTwitter } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Details = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const findData = services?.find((service) => service.id === id);
  console.log(findData);
  const {
    title,
    speaker_name,
    time,
    image,
    description,
    tags,
    name,
    ticket_price,
  } = findData;

  return (
    <>
      <section className="bg-[url(https://i.ibb.co/7V8gJDy/seminar-meeting.jpg)] bg-cover bg-center">
        <div className="bg-[#00040F] bg-opacity-80 pt-32 pb-16">
          <div className="max-w-7xl mx-auto p-5">
            <h1 className="text-2xl md:text-4xl lg:text-[42px] text-white font-semibold md:w-4/5 leading-normal mb-3">
              {title}
            </h1>
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="flex gap-4">
                <span className="text-[#5ce1e6] text-xl ">
                  <FaRegCircleUser></FaRegCircleUser>
                </span>
                <p className="text-white">{speaker_name}</p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#5ce1e6] text-xl ">
                  <BiTime></BiTime>
                </span>
                <p className="text-white">{time}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-20">
        <div className="max-w-7xl mx-auto flex gap-4 lg:gap-6 p-5 flex-col md:flex-row">
          <div className="md:w-3/5 lg:w-2/3 mb-5">
            <img className="rounded-lg mb-6" src={image} alt="" />
            <p className="leading-normal text-[#7A7A7A] pb-8 border-b border-gray-300 mb-8">
              {description}
            </p>
            <div className="flex justify-between">
              <div>
                <h4 className="mb-2 font-medium">Shares:</h4>
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
              <div>
                <h4 className="mb-2 font-medium">Tags:</h4>
                <p className="text-[#3378F8] text-sm">
                  {tags.map((tag, idx) => (
                    <Link key={idx}>{tag}, </Link>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 lg:w-1/3 p-2 lg:p-5">
            <h3 className="mb-4 font-semibold text-xl pb-2 border-b border-gray-300">
              {name}
            </h3>
            <h3 className="font-medium text-lg mb-4">
              Speaker : {speaker_name}
            </h3>
            <div className="flex gap-2 items-center mb-4">
              <span className="text-[#3378F8] text-xl ">
                <BiTime></BiTime>
              </span>
              <p>Time : {time}</p>
            </div>
            <div className="flex gap-2 items-center mb-4">
              <span className="text-[#3378F8] text-xl ">
                <BsCardChecklist></BsCardChecklist>
              </span>
              <p>Ticket Price : {ticket_price}</p>
            </div>
            <button className="mb-6 bg-gradient-to-r bg-[#4f77ff] rounded-lg px-10 py-2.5 text-white uppercase font-medium duration-300">
              Buy Ticket
            </button>
            <h3 className="mb-4 font-semibold text-xl pb-2 border-b border-gray-300 mt-10">
              Find us on
            </h3>
            <div className="border border-gray-200 rounded-md">
              <ul>
                <li className="p-3 border-b border-gray-200">
                  <a className="flex gap-2 items-center" href="" target="blank">
                    <div className="p-1.5 bg-dark-7 rounded-full text-xl">
                      <FaFacebookF></FaFacebookF>
                    </div>
                    <span className="text-dark-3 font-medium">Facebook</span>
                  </a>
                </li>
                <li className="p-3 border-b border-gray-200">
                  <a className="flex gap-2 items-center" href="" target="blank">
                    <div className="p-1.5 bg-dark-7 rounded-full text-xl text-[#58A7DE]">
                      <BsTwitter></BsTwitter>
                    </div>

                    <span className="text-dark-3 font-medium">Twitter</span>
                  </a>
                </li>
                <li className="p-3">
                  <a className="flex gap-2 items-center" href="" target="blank">
                    <div className="p-1.5 bg-dark-7 rounded-full text-xl  text-[#D9465E]">
                      <BsInstagram></BsInstagram>
                    </div>
                    <span className="text-dark-3 font-medium">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
