import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Specify the exact image file
import lightme from "./assets/images/lightme.jpg";

import React, { useEffect, useRef, useState } from "react";

import Nav from "./componets/Navigation";
import "animate.css";
import Home from "./componets/Home";
import Skill from "./componets/Skill";
import Services from "./componets/Myservices";
import { motion } from "framer-motion";
import About from "./componets/About";

function App() {
  return (
    <div className="mt-0 mb-0 dark:bg-black  dark:text-white">
      <Cursor />
      <Nav />

      <Home />
      <Skill />
      <Services />
      <About />
      <ContactPage />
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
        x: pos.x + (targetPosition.x - pos.x) * 0.2,
        y: pos.y + (targetPosition.y - pos.y) * 0.2,
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
        className="fixed pointer-events-none transition-transform duration-300 ease-in-out rounded-full border-2 border-black w-12 h-12 dark:border-white"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          zIndex: 50,
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none transition-transform duration-300 ease-in-out bg-black rounded-full w-2 h-2 dark:bg-white"
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

export default App;
