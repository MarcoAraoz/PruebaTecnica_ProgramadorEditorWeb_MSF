import { aboutData } from "../data";
import EventForm from "./EventForm";

const About = () => {
  const { image, title } = aboutData;

  return (
    <section
      className="my-[30px] xl:mt-[100px]"
      data-aos="fade-up"
      // data-aos-offset="150"
    >
      <div className="container mx-auto w-[430px] xl:w-[960px] h-[620px] bg-accent-secondary/[15%] rounded-[50px]">
        <h2
          className="h2 text-center items-center py-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {title}
        </h2>
        <div className="max-h-[460px] px-12 xl:py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0">
          {/* imageSection */}
          <div className="flex-1" data-aos="zoom-in-left">
            <img
              className="hidden xl:flex top-0 right-0 -z-10"
              src={image}
              alt="about img"
            />
          </div>
          {/* textSection */}
          <div className="flex-1 xl:pr-12">
            <EventForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
