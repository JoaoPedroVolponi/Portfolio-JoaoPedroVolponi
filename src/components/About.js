import React from 'react';

// countup
import CountUp from 'react-countup';

// Intersection observer hook
import { useInView } from 'react-intersection-observer';

//motion 
import { motion } from 'framer-motion';

//variant
import { fadeIn } from '../variants'

//Image
import sobre from '../assets/sobre.jpg'
import cafe from '../assets/cafe.jpg'
import frontal from '../assets/frontal1.jpg'

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
          {/* <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
           className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div> */}
    
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={sobre} alt='' />
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
            <h3 className='h3 mb-4'> 
              Estudante de Engenharia de Software, Desenvolvedor Front-end com foco em iOS (Swift)
            </h3>
            <p className='mb-6'>
            {/* • Estudante de Engenharia de Software (7/8) <br/>
            • iOS Developer e apaixonado pelo Front-end */}
           
            </p>
            { /* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} durattion={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Anos de  <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} durattion={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projetos  <br />
                  Realizados
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={18} durattion={3} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Aplicativos <br />
                  Desenvolvidos
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
