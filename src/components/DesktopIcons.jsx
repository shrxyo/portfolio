import React, { useState, useRef } from 'react';
import resumeIcon from '../assets/resume.png';
import folderIcon from '../assets/folder.png';
import contactIcon from '../assets/folder.png'; 
import { useIsMobile } from '../hooks/useIsMobile';

const icons = [
  {
    label: "Resume",
    icon: resumeIcon,
    onClick: () => window.open("https://drive.google.com/file/d/1G9pC7W7h7co3StkixOIGsM2EUOK40rRr/view?usp=sharing", "_blank"),
    type: "link"
  },
  {
    label: "Portfolio",
    icon: folderIcon,
    onClick: null,
    type: "window"
  },
  {
    label: "Contact",
    icon: contactIcon,
    onClick: null,
    type: "contact"
  }
];

export default function DesktopIcons({ onPortfolioClick, onContactClick, selectedIconIndex, setSelectedIconIndex }) {
  const isMobile = useIsMobile();

  const handleIconClick = (icon, index) => {
    setSelectedIconIndex(index);

    if (icon.type === 'link') {
      icon.onClick();
    } else if (icon.type === 'window') {
      onPortfolioClick();
    } else if (icon.type === 'contact') {
      onContactClick();
    }
  };

  return (
    <div className={`absolute ${isMobile ? 'top-2 left-2 gap-4' : 'top-4 left-4 gap-6'} flex flex-col`}>
      {icons.map((icon, index) => (
        <div
          key={index}
          onClick={() => handleIconClick(icon, index)}
          className="flex flex-col items-center cursor-pointer group"
          style={{ width: isMobile ? '64px' : '80px' }}
          data-desktop-icon={true}
        >
          <img
            src={icon.icon}
            alt={icon.label}
            className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} mb-1`}
          />
          <p className={`text-sm text-white text-center px-1 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.9)] ${
            selectedIconIndex === index ? 'bg-blue-700' : ''
          }`}>
            {icon.label}
          </p>
        </div>
      ))}
    </div>
  );
} 