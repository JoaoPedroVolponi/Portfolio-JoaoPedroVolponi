// import React from 'react';

// // motion
// import {motion} from 'framer-motion'

// // variants
// import { fadeIn } from '../variants';
// const Contact = () => {
//   return(
//   <section className='py-16 lg:section' id='contact'>
//    <div className='container mx-auto'>
//     <div className='flex flex-col lg:flex-row'>
//       {/* Text */}
//       <motion.div 
//       ariants={fadeIn('right', 0.3)}
//       initial="hidden"
//       whileInView={"show"}
//       viewport={{ once: false, amount: 0.3 }}
//       className='flex-1 flex justify-start items-center'> 
//         <div>
//           <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
//              Get in touch
//              </h4>
//           <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
//              Let`s work <br /> together!
//             </h2>
//         </div>
//       </motion.div>
//       {/* form */}
//       <motion.form 
//       ariants={fadeIn('left', 0.3)}
//       initial="hidden"
//       whileInView={"show"}
//       viewport={{ once: false, amount: 0.3 }}

//       className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
//         {/* e-mail */}
//          <input 
//          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
//           type='text'
//            placeholder='Your email'
//            />
//         {/* Name */}
//       <input 
//          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
//           type='text'
//            placeholder='Your Name'
//            />
//         <textarea 
//         className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
//         placeholder='Your message' 
//           ></textarea>
//         <button className='btn btn-lg'>Send message</button>
//           </motion.form>
//     </div>
//      </div>
//   </section>
//   );
// };

// export default Contact;

import React from 'react';

// motion
import { motion } from 'framer-motion'

// Icons
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

// variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
  <div className='container mx-auto m-10'>
    <div className='flex justify-center flex-col'>
      
      {/* Text */}
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        // className='flex-1 flex justify-center items-center'>
        className='flex justify-center items-center'> 

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl uppercase text-accent font-quartinary font-medium mb-2 tracking-wide text-center">
            João Pedro Volponi
          </h4>
          <h2 className="text-4xl lg:text-8xl leading-none mb-12 text-center">
            Vamos trabalhar <br /> juntos?
          </h2>
        </div>
      </motion.div>
      
      {/* Social Media Icons */}
      <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden" whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        // className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mt-6 lg:mt-0'>
        className='flex justify-center items-center flex space-x-6'> 
        { /* Linkedin */}
        <a href='https://www.linkedin.com/in/joaopedrovolponi/' target="_blank">
          <FaLinkedin  className="text-4xl" />
        </a>

        { /* GitHub */}
        <a href='https://github.com/JoaoPedroVolponi' target="_blank">
          <FaGithub className="text-4xl" />
        </a>

        { /* Instagram */}
        <a href='https://www.instagram.com/joaovolponi/' target="_blank">
          <FaInstagram className="text-4xl"  />
        </a>

      </motion.div>

     
      
    </div>
  </div>
</section>

  );
};

export default Contact;
