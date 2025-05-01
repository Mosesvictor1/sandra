// SkillsSection.tsx
import {
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiStorybook,
  SiInvision,
  SiMiro,
  SiNotion,
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const tools = [
  { name: "Figma", icon: <SiFigma size={28} color="#F24E1E" />, percent: "98%" },
  { name: "Sketch", icon: <SiSketch size={28} color="#F7B500" />, percent: "90%" },
  { name: "Adobe XD", icon: <SiAdobexd size={28} color="#FF2BC2" />, percent: "88%" },
  { name: "Photoshop", icon: <SiAdobephotoshop size={28} color="#31A8FF" />, percent: "90%" },
  { name: "After Effects", icon: <SiAdobeaftereffects size={28} color="#9999FF" />, percent: "85%" },
  { name: "Storybook", icon: <SiStorybook size={28} color="#FF4785" />, percent: "92%" },
  { name: "InVision", icon: <SiInvision size={28} color="#FF3366" />, percent: "95%" },
  { name: "Miro", icon: <SiMiro size={28} color="#050038" />, percent: "89%" },
  { name: "Notion", icon: <SiNotion size={28} color="#000000" />, percent: "93%" },
];

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className=" text-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 font-medium">– My Favorite Tools</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            <span className="text-orange-500 italic font-medium">Exploring the Tools </span>
            <span className="text-black font-bold">Behind My Designs</span>
          </h2>
        </div>

        {/* Swiper with Auto Scroll */}
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="px-4"
        >
          {tools.map((tool, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="bg-gray-100 rounded-[50px] w-[110px] h-[150px] mx-auto flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  {tool.icon}
                </div>
                <div className="text-lg font-semibold mb-1">{tool.percent}</div>
                <div className="text-sm font-bold text-gray-700">{tool.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
