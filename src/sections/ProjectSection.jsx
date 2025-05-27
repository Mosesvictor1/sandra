import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // or use your icon lib

const projects = [
  {
    title: "e-commerce App",
    image: "/assets/project2c.jpg",
    description:
      "Trendive is a fashion-forward app that helps users discover, track, and shop the latest style trends in real time.",
    link: "https://www.figma.com/design/s05bG2Vm9JmzJRyXhv6KPT/TRENDIVE?node-id=0-1&t=PSqN0F7gDpzmtsQa-1",
  },
  {
    title: "fintech App",
    image: "/assets/project2a.jpg",
    description: "A full-featured Trading App with payment features",
    link: "https://www.behance.net/gallery/225730039/LUNANEST-CRYPTOCURENCY-TRADING-APP",
  },
  {
    title: "Travel website",
    image: "/assets/project2d.jpg",
    description:
      "Allocentric Travels is a travel service company that curates adventurous and culturally rich experiences for bold, curious explorers.",
    link: "https://allocentrictravels.com/",
  },
  {
    title: "Pregnancy  App",
    image: "/assets/project2b.jpg",
    description:
      "Mamas Bloom is a supportive community and app designed to support pregnant and postnatal mothers with health tips, meal plans, appointment tracking and many more.",
    link: "https://www.behance.net/gallery/226568921/MAMAS-BLOOM",
  },
];

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="project"
      className="py-20 bg-gray-900 text-center text-white relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10" data-aos="fade-up">
          <p className="text-sm text-orange-500 font-bold uppercase tracking-widest">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Recent Work Highlights
          </h2>
        </div>

        {/* Custom Arrows */}
        <div className="absolute left-0 lg:left-36 top-1/2 -translate-y-1/2 z-10">
          <button className="custom-prev bg-orange-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-all">
            <ArrowLeft size={20} />
          </button>
        </div>
        <div className="absolute right-0 lg:right-36 top-1/2 -translate-y-1/2 z-10">
          <button className="custom-next bg-orange-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-all">
            <ArrowRight size={20} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden p-5 h-full flex flex-col justify-between"
                data-aos="zoom-in"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="bg bg-orange-600 py-2 rounded-lg mt-3"
                >
                  View Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
