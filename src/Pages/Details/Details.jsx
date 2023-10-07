import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const findData = services?.find((service) => service.id === id);
  const { title, name, price, image, fullDescription, shortDescription } =
    findData;

  return (
    <div className="bg-[#00040F] py-20">
      <div className="max-w-7xl mx-auto mt-5">
        <h2 className="text-white text-3xl font-semibold mb-2">{title}</h2>
        <div className="flex justify-between pb-4 border-b border-gray-800 mb-6">
          <p className="text-[#FFFFFFB2] text-lg">{name}</p>
          <div className="text-[#FFFFFFB2]">
            <span className="mr-4">Price: {price}</span> <span>Rating: </span>
            <div className="rating rating-xs">
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
        <img className="w-full mb-8" src={image} alt="" />
        <p className="text-[#FFFFFFB2] leading-normal tracking-wide mb-8">
          {fullDescription}
        </p>
        <p className="text-[#FFFFFFB2] leading-normal tracking-wide mb-8">
          {shortDescription}
        </p>
      </div>
    </div>
  );
};

export default Details;
