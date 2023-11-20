import { sponsorImages } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SponsorSlider = () => {
  return (
    <Swiper
      className="xl:pb-[0px]"
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      spaceBetween={20}
    //   pagination={{ dynamicBullets: true, clickable: true, hideOnClick: true }}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {sponsorImages.map((img, index) => {
        // const { image, name, web, message } = slide;
        // const { logo, href } = img;

        return (
          <SwiperSlide
            key={index}
            className="backdrop-blur-xl bg-white/30 rounded-xl max-h-[430px] max-w-[400px] xl:max-w-[400px] xl:max-h-[330px] pt-[30px] px-[35px] xl:px-[70px] pb-[20px] xl:pb-[0px] flex items-start justify-center gap-x-[30px] shadow-xl"
          >
            <div className="flex flex-col items-center xl:flex-row justify-center xl:justify-center">
              {/* avatar images */}
              <img
                className="w-auto xl:max-w-[500px] scale-75 h-14 lg:mb-7 lg:w-auto lg:h-20 object-cover items-center justify-center"
                src={img}
                alt=""
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SponsorSlider;
