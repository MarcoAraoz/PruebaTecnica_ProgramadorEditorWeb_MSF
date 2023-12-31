import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    // <section className='lg:h-screen'>
    <section>
      <div className="container-fluid mx-auto">
        <div
          className="bg-accent-primary mx-auto min-h-[600px]"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="flex flex-col justify-center items-center px-2 xl:px-0 h-[500px]">
            <h2 className="h2 text-white text-center mb-[100px]">
              Testimonials
            </h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
