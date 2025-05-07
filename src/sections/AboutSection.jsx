// AboutSection.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "/assets/hero2.png"; // Replace with the correct path

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-16 md:py-24 px-4 md:px-12 rounded-t-[30px] border-b-4" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div
          className="relative w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <div className="b-[#FF3C00] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full absolute top-0 left-0 z-0" />
          <img
            src={aboutImg}
            alt="Hire Me"
            className="relative z-10 w-[400px] md:w-[500px] object-cover rounded-full"
          />
          {/* Dots */}
          <div className="absolute top-6 left-[75%] z-20 space-y-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          className="text-center md:text-left w-full md:w-1/2 #contact"
          data-aos="fade-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 leading-snug">
            Why You <span className="text-[#FF3C00]"><a href="#contact">Hire Me</a></span> <br />
            for Your Next Projects?
          </h2>
          <p className="text-gray-50 mt-4 mb-8 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-10 mb-8">
            <div>
              <p className="text-2xl font-bold text-gray-100">10+</p>
              <p className="text-gray-50 text-sm">Project Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-100">5+</p>
              <p className="text-gray-50 text-sm">Industry Covered</p>
            </div>
          </div>

          {/* Button */}
          <button className="px-6 py-2 rounded-full border-2 border-[#FF3C00] text-[#FF3C00] font-semibold hover:bg-[#FF3C00] hover:text-white transition duration-300">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
