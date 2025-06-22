import { FaArrowRight, FaStar } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="re relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 mt-20 relative">
        {/* Hello Bubble */}
        <div className="flex justify-center mb-6" data-aos="fade-down">
          <div className="border border-gray-300 rounded-full px-6 py-2 relative inline-flex bg-white shadow-sm">
            <span className="font-medium">Hello!</span>
            <div className="absolute -right-1 -top-1">
              <div className="h-2 w-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            I'm <span className="text-red-500">Sandra</span>,
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mt-2">
            Product Designer
          </h2>
        </div>

        <div className="relative">
          {/* Hero Image */}
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] mx-auto rounded-full bg-gradient-to-br from-red-300 to-red-50 overflow-hidde z-10 shadow-lg"
            data-aos="zoom-in"
          >
            <img
              src="assets/hero2.png"
              alt="Product Designer"
              className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-72 sm:w-96 md:w-[500px] h-auto z-20"
            />
          </div>

          {/* Star Icon */}
          <div
            className="absolute top-[14%] right-[30%] md:right-[35%] z-30"
            data-aos="fade"
            data-aos-delay="200"
          >
            <FaStar size={24} className="text-black" />
          </div>

          {/* Buttons */}
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center gap-4 z-30"
            // data-aos="zoom-in"
          >
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full flex items-center shadow-md transition"
              onClick={() =>
                window.open(
                  "https://wa.me/2348186212047?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20to%20discuss%20your%20services%2C%20can%20you%20please%20provide%20more%20details%3F%0A%0Ahttps%3A%2F%2Fsandra-kappa.vercel.app",
                  "_blank"
                )
              }
            >
              Appointment <FaArrowRight className="ml-2" />
            </button>
            <a href="#contact">
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-8 py-3 rounded-full shadow-sm transition">
                Hire Me
              </button>
            </a>
          </div>

          {/* Testimonial */}
          <div
            className="absolute bottom-28 left-4 md:left-10 z-20 max-w-xs text-left hidden sm:block"
            data-aos="fade-right"
          >
            <div className="text-5xl text-gray-600 font-serif">"</div>
            <p className="text-gray-800 font-medium">
              Sandra's design brilliance brought our platform to life. Highly
              recommended!
            </p>
            <div className="mt-6">
              <h3 className="text-3xl font-bold text-red-600">10+</h3>
              <p className="text-gray-700">Clients Served</p>
            </div>
            <div className="relative mt-4">
              <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                <path
                  d="M0,40 Q60,110 120,40"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M110,45 L120,40 L115,50"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Experience */}
          <div
            className="absolute right-4 md:right-16 bottom-32 text-right z-20 hidden sm:block"
            data-aos="fade-left"
          >
            <div className="flex justify-end mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-red-500 text-xl" />
              ))}
            </div>
            <h3 className="text-3xl font-bold">3 Years</h3>
            <div className="border-t-2 border-black w-36 mt-2 ml-auto"></div>
            <p className="text-xl text-gray-700 mt-1">Expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
}
