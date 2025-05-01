import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Hero from "./sections/Hero";
import ProjectsSection from "./sections/ProjectSection";
import Services from "./sections/Services";
import SkillsSection from "./sections/SkillsSection";
import TestimonialSection from "./sections/TestimonialSection";
import WorkExperience from "./sections/WorkExperience";

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-red-100">
      <NavBar />
      <main className=" bg-gradient-to-br from-orange-100 via-pink-100 to-red-100">
        <Hero />
        <Services />
        <SkillsSection/>
        <AboutSection/>
        <ProjectsSection/>
        <WorkExperience/>
        <TestimonialSection/>
        <ContactSection/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
