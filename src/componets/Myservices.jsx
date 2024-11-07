import { useInView } from "react-intersection-observer";

function Services() {
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

export default Services;
