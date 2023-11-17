import { testimonialsData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

import { Pagination } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <Swiper
      className="xl:pb-[0px]"
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{ dynamicBullets: true, clickable: true, hideOnClick: true }}
      modules={[Pagination]}
    >
      {testimonialsData.map((slide, index) => {
        const { image, name, web, message } = slide;

        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-xl border max-h-[430px] max-w-[445px] xl:max-w-[545px] xl:max-h-[330px] pt-[30px] px-[35px] xl:px-[70px] pb-[60px] flex items-start gap-x-[30px] shadow-xl"
          >
            <div className="flex flex-col items-center xl:flex-row justify-left xl:justify-center">
              {/* avatar images */}
              <img
                className="mb-4 w-16 h-16 lg:mb-7 lg:w-20 lg:h-20 object-cover rounded-full lg:-mt-16 lg:mr-8"
                src={image}
                alt=""
              />
              {/* texts */}
              <div className="flex flex-col items-center xl:items-start">
                <div className="text-lg text-primary font-bold">{name}</div>
                <div className="mb-0 font-semibold text-accent-primary">
                  {web}
                </div>
                <p className="max-w-[340px]">{message}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
