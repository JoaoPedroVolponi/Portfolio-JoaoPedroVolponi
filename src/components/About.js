import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState, useEffect } from "react";
// Images
import AboutMobile from "../assets/about/about-mobile.png";
import AboutDesktop from "../assets/about/about-desktop.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImage = isMobile ? AboutMobile : AboutDesktop;

  return (
    <section
      className="section"
      id="about"
      ref={ref}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 leading-tight text-accent"> Sobre.</h2>
            <h3 className="h3 mb-4">Engenheiro de Software</h3>
            <h3 className="h3 mb-4">Desenvolvedor Front-end</h3>
            <h3 className="h3 mb-4">com foco em Mobile</h3>
            <p className="mb-6"></p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={2} durattion={900} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Anos de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={5} durattion={900} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projetos <br />
                  Realizados
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={10} durattion={300} />
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Aplicativos <br />
                  Desenvolvidos
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button
                className="btn btn-lg"
                onClick={() => scrollToSection("contact")}
              >
                {" "}
                Contato
              </button>
              <button
                className="text-gradient btn-link"
                onClick={() => scrollToSection("work")}
              >
                {" "}
                Meu Portfólio
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
