import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      id: 1,
      company: "Self-Employed, NYC",
      period: "Sep 2020 - July 2023",
      role: "Visual Designer",
      description:
        "- Designed visually appealing and user-friendly interfaces for web and mobile applications",
      dotColor: "bg-orange-500",
    },
    {
      id: 2,
      company: "Insightancer",
      period: "Aug 2016 - Sep 2020",
      role: "UI/UX Designer",
      description:
        "- Conducted user research and testing to inform design decisions, using tools like UserTesting and TryMyUI",
      dotColor: "bg-gray-600",
    },
    {
      id: 3,
      company: "KG Design Studio",
      period: "Sep 2015 - Aug 2016",
      role: "Web Designer",
      description:
        "- Designed and developed responsive websites for clients in various industries",
      dotColor: "bg-orange-500",
    },
  ];

  return (
    <div className="">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          My Work Experience
        </h1>

        <div className="relative">
          {/* Timeline vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/4 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-16 relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Left - Company & Period */}
              <div className="w-full md:w-1/4 pr-4 mb-4 md:mb-0 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>

              {/* Dot on timeline (desktop only) */}
              <div
                className="absolute left-1/4 md:block hidden transform -translate-x-1/2 top-1"
                data-aos="zoom-in"
                data-aos-delay={index * 150 + 200}
              >
                <div
                  className={`w-5 h-5 rounded-full border-4 border-white shadow-md ${exp.dotColor}`}
                ></div>
              </div>

              {/* Mobile dot and period inline */}
              <div className="md:hidden flex items-center mb-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 border-white mr-2 ${exp.dotColor}`}
                ></div>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>

              {/* Right - Role & Description */}
              <div className="w-full md:w-3/4 md:pl-12">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.role}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
