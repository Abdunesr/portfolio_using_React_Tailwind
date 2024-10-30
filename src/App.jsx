import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Specify the exact image file
import lightme from "./assets/images/lightme.jpg";
import pointerman from "./assets/images/pointerman.gif";
import React, { useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";
import Nav from "./componets/Navigation";
import "animate.css";
import Home from "./componets/Home";

import { motion } from "framer-motion";

function App() {
  return (
    <div className="">
      <Cursor />
      <Nav />
      <Home />
      <Full />
      <About />
      <Skill />
      <ContactPage />
    </div>
  );
}

function About() {
  const descriptionText = [
    "I'm a dedicated software engineer with a passion for creating efficient and scalable applications.",
    "I specialize in both frontend and backend technologies, with experience in various programming languages.",
    "My focus is on writing clean, maintainable code and continuously improving my skills.",
    "I enjoy collaborating with teams to solve complex problems and bring ideas to life through technology.",
  ].join(" "); // Join
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="flex justify-center p-4">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-lg leading-relaxed font-medium max-w-lg text-center"
      >
        {descriptionText}
      </motion.div>
    </div>
  );
}

function Skill() {
  const languageIcons = {
    JavaScript: "🟡", // Replace with actual icons
    Python: "🐍",
    Java: "☕",
    C: "💻",
    Ruby: "💎",
    Go: "🐹",
    Swift: "😂",
    Rust: "🦀",
    PHP: "🐘",
  };

  const languages = Object.keys(languageIcons);
  const [visibleLanguages, setVisibleLanguages] = useState([]);
  const ref = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      const index = entry.target.dataset.index;
      const isIntersecting = entry.isIntersecting;

      if (isIntersecting && !visibleLanguages.includes(languages[index])) {
        setVisibleLanguages((prev) => [...prev, languages[index]]);
      } else if (
        !isIntersecting &&
        visibleLanguages.includes(languages[index])
      ) {
        setVisibleLanguages((prev) =>
          prev.filter((lang) => lang !== languages[index])
        );
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    ref.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      ref.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [visibleLanguages]);

  return (
    <div className="flex items-center justify-start">
      {/* Image on the left side */}
      <div>
        <img src={pointerman} alt="Pointer Man" className="w-64 h-96" />
      </div>

      {/* Skills list */}
      <div className="flex flex-col items-center space-y-4">
        {languages.map((language, index) => (
          <motion.div
            key={language}
            data-index={index}
            ref={(el) => (ref.current[index] = el)}
            initial={{ opacity: 0, x: -50 }}
            animate={
              visibleLanguages.includes(language)
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center text-lg font-semibold"
          >
            <span className="mr-2">{languageIcons[language]}</span>
            {language}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PhotoFrame() {
  return (
    <div className="flex justify-end items-center h-screen mr-14">
      <div className="relative w-[300px] h-[400px]">
        {/* Animated Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-100 rounded-[40px] animate-border-spin z-0 p-[8px]"></div>

        {/* Image Container */}
        <div className="relative w-full h-full bg-white rounded-[30px] z-10 overflow-hidden">
          <img
            src={lightme} // Replace with your actual image
            alt="Profile"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return <h1 id="contact">👇🏿</h1>;
}

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smooth movement effect
  useEffect(() => {
    const smoothMove = setInterval(() => {
      setPosition((pos) => ({
        x: pos.x + (targetPosition.x - pos.x) * 0.1,
        y: pos.y + (targetPosition.y - pos.y) * 0.1,
      }));
    }, 10);

    return () => clearInterval(smoothMove);
  }, [targetPosition]);

  return (
    <>
      {/* Hides the system cursor */}
      <style>{`
        * {
          cursor: none;
        }
      `}</style>

      {/* Outer Circle */}
      <div
        className="fixed pointer-events-none transition-transform duration-300 ease-in-out rounded-full border-2 border-black w-12 h-12"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          zIndex: 50,
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none transition-transform duration-300 ease-in-out bg-black rounded-full w-2 h-2"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          zIndex: 50,
        }}
      />
    </>
  );
}
function Full() {
  const services = [
    {
      name: "Web Development",
      description:
        "Building responsive and interactive websites using modern frameworks and technologies.",
    },
    {
      name: "Mobile App Development",
      description:
        "Creating user-friendly mobile applications for both iOS and Android platforms.",
    },
    {
      name: "UI/UX Design",
      description:
        "Designing intuitive and engaging user interfaces to enhance user experience.",
    },
    {
      name: "SEO Optimization",
      description:
        "Improving website visibility and ranking on search engines through effective SEO strategies.",
    },
    {
      name: "Digital Marketing",
      description:
        "Crafting targeted marketing campaigns to reach and engage your audience online.",
    },
    {
      name: "Content Writing",
      description:
        "Producing high-quality content that resonates with your target audience and boosts engagement.",
    },
  ];

  return (
    <div id="services" className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // Allow multiple triggers
            threshold: 0.1, // Trigger when 10% of the box is visible
          });

          return (
            <div
              ref={ref}
              key={index}
              id={`service-box-${index}`}
              className={`p-6 border border-gray-300 rounded-lg shadow-lg transition-transform duration-700 ease-out transform ${
                inView
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-8"
              } hover:scale-105 hover:shadow-xl hover:shadow-cyan-200`} // Hover effect for scaling and shadow
              style={{ transitionDelay: `${index * 0.2}s` }} // Delay for staggered effect
            >
              <h3 className="text-xl font-semibold text-center text-gray-800">
                {service.name}
              </h3>
              <p className="text-center mt-2 text-gray-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
