import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  // eslint-disable-next-line no-unused-vars
  const [services, setServices] = useState();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("./services.json");
      const data = await res.json();
      setServices(data);
    };
    loadData();
  }, []);

  return (
    <div className="bg-[#00040F] py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <h2 className="text-white text-4xl font-semibold text-center mb-2">
          Our Services
        </h2>
        <p className="text-[#FFFFFFB2] text-lg text-center mb-10">
          Exceeding Expectations Every Time
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
