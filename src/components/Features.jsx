import { featuresData } from "../data";
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  const { title, subtitle, list } = featuresData;
  return (
    <section className="my-[70px] xl:mt-[120px] xl:mb-[50px]">
      <div className="container mx-auto">
        {/* texts */}
        <div className="text-center">
          <h2
            className="h2 mb-6 xl:mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {title}
          </h2>
          <p
            className="lead max-w-[585px] mx-auto mb-16 xl:mb-24"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {subtitle}
          </p>
        </div>
        {/* features List[] */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((feature, index) => {
            const { image, bgImage, title, description, linkText, delay } =
              feature;
            return (
              <div
                className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay={delay}
                key={index}
              >
                {/* bg image */}
                <div>
                  <img
                    className="hidden xl:flex absolute top-0 right-0 -z-10"
                    src={bgImage}
                    alt="Event Features"
                  />
                </div>
                {/* icon image */}
                <div
                  className="max-w-[120px] xl:mr-7 xl:max-w-[230px]"
                  data-aos="zoom-in-right"
                  data-aos-delay={delay}
                >
                  <img src={image} alt="Event Features" />
                </div>
                {/* text */}
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{title}</h3>
                  <p className="font-light italic gag-x-2 group">
                    {description}
                  </p>
                  <div className="flex items-center gap-x-2 group mt-2">
                    <a className="text-primary font-bold" href="#">
                      {linkText}
                    </a>
                    <BsArrowRight
                      size={20}
                      className="text-xl text-accent-primary group-hover:ml-[5px] transition-all"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
