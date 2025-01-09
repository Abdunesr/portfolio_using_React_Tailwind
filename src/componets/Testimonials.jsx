import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import biruk from "../assets/images/biruk.jpg";
import naol from "../assets/images/naol.jpg";

const testimonials = [
  {
    name: "Fuad Seid",
    title: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/119611471?v=4",
    quote:
      "Abdelah is an incredible developer! His problem-solving skills and creativity are unmatched.",
  },
  {
    name: "Biruk Ashagre",
    title: "Software Engineer Front End Developer",
    image: `${biruk}`,
    quote:
      "Working with Abdelah has always been a pleasure. His attention to detail is impeccable!",
  },
  {
    name: "Naol Meseret",
    title: "Software Engineer MERN Stack Developer",
    image: `${naol}`,
    quote:
      "Abdelah brings amazing energy to any project. His work ethic is inspiring.",
  },
  {
    name: "Lisa White",
    title: "Team Lead",
    image: "https://via.placeholder.com/80",
    quote: "Abdelah is an excellent team player and a top-notch developer.",
  },
  {
    name: "James Green",
    title: "Frontend Developer",
    image: "https://via.placeholder.com/80",
    quote: "Abdelah's coding skills and creativity have always amazed me.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          What People Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mx-3"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
