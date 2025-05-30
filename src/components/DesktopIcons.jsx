import React from 'react';

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
  }
];

export default function DesktopIcons({ onPortfolioClick }) {
  return (
    <div className="absolute top-4 left-4 flex flex-col gap-6">
      {icons.map((icon, index) => (
        <div
          key={index}
          onClick={() => {
            if (icon.type === 'link') {
              icon.onClick();
            } else if (icon.type === 'window') {
              onPortfolioClick();
            }
          }}
          className="flex flex-col items-center w-20 cursor-pointer group"
        >
          <img
            src={icon.icon}
            alt={icon.label}
            className="w-12 h-12 mb-1"
          />
          <p className="text-sm text-white text-center bg-black/50 px-1 rounded">
            {icon.label}
          </p>
        </div>
      ))}
    </div>
  );
} 