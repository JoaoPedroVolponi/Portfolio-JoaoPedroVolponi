import React from "react";
import logoJoao from "../assets/logoJoao.svg";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={logoJoao} alt="Logo" />
          </a>
          <div>
            <button
              onClick={() => navigateToSection("contact")}
              className="btn btn-lg"
              style={{ marginRight: '30px' }}
            >
              Contato
            </button>
            <button onClick={toggleDarkMode} className="icon-button">
              {isDarkMode ? (
                <span role="img" aria-label="Modo Claro">
                  ☀️
                </span>
              ) : (
                <span role="img" aria-label="Modo Noturno">
                  🌙
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
