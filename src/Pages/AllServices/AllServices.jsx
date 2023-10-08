import { useLoaderData } from "react-router-dom";
import Service from "../../Components/Services/Service";

const AllServices = () => {
  const services = useLoaderData();
  return (
    <div>
      <section className="bg-[url(https://i.ibb.co/7V8gJDy/seminar-meeting.jpg)] bg-cover bg-center">
        <div className="bg-[#00040F] bg-opacity-90 pt-32 pb-16">
          <div className="max-w-7xl mx-auto p-5">
            <h1 className="text-3xl text-center md:text-4xl lg:text-[42px] text-white font-semibold leading-normal mb-3">
              Our Services
            </h1>
            <p className="text-[#FFFFFFB2] text-lg text-center mb-10">
              Exceeding Expectations Every Time
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#00040F] py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;
