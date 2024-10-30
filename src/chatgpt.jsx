// src/App.js
import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A cool web app built with React and Tailwind.",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    title: "Project Two",
    description: "An e-commerce site built with Next.js and Tailwind.",
    imageUrl: "https://via.placeholder.com/400",
  },
];

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

// src/components/Hero.js

function Hero() {
  return (
    <motion.div
      className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hi, I'm Abdullah
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Software Engineer & Web Developer
        </motion.p>
        <motion.button
          className="mt-8 bg-white text-indigo-500 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.button>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <motion.div
      className="py-20 px-10 md:px-20 bg-gray-100 text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      <form className="max-w-3xl mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Message</label>
          <textarea className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
        </div>
        <motion.button
          className="mt-4 bg-indigo-500 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div
      className="py-20 px-10 md:px-20 text-gray-800 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
      <p className="text-center text-lg leading-relaxed max-w-4xl mx-auto">
        I'm a passionate software engineer with a knack for building responsive
        and high-performance web applications. I have experience with a range of
        technologies, including React, Node.js, and Tailwind CSS.
      </p>
    </motion.div>
  );
}

const Projects = () => {
  return (
    <motion.div
      className="py-20 px-10 md:px-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default App;
