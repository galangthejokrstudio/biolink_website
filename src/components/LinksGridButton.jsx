import React from 'react'

const LinksGridButton = ({ children, text, link }) => {

  return (
    <a 
      target='_blank' 
      className="bg-black/20 p-4 rounded-lg backdrop-blur-lg ease-in-out duration-300 hover:bg-black/40 flex items-center shadow-lg shadow-black/20" 
      href={link}
    >
      {children}
      {text}
    </a>
  );
};

export default LinksGridButton;
