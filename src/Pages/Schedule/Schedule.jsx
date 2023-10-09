import { useLoaderData } from "react-router-dom";
import Schedules from "./Schedules";
import Speaker from "../../Components/Speaker/Speaker";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Schedule = () => {
  const schedules = useLoaderData();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="bg-[url(https://i.ibb.co/yVtpFMF/group-people-working-out-business-plan-office.jpg)] bg-cover bg-center"
      >
        <div className="bg-[#00040F] bg-opacity-90 pt-32 pb-16">
          <div className="max-w-7xl mx-auto p-5">
            <h1 className="text-3xl text-center md:text-4xl lg:text-[42px] text-white font-semibold leading-normal mb-3">
              Event Schedule
            </h1>
            <p className="text-[#FFFFFFB2] text-lg text-center mb-10">
              Exceeding Expectations Every Time
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          className="max-w-7xl mx-auto px-5 lg:px-0 "
        >
          <h3 className="text-[#044BCC] text-lg text-center mb-4">
            TechEvent Management
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Our Session Schedule
          </h2>
          <p className="text-[#767676] text-center mb-16">
            Empowering Digital Gatherings. Orchestrating Tech Excellence.
          </p>
          <div className="bg-[#f6f6f6] max-w-5xl mx-auto rounded-lg p-8">
            {schedules?.slice(0, 5).map((schedule) => (
              <Schedules key={schedule.id} schedule={schedule}></Schedules>
            ))}
          </div>
        </div>
      </section>
      <Speaker />
      <section className="py-20">
        <div
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="500"
          className="max-w-7xl mx-auto px-5 lg:px-0 "
        >
          <h3 className="text-[#044BCC] text-lg text-center mb-4">Gallery</h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            The Past Events
          </h2>
          <p className="text-[#767676] text-center mb-16">
            Empowering Digital Gatherings. Orchestrating Tech Excellence.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="500"
              src="https://templatekit.jegtheme.com/eventech/wp-content/uploads/sites/172/2021/09/businessmen-having-successful-presentation-in-office.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="500"
              src="https://templatekit.jegtheme.com/eventech/wp-content/uploads/sites/172/2021/09/rear-view-of-audience-listening-speakers-on-the-stage-in-the-conference-hall-or-seminar-meeting.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="500"
              src="https://templatekit.jegtheme.com/eventech/wp-content/uploads/sites/172/2021/09/rear-view-of-audience-over-the-speakers-on-the-stage-in-the-conference-hall-or-seminar-meeting.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="500"
              src="https://templatekit.jegtheme.com/eventech/wp-content/uploads/sites/172/2021/09/asian-speaker-with-casual-suit-on-the-stage-over-the-presentation-screen-in-the-business.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="500"
              src="https://templatekit.jegtheme.com/eventech/wp-content/uploads/sites/172/2021/09/large-audience-crowd-gathering-at-a-conference-watching-the-guest-speaker-on-the-main-stage.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="500"
              src="https://templatekit.jegtheme.com/eventech/wp-content/uploads/sites/172/2021/09/closeup-portrait-of-asian-speaker-with-casual-suit-on-the-stage-present-the-workshop-with-tripod.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
