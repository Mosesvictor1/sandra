import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Loveth",
    role: "Creative Director",
    message:
      "Her design skills are world-class. Every project is delivered with precision and excellence.",
    image: "/assets/tesmonial2.avif",
  },
  {
    name: "Tombra",
    role: "Product Manager",
    message:
      "Working with Sandra was a breath of fresh air. She's super easy to collaborate with and always thinks about the user first. Her designs made everything seamless and user friendly",
    image: "/assets/testimonail.jpg",
  },
  {
    name: "— Moses",
    role: "UX Designer",
    message:
      "While working with Sandra she brought  so much creativity and calm to the team. She's always open to feedback, quick to help others, and her designs have this clean, thoughtful vibe that users Realll connect with.",
    image: "/assets/tesmonial3.avif",
  },
  {
    name: "John Williams",
    role: "Creative Director",
    message:
      "Sandra has an amazing eye for detail and a natural sense for what works. Watching her grow into such a confident, creative designer has been inspiring.",
    image: "/assets/tesmonial4.avif",
  },
  {
    name: "Linda Williams",
    role: "Creative Director",
    message:
      "She delivers projects with precision and excellence, showcasing her exceptional design expertise.",
    image: "/assets/testimonail2.jpg",
  },
];

export default function TestimonialSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-12" data-aos="fade-up">
          <p className="text-orange-500 font-bold text-sm uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What Clients Say About Me
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-2xl shadow-xl p-6 text-left h-full"
                data-aos="fade-up"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  “{testimonial.message}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
