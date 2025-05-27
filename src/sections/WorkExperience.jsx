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
      company: "Flip to Tech, Abuja, Nigeria ",
      period: "June. 2024 - Present",
      role: "Ui/Ux & Web Design ",
      description:
        "- Supported front-end web development using HTML, CSS, and basic JavaScript for interactive features.-	Participated in brainstorming sessions and contributed creative ideas to improve visual design and navigation flow.",
      dotColor: "bg-orange-500",
    },
    {
      id: 2,
      company: "Allocentric Travels&Tours, Abuja, Nigeria ",
      period: "Sept. 2023 – May 2024",
      role: "Product Design Intern",
      description:
        "-	Gathered feedback from real or test users on the travel platform . -	Identified pain point in the user experience and suggested designs improvements based on user behavioral and needs.",
      dotColor: "bg-gray-600",
    },
    {
      id: 3,
      company: "Labano Academy, Abuja, Nigeria",
      period: "Mar. 2023 – Aug 2023",
      role: "Ui/Ux design Intern",
      description:
        "-	Created wireframes, mockups, and design systems for web and mobile applications using Figma. -	Contributed to UX documentation and presentation materials for internal reviews.",
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
                {/* <span className="text-sm text-gray-400">{exp.period}</span> */}
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
