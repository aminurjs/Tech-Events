const Subscribe = () => {
  return (
    <div className="bg-[#00040F] py-20">
      <div className="max-w-7xl mx-auto px-10 py-16 border border-gray-800 rounded-lg">
        <h2 className="text-white text-2xl">Subscribe now</h2>
        <p className="text-[#FFFFFFB2] text-lg mb-5">
          Exceeding Expectations Every Time
        </p>
        <form>
          <input
            className="py-2 px-5 bg-white w-4/5 mr-5"
            type="email"
            name="email"
            id=""
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
