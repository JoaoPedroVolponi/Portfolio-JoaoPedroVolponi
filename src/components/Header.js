import React from 'react';

// Images
import Logo from '../assets/logo.svg'
import logoJoao from '../assets/logoJoao.svg';
import Component2 from '../assets/Component2.svg';
const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        { /* Logo */}
        <a href='#'>
          <img src={logoJoao} alt='' />
        </a>
        { /* Button */}
        <button className='btn btn-sm' onClick={() => scrollToSection('contact')}> Contato</button>
      </div>
    </div>
  </header>


};

export default Header;
