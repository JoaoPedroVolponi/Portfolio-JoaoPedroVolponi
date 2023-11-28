import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Swift",
    description: "• ViewCode, SwiftUI, StoryBoards e XIBs",
    link: "",
  },
  {
    name: "React Native",
    description: "• Typescript e Tailwind",
    link: "",
  },
  {
    name: "Ui / UX",
    description: "• Design de Interfaces",
    link: "",
  },
];

const Services = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col gapy-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text & Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=""
          >
            <h2 className="h2 leading-tight text-accent"> Skills</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Desenvolvedor Front-end Mobile
            </h3>
            <button
              className="btn btn-sm"
              onClick={() => scrollToSection("work")}
            >
              {" "}
              Meu Portfólio
            </button>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services List */}
            <div>
              {services.map((services, index) => {
                //destructure service
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
