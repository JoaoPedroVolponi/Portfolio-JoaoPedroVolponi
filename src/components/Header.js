import React from 'react';

// Images
import Logo from '../assets/logo.svg'

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
          <img src={Logo} alt='' />
        </a>
        { /* Button */}
        <button className='btn btn-sm' onClick={() => scrollToSection('contact')}> Trabalhe comigo</button>
      </div>
    </div>
  </header>


};

export default Header;
