import About from "../../Components/About.jsx/About";
import Banner from "../../Components/Banner.jsx/Banner";
import Services from "../../Components/Services/Services";
import Speaker from "../../Components/Speaker/Speaker";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Speaker />
    </div>
  );
};

export default Home;
