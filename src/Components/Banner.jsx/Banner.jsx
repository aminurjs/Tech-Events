const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/gzH1g2c/21083089-6406356.jpg)] bg-cover">
      <div className="bg-[#00040F] bg-opacity-50">
        <div className="max-w-7xl mx-auto pt-48 pb-16 flex gap-6">
          <div className="ml-10 w-3/5">
            <h3 className="text-white text-lg font-medium mb-5">
              Biggest Tech Event
            </h3>
            <h3 className="text-white text-6xl font-semibold max-w-3xl leading-snug mb-5">
              Growing The Global Technology Industry
            </h3>
            <p className="text-white text-lg max-w-xl leading-snug mb-5">
              Connect with innovation. Join events that bridge the gap between
              tech enthusiasts and gamers.
            </p>
            <button className="btn-outline font-medium text-[#33BBCF] border border-[#33BBCF] py-2 px-4 rounded-md">
              Get Started
            </button>
          </div>
          <img
            className="w-2/5"
            src="https://i.ibb.co/QDQGf3V/pngwing-com-6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
