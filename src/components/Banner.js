import React from 'react';

// Images
import Image from '../assets/avatar.svg';

// Icons
import { FaGithub, FaLinkedin, FaInstagram, } from 'react-icons/fa'

//Type Animation
import { TypeAnimation } from 'react-type-animation';

//Motion
import { motion } from 'framer-motion';

//Variants
import { fadeIn } from '../variants'

const Banner = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home' >
      <div className='container mx-auto' >
        <div className='flex flex-col gapy-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          {/* Text */}
          <div className='flex-1 text-center font-tertiary font-bold lg:text-left'>
            <motion.h1
              variants={fadeIn('right', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[50px] font-quartinary leading-[0.8] lg:text-[100px]'>
              JOÃO<span> VOLPONI</span>
              </motion.h1>

              {/* <motion.h1
              variants={fadeIn('left', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[30px] font-bold leading-[0.8] lg:text-[100px]'>
             <span> VOLPONI</span>
              </motion.h1> */}

            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              {/* <span className='text-white mr-4'> I am </span> */}
              <TypeAnimation sequence={[
                'iOS Developer',
                2000,
                'Front-end Developer',
                2000,
                // 'Youtuber',
                // 2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('right', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </motion.p>

            <motion.div
              variants={fadeIn('left', 0.6)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

              {/* <button className='btn btn-lg'> contact me </button>  */}
              <button className='btn btn-lg' onClick={() => scrollToSection('work')}> Meu Portifolio </button>

              {/* <a href='https://github.com/JoaoPedroVolponi?tab=repositories'  target="_blank" className='text-gradient btn-link'>
                     My Portifolio
                  </a>  */}
              <a className='text-gradient btn-link'> Dowload Cv</a>
            </motion.div>



            { /* Socials */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              { /* Linkedin */}
              <a href='https://www.linkedin.com/in/joaopedrovolponi/' target="_blank">
                <FaLinkedin />
              </a>

              { /* GitHub */}
              <a href='https://github.com/JoaoPedroVolponi' target="_blank">
                <FaGithub />
              </a>

              { /* Instagram */}
              <a href='https://www.instagram.com/joaovolponi/' target="_blank">
                <FaInstagram />
              </a>
            </motion.div>

          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>

        </div>
      </div>

    </section>

  );
};

export default Banner;
