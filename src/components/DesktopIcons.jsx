import React, { useState, useRef } from 'react';

const icons = [
  {
    label: "Resume",
    icon: "src/assets/resume.png",
    onClick: () => window.open("https://drive.google.com/file/d/1G9pC7W7h7co3StkixOIGsM2EUOK40rRr/view?usp=sharing", "_blank"),
    type: "link"
  },
  {
    label: "Portfolio",
    icon: "src/assets/folder.png",
    onClick: null,
    type: "window"
  },
  {
    label: "Contact",
    icon: "src/assets/folder.png",
    onClick: null,
    type: "contact"
  }
];

export default function DesktopIcons({ onPortfolioClick, onContactClick, selectedIconIndex, setSelectedIconIndex }) {

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
    <div className="absolute top-4 left-4 flex flex-col gap-6">
      {icons.map((icon, index) => (
        <div
          key={index}
          onClick={() => handleIconClick(icon, index)}
          className="flex flex-col items-center w-20 cursor-pointer group"
          data-desktop-icon={true}
        >
          <img
            src={icon.icon}
            alt={icon.label}
            className="w-12 h-12 mb-1"
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