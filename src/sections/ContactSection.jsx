import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaBehance,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "9c9c98e0-60fc-42f0-bf51-97de0790b8db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Successfull!",
        text: "Your Message has been sent Successfull!",
        icon: "success",
      });
      setIsLoading(false);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-4 border-t-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-sm text-orange-500 font-semibold uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Get in Touch</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I'm open to freelance projects, collaborations, and opportunities.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div data-aos="fade-left" className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full shadow-md">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-medium">Sandraamaka23@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full shadow-md">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="font-medium">+234 818 621 2047</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full shadow-md">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="font-medium">Lagos, Nigeria</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a
                href="http://linkedin.com/in/sandra-obi-71184219b"
                target="_blank"
                className="text-orange-500 hover:text-white transition text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-orange-500 hover:text-white transition text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/cassiebe2?s=21"
                target="_blank"
                className="text-orange-500 hover:text-white transition text-xl"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.behance.net/sandramary6"
                target="_blank"
                className="text-orange-500 hover:text-white transition text-xl"
              >
                <FaBehance />
              </a>
            </div>
          </div>
          {/* Form */}
          <form
            data-aos="fade-up"
            className="bg-white rounded-2xl p-8 text-gray-800 shadow-lg"
            onSubmit={onSubmit}
          >
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                name="Name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                name="Email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              {isLoading ? "Sending" : "Send Message"}
              <span className="text-xl ml-2">➔</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
