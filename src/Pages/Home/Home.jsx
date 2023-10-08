import About from "../../Components/About.jsx/About";
import Banner from "../../Components/Banner.jsx/Banner";
import Services from "../../Components/Services/Services";
import Speaker from "../../Components/Speaker/Speaker";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Speaker />
      <div className="bg-[#00040F] py-20 px-5">
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
