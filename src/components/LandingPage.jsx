import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

const tabs = [
  { label: "About Me", key: "about", icon: "src/assets/about.png" },
  { label: "Experience", key: "experience", icon: "src/assets/folder.png" },
  { label: "Projects", key: "projects", icon: "src/assets/folder.png" },
  { label: "Skills", key: "skills", icon: "src/assets/skills.png" },
];

export default function LandingPage({ onSelect }) {
  const isMobile = useIsMobile();
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center cursor-default p-4">
      <div className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2 text-center">Hey, I'm Shreya!</div>
      <div className="text-lg sm:text-xl text-gray-600 mb-6 text-center">Developer | NLP | Designer</div>
      <div className="mb-8 text-center text-base text-gray-700 font-mono">Welcome to my portfolio. Explore the sections below!</div>
      <div
        className={`grid gap-4 w-full max-w-xs mx-auto place-items-center sm:flex sm:flex-wrap sm:gap-6 sm:items-center sm:justify-center sm:max-w-2xl`}
      >
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => onSelect(tab.key)}
            className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-3 rounded transition"
            style={{ width: isMobile ? '80px' : '128px' }}
          >
            <img
              src={tab.icon}
              alt={tab.label}
              className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'}`}
            />
            <p className="text-sm font-medium mt-2 text-center ">{tab.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 