import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import aboutIcon from '../assets/about.png';
import experienceIcon from '../assets/folder.png';
import projectsIcon from '../assets/folder.png';
import skillsIcon from '../assets/skills.png';

const tabs = [
  { label: "About Me", key: "about", icon: aboutIcon },
  { label: "Experience", key: "experience", icon: experienceIcon },
  { label: "Projects", key: "projects", icon: projectsIcon },
  { label: "Skills", key: "skills", icon: skillsIcon },
];

export default function LandingPage({ onSelect }) {
  const isMobile = useIsMobile();
  return (
    <div className="bg-white w-full h-full flex flex-col cursor-default p-4">
      <div className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3 text-center mt-8 px-4 sm:px-12">Hey, I'm Shreya!</div>
      <div className="text-lg sm:text-xl text-gray-600 mb-6 text-center">Natural Language Processing, LLMs, Multimodal AI, Design</div>
      <div className="text-lg sm:text-xl text-gray-600 mb-8 text-center">Welcome to my portfolio. Explore the sections below!</div>
      <div
        className={`grid grid-cols-2 ${isMobile ? 'gap-x-2 gap-y-3' : 'gap-x-4 gap-y-6'} w-full max-w-sm mx-auto place-items-center py-4
        sm:flex sm:flex-wrap sm:gap-6 sm:items-center sm:justify-center sm:max-w-2xl`}
      >
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => onSelect(tab.key)}
            className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition"
            style={{ width: isMobile ? '90px' : '128px' }}
          >
            <img
              src={tab.icon}
              alt={tab.label}
              className={`${isMobile ? 'w-14 h-14' : 'w-16 h-16'}`}
            />
            <p className="text-base font-medium mt-2 text-center">{tab.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 