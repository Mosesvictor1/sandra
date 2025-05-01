// components/ServicesSection.tsx
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "UI/UX Design",
      img: "/assets/uiux.png", // Update with your actual image
      active: false,
      aos: "fade-right",
    },
    {
      title: "Web Design",
      img: "/assets/webdesign.png", // Update with your actual image
      active: true,
      aos: "zoom-in",
    },
    {
      title: "Landing Page",
      img: "/assets/landingpage.png", // Update with your actual image
      active: false,
      aos: "fade-left",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4 rounded-t-[80px]" id="service">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <hr className="mt-6 border-gray-600 w-24 mx-auto" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              data-aos={service.aos}
              className={`rounded-2xl p-1 relative transition-transform duration-300 ${
                service.active ? "bg-orange-500" : "bg-[#2c2c2c]"
              }`}
            >
              {/* Inner card */}
              <div className="bg-[#2c2c2c] rounded-2xl overflow-hidde relative">
                {/* Title */}
                <div className="p-4 text-xl mb-12 font-medium">{service.title}</div>

                {/* Stacked screenshots */}
                <div className="relative px-4 pb-6 flex items-center justify-center">
                  <div className="absolute -top-14 left- w-[80%] h-full rounded-3xl bg-gray-200 opacity-30 scale-95 z-0" />
                  <div className="absolute -top-7 left- w-[85%] h-full rounded-3xl bg-gray-500 opacit-30 scale-98 z-0" />
                  <img
                    src={service.img}
                    alt={service.title}
                    className="relative rounded-2xl w-full h-auto z-10"
                  />
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-4 right-4 z-50">
                  <button
                    className={`rounded-full p-3 text-white text-4xl shadow-md transition ${
                      service.active ? "bg-orange-500" : "bg-orange-500"
                    }`}
                  >
                    <FaArrowUpRightFromSquare />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
