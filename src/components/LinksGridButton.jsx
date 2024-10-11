import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { analytics } from '@vercel/analytics';  // Ensure Vercel Analytics is properly set up

const LinksGridButton = ({ children, text, link }) => {
  
  const handleClick = () => {
    // Track a custom event with Vercel Analytics
    analytics.track('Button Clicked', { text }); // 'text' is passed as metadata
  };

  return (
    <a 
      target='_blank' 
      className="bg-black/20 p-4 rounded-lg backdrop-blur-lg ease-in-out duration-300 hover:bg-black/40 flex items-center shadow-lg shadow-black/20" 
      href={link}
      onClick={handleClick} // Trigger the custom event on click
    >
      {children}
      {text}
    </a>
  );
};

export default LinksGridButton;
