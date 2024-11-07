import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function About() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      className="max-w-3xl mx-auto p-8 bg-white dark:bg-black dark:text-white shadow-lg shadow-cyan-500 rounded-lg transition-transform duration-300 ease-in-out dark:shadow-cyan-500"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-extrabold text-center text-black mb-6 dark:text-white">
        Let’s Talk About Me
      </h2>
      <p className="text-lg text-gray-700 mb-4 dark:text-white">
        Hi! I’m <span className="font-semibold">Abdelah Nesredin</span>, a
        passionate{" "}
        <span className="text-black dark:text-white">MERN stack</span> and{" "}
        <span className="text-black dark:text-white">
          full-stack web developer
        </span>
        , as well as a mobile app developer and software engineer based in{" "}
        <span className="font-semibold dark:text-white">Addis Ababa</span>.
      </p>
      <p className="text-lg text-gray-700 mb-4 dark:text-white">
        I specialize in creating <span className="font-semibold ">dynamic</span>
        , <span className="font-semibold ">responsive</span> web applications
        using technologies like{" "}
        <span className="text-black dark:text-white">MongoDB</span>,{" "}
        <span className="text-black dark:text-white">Express.js</span>,{" "}
        <span className="text-black dark:text-white">React</span>, and{" "}
        <span className="text-black dark:text-white">Node.js</span>. My goal is
        to build <span className="font-semibold">intuitive</span> and{" "}
        <span className="font-semibold">engaging user experiences</span> that
        exceed expectations.
      </p>
      <p className="text-lg text-gray-700 mb-4 dark:text-white">
        I thrive in collaborative environments and embrace continuous learning,
        always eager to tackle new challenges. When I’m not coding, you can find
        me exploring the rich culture of Addis Ababa or staying updated on the
        latest tech trends.
      </p>
      <p className="text-lg text-gray-700 dark:text-white">
        Let’s connect and build something amazing together!
      </p>
    </motion.div>
  );
}

export default About;
