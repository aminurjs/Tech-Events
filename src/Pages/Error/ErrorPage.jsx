import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <div className="bg-[#00040F] pt-24">
      <Navbar />
      <div className="bg-[url(https://i.ibb.co/yXKX874/4051580-2144771.jpg)] bg-cover bg-center max-w-3xl mx-auto">
        <div className="bg-[#00040F] bg-opacity-60 h-[60vh] flex justify-center items-center">
          <Link to={-1}>
            <button className=" font-medium bg-[#33BBCF]  border border-[#33BBCF] py-2 px-10 rounded-md">
              Go Back
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
