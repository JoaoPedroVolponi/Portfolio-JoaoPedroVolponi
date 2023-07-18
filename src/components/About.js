import React from 'react';

// countup
import CountUp from 'react-countup';

// Intersection observer hook
import { useInView } from 'react-intersection-observer';

//motion 
import { motion } from 'framer-motion';

//variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          { /* Img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          { /* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
              {/* h2 text-accent */}
            <h2 className=' font-quintary text-[48px] text-[#406efd]'> Sobre.</h2> 
            <h3 className='h3 mb-4'>i`m a Freelancer Front-end Developer with over 5 years of
              experience
            </h3>
            <p className='mb-6'>
            • Estudante de Engenharia de Software (7/8) <br/>
            • iOS Developer e apaixonado pelo Front-end
           
            </p>
            { /* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={150} durattion={5} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} durattion={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} durattion={3} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfield <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'  onClick={() => scrollToSection('contact')}> Contato</button>
              {/* <a href='#work' className='text-gradient btn-link'>
                My Portfolio
              </a> */}
              <button className='text-gradient btn-link'  onClick={() => scrollToSection('work')}> Meu Portfólio</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
